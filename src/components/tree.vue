
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
                    {{ slotProps.node.id }}{{ slotProps.node.label }}
                    <span v-if="priceDefault(slotProps.node)" @click.stop="">
                            <InputText v-if="slotProps.node.data.price"
                                       type="number"
                                       min="1"
                                       size="small"
                                       :value="getCustomData(slotProps.node, 'custom_price')"
                                       @change="setCustomPrice(slotProps.node, $event.target.value)"
                                       :placeholder="slotProps.node.data.price"

                            />
                    </span>
                </div>

            </template>


        </Tree>
        {{currentCustomData}}
    </div>
</template>

<script setup>

    import {ref, onMounted, reactive, computed,  defineProps, watch} from 'vue';
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

    let  currentSelectedKeys = ref(null);
    let  currentCustomData = ref({});

    const setCustomPrice =( node, newPrice )=>{

        const currentSelectedKeys = {...selectedKeys.value}

        if(!currentSelectedKeys || !currentSelectedKeys[node.key]){

            toast.add({ severity: 'warn', summary: 'Ошибка назначения цены', detail: 'Прежде чем назначить спец цену доктору, выберите эту услугу', life: 3000 });

        }

        if(selectedKeys.value[node.key]){
            currentCustomData.value[node.id] = (currentCustomData.value[node.id])
                    ?{ ...currentCustomData.value[node.id], custom_price : newPrice*1}
                    :{custom_price : newPrice*1};
        }

        }




    const priceDefault = (nodeData) => {
        return (nodeData.data.price) ??  '';
    }


    const treeNodes = ref(DoctorsIservicesBindsService.getIservicesTree());



    const getCustomData = (node, field) => {
        return (customData.value &&  customData.value[node.id] && customData.value[node.id][field]) ? customData.value[node.id][field] : null;
    }

    const customData = computed(() =>{
        return (currentCustomData.value) ? currentCustomData.value : window.treeBinds.customData;
    });

    const selectedKeys = computed( {
        get: () => {
            return (currentSelectedKeys.value) ? currentSelectedKeys.value : window.treeBinds.selectedItems;
        // return DoctorsIservicesBindsService.mergeBindsData(treeNodes.value, selectedItems, 'iservice')
        },
        set :(e) =>{
            currentSelectedKeys.value  = e;
        }
    });

    const saveData = async () => {

        const oldCheckedItems = {...window.treeBinds.selectedItems};
        const newCheckedItems = {...currentSelectedKeys.value};
        const changedData = currentCustomData.value;
        //if not change - return

        if( JSON.stringify(oldCheckedItems) === JSON.stringify(newCheckedItems))  return; //<<<<<<<<<<<<<<<<

        const requestData = {
            newBinds:newCheckedItems,
            oldBinds:oldCheckedItems,
            id:8
        };
        if(changedData && Object.keys(changedData).length > 0){
            requestData['changedData'] = changedData;
        }
        const res = await DoctorsIservicesBindsService.saveBinds( requestData )

        if(res && res.ok && res.message){

            Toast.success( 'Данные сохранены', res.message )
            console.log(res)

        }


    };

    defineExpose({
        saveData

    });

</script>
