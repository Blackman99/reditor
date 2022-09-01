import { resumeMatchedI18n } from '@/i18n'
import { computed, ref } from 'vue'
export const templateName = ref<Templates>('green')

export const templateConfig = computed(
  () => resumeMatchedI18n.value.themeConfig[templateName.value]
)
