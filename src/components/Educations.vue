<script setup lang="ts">
import EducationProvider from './EducationsProvider.vue'
import { resumeMatchedI18n } from '@/store'
import { createMenus } from '@/store/education-experience'
</script>

<template>
  <Operable
    v-for="edu, eduIdx in resumeMatchedI18n.educationExperiences"
    :key="eduIdx"
    mb-4
    :menus="createMenus(eduIdx)"
  >
    <EducationProvider v-bind="{ edu, eduIdx }">
      <slot />
    </EducationProvider>
  </Operable>
</template>
