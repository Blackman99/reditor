<script lang="ts">
export const eduContextKey = Symbol('education-context')

export interface EduContext {
  edu: EducationExperience
  eduIdx: number
}
</script>

<script setup lang="ts">
import { provide } from 'vue'

const context = defineProps<EduContext>()

provide(eduContextKey, context)
</script>

<template>
  <slot />
</template>
