<script setup lang="ts">
import { templateConfig } from '@/store'

defineProps<{
  title: string
}>()
</script>

<template>
  <div
    :style="{
      '--section-title-width': (templateConfig as GreenThemeConfig).sectionTitleWidth,
    }"
  >
    <div
      text-white
      class="title"
      leading-8
      indent-2
    >
      {{ title }}
    </div>
    <div
      border-l-1
      t-333333
      class="content"
      leading-8
      pt-4
    >
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  position: relative;
  background: linear-gradient(
    75deg,
    var(--q-primary) var(--section-title-width),
    transparent var(--section-title-width)
  );
}
</style>
