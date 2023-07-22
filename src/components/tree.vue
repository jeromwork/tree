
<template>
    <div class="card flex justify-content-center" @click="c">
<!--        <Tree v-model:selectionKeys="selectedKey" :value="treeBinds.tree" selectionMode="checkbox" class="w-full"-->
        <Tree
              v-model:selectionKeys="selectedKeys"
              :value="treeNodes" selectionMode="checkbox" class="w-full"
              :filter="true" filterMode="lenient">

            <template #default="slotProps">
                <div class="flex align-items-center">
                    {{ slotProps.node.label }}
                    <span v-if="priceDefault(slotProps.node)" @click.stop="">
                        <InputText v-if="slotProps.node.data.price"
                                   type="number"
                                   min="1"
                                   size="small"
                                    @change="changeData($event, slotProps.node.id)"
                                   :placeholder="slotProps.node.data.price"

                        />
                    </span>
                </div>

            </template>


        </Tree>
    </div>
</template>

<script setup>

    import {ref, onMounted, reactive, computed,  defineProps} from 'vue';
    import {DoctorsIservicesBindsService} from "../services/DoctorsIservicesBindsService";

    const nodes = ref(null);
    // const selectedKey = ref({'0-0' : {checked:'checked'}});
    const treeBinds = window.treeBinds;

    const props = defineProps({
        selectedKeys:{
            default:{}
        },
    });

    let  currentSelectedKeys = ref(null);

    const changeData =(e, id)=>{
        treeBinds.changedData[id] = (treeBinds.changedData[id]) ? { ...treeBinds.changedData[id], customPrice : e.target.value*1} : {customPrice : e.target.value*1};
    }



    const priceDefault = (nodeData) => {
        return (nodeData.data.price) ??  '';
    }
    onMounted(async () => {
        console.log('onMounted')
    });



    const treeNodes = ref(DoctorsIservicesBindsService.getIservicesTree());
    const selectedKeys = computed( {
        get: () => {
            return (currentSelectedKeys.value) ??  window.treeBinds.selectedItems;
           // const selectedItems = (currentSelectedKeys.value) ? currentSelectedKeys.value : window.treeBinds.selectedItems;
            currentSelectedKeys.value = Object.assign(currentSelectedKeys.value, window.treeBinds.selectedItems)
            return  window.treeBinds.selectedItems;
        return DoctorsIservicesBindsService.mergeBindsData(treeNodes.value, selectedItems, 'iservice')
        },
        set :(e) =>{

            currentSelectedKeys.value  = e;
            console.log(e)
        }
    });


</script>
