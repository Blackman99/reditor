export enum I18n {
  EN = 'en',
  ZH_CN = 'zh-CN',
}

export enum Templates {
  Timeline = 'timeline',
  Simple = 'simple',
  Shadow = 'shadow',
  Star = 'star',
}

const i18nValues = Object.values(I18n)
const templateValues = Object.values(Templates)

export function isLegalI18n(maybeI18n: any) {
  return i18nValues.includes(maybeI18n)
}

export function isLegalTemplate(maybeTemplate: any) {
  return templateValues.includes(maybeTemplate)
}
