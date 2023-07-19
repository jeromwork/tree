
<template>
    <div class="card flex justify-content-center" @click="c">
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="checkbox" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script setup>

    import {ref, onMounted, reactive, computed} from 'vue';
    window.treeBinds = (window.treeBinds) ? reactive(window.treeBinds) : reactive({});
    import { DoctorsIservicesBindsService } from '../services/DoctorsIservicesBindsService';
    const nodes = ref(null);
    const selectedKey = ref(null);
    const treeBinds = window.treeBinds;


    const g2 = computed(() => treeBinds)
    onMounted(() => {
        DoctorsIservicesBindsService.getTreeNodes().then((data) => (nodes.value = data));
    });

</script>
