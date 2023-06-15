<script setup lang="ts">
import { type WeContext, weContextKey } from './WEProvider.vue'
import { type ReContext, reContextKey } from './ResponsibilityProvider.vue'
import { updateResponsibility } from '@/store/working-experience/responsibility'

const weContext = inject(weContextKey) as WeContext
const reContext = inject(reContextKey) as ReContext
</script>

<template>
  <editable-span
    :model-value="reContext.re" @update:model-value="(newRe: string) => {
      updateResponsibility(weContext.wIdx, reContext.reIdx, newRe)
    }"
  />
</template>
