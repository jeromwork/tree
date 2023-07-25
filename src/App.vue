<template>        <Toast />
  <div ref="treeDialogComponent" id="treeDialogComponent">
    <Button v-if="showTestDialogButton" label="Show" icon="pi pi-external-link" @click="showDialog = true" />
    <TreeDialog id="tree" v-model:visible="showDialog" @save="onSave"/>
  </div>
</template>

<script setup>
  import TreeDialog from "./components/TreeDialog"
  import {reactive, ref, computed, onMounted} from 'vue';
  import {DoctorsIservicesBindsService} from "./services/DoctorsIservicesBindsService";

  let  mockNodes = ref({});
  let  mockCustomData = ref({});
 const  mockSelectedItems = ref({});

  window.treeBinds = (window.treeBinds) ? reactive(window.treeBinds) : reactive({tree:mockNodes, selectedItems:mockSelectedItems, customData:mockCustomData, showDialog:false});
  const showDialog = computed({
    get(){ return  window.treeBinds.showDialog},
    set(s){ window.treeBinds.showDialog = s;}
  });
  const treeDialogComponent = ref(null);
  const showTestDialogButton = computed(()=>!window.$);
const onSave = (e) =>{
  console.log()
// Dispatch/Trigger/Fire the event
  treeDialogComponent.value.dispatchEvent(new CustomEvent("save", {detail: window.treeBinds}));

  showDialog.value = false;

}



  onMounted(async () => {
     await DoctorsIservicesBindsService.fetchIservicesTreeFromServer();
  });

  mockSelectedItems.value = {
    "#10167623": {
      "checked": false,
      "partialChecked": true
    },
    "#10167623-6133": {
      "checked": true
    },
    "#10167623-6134": {
      "checked": true
    },
    "#10167623-6211": {
      "checked": true
    },
    "#10167623-6212": {
      "checked": true
    },
    "#10167623-6213": {
      "checked": true
    },
    "#10167623-6214": {
      "checked": true
    },
    "#10167623-#310": {
      "checked": true
    },
    "#10167623-#310-3430": {
      "checked": true
    },
    "#10167623-#404": {
      "checked": true
    },
    "#10167623-#404-3431": {
      "checked": true
    },
    "#10167623-#456": {
      "checked": true
    },
    "#10167623-#456-2379": {
      "checked": true
    },
    "#10167623-#456-3644": {
      "checked": true
    }
  };

  mockNodes.value = [
    {
      "key": "#10000136",
      "label": "НЕВРОЛОГИЯ",
      "children": [
        {
          "key": "#10000136-6137",
          "id": "6137",
          "label": "Прием (осмотр, консультация) врача-невролога повторный (отоневролога)",
          "data": {
            "price": "4500.00",
            "type": "iservice"
          }
        },
      ],
      "data": {
        "type": "category"
      }
    }
  ];
  mockCustomData.value ={
    "36": {
      "active": "1",
      "use_always": "0",
      "custom_price": "3500.00"
    },
    "270": {
      "active": "1",
      "use_always": "0",
      "custom_price": "2990.00"
    },
    "2286": {
      "active": "1",
      "use_always": "1",
      "custom_price": "-1.00"
    },
    "2289": {
      "active": "1",
      "use_always": "1",
      "custom_price": "-1.00"
    }
  };

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
