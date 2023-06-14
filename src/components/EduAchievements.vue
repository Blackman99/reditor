<script setup lang="ts">
import { inject } from 'vue'
import { type EduContext, eduContextKey } from './EducationsProvider.vue'
import EduAchievementProvider from './EduAchievementProvider.vue'
import { createMenus } from '@/store/education-experience/achievement'

const eduContext = inject(eduContextKey) as EduContext
</script>

<template>
  <Operable
    v-for="ach, achIdx in eduContext.edu.achievements"
    :key="achIdx" :menus="createMenus(eduContext.eduIdx, achIdx)"
  >
    <EduAchievementProvider v-bind="{ ach, achIdx }">
      <slot />
    </EduAchievementProvider>
  </Operable>
</template>
