<script setup lang="ts">
import { type AccordionRootEmits, type AccordionRootProps, AccordionRoot, useEmitAsProps } from 'radix-vue'

const props = defineProps<AccordionRootProps>()
const emits = defineEmits<AccordionRootEmits>()
</script>

<template>
  <AccordionRoot v-bind="{ ...props, ...useEmitAsProps(emits) }" class="accordion">
    <slot />
  </AccordionRoot>
</template>
