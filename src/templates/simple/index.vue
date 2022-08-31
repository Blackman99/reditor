<script lang="ts" setup>
import { resumeMatchedI18n } from '../../i18n'
import HeaderInfo from './HeaderInfo.vue'
import SectionTitle from './SectionTitle.vue'
import List from './List.vue'
import TimelineList from './TimelineList.vue'
import Person from '@/icons/Person.vue'
import Briefcase from '@/icons/Briefcase.vue'
import Education from '@/icons/Education.vue'
import Gallery from '@/icons/Gallery.vue'
import Smile from '@/icons/Smile.vue'
</script>
<template>
  <div
    mx-auto
    max-w-4xl
    font-sans
    id="resume-container"
    p-4
  >
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
    <List :items="resumeMatchedI18n.personalAdvantages" />
    <!-- Working Experiences -->
    <SectionTitle :title="resumeMatchedI18n.workingExperiencesTitle">
      <template #icon>
        <Briefcase />
      </template>
    </SectionTitle>
    <TimelineList
      :items="
        resumeMatchedI18n.workingExperiences.map(wo => ({
          title: wo.companyName,
          subtitle: wo.jobTitle,
          append: `${wo.start} - ${wo.end}`,
          contents: [
            {
              title: resumeMatchedI18n.responsibilitiesTitle,
              items: wo.responsibilities,
            },
            {
              title: resumeMatchedI18n.achievementsTitle,
              items: wo.achievements,
            },
          ],
        }))
      "
    />
    <SectionTitle :title="resumeMatchedI18n.educationExperienceTitle">
      <template #icon>
        <Education />
      </template>
    </SectionTitle>
    <TimelineList
      :items="
        resumeMatchedI18n.educationExperiences.map(edu => ({
          title: edu.institutionName,
          subtitle: edu.major,
          append: `${edu.start} - ${edu.end}`,
          contents: [
            {
              items: edu.achievements,
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
    <List :items="resumeMatchedI18n.galleryItems" />
    <div
      justify-center
      flex
      items-center
      my-10
      text-gray-4
    >
      {{ resumeMatchedI18n.footer }}

      <Smile
        ml-1
        text-6
      />
    </div>
  </div>
</template>
