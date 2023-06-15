<script lang="ts">
export const eduAchContextKey = Symbol('education-achievement-context')
export interface EduAchContext {
  ach: string
  achIdx: number
}
</script>

<script setup lang="ts">
const context = defineProps<EduAchContext>()

provide(eduAchContextKey, context)
</script>

<template>
  <slot />
</template>
