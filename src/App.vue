<template>
  <div ref="treeDialogComponent" id="treeDialogComponent">
    <Button v-if="showTestDialogButton" label="Show" icon="pi pi-external-link" @click="showDialog = true" />
    <TreeDialog id="tree" v-model:visible="showDialog"
    @save="onSave"/>
  </div>
</template>

<script setup>
  import TreeDialog from "./components/TreeDialog"
  import {reactive, ref, computed, onMounted} from 'vue';
  import {DoctorsIservicesBindsService} from "./services/DoctorsIservicesBindsService";

  let  mockNodes = ref({});
 const  mockSelectedItems = ref({});

  window.treeBinds = (window.treeBinds) ? reactive(window.treeBinds) : reactive({tree:mockNodes, selectedItems:mockSelectedItems, changedData:{}, showDialog:false});
  const showDialog = computed({
    get(){ return  window.treeBinds.showDialog},
    set(s){ window.treeBinds.showDialog = s;}
  });
  const treeDialogComponent = ref(null);
  const showTestDialogButton = computed(()=>!window.$);
const onSave = (e) =>{

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
        {
          "key": "#10000136-6138",
          "id": "6138",
          "label": "Прием (осмотр, консультация) врача-невролога повторный (отоневролога, ведущий врач)",
          "data": {
            "price": "4500.00",
            "type": "iservice"
          }
        },
        {
          "key": "#10000136-6139",
          "id": "6139",
          "label": "Прием (осмотр, консультация) врача-невролога повторный (отоневролога, врач-эксперт)",
          "data": {
            "price": "5900.00",
            "type": "iservice"
          }
        },
        {
          "key": "#10000136-6161",
          "id": "6161",
          "label": "Прием (осмотр, консультация) врача-невролога первичный (сомнолога, ведущий врач)",
          "data": {
            "price": "2500.00",
            "type": "iservice"
          }
        },
        {
          "key": "#10000136-6162",
          "id": "6162",
          "label": "Прием (осмотр, консультация) врача-невролога повторный (сомнолога, ведущий врач)",
          "data": {
            "price": "2500.00",
            "type": "iservice"
          }
        },
        {
          "key": "#10000136-3511",
          "id": "3511",
          "label": "Прием (осмотр, консультация) врача-невролога повторный (ведущий врач)",
          "data": {
            "price": "1900.00",
            "type": "iservice"
          }
        },
        {
          "key": "#10000136-#258",
          "label": "Блокада грушевидной мышцы",
          "children": [
            {
              "key": "#10000136-#258-3500",
              "id": "3500",
              "label": "Внутримышечное введение лекарственных препаратов (блокада грушевидной мышцы)",
              "data": {
                "price": "5400.00",
                "type": "iservice"
              }
            }
          ],
          "data": {
            "type": "service"
          }
        },
        {
          "key": "#10000136-#259",
          "label": "Блокада тройничного нерва",
          "children": [
            {
              "key": "#10000136-#259-12",
              "id": "12",
              "label": "Блокада тройничного нерва",
              "data": {
                "price": "4900.00",
                "type": "iservice"
              }
            }
          ],
          "data": {
            "type": "service"
          }
        },
        {
          "key": "#10000136-#470",
          "label": "Ботулинотерапия",
          "children": [
            {
              "key": "#10000136-#470-3790",
              "id": "3790",
              "label": "Внутримышечное введение лекарственных препаратов (Ксеомин 10 ед)",
              "data": {
                "price": "4500.00",
                "type": "iservice"
              }
            },
            {
              "key": "#10000136-#470-3791",
              "id": "3791",
              "label": "Внутримышечное введение лекарственных препаратов (Ксеомин 20 ед)",
              "data": {
                "price": "8800.00",
                "type": "iservice"
              }
            },
            {
              "key": "#10000136-#470-3792",
              "id": "3792",
              "label": "Внутримышечное введение лекарственных препаратов (Ксеомин 30 ед)",
              "data": {
                "price": "12900.00",
                "type": "iservice"
              }
            },
            {
              "key": "#10000136-#470-3793",
              "id": "3793",
              "label": "Внутримышечное введение лекарственных препаратов (Ксеомин 50 ед)",
              "data": {
                "price": "20500.00",
                "type": "iservice"
              }
            },
            {
              "key": "#10000136-#470-3794",
              "id": "3794",
              "label": "Внутримышечное введение лекарственных препаратов (Ксеомин 40 ед)",
              "data": {
                "price": "16800.00",
                "type": "iservice"
              }
            }
          ],
          "data": {
            "type": "service"
          }
        },
        {
          "key": "#10000136-#4",
          "label": "Висцеральная терапия3",
          "children": [
            {
              "key": "#10000136-#4-8",
              "id": "8",
              "label": "Введение лекарственных препаратов в область периферического нерва (паравертебральная блокада многоуровневая)",
              "data": {
                "price": "8900.00",
                "type": "iservice"
              }
            }
          ],
          "data": {
            "type": "service"
          }
        },
        {
          "key": "#10000136-#256",
          "label": "Внутрикостная блокада",
          "children": [
            {
              "key": "#10000136-#256-145",
              "id": "145",
              "label": "Внутрикостная блокада (1-уровневая)",
              "data": {
                "price": "8200.00",
                "type": "iservice"
              }
            },
            {
              "key": "#10000136-#256-170",
              "id": "170",
              "label": "Внутрикостная блокада (2-уровневая)",
              "data": {
                "price": "10000.00",
                "type": "iservice"
              }
            },
            {
              "key": "#10000136-#256-171",
              "id": "171",
              "label": "Внутрикостная блокада (многоуровневая)",
              "data": {
                "price": "12000.00",
                "type": "iservice"
              }
            }
          ],
          "data": {
            "type": "service"
          }
        },
        {
          "key": "#10000136-#254",
          "label": "Внутрикостное капельное введение препаратов",
          "children": [
            {
              "key": "#10000136-#254-193",
              "id": "193",
              "label": "Внутрикостное капельное введение препаратов",
              "data": {
                "price": "9200.00",
                "type": "iservice"
              }
            }
          ],
          "data": {
            "type": "service"
          }
        },
        {
          "key": "#10000136-#269",
          "label": "Индивидуальная нейрокоррекция (БАК)",
          "children": [
            {
              "key": "#10000136-#269-3434",
              "id": "3434",
              "label": "Тренировка с биологической обратной связью по электроэнцефалографии при заболеваниях центральной нервной системы и головного мозга (БАК)",
              "data": {
                "price": "2500.00",
                "type": "iservice"
              }
            }
          ],
          "data": {
            "type": "service"
          }
        },
        {
          "key": "#10000136-#426",
          "label": "Инъекции ботулотоксина",
          "children": [
            {
              "key": "#10000136-#426-3794",
              "id": "3794",
              "label": "Внутримышечное введение лекарственных препаратов (Ксеомин 40 ед)",
              "data": {
                "price": "16800.00",
                "type": "iservice"
              }
            },
            {
              "key": "#10000136-#426-3790",
              "id": "3790",
              "label": "Внутримышечное введение лекарственных препаратов (Ксеомин 10 ед)",
              "data": {
                "price": "4500.00",
                "type": "iservice"
              }
            },
            {
              "key": "#10000136-#426-3791",
              "id": "3791",
              "label": "Внутримышечное введение лекарственных препаратов (Ксеомин 20 ед)",
              "data": {
                "price": "8800.00",
                "type": "iservice"
              }
            },
            {
              "key": "#10000136-#426-3792",
              "id": "3792",
              "label": "Внутримышечное введение лекарственных препаратов (Ксеомин 30 ед)",
              "data": {
                "price": "12900.00",
                "type": "iservice"
              }
            },
            {
              "key": "#10000136-#426-3793",
              "id": "3793",
              "label": "Внутримышечное введение лекарственных препаратов (Ксеомин 50 ед)",
              "data": {
                "price": "20500.00",
                "type": "iservice"
              }
            }
          ],
          "data": {
            "type": "service"
          }
        },
        {
          "key": "#10000136-#590",
          "label": "Каудальная блокада ",
          "children": [
            {
              "key": "#10000136-#590-6041",
              "id": "6041",
              "label": "Введение лекарственных препаратов в перидуральное пространство (каудальная блокада)",
              "data": {
                "price": "8200.00",
                "type": "iservice"
              }
            }
          ],
          "data": {
            "type": "service"
          }
        },
        {
          "key": "#10000136-#308",
          "label": "Консультация невролога",
          "children": [
            {
              "key": "#10000136-#308-3509",
              "id": "3509",
              "label": "Прием (осмотр, консультация) врача-невролога первичный (врач эксперт)",
              "data": {
                "price": "2500.00",
                "type": "iservice"
              }
            },
            {
              "key": "#10000136-#308-2241",
              "id": "2241",
              "label": "Прием (осмотр, консультация) врача-невролога первичный",
              "data": {
                "price": "1500.00",
                "type": "iservice"
              }
            },
            {
              "key": "#10000136-#308-2242",
              "id": "2242",
              "label": "Прием (осмотр, консультация) врача-невролога первичный (ведущий врач)",
              "data": {
                "price": "1900.00",
                "type": "iservice"
              }
            },
            {
              "key": "#10000136-#308-2243",
              "id": "2243",
              "label": "Прием (осмотр, консультация) врача-невролога первичный (врач-эксперт 1 кат)",
              "data": {
                "price": "5900.00",
                "type": "iservice"
              }
            }
          ],
          "data": {
            "type": "service"
          }
        },
        {
          "key": "#10000136-#128",
          "label": "Консультация отоневролога",
          "children": [
            {
              "key": "#10000136-#128-3484",
              "id": "3484",
              "label": "Прием (осмотр, консультация) врача-невролога первичный (отоневролога)",
              "data": {
                "price": "4500.00",
                "type": "iservice"
              }
            },
            {
              "key": "#10000136-#128-3495",
              "id": "3495",
              "label": "Прием (осмотр, консультация) врача-невролога первичный (отоневролога, врач-эксперт)",
              "data": {
                "price": "5900.00",
                "type": "iservice"
              }
            },
            {
              "key": "#10000136-#128-3518",
              "id": "3518",
              "label": "Прием (осмотр, консультация) врача-невролога первичный (отоневролога, ведущий врач)",
              "data": {
                "price": "4500.00",
                "type": "iservice"
              }
            }
          ],
          "data": {
            "type": "service"
          }
        },
        {
          "key": "#10000136-#257",
          "label": "Паравертебральная блокада",
          "children": [
            {
              "key": "#10000136-#257-8",
              "id": "8",
              "label": "Введение лекарственных препаратов в область периферического нерва (паравертебральная блокада многоуровневая)",
              "data": {
                "price": "8900.00",
                "type": "iservice"
              }
            },
            {
              "key": "#10000136-#257-246",
              "id": "246",
              "label": "Введение лекарственных препаратов в область периферического нерва  (паравертебральная блокада 1-уровневая)",
              "data": {
                "price": "5900.00",
                "type": "iservice"
              }
            },
            {
              "key": "#10000136-#257-247",
              "id": "247",
              "label": "Введение лекарственных препаратов в область периферического нерва (паравертебральная блокада 2-уровневая)",
              "data": {
                "price": "7200.00",
                "type": "iservice"
              }
            }
          ],
          "data": {
            "type": "service"
          }
        },
        {
          "key": "#10000136-#565",
          "label": "Приём реабилитолога",
          "children": [
            {
              "key": "#10000136-#565-2244",
              "id": "2244",
              "label": "Прием (осмотр, консультация) врача-невролога повторный",
              "data": {
                "price": "1500.00",
                "type": "iservice"
              }
            },
            {
              "key": "#10000136-#565-2245",
              "id": "2245",
              "label": "Прием (осмотр, консультация) врача-невролога повторный (врач эксперт)",
              "data": {
                "price": "2500.00",
                "type": "iservice"
              }
            },
            {
              "key": "#10000136-#565-2246",
              "id": "2246",
              "label": "Прием (осмотр, консультация) врача-невролога повторный (врач-эксперт 1 кат)",
              "data": {
                "price": "5900.00",
                "type": "iservice"
              }
            }
          ],
          "data": {
            "type": "service"
          }
        }
      ],
      "data": {
        "type": "category"
      }
    }
  ];
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
