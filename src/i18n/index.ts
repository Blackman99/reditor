import { locale } from '../store'

export interface Translation {
  downloadPDF: string
  languages: string
  themes: string
  delete: string
  addItem: string
  insertAfter: string
  insertBefore: string
}

type Translations = {
  [key in I18n]: Translation
}

const translations: Translations = {
  '/': {
    delete: 'Delete',
    downloadPDF: 'Download PDF',
    themes: 'Themes',
    languages: 'Languages',
    addItem: 'Add item',
    insertAfter: 'Insert after',
    insertBefore: 'Insert before',
  },
  'zh-CN': {
    delete: '删除',
    downloadPDF: '下载 PDF',
    themes: '主题',
    languages: '语言',
    addItem: '添加项',
    insertAfter: '插入新项目到当前项目之后',
    insertBefore: '插入新项目到当前项目之前',
  },
}

export const languages = {
  '/': 'English',
  'zh-CN': '简体中文',
}

export const t = (key: keyof Translation) => translations[locale.value][key]
