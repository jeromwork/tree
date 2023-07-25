<template>
    <Dialog :visible="props.visible"
            @update:visible="emit('update:visible', $event)"

            maximizable modal :header="doctor.fullname" :style="{ width: '50vw' }"
    >
        <tree ref="treeComponent"  v-bind="$attrs"/>


        <template #footer>
            <Button label="save" @click="onSave"/>
            <Button label="cancel" @click="onCancel"/>
        </template>
    </Dialog>

</template>

<script setup>
    import {defineProps, defineEmits, ref, computed } from 'vue';
    import tree from '@/components/tree'

    const props = defineProps({
        visible: {
            required: true,
            default:false
        },

    });
    const emit = defineEmits(['update:visible', 'save', 'cancel'])


    const treeComponent = ref(null);
    const doctor = computed(() => window.treeBinds.doctor);

    const onCancel = () => {emit('update:visible', false)}
    const onSave = () => {
        treeComponent.value.saveData();
        emit('update:visible', false)
    }


</script>
