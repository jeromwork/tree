<template>
    <InputText v-if="slotProps.node.data.price"
               type="number"
               min="1"
               size="small"
               :value="getCustomData(slotProps.node, 'custom_price')"
               @change="setCustomPrice(slotProps.node, $event)"
               :placeholder="slotProps.node.data.price"

    />
</template>

<script setup>
import {ref, defineProps} from 'vue'

const props = defineProps([
    value,
]);

</script>

<style scoped>

</style>
