<script setup lang="ts">
import Header from './Header.vue'
import Section from './Section.vue'
</script>

<template>
  <div>
    <Header />
    <div p-6>
      <Section :title="$t('personalAdvantages')">
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
        :title="$t('workingExperiences')"
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
                {{ $t('responsibilities') }}
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
                {{ $t('achievements') }}
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
        :title="$t('educationExperiences')"
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
        :title="$t('gallery')"
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
