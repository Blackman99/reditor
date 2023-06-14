<script setup lang="ts">
import Header from './Header.vue'
import Section from './Section.vue'
import {
  resumeMatchedI18n, updateEduAchievement, updateEduEnd,
  updateEduStart, updateGallery,
  updateInstitutionName,
  updateMajor,
} from '@/store'
import {
  createMenus as createWorkingExperienceMenus,
  updateAchievement,
  updateCompanyName, updateEndTime, updateJobTitle, updateResponsibility,
  updateStartTime,
} from '@/store/working-experience'
import { createMenus, updatePersonalAdvantage } from '@/store/personal-advantages'
import { createMenus as createResponsibilityMenus } from '@/store/working-experience/responsibility'
import { createMenus as createAchievementMenus } from '@/store/working-experience/achievement'
import { createMenus as createEducationExperienceMenus } from '@/store/education-experience'
import { createMenus as createEduAchievementMenus } from '@/store/education-experience/achievement'
import { createMenus as createGalleryMenus } from '@/store/gallery'
</script>

<template>
  <div>
    <Header />
    <div p-6>
      <Section :title="resumeMatchedI18n.personalAdvantageTitle">
        <ul m-0>
          <li
            v-for="ad, adIdx in resumeMatchedI18n.personalAdvantages"
            :key="adIdx"
          >
            <Operable
              :menus="createMenus(adIdx)"
            >
              <editable-span :model-value="ad" @update:model-value="(newPa: string) => updatePersonalAdvantage(adIdx, newPa)" />
            </Operable>
          </li>
        </ul>
      </Section>
      <Section
        mt-8
        :title="resumeMatchedI18n.workingExperiencesTitle"
      >
        <div pl-10>
          <Operable
            v-for="wo, wIdx in resumeMatchedI18n.workingExperiences"
            :key="wIdx"
            mb-4
            :menus="createWorkingExperienceMenus(wIdx)"
          >
            <div
              flex
              justify-between
              items-center
            >
              <div
                flex
                items-center
              >
                <b t-000000>
                  <editable-span :model-value="wo.companyName" @update:model-value="(newName: string) => updateCompanyName(wIdx, newName)" />
                </b>
                <div ml-4>
                  <editable-span :model-value="wo.jobTitle" @update:model-value="(newJobTitle: string) => updateJobTitle(wIdx, newJobTitle)" />
                </div>
              </div>
              <div><editable-span :model-value="wo.start" @update:model-value="(newTime: string) => updateStartTime(wIdx, newTime)" /> - <editable-span :model-value="wo.end" @update:model-value="(newTime: string) => updateEndTime(wIdx, newTime)" /></div>
            </div>
            <div>
              <b>
                {{ resumeMatchedI18n.responsibilitiesTitle }}
              </b>
            </div>
            <ul
              m-0
              list-decimal
            >
              <li
                v-for="re, reIdx in wo.responsibilities"
                :key="reIdx"
              >
                <Operable :menus="createResponsibilityMenus(wIdx, reIdx)">
                  <editable-span
                    :model-value="re" @update:model-value="(newRe: string) => {
                      updateResponsibility(wIdx, reIdx, newRe)
                    }"
                  />
                </Operable>
              </li>
            </ul>
            <div>
              <b>
                {{ resumeMatchedI18n.achievementsTitle }}
              </b>
            </div>
            <ul
              m-0
              list-decimal
            >
              <li
                v-for="ach, achIdx in wo.achievements"
                :key="achIdx"
              >
                <Operable :menus="createAchievementMenus(wIdx, achIdx)">
                  <editable-span :model-value="ach" @update:model-value="(newAch: string) => updateAchievement(wIdx, achIdx, newAch)" />
                </Operable>
              </li>
            </ul>
          </Operable>
        </div>
      </Section>
      <Section
        :title="resumeMatchedI18n.educationExperienceTitle"
        mt-8
      >
        <div pl-10>
          <Operable
            v-for="edu, eduIdx in resumeMatchedI18n.educationExperiences"
            :key="eduIdx"
            mb-4
            :menus="createEducationExperienceMenus(eduIdx)"
          >
            <div
              flex
              justify-between
              items-center
            >
              <div
                flex
                items-center
              >
                <b t-000000>
                  <editable-span :model-value="edu.institutionName" @update:model-value="(newName: string) => updateInstitutionName(eduIdx, newName)" />
                </b>
                <div ml-4>
                  <editable-span :model-value="edu.major" @update:model-value="(newMajor: string) => updateMajor(eduIdx, newMajor)" />
                </div>
              </div>
              <div>
                <editable-span :model-value="edu.start" @update:model-value="(next: string) => updateEduStart(eduIdx, next)" />
                - <editable-span :model-value="edu.end" @update:model-value="(next: string) => updateEduEnd(eduIdx, next)" />
              </div>
            </div>
            <ul
              m-0
              list-decimal
            >
              <li
                v-for="ach, achIdx in edu.achievements"
                :key="achIdx"
              >
                <Operable :menus="createEduAchievementMenus(eduIdx, achIdx)">
                  <editable-span :model-value="ach" @update:model-value="(next: string) => updateEduAchievement(eduIdx, achIdx, next)" />
                </Operable>
              </li>
            </ul>
          </Operable>
        </div>
      </Section>
      <Section
        :title="resumeMatchedI18n.galleryTitle"
        mt-8
      >
        <ul m-0>
          <li
            v-for="(ga, gaIdx) in resumeMatchedI18n.galleryItems"
            :key="gaIdx"
          >
            <Operable :menus="createGalleryMenus(gaIdx)">
              <editable-span :model-value="ga" @update:model-value="(newGa: string) => updateGallery(gaIdx, newGa)" />
            </Operable>
          </li>
        </ul>
      </Section>
    </div>
  </div>
</template>
