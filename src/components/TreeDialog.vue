<template>
    <Dialog :visible="props.visible"
            @update:visible="emit('update:visible', $event)"
            maximizable modal header="Header" :style="{ width: '50vw' }"
    >
        <tree  v-bind="$attrs"/>


        <template #footer>
            <Button label="save" @click="onSave"/>
            <Button label="cancel" @click="onCancel"/>
        </template>
    </Dialog>
</template>

<script setup>
    import {defineProps, defineEmits  } from 'vue';
    import tree from '@/components/tree'

    const props = defineProps({
        visible: {
            required: true,
            default:false
        },

    });
    const emit = defineEmits(['update:visible', 'save', 'cancel'])


    const onCancel = () => {emit('cancel', true)}
    const onSave = () => {emit('save', true)}

</script>

<style scoped>

</style>
