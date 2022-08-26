<script setup lang="ts">
import { resumeMatchedI18n } from './i18n'

async function downloadPDF() {
  window.html2pdf(document.getElementById('resume-container'))
}
</script>
<template>
  <router-view v-if="resumeMatchedI18n" />
  <button
    fixed
    top-4
    right-12
    @click="downloadPDF"
  >
    Download PDF
  </button>
</template>
