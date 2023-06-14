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

export function updateAchievement(weIdx: number, achIdx: number, ach: string) {
  resume[locale.value].workingExperiences[weIdx].achievements[achIdx] = ach
}

export function updateCompanyName(wIdx: number, newName: string) {
  resume[locale.value].workingExperiences[wIdx].companyName = newName
}

export function updateJobTitle(wIdx: number, newJobTitle: string) {
  resume[locale.value].workingExperiences[wIdx].jobTitle = newJobTitle
}

export function updateStartTime(wIdx: number, newTime: string) {
  resume[locale.value].workingExperiences[wIdx].start = newTime
}

export function updateEndTime(wIdx: number, newTime: string) {
  resume[locale.value].workingExperiences[wIdx].end = newTime
}

export function updatePersonalAdvantage(idx: number, v: string) {
  resume[locale.value].personalAdvantages[idx] = v
}

export function updateGallery(gaIdx: number, newGa: string) {
  resume[locale.value].galleryItems[gaIdx] = newGa
}

export function updateInstitutionName(eduIdx: number, newName: string) {
  resume[locale.value].educationExperiences[eduIdx].institutionName = newName
}

export function updateMajor(eduIdx: number, newMajor: string) {
  resume[locale.value].educationExperiences[eduIdx].major = newMajor
}

export function updateEduStart(eduIdx: number, newTime: string) {
  resume[locale.value].educationExperiences[eduIdx].start = newTime
}

export function updateEduEnd(eduIdx: number, newTime: string) {
  resume[locale.value].educationExperiences[eduIdx].end = newTime
}

export function updateEduAchievement(eduIdx: number, achIdx: number, next: string) {
  resume[locale.value].educationExperiences[eduIdx].achievements[achIdx] = next
}
