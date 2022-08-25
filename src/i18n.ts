import { computed, ref } from 'vue'
import resumeConfig from '../resume.config'

export const locale = ref<I18n>('/')

export const resumeMatchedI18n = computed<ResumeItem>(
  () => resumeConfig[locale.value]
)
