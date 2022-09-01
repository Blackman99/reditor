<script setup lang="ts">
import { templateName } from './store'
</script>
<template>
  <div
    id="resume-container"
    mx-auto
    max-w-4xl
    font-sans
  >
    <Component :is="templateName" />
  </div>
</template>
