<script setup lang="ts">
import { type WeContext, weContextKey } from './WEProvider.vue'
import AchievementsProvider from './AchievementsProvider.vue'
import { createMenus } from '@/store/working-experience/achievement'

const weContext = inject(weContextKey) as WeContext
</script>

<template>
  <Operable
    v-for="ach, achIdx in weContext.we.achievements"
    :key="achIdx"
    :menus="createMenus(weContext.wIdx, achIdx)"
  >
    <AchievementsProvider v-bind="{ ach, achIdx }">
      <slot />
    </AchievementsProvider>
  </Operable>
</template>
