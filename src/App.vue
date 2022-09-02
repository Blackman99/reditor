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
    <div
      flex
      items-center
      font-bold
    >
      <div
        text-6
        i-ion-language
      ></div>
      <div ml-2>Language</div>
    </div>
    <div
      flex
      flex-col
      gap-2
      pl-4
    >
      <router-link
        v-for="path in Object.keys(resumeConfig)"
        :key="path"
        :to="path"
        active-class="bg-blue text-white"
        class="leading-8 px-2 hover:bg-gray-2 active:bg-gray-4"
      >
        {{ path }}
      </router-link>
    </div>

    <div
      flex
      mt-4
      items-center
      font-bold
    >
      <div
        text-6
        i-gridicons-themes
      ></div>
      <div ml-2>Themes</div>
    </div>
    <div
      pl-4
      flex
      flex-col
      gap-2
    >
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
            'bg-blue': templateName === tName,
            'text-white': templateName === tName,
          },
        ]"
        @click="templateName = tName"
      >
        {{ tName }}
      </div>
    </div>
  </div>
  <div
    fixed
    bottom-4
    right-4
  >
    <button
      @click="downloadPDF"
      inline-flex
      items-center
      leading-10
      bg-blue
      outline-0
      border-0
      text-white
      px-4
      rounded-2
      hover:bg-blue-5
      active:bg-blue-6
      cursor-pointer
    >
      <div
        i-fontisto-export
        text-5
      ></div>
      <div ml-2>Download PDF</div>
    </button>
  </div>
</template>
