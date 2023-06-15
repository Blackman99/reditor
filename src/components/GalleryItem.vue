<script setup lang="ts">
import { type GaContext, gaContextKey } from './GalleryProvider.vue'
import { updateGallery } from '@/store'

const gaContext = inject(gaContextKey) as GaContext
</script>

<template>
  <editable-span :model-value="gaContext.ga" @update:model-value="(newGa: string) => updateGallery(gaContext.gaIdx, newGa)" />
</template>
