
<template>
    <div class="card flex justify-content-center" @click="c">dfkwpef

<!--        <Tree v-model:selectionKeys="selectedKey" :value="treeBinds.tree" selectionMode="checkbox" class="w-full"-->
        <Tree v-model:selectionKeys="treeBinds.selectedItems" :value="treeBinds.tree" selectionMode="checkbox" class="w-full"
              :filter="true" filterMode="lenient"></Tree>
    </div>
</template>

<script setup>

    import {ref, onMounted, reactive, computed, toRef} from 'vue';
    window.treeBinds = (window.treeBinds) ? reactive(window.treeBinds) : reactive({tree:{}, selectedItems:{}});
    import { DoctorsIservicesBindsService } from '../services/DoctorsIservicesBindsService';
    const nodes = ref(null);
    // const selectedKey = ref({'0-0' : {checked:'checked'}});
    const treeBinds = window.treeBinds;


    const g2 = computed(() => treeBinds)
    onMounted(() => {
        DoctorsIservicesBindsService.getTreeNodes().then((data) => (nodes.value = data));
    });

</script>
