<script setup lang="ts">
import { getCssVar, setCssVar } from 'quasar'
import type { I18n, Templates } from './types'
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

const themeColor = ref(getCssVar('primary'))

watch(() => themeColor.value, (newVal = '') => {
  if (!newVal)
    return
  setCssVar('primary', newVal)
})
</script>

<template>
  <router-view v-if="resumeMatchedI18n" />
  <div
    fixed
    top-0
    right-0
    bottom-0
    flex
    flex-col
    gap-4
    b-l-1
    b-l-solid
    b-l-light-8
    class="w-10vw min-w-[280px] max-w-[480px]"
  >
    <QList class="h-full">
      <QExpansionItem
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
      <QSeparator />
      <QItem clickable>
        <QPopupProxy>
          <QColor v-model="themeColor" default-view="palette" flat />
        </QPopupProxy>
        <QItemSection avatar>
          <div i-icon-park-outline-platte text-6 />
        </QItemSection>
        <QItemSection>
          {{ $t('pickColor') }}
        </QItemSection>
      </QItem>
      <QItem clickable @click="downloadPDF">
        <QItemSection avatar>
          <div i-fontisto-export text-6 />
        </QItemSection>
        <QItemSection>
          {{ $t('downloadPDF') }}
        </QItemSection>
      </QItem>
      <QSeparator />
      <QItem href="https://github.com/Blackman99/resume-templates" target="_blank">
        <QItemSection avatar>
          <div text-8 i-mdi-github />
        </QItemSection>
        <QItemSection>
          Star/Fork
        </QItemSection>
      </QItem>
      <QExpansionItem
        default-opened
      >
        <template #header>
          <QItemSection avatar>
            <div
              text-6
              i-material-symbols-contact-support-outline-rounded
            />
          </QItemSection>
          <QItemSection>
            {{ $t('help') }}
          </QItemSection>
        </template>
        <QList>
          <QItem>
            <QItemSection avatar>
              <div i-mdi-playlist-edit text-6 class="text-primary" />
            </QItemSection>
            <QItemSection>
              {{ $t('siteHelp') }}
            </QItemSection>
          </QItem>
          <QItem>
            <QItemSection avatar>
              <div i-mdi-button-cursor text-6 class="text-primary" />
            </QItemSection>
            <QItemSection>
              {{ $t('siteHelp2') }}
            </QItemSection>
          </QItem>
        </QList>
      </QExpansionItem>
    </QList>
  </div>
</template>
