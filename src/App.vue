<script setup lang="ts">
import { resumeMatchedI18n, templateName } from '@/store'
import resumeConfig from '@/store/resume'
import { languages } from '@/i18n'

const templateNames = Object.keys(
  import.meta.glob('./templates/*/index.vue', { eager: true }),
).map(path => path.split('/')[2]) as Array<Templates>

async function downloadPDF() {
  window.scrollTo({
    top: 0,
  })
  window
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    .html2pdf()
    .set({
      margin: 0,
      image: {
        type: 'png',
        quality: 1,
      },
    }).from(document.getElementById('resume-container')).save('resume')
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
    w-10vw
  >
    <div
      flex
      items-center
      font-bold
    >
      <div
        text-6
        i-ion-language
      />
      <div ml-2>
        {{ $t('languages') }}
      </div>
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
        class="leading-8 decoration-none text-gray-8 px-2 hover:bg-gray-2 active:bg-gray-4"
      >
        {{ languages[path as I18n] }}
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
      />
      <div ml-2>
        {{ $t('themes') }}
      </div>
    </div>
    <div
      pl-4
      flex
      flex-col
      gap-2
    >
      <div
        v-for="tName in templateNames"
        :key="tName"
        cursor-pointer
        leading-8
        px-2
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
    <a href="https://github.com/Blackman99/resume-templates" target="_blank" text-8 i-mdi-github />
  </div>
  <div
    fixed
    bottom-4
    right-4
  >
    <button
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
      @click="downloadPDF"
    >
      <div
        i-fontisto-export
        text-5
      />
      <div ml-2>
        {{ $t('downloadPDF') }}
      </div>
    </button>
  </div>
</template>
