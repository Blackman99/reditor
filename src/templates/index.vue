<script setup lang="ts">
import { locale, templateName } from '@/store'
</script>

<template>
  <div
    id="resume-container"
    class="mx-auto w-[800px] pb-16 bg-white"
    :class="[`locale-${locale}`]"
  >
    <Component :is="templateName" />
  </div>
</template>
