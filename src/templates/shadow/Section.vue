<script setup lang="ts">
import SectionBg from './SectionBg.vue'

defineProps<{
  title: string
}>()
</script>

<template>
  <div>
    <div
      class="text-primary"
      relative
    >
      <SectionBg />
      <div
        absolute
        left-16px
        top-0
        bottom-0
        opacity-60
      >
        <SectionBg />
      </div>
      <div
        absolute
        left-32px
        top-0
        bottom-0
        opacity-30
      >
        <SectionBg />
      </div>
      <div
        text-white
        leading-8
        px-4
        rounded-tl-2
        inline-block
        absolute
        left-0
        z-5
        top-0
        bottom-0
      >
        {{ title }}
      </div>
    </div>
    <div
      leading-8
      pt-4
    >
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
