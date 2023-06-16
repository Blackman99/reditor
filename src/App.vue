<script setup lang="ts">
import { locale, resumeMatchedI18n, templateName } from '@/store'
import resumeConfig from '@/store/resume'
import { languages } from '@/i18n'

const templateNames = Object.keys(
  import.meta.glob('./templates/*/index.vue', { eager: true }),
).map(path => path.split('/')[2]) as Array<Templates>

async function downloadPDF() {
  window.scrollTo({
    top: 0,
  })
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const html2pdf = (await import('html2pdf.js')).default
  html2pdf()
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
    top-0
    right-0
    flex
    flex-col
    gap-4
    w-10vw
  >
    <QList>
      <QExpansionItem
        header-class="bg-primary text-white"
        expand-icon-class="text-white"
        default-opened
      >
        <template #header>
          <QItemSection avatar>
            <div
              text-6
              i-ion-language
            />
          </QItemSection>

          <QItemSection>
            {{ $t('languages') }}
          </QItemSection>
        </template>
        <QList>
          <QItem
            v-for="path in Object.keys(resumeConfig)"
            :key="path"
            :to="`/${path}/${templateName}`"
          >
            <QItemSection>
              {{ languages[path as I18n] }}
            </QItemSection>
          </QItem>
        </QList>
      </QExpansionItem>
      <QExpansionItem
        header-class="bg-primary text-white"
        expand-icon-class="text-white"
        default-opened
      >
        <template #header>
          <QItemSection avatar>
            <div
              text-6
              i-gridicons-themes
            />
          </QItemSection>

          <QItemSection>
            {{ $t('themes') }}
          </QItemSection>
        </template>
        <QList>
          <QItem
            v-for="tName in templateNames"
            :key="tName"
            :to="`/${locale}/${tName}`"
          >
            <QItemSection>
              {{ tName }}
            </QItemSection>
          </QItem>
        </QList>
      </QExpansionItem>
      <QItem href="https://github.com/Blackman99/resume-templates" target="_blank">
        <QItemSection avatar>
          <div text-8 i-mdi-github />
        </QItemSection>
        <QItemSection>
          Star/Fork
        </QItemSection>
      </QItem>
    </QList>
  </div>
  <div
    fixed
    bottom-4
    right-4
    class="w-10vw"
  >
    <div b-1 b-gray-4 b-solid mb-8 rounded-2 p-2 text-warm-gray-8>
      <div text-green-5 flex items-center gap-2>
        <div text-6 flex-shrink-0 i-material-symbols-help-center-rounded />
        <div>
          {{ $t('tips') }}
        </div>
      </div>
      {{ $t('siteHelp') }}
    </div>
    <q-btn color="primary" unelevated @click="downloadPDF">
      <div
        i-fontisto-export
        text-5
      />
      <div ml-2>
        {{ $t('downloadPDF') }}
      </div>
    </q-btn>
  </div>
</template>
