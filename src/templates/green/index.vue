<script setup lang="ts">
import Header from './Header.vue'
import Section from './Section.vue'
import {
  resumeMatchedI18n,
} from '@/store'
</script>

<template>
  <div>
    <Header />
    <div p-6>
      <Section :title="resumeMatchedI18n.personalAdvantageTitle">
        <ul m-0>
          <Advantages>
            <li>
              <AdvantagesItem />
            </li>
          </Advantages>
        </ul>
      </Section>
      <Section
        mt-8
        :title="resumeMatchedI18n.workingExperiencesTitle"
      >
        <div pl-10>
          <WorkingExperiences>
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
                  <CompanyName />
                </b>
                <div ml-4>
                  <JobTitle />
                </div>
              </div>
              <div>
                <WorkingDuration />
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
              <Responsibilities>
                <li>
                  <ResponsibilityItem />
                </li>
              </Responsibilities>
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
              <Achievements>
                <li>
                  <AchievementItem />
                </li>
              </Achievements>
            </ul>
          </WorkingExperiences>
        </div>
      </Section>
      <Section
        :title="resumeMatchedI18n.educationExperienceTitle"
        mt-8
      >
        <div pl-10>
          <Educations>
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
                  <InstitutionName />
                </b>
                <div ml-4>
                  <Major />
                </div>
              </div>
              <div>
                <EducationDuration />
              </div>
            </div>
            <ul
              m-0
              list-decimal
            >
              <EduAchievements>
                <li>
                  <EduAchievementItem />
                </li>
              </EduAchievements>
            </ul>
          </Educations>
        </div>
      </Section>
      <Section
        :title="resumeMatchedI18n.galleryTitle"
        mt-8
      >
        <ul m-0>
          <Galleries>
            <li>
              <GalleryItem />
            </li>
          </Galleries>
        </ul>
      </Section>
    </div>
  </div>
</template>
