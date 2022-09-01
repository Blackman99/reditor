<script setup lang="ts">
import { resumeMatchedI18n } from './i18n'
import resumeConfig from '../resume.config'
import { templateName } from './templates/store'

const templateNames = Object.keys(
  import.meta.glob('./templates/*/index.vue', { eager: true })
).map(path => path.split('/')[2]) as Array<Templates>

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
    <div>
      <b>Select I18n </b>
    </div>
    <router-link
      v-for="path in Object.keys(resumeConfig)"
      :key="path"
      :to="path"
    >
      {{ path }}
    </router-link>

    <div>
      <b> Select Templates </b>
    </div>

    <div>
      <div
        cursor-pointer
        leading-8
        px-2
        v-for="tName in templateNames"
        :key="tName"
        :class="[
          {
            'hover:bg-gray-2': templateName !== tName,
            'active:bg-gray-4': templateName !== tName,
            'bg-blue-3': templateName === tName,
          },
        ]"
        @click="templateName = tName"
      >
        {{ tName }}
      </div>
    </div>

    <button @click="downloadPDF">Download PDF</button>
  </div>
</template>
