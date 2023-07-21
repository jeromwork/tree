<template>
  <Button label="Show" icon="pi pi-external-link" @click="showDialog = true" />
  <TreeDialog v-model:visible="showDialog"/>
</template>

<script setup>
  import TreeDialog from "./components/TreeDialog"
  import {reactive, ref} from 'vue';
  window.treeBinds = (window.treeBinds) ? reactive(window.treeBinds) : reactive({tree:{}, selectedItems:{}, changedData:{}, showDialog:false});
  const showDialog = ref(window.treeBinds.showDialog);


</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
