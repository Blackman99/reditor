import { locale } from '..'
import resume from '../resume'
import { ensureAtLeastOneAfterDelete, insertAfter, insertBefore } from '@/utils/array'
import { t } from '@/i18n'

export function createMenus(eduIdx: number) {
  return [
    {
      title: t('insertBefore'),
      action: () => {
        insertBefore(resume[locale.value].educationExperiences, eduIdx, createEducationExperience())
      },
    },
    {
      title: t('insertAfter'),
      action: () => {
        insertAfter(resume[locale.value].educationExperiences, eduIdx, createEducationExperience())
      },
    },
    {
      title: t('delete'),
      action: () => {
        ensureAtLeastOneAfterDelete(resume[locale.value].educationExperiences, eduIdx, createEducationExperience)
      },
    },
  ]
}

function createEducationExperience() {
  return {
    institutionName: '',
    start: '',
    end: '',
    major: '',
    achievements: [''],
  }
}
