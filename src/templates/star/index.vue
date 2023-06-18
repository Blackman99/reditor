<script setup lang="ts">
import Title from './Title.vue'
import Header from './Header.vue'
import Body from './Body.vue'
</script>

<template>
  <div relative class="text-[#030301]">
    <Header />
    <Body>
      <Title :title="$t('personalAdvantages')" />
      <ul list-disc leading-8 mt-2 mb-4>
        <Advantages>
          <li>
            <AdvantagesItem />
          </li>
        </Advantages>
      </ul>
      <Title :title="$t('workingExperiences')" />
      <div pl-4 mt-4>
        <WorkingExperiences>
          <div flex justify-between>
            <div flex items-center gap-6>
              <CompanyName font-bold />
              <JobTitle />
            </div>
            <div text-gray-6>
              <WorkingDuration />
            </div>
          </div>
          <div font-bold mt-2 class="c-[#414041]">
            {{ $t('responsibilities') }}
          </div>
          <ul list-decimal leading-6 pl-4>
            <Responsibilities>
              <li>
                <ResponsibilityItem />
              </li>
            </Responsibilities>
          </ul>
          <div font-bold mt-2 class="c-[#414041]">
            {{ $t('achievements') }}
          </div>
          <ul list-decimal leading-6 mt-2 pl-4>
            <Achievements>
              <li>
                <AchievementItem />
              </li>
            </Achievements>
          </ul>
        </WorkingExperiences>
      </div>
      <Title :title="$t('educationExperiences')" />
      <div pl-4>
        <Educations>
          <div flex justify-between>
            <div flex items-center gap-6>
              <InstitutionName font-bold />
              <Major />
            </div>
            <div text-gray-6>
              <EducationDuration />
            </div>
          </div>
          <ul list-decimal leading-8 mt-2 pl-4>
            <EduAchievements>
              <li>
                <EduAchievementItem />
              </li>
            </EduAchievements>
          </ul>
        </Educations>
      </div>
      <Title :title="$t('gallery')" />
      <ul list-decimal leading-8 mt-2 pl-8>
        <Galleries>
          <li>
            <GalleryItem />
          </li>
        </Galleries>
      </ul>
    </Body>
  </div>
</template>
