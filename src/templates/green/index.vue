<script setup lang="ts">
import Header from './Header.vue'
import Section from './Section.vue'
import {
  resumeMatchedI18n,
  updateAchievement, updateCompanyName, updateEduAchievement, updateEduEnd, updateEduStart, updateEndTime, updateGallery,
  updateInstitutionName, updateJobTitle, updateMajor,
  updatePersonalAdvantage, updateResponsibility, updateStartTime,
} from '@/store'
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
            <editable-span :model-value="ad" @update:model-value="(newPa: string) => updatePersonalAdvantage(adIdx, newPa)" />
          </li>
        </ul>
      </Section>
      <Section
        mt-8
        :title="resumeMatchedI18n.workingExperiencesTitle"
      >
        <div pl-10>
          <div
            v-for="wo, wIdx in resumeMatchedI18n.workingExperiences"
            :key="wIdx"
            mb-4
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
                <editable-span
                  :model-value="re" @update:model-value="(newRe: string) => {
                    updateResponsibility(wIdx, reIdx, newRe)
                  }"
                />
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
                <editable-span :model-value="ach" @update:model-value="(newAch: string) => updateAchievement(wIdx, achIdx, newAch)" />
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section
        :title="resumeMatchedI18n.educationExperienceTitle"
        mt-8
      >
        <div pl-10>
          <div
            v-for="edu, eduIdx in resumeMatchedI18n.educationExperiences"
            :key="eduIdx"
            mb-4
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
                <editable-span :model-value="ach" @update:model-value="(next: string) => updateEduAchievement(eduIdx, achIdx, next)" />
              </li>
            </ul>
          </div>
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
            <editable-span :model-value="ga" @update:model-value="(newGa: string) => updateGallery(gaIdx, newGa)" />
          </li>
        </ul>
      </Section>
    </div>
  </div>
</template>
