<script lang="ts">
export const adContextKey = Symbol('advantages-context')
export interface AdvantagesContext {
  ad: string
  adIdx: number
}
</script>

<script setup lang="ts">
const context = defineProps<AdvantagesContext>()
provide(adContextKey, context)
</script>

<template>
  <slot />
</template>
