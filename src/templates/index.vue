<script setup lang="ts">
import { templateName } from './store'
</script>
<template>
  <div id="resume-container">
    <Component :is="templateName" />
  </div>
</template>
