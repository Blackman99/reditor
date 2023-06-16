<script setup lang="ts">
import { Notify, exportFile, getCssVar, setCssVar } from 'quasar'
import { I18n, type Templates } from './types'
import { locale, resumeMatchedI18n, templateName } from '@/store'
import { languages, t } from '@/i18n'
import resume, { DEFAULT_RESUME } from '@/store/resume'

const templateNames = Object.keys(
  import.meta.glob('./templates/*/index.vue', { eager: true }),
).map(path => path.split('/')[2]) as Array<Templates>

const exporting = ref(false)
const fileInput = ref<HTMLInputElement>()

async function downloadPDF() {
  exporting.value = true
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

  setTimeout(() => {
    exporting.value = false
  }, 1000)
}

function exportJson() {
  exportFile('resume.json', JSON.stringify(resume), 'application/json')
}

function importJson() {
  if (!fileInput.value)
    return

  fileInput.value.click()
}

function handleJsonUploaded(e: any) {
  const [file] = e.target.files
  if (!file)
    return
  const reader = new FileReader()
  const showError = () => {
    Notify.create({
      message: t('uploadJsonError'),
      color: 'negative',
      actions: [
        {
          label: t('dismiss'),
          color: 'white',
        },
      ],
    })
  }
  reader.onload = (e) => {
    try {
      const jsonSource = e.target?.result?.toString() || JSON.stringify(DEFAULT_RESUME)
      Object.assign(resume, JSON.parse(jsonSource))
      Notify.create({
        message: t('uploadJsonSuccess'),
        color: 'primary',
        timeout: 3000,
        actions: [
          {
            label: t('dismiss'),
            color: 'white',
          },
        ],
      })
    }
    catch {
      showError()
    }
  }
  reader.onerror = showError
  reader.readAsText(file, 'utf-8')
  e.target.value = ''
}

const themeColor = ref(getCssVar('primary'))

watch(() => themeColor.value, (newVal = '') => {
  if (!newVal)
    return
  setCssVar('primary', newVal)
})
</script>

<template>
  <input ref="fileInput" type="file" accept="application/json" display-none @change="handleJsonUploaded">
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
      <QItem clickable @click="importJson">
        <QItemSection avatar>
          <div i-carbon-json-reference text-6 />
        </QItemSection>
        <QItemSection>
          {{ $t('uploadJson') }}
        </QItemSection>
      </QItem>
      <QItem clickable @click="exportJson">
        <QItemSection avatar>
          <div i-bi-filetype-json text-6 />
        </QItemSection>
        <QItemSection>
          {{ $t('downloadJson') }}
        </QItemSection>
      </QItem>
      <QItem clickable @click="downloadPDF">
        <QInnerLoading :showing="exporting">
          <QSpinnerPie color="primary" />
        </QInnerLoading>
        <QItemSection avatar>
          <div i-fa6-solid-file-pdf text-6 />
        </QItemSection>
        <QItemSection>
          {{ $t('downloadPDF') }}
        </QItemSection>
      </QItem>
      <QExpansionItem
        header-class="bg-gray-2"
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
            v-for="path in Object.values(I18n)"
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
        header-class="bg-gray-2"
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
      <QExpansionItem
        header-class="bg-gray-2"
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
      <QSeparator />
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
</template>
