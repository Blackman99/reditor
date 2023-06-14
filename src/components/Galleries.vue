<script setup lang="ts">
import GalleryProvider from './GalleryProvider.vue'
import { resumeMatchedI18n } from '@/store'
import { createMenus } from '@/store/gallery'
</script>

<template>
  <Operable
    v-for="(ga, gaIdx) in resumeMatchedI18n.galleryItems"
    :key="gaIdx" :menus="createMenus(gaIdx)"
  >
    <GalleryProvider v-bind="{ ga, gaIdx }">
      <slot />
    </GalleryProvider>
  </Operable>
</template>
