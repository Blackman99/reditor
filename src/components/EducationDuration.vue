<script setup lang="ts">
import { inject } from 'vue'
import { type EduContext, eduContextKey } from './EducationsProvider.vue'
import { updateEduEnd, updateEduStart } from '@/store'

const eduContext = inject(eduContextKey) as EduContext
</script>

<template>
  <editable-span :model-value="eduContext.edu.start" @update:model-value="(next: string) => updateEduStart(eduContext.eduIdx, next)" />
  - <editable-span :model-value="eduContext.edu.end" @update:model-value="(next: string) => updateEduEnd(eduContext.eduIdx, next)" />
</template>
