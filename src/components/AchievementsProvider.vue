<script lang="ts">
export const achContextKey = Symbol('achievement-context-key')
export interface AchContext {
  ach: string
  achIdx: number
}
</script>

<script setup lang="ts">
const reContext = defineProps<AchContext>()

provide(achContextKey, reContext)
</script>

<template>
  <slot />
</template>
