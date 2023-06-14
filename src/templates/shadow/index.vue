<script setup lang="ts">
import Header from './Header.vue'
import Section from './Section.vue'
import {
  resumeMatchedI18n, updateEduAchievement, updateEduEnd,
  updateEduStart, updateGallery,
  updateInstitutionName,
} from '@/store'
import {
  updateCompanyName,
  updateEndTime, updateJobTitle, updateStartTime,
} from '@/store/working-experience'
import { updateResponsibility } from '@/store/working-experience/responsibility'
import { updatePersonalAdvantage } from '@/store/personal-advantages'
import { updateAchievement } from '@/store/working-experience/achievement'
</script>

<template>
  <div>
    <Header />
    <div p-6>
      <Section :title="resumeMatchedI18n.personalAdvantageTitle">
        <ul m-0>
          <li
            v-for="(ad, adIdx) in resumeMatchedI18n.personalAdvantages"
            :key="adIdx"
          >
            <editable-span :model-value="ad" @update:model-value="(next: string) => updatePersonalAdvantage(adIdx, next)" />
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
                  <editable-span :model-value="wo.companyName" @update:model-value="(next: string) => updateCompanyName(wIdx, next)" />
                </b>
                <div ml-4>
                  <editable-span :model-value="wo.jobTitle" @update:model-value="(next: string) => updateJobTitle(wIdx, next)" />
                </div>
              </div>
              <div>
                <editable-span :model-value="wo.start" @update:model-value="(next: string) => updateStartTime(wIdx, next)" />
                -
                <editable-span :model-value="wo.end" @update:model-value="(next: string) => updateEndTime(wIdx, next)" />
              </div>
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
                <editable-span :model-value="re" @update:model-value="(next: string) => updateResponsibility(wIdx, reIdx, next)" />
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
                <editable-span :model-value="ach" @update:model-value="(next: string) => updateAchievement(wIdx, achIdx, next)" />
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
                  <editable-span :model-value="edu.institutionName" @update:model-value="(next: string) => updateInstitutionName(eduIdx, next)" />
                </b>
                <div ml-4>
                  {{ edu.major }}
                </div>
              </div>
              <div>
                <editable-span :model-value="edu.start" @update:model-value="(next: string) => updateEduStart(eduIdx, next)" />
                -
                <editable-span :model-value="edu.end" @update:model-value="(next: string) => updateEduEnd(eduIdx, next)" />
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
            v-for="ga, gaIdx in resumeMatchedI18n.galleryItems"
            :key="gaIdx"
          >
            <editable-span :model-value="ga" @update:model-value="(next: string) => updateGallery(gaIdx, next)" />
          </li>
        </ul>
      </Section>
    </div>
  </div>
</template>
