<script setup lang="ts">
import { resumeMatchedI18n } from './i18n'
import resumeConfig from '../resume.config'

async function downloadPDF() {
  // @ts-ignore
  window.html2pdf(document.getElementById('resume-container'))
}
</script>
<template>
  <router-view v-if="resumeMatchedI18n" />
  <div
    fixed
    top-4
    right-12
    flex
    flex-col
    gap-4
  >
    <router-link
      v-for="path in Object.keys(resumeConfig)"
      :key="path"
      :to="path"
    >
      {{ path }}
    </router-link>
    <button @click="downloadPDF">Download PDF</button>
  </div>
</template>
