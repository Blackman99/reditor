import { locale } from '../store'

export interface Translation {
  downloadPDF: string
  languages: string
  themes: string
  delete: string
  addItem: string
  insertAfter: string
  insertBefore: string
  careerObjective: string
  personalAdvantages: string
  semi: string
  workingExperiences: string
  educationExperiences: string
  gallery: string
  responsibilities: string
  achievements: string
  siteHelp: string
  tips: string
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
    personalAdvantages: 'Personal Advantages',
    careerObjective: 'Career Objective',
    semi: ': ',
    workingExperiences: 'Working Experiences',
    educationExperiences: 'Education Experiences',
    gallery: 'Gallery',
    responsibilities: 'Responsibilities',
    achievements: 'Achievements',
    siteHelp: 'Left click on the text you want to edit to open popup editor. Right click on the section to open context menu',
    tips: 'TIP',
  },
  'zh-CN': {
    delete: '删除',
    downloadPDF: '下载 PDF',
    themes: '主题',
    languages: '语言',
    addItem: '添加项',
    insertAfter: '插入新项目到当前项目之后',
    insertBefore: '插入新项目到当前项目之前',
    personalAdvantages: '个人优势',
    careerObjective: '期望职位',
    semi: '：',
    workingExperiences: '工作经历',
    educationExperiences: '教育经历',
    gallery: '作品展示',
    responsibilities: '职责',
    achievements: '成果',
    siteHelp: '在你想编辑的文字上左键点击呼出弹出式编辑框，在模块上右键呼出右键菜单',
    tips: '提示',
  },
}

export const languages = {
  '/': 'English',
  'zh-CN': '简体中文',
}

export const t = (key: keyof Translation) => translations[locale.value][key]
