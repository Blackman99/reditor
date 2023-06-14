import resume from '../resume'
import { locale } from '..'
import { t } from '@/i18n'
import { ensureAtLeastOneAfterDelete, insertAfter, insertBefore } from '@/utils/array'

export function updateResponsibility(weIdx: number, reIdx: number, re: string) {
  resume[locale.value].workingExperiences[weIdx].responsibilities[reIdx] = re
}

export function createMenus(wIdx: number, reIdx: number) {
  return [
    {
      title: t('insertBefore'),
      action: () => {
        insertBefore(resume[locale.value].workingExperiences[wIdx].responsibilities, reIdx, '')
      },
    },
    {
      title: t('insertAfter'),
      action: () => {
        insertAfter(resume[locale.value].workingExperiences[wIdx].responsibilities, reIdx, '')
      },
    },
    {
      title: t('delete'),
      action: () => {
        ensureAtLeastOneAfterDelete(resume[locale.value].workingExperiences[wIdx].responsibilities, reIdx, () => '')
      },
    },
  ]
}
