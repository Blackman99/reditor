import { locale } from '../store'
import { I18n } from '@/types'

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
  siteHelp2: string
  dismiss: string
  help: string
  pickColor: string
  downloadJson: string
  uploadJson: string
  uploadJsonError: string
  uploadJsonSuccess: string
}

type Translations = {
  [k in I18n]: Translation
}

const translations: Translations = {
  [I18n.EN]: {
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
    siteHelp: 'Left click on the text to open popup editor',
    siteHelp2: 'Right click on the section to open context menu',
    tips: 'TIP',
    help: 'How to use',
    dismiss: 'Dismiss',
    pickColor: 'Pick color',
    downloadJson: 'Download JSON',
    uploadJson: 'Upload JSON',
    uploadJsonError: 'There\'s something wrong with the JSON file',
    uploadJsonSuccess: ' Upload successfully, Information applied!',
  },
  [I18n.ZH_CN]: {
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
    siteHelp: '在文字上左键点击呼出弹出式编辑框',
    siteHelp2: '在模块上右键呼出右键菜单以增减模块',
    tips: '提示',
    dismiss: '关闭',
    help: '怎样使用',
    pickColor: '选择主题色',
    downloadJson: '下载 JSON',
    uploadJson: '上传 JSON',
    uploadJsonError: '看起来 JSON 的上传解析出了意外错误',
    uploadJsonSuccess: '上传成功，信息已录入',
  },
}

export const languages = {
  [I18n.EN]: 'English',
  [I18n.ZH_CN]: '简体中文',
}

export const t = (key: keyof Translation) => translations[locale.value][key]
