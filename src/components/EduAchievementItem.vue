<script setup lang="ts">
import { inject } from 'vue'
import { type EduContext, eduContextKey } from './EducationsProvider.vue'
import { type EduAchContext, eduAchContextKey } from './EduAchievementProvider.vue'
import {
  updateEduAchievement,
} from '@/store'

const eduContext = inject(eduContextKey) as EduContext
const eduAchContext = inject(eduAchContextKey) as EduAchContext
</script>

<template>
  <editable-span :model-value="eduAchContext.ach" @update:model-value="(next: string) => updateEduAchievement(eduContext.eduIdx, eduAchContext.achIdx, next)" />
</template>
