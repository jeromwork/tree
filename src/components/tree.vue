
<template>
    <div class="card flex justify-content-center" @click="c">
<!--        <Tree v-model:selectionKeys="selectedKey" :value="treeBinds.tree" selectionMode="checkbox" class="w-full"-->

        <Tree
              v-model:selectionKeys="selectedKeys"
              :value="treeNodes" selectionMode="checkbox" class="w-full"
              :filter="true" filterMode="lenient"
              :metaKeySelection="true"
        >

            <template #default="slotProps">
                <div class="flex align-items-center">
                    {{ slotProps.node.label }}<span v-if="slotProps.node.data.price">({{slotProps.node.data.price}} руб.)</span>
                    <span v-if="priceDefault(slotProps.node)" @click.stop="">


                        <div class="p-inputgroup flex-1">
                        <InputNumber v-if="slotProps.node.data.price"
                                     :inputStyle = "(getPriceDiscount(slotProps.node)) ? { color: '#51d323', 'font-weight': 'bold'} : {}"
                                     :min="1"
                                     :placeholder="getPrice(slotProps.node)+''"
                                     :modelValue="getPrice(slotProps.node)"
                                     @update:modelValue="setCustomData(slotProps.node, $event, 'custom_price' )"
                        />
                        <span class="p-inputgroup-addon">руб</span>
                    </div>

                    <div class="p-inputgroup flex-1">
                        <InputNumber v-if="slotProps.node.data.price"
                                     :min="1"
                                     placeholder="Скидка"
                                     :modelValue="getPriceDiscount(slotProps.node)"
                                     @input="setPriceDiscount(slotProps.node, $event.value )"
                        />
                    <span class="p-inputgroup-addon">%</span>
                    </div>
                        <InputSwitch :modelValue="getCustomData(slotProps.node, 'use_always')*1"
                                     @update:modelValue="setCustomData(slotProps.node, $event, 'use_always')"
                                     :trueValue = "1"
                                     :falseValue = "0"
                        />
                    </span>
                </div>

            </template>


        </Tree>
    </div>
</template>

<script setup>

    import {ref, onMounted, reactive, onBeforeUnmount, computed,  defineProps, watch} from 'vue';
    import {DoctorsIservicesBindsService} from "../services/DoctorsIservicesBindsService";
    import Toast from '../services/Toast'

    import { useToast } from "primevue/usetoast";

    const toast = useToast();

    const nodes = ref(null);


    // const selectedKey = ref({'0-0' : {checked:'checked'}});
    const treeBinds = window.treeBinds;


    const props = defineProps({
        selectedKeys:{
            default:{}
        },
    });

    let  currentSelectedKeys = ref([window.treeBinds.selectedItems]);

    onMounted(() => {
        document.addEventListener('keyup', ctrlZHandler)
    })
    onBeforeUnmount(() => {
        document.removeEventListener('keyup', ctrlZHandler);
    });

    function ctrlZHandler(event) {
        if (event.ctrlKey && event.code === 'KeyZ') {

            const lengthSelectedKeys = currentSelectedKeys.value.length;
            if(lengthSelectedKeys > 1){
                currentSelectedKeys.value.splice(-1, 1)
            }
        }
    }

    const doctorId = computed(()=> window.treeBinds.doctor.id)

//===================================customData===========================
    const getCustomData = (node, field) => {
        return (customData.value &&  customData.value[node.id] && customData.value[node.id][field]) ? customData.value[node.id][field] : null;
    }

    const getPrice = (node) => {
        const customPrice = getCustomData(node, 'custom_price')*1;
        return ( customPrice && customPrice > 0 ) ? customPrice : node.data.price;
    }
    const getPriceDiscount = (node) => {
        const price = getPrice(node);
        return ( node.data.price && node.data.price > 0 && price > 0 && node.data.price > price ) ? 100 - Math.floor((price/node.data.price) * 100) : 0
    }


    const customData = computed(() =>{
        return (currentCustomData.value && Object.keys( currentCustomData.value).length > 0) ? currentCustomData.value : window.treeBinds.customData;
    });

    const priceDefault = (nodeData) => {
        return (nodeData.data.price) ??  '';
    }

    let  currentCustomData = ref(window.treeBinds.customData);


    const setPriceDiscount = (node, value)=>{
        if(value === getPriceDiscount(node)) return;
        const priceByDiscount = node.data.price - Math.floor(node.data.price  * (value / 100))
        setCustomData(node, priceByDiscount, 'custom_price')
    }

    const setCustomData =( node, newValue, field )=>{
        const currentSelectedKeys = {...selectedKeys.value}
        if(!currentSelectedKeys || !currentSelectedKeys[node.key]){
            Toast.duration(5000).warning( '', 'Не забудьте отметить услугу '+node.label )
        }

        const newDataObj = {}
        newDataObj[field] = newValue*1;
        currentCustomData.value[node.id] = (currentCustomData.value[node.id])
            ?{ ...currentCustomData.value[node.id], ...newDataObj}
            :newDataObj;

        if(selectedKeys.value[node.key]){

        }
    }

//=============================tree nodes====================
    const treeNodes = ref(DoctorsIservicesBindsService.getIservicesTree());

    const selectedKeys = computed( {
        get: () => {
            const lengthSelectedKeys = currentSelectedKeys.value.length;
            return (lengthSelectedKeys > 0) ? currentSelectedKeys.value[lengthSelectedKeys - 1] : window.treeBinds.selectedItems;
        },
        set :(keys) =>{
            const lengthSelectedKeys = currentSelectedKeys.value.length;
            currentSelectedKeys.value.push(keys);
            if(lengthSelectedKeys > 10){
                currentSelectedKeys.value.splice(0, 1)
            }
        }
    });

    const saveData = async () => {
        const oldCheckedItems = {...window.treeBinds.selectedItems};
        const newCheckedItems = {...currentSelectedKeys.value[currentSelectedKeys.value.length - 1]};

        const jsonOldCheckedItems = JSON.stringify(oldCheckedItems);
        const jsonNewCheckedItems = JSON.stringify(newCheckedItems);

        const changedData = currentCustomData.value;
        //if not change - return

        if( jsonOldCheckedItems === jsonNewCheckedItems && ( !changedData || Object.keys(changedData).length === 0) )  return; //<<<<<<<<<<<<<<<<

        const requestData = {
            id:doctorId.value
        };

        if(jsonOldCheckedItems !== jsonNewCheckedItems){
            requestData['newBinds'] = newCheckedItems
            requestData['oldBinds'] = oldCheckedItems
        }

        if(changedData && Object.keys(changedData).length > 0){
            requestData['changedData'] = changedData;
        }
        const res = await DoctorsIservicesBindsService.saveBinds( requestData )


        if(res && res.ok && res.message){
            //const saveBinds = (new CustomEvent("saveBinds", { detail: { doctorId: doctorId, }, }));
            document.dispatchEvent((new CustomEvent("saveBindsForDoctor", { detail: { doctorId: doctorId.value, }, })));
            Toast.success( 'Данные сохранены', res.message )
            console.log(res)

        }


    };

    defineExpose({
        saveData

    });

</script>


<style scoped>
    .discount{
        color: #51d323;
        font-weight: bold
    }
</style>
