<script lang="ts">
export const gaContextKey = Symbol('gallery-context')
export interface GaContext {
  ga: string
}
</script>

<script setup lang="ts">
import { provide } from 'vue'

const gaContext = defineProps<GaContext>()

provide(gaContextKey, gaContext)
</script>

<template>
  <slot />
</template>
