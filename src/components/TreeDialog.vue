<template>
    <Dialog :visible="props.visible"
            @update:visible="emit('update:visible', $event)"
            maximizable modal header="Header" :style="{ width: '50vw' }"
            dismissableMask
            closeOnEscape
    >
        <tree />
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
    const emit = defineEmits(['update:visible'])



</script>

<style scoped>

</style>
