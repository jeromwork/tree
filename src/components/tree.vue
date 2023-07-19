
<template>
    <div class="card flex justify-content-center">        <Toast />
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="checkbox" class="w-full md:w-30rem"></Tree>
{{window.innerHeight}}
    </div>
</template>

<script setup>

    import { ref, onMounted } from 'vue';
    import { NodeService } from '../services/NodeService';
    // import { NodeService } from '@/services/NodeService';
    // import { useToast } from "primevue/usetoast";

    const nodes = ref(null);
    const selectedKey = ref(null);
    // const toast = useToast();

    onMounted(() => {
        console.log(1111111111)
        NodeService.getTreeNodes().then((data) => (nodes.value = data));
    });

    // const onNodeSelect = (node) => {
    //     toast.add({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
    // };
    //
    // const onNodeUnselect = (node) => {
    //     toast.add({ severity: 'success', summary: 'Node Unselected', detail: node.label, life: 3000 });
    // };
</script>
