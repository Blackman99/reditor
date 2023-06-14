<script lang="ts">
export const reContextKey = Symbol('responsibility-context-key')
export interface ReContext {
  re: string
  reIdx: number
}
</script>

<script setup lang="ts">
import { provide } from 'vue'

const reContext = defineProps<ReContext>()

provide(reContextKey, reContext)
</script>

<template>
  <slot />
</template>
