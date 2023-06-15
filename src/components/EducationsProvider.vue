<script lang="ts">
export const eduContextKey = Symbol('education-context')

export interface EduContext {
  edu: EducationExperience
  eduIdx: number
}
</script>

<script setup lang="ts">
const context = defineProps<EduContext>()

provide(eduContextKey, context)
</script>

<template>
  <slot />
</template>
