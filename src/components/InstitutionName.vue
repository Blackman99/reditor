<script setup lang="ts">
import { inject } from 'vue'
import { type EduContext, eduContextKey } from './EducationsProvider.vue'
import { updateInstitutionName } from '@/store'

const eduContext = inject(eduContextKey) as EduContext
</script>

<template>
  <editable-span :model-value="eduContext.edu.institutionName" @update:model-value="(newName: string) => updateInstitutionName(eduContext.eduIdx, newName)" />
</template>
