<script lang="ts" setup>
import HeaderInfo from './HeaderInfo.vue'
import SectionTitle from './SectionTitle.vue'
import List from './List.vue'
import TimelineList from './TimelineList.vue'
import {
  resumeMatchedI18n, updateEduAchievement, updateGallery,
} from '@/store'
import {
  updateCompanyName,
  updateEndTime, updateJobTitle, updateStartTime,
} from '@/store/working-experience'
import { updateResponsibility } from '@/store/working-experience/responsibility'
import { updateAchievement } from '@/store/working-experience/achievement'
import { updatePersonalAdvantage } from '@/store/personal-advantages'

import Person from '@/icons/Person.vue'
import Briefcase from '@/icons/Briefcase.vue'
import Education from '@/icons/Education.vue'
import Gallery from '@/icons/Gallery.vue'
</script>

<template>
  <div p-4>
    <HeaderInfo />
    <!-- Personal Advantages -->
    <SectionTitle
      :title="resumeMatchedI18n.personalAdvantageTitle"
      mt-8
    >
      <template #icon>
        <Person />
      </template>
    </SectionTitle>
    <List :items="resumeMatchedI18n.personalAdvantages" @update="updatePersonalAdvantage" />
    <!-- Working Experiences -->
    <SectionTitle :title="resumeMatchedI18n.workingExperiencesTitle">
      <template #icon>
        <Briefcase />
      </template>
    </SectionTitle>
    <TimelineList
      :items="
        resumeMatchedI18n.workingExperiences.map((wo, wIdx) => ({
          title: wo.companyName,
          subtitle: wo.jobTitle,
          append: `${wo.start} - ${wo.end}`,
          contents: [
            {
              title: resumeMatchedI18n.responsibilitiesTitle,
              items: wo.responsibilities,
              updater: (reIdx, next) => updateResponsibility(wIdx, reIdx, next),
            },
            {
              title: resumeMatchedI18n.achievementsTitle,
              items: wo.achievements,
              updater: (reIdx, next) => updateAchievement(wIdx, reIdx, next),
            },
          ],
        }))
      "
      @update-title="updateCompanyName"
      @update-subtitle="updateJobTitle"
    >
      <template #append="{ i }">
        <editable-span :model-value="resumeMatchedI18n.workingExperiences[i].start" @update:model-value="(next: string) => updateStartTime(i, next)" />
        -
        <editable-span :model-value="resumeMatchedI18n.workingExperiences[i].end" @update:model-value="(next: string) => updateEndTime(i, next)" />
      </template>
    </TimelineList>
    <SectionTitle :title="resumeMatchedI18n.educationExperienceTitle">
      <template #icon>
        <Education />
      </template>
    </SectionTitle>
    <TimelineList
      :items="
        resumeMatchedI18n.educationExperiences.map((edu, i) => ({
          title: edu.institutionName,
          subtitle: edu.major,
          append: `${edu.start} - ${edu.end}`,
          contents: [
            {
              items: edu.achievements,
              updater: (achIdx, next) => updateEduAchievement(i, achIdx, next),
            },
          ],
        }))
      "
    />
    <!-- Gallery -->
    <SectionTitle :title="resumeMatchedI18n.galleryTitle">
      <template #icon>
        <Gallery />
      </template>
    </SectionTitle>
    <List :items="resumeMatchedI18n.galleryItems" @update="updateGallery" />
  </div>
</template>
