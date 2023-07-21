
<template>
    <div class="card flex justify-content-center" @click="c">
<!--        <Tree v-model:selectionKeys="selectedKey" :value="treeBinds.tree" selectionMode="checkbox" class="w-full"-->
        <Tree v-model:selectionKeys="treeBinds.selectedItems" :value="treeBinds.tree" selectionMode="checkbox" class="w-full"
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

    import {ref, onMounted, reactive, computed} from 'vue';
    let  mockNodes = ref({});
    //window.treeBinds = (window.treeBinds) ? reactive(window.treeBinds) : reactive({tree:mockNodes, selectedItems:{}, changedData:{}, showDialog:false});
    import { DoctorsIservicesBindsService } from '../services/DoctorsIservicesBindsService';
    const nodes = ref(null);
    // const selectedKey = ref({'0-0' : {checked:'checked'}});
    const treeBinds = window.treeBinds;

    const changeData =(e, id)=>{
        treeBinds.changedData[id] = (treeBinds.changedData[id]) ? { ...treeBinds.changedData[id], customPrice : e.target.value*1} : {customPrice : e.target.value*1};
    }

    onMounted(() => {
        DoctorsIservicesBindsService.getTreeNodes().then((data) => (nodes.value = data));
    });


    const priceDefault = (nodeData) => {
        return (nodeData.data.price) ??  '';
    }

</script>
