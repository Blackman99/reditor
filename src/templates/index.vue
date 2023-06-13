<script setup lang="ts">
import { templateName } from '@/store'
</script>

<template>
  <div
    id="resume-container"
    class="mx-auto w-[800px]"
    font-sans
  >
    <Component :is="templateName" />
  </div>
</template>
