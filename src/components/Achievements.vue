<script setup lang="ts">
import { inject } from 'vue'
import { type WeContext, weContextKey } from './WEProvider.vue'
import AchievementsProvider from './AchievementsProvider.vue'
import { createMenus, updateAchievement } from '@/store/working-experience/achievement'

const weContext = inject(weContextKey) as WeContext
</script>

<template>
  <Operable
    v-for="ach, achIdx in weContext.we.achievements"
    :key="achIdx"
    :menus="createMenus(weContext.wIdx, achIdx)"
  >
    <AchievementsProvider v-bind="{ ach, achIdx }">
      <editable-span :model-value="ach" @update:model-value="(newAch: string) => updateAchievement(weContext.wIdx, achIdx, newAch)" />
    </AchievementsProvider>
  </Operable>
</template>
