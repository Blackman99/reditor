<script lang="ts">
export const gaContextKey = Symbol('gallery-context')
export interface GaContext {
  ga: string
  gaIdx: number
}
</script>

<script setup lang="ts">
const gaContext = defineProps<GaContext>()

provide(gaContextKey, gaContext)
</script>

<template>
  <slot />
</template>
