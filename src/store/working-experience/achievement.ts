import resume from '../resume'
import { locale } from '..'
import { t } from '@/i18n'
import { ensureAtLeastOneAfterDelete, insertAfter, insertBefore } from '@/utils/array'

export function createMenus(wIdx: number, achIdx: number) {
  return [
    {
      title: t('insertBefore'),
      action: () => {
        insertBefore(resume[locale.value].workingExperiences[wIdx].achievements, achIdx, '')
      },
    },
    {
      title: t('insertAfter'),
      action: () => {
        insertAfter(resume[locale.value].workingExperiences[wIdx].achievements, achIdx, '')
      },
    },
    {
      title: t('delete'),
      action: () => {
        ensureAtLeastOneAfterDelete(resume[locale.value].workingExperiences[wIdx].achievements, achIdx, () => '')
      },
    },
  ]
}
