<script setup lang="ts">
import { inject } from 'vue'
import { type EduContext, eduContextKey } from './EducationsProvider.vue'
import { updateMajor } from '@/store'

const eduContext = inject(eduContextKey) as EduContext
</script>

<template>
  <editable-span :model-value="eduContext.edu.major" @update:model-value="(newName: string) => updateMajor(eduContext.eduIdx, newName)" />
</template>
