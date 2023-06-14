import { locale } from '..'
import resume from '../resume'
import { ensureAtLeastOneAfterDelete, insertAfter, insertBefore } from '@/utils/array'
import { t } from '@/i18n'

export function createMenus(gIdx: number) {
  return [
    {
      title: t('insertBefore'),
      action: () => {
        insertBefore(resume[locale.value].galleryItems, gIdx, '')
      },
    },
    {
      title: t('insertAfter'),
      action: () => {
        insertAfter(resume[locale.value].galleryItems, gIdx, '')
      },
    },
    {
      title: t('delete'),
      action: () => {
        ensureAtLeastOneAfterDelete(resume[locale.value].galleryItems, gIdx, () => '')
      },
    },
  ]
}
