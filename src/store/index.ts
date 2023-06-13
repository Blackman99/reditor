import { computed, ref } from 'vue'
import resume from './resume'

export const locale = ref<I18n>('/')

export const resumeMatchedI18n = computed<ResumeItem>(() => resume[locale.value])

export const templateName = ref<Templates>('green')

export const templateConfig = computed(
  () => resumeMatchedI18n.value.themeConfig[templateName.value],
)

export function createProfileGetterAndSetter<T extends keyof Profile>(key: T) {
  return computed({
    get: () => resume[locale.value].profile[key],
    set: (v: Profile[T]) => {
      resume[locale.value].profile[key] = v
    },
  })
}

export const name = createProfileGetterAndSetter('name')

export const gender = createProfileGetterAndSetter('gender')

export const birthday = createProfileGetterAndSetter('birthday')

export const location = createProfileGetterAndSetter('location')

export const careerObjective = createProfileGetterAndSetter('careerObjective')

export const phone = createProfileGetterAndSetter('phone')

export const email = createProfileGetterAndSetter('email')

export function updateResponsibility(weIdx: number, reIdx: number, re: string) {
  resume[locale.value].workingExperiences[weIdx].responsibilities[reIdx] = re
}
