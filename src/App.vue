<script setup lang="ts">
import { resumeMatchedI18n } from './i18n'
</script>
<template>
  <router-view v-if="resumeMatchedI18n" />
</template>
