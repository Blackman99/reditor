<script lang="ts" setup>
import { resumeMatchedI18n } from '../../i18n'
import HeaderInfo from './HeaderInfo.vue'
import SectionTitle from './SectionTitle.vue'
import List from './List.vue'
import TimelineList from './TimelineList.vue'
</script>
<template>
  <div
    mx-auto
    max-w-4xl
    font-sans
    id="resume-container"
  >
    <HeaderInfo />
    <!-- Personal Advantages -->
    <SectionTitle
      :title="resumeMatchedI18n.personalAdvantageTitle"
      mt-8
    >
      <template #icon>
        <div i-material-symbols-person></div>
      </template>
    </SectionTitle>
    <List :items="resumeMatchedI18n.personalAdvantages" />
    <!-- Working Experiences -->
    <SectionTitle :title="resumeMatchedI18n.workingExperiencesTitle">
      <template #icon>
        <div i-uis-briefcase></div>
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
        <div i-zondicons-education></div>
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
        <div i-dashicons-format-gallery></div>
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
      <div
        i-fa6-regular-face-smile-wink
        ml-2
        text-6
      ></div>
    </div>
  </div>
</template>
