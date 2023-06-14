<script lang="ts">
export const weContextKey = Symbol('working-experience')
export interface WeContext {
  we: WorkingExperience
  wIdx: number
}
</script>

<script setup lang="ts">
import { provide } from 'vue'

const weContext = defineProps<WeContext>()
provide(weContextKey, weContext)
</script>

<template>
  <slot />
</template>
