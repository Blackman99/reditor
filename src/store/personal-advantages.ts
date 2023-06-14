import resume from './resume'
import { locale } from '.'
import { t } from '@/i18n'
import { ensureAtLeastOneAfterDelete, insertAfter, insertBefore } from '@/utils/array'

export function updatePersonalAdvantage(idx: number, v: string) {
  resume[locale.value].personalAdvantages[idx] = v
}

export function addPersonalAdvantage() {
  resume[locale.value].personalAdvantages.push('')
}

export function removePersonalAdvantage(idx: number) {
  ensureAtLeastOneAfterDelete(resume[locale.value].personalAdvantages, idx, () => '')
}

export function createMenus(idx: number) {
  const menus = [
    {
      title: t('insertBefore'),
      action: () => {
        insertBefore(resume[locale.value].personalAdvantages, idx, '')
      },
    },
    {
      title: t('insertAfter'),
      action: () => {
        insertAfter(resume[locale.value].personalAdvantages, idx, '')
      },
    },
  ]
  if (resume[locale.value].personalAdvantages.length < 1)
    return menus

  menus.push({
    title: t('delete'),
    action: () => {
      removePersonalAdvantage(idx)
    },
  })
  return menus
}
