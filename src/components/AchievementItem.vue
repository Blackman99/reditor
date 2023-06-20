<script setup lang="ts">
import { type WeContext, weContextKey } from './WEProvider.vue'
import { type AchContext, achContextKey } from './AchievementsProvider.vue'
import { updateAchievement } from '@/store/working-experience/achievement'

const weContext = inject(weContextKey) as WeContext
const achContext = inject(achContextKey) as AchContext
</script>

<template>
  <editable-span
    :model-value="achContext.ach" @update:model-value="(newRe: string) => {
      updateAchievement(weContext.wIdx, achContext.achIdx, newRe)
    }"
  />
</template>
