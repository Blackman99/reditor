import resume from '../resume'
import { locale } from '..'

import { ensureAtLeastOneAfterDelete, insertAfter, insertBefore } from '@/utils/array'
import { t } from '@/i18n'

export function insertWorkingExperiencesAfter(idx: number) {
  insertAfter(resume[locale.value].workingExperiences, idx, createWorkingExperience())
}

export function insertWorkingExperiencesBefore(idx: number) {
  insertBefore(resume[locale.value].workingExperiences, idx, createWorkingExperience())
}

export function deleteWorkingExperience(idx: number) {
  ensureAtLeastOneAfterDelete(resume[locale.value].workingExperiences, idx, createWorkingExperience)
}

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

export function createMenus(wIdx: number) {
  return [
    {
      title: t('insertBefore'),
      action: () => insertWorkingExperiencesBefore(wIdx),
    },
    {
      title: t('insertAfter'),
      action: () => insertWorkingExperiencesAfter(wIdx),
    },
    {
      title: t('delete'),
      action: () => deleteWorkingExperience(wIdx),
    },
  ]
}

function createWorkingExperience() {
  return {
    companyName: '',
    jobTitle: '',
    start: '',
    end: '',
    achievements: [''],
    responsibilities: [''],
  }
}
