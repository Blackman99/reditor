<script setup lang="ts">
import { inject } from 'vue'
import { type WeContext, weContextKey } from './WEProvider.vue'
import { type AchContext, achContextKey } from './AchievementsProvider.vue'
import { updateResponsibility } from '@/store/working-experience/responsibility'

const weContext = inject(weContextKey) as WeContext
const achContext = inject(achContextKey) as AchContext
</script>

<template>
  <editable-span
    :model-value="achContext.ach" @update:model-value="(newRe: string) => {
      updateResponsibility(weContext.wIdx, achContext.achIdx, newRe)
    }"
  />
</template>
