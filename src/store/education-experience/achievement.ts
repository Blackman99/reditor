import resume from '../resume'
import { locale } from '..'
import { t } from '@/i18n'
import { ensureAtLeastOneAfterDelete, insertAfter, insertBefore } from '@/utils/array'

export function createMenus(eduIdx: number, achIdx: number) {
  return [
    {
      title: t('insertBefore'),
      action: () => {
        insertBefore(resume[locale.value].educationExperiences[eduIdx].achievements, achIdx, '')
      },
    },
    {
      title: t('insertAfter'),
      action: () => {
        insertAfter(resume[locale.value].educationExperiences[eduIdx].achievements, achIdx, '')
      },
    },
    {
      title: t('delete'),
      action: () => {
        ensureAtLeastOneAfterDelete(resume[locale.value].educationExperiences[eduIdx].achievements, achIdx, () => '')
      },
    },
  ]
}
