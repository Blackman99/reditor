import { reactive, watch } from 'vue'

const RESUME_KEY = 'RESUME_TEMPLATES'

const storageResume = localStorage.getItem(RESUME_KEY)

const resume = reactive<Resume>(storageResume
  ? JSON.parse(storageResume)
  : {
      'en': {
        profile: {
          name: 'Your name',
          careerObjective: 'Front-end/Fullstack Development Engineer',
          gender: 'Male',
          birthday: 'December 1995',
          location: 'Beijing China',
          phone: '18888888888',
          email: 'abc@cba.com',
        },
        personalAdvantages: [
          'xxx years of development experience',
          'Have personal blog and open source project experience',
          'Familiar with xxx, xxx, xxx xx. Have experiences with common web frameworks (frontend & backend), including xxx, xxx, xxx ... ',
          'Dare to innovate, embrace open source, willing to learn new things, self-driven',
        ],
        workingExperiences: [
          {
            companyName: 'XXX XXX Technology Co., Ltd.',
            jobTitle: 'XXX XXX title',
            start: 'August 2020',
            end: 'September 2021',
            responsibilities: [
              'XXXXXX',
              'XXXXXX',
              'XXXXXX',
              'XXXXXX',
            ],
            achievements: [
              'XXXXXX',
              'XXXXXX',
              'XXXXXX',
            ],
          },
          {
            companyName: 'XXX XXX Technology Co., Ltd.',
            jobTitle: 'XXX XXX title',
            start: 'August 2021',
            end: 'September 2022',
            responsibilities: [
              'XXXXXX',
              'XXXXXX',
              'XXXXXX',
              'XXXXXX',
            ],
            achievements: [
              'XXXXXX',
              'XXXXXX',
              'XXXXXX',
            ],
          },
          {
            companyName: 'XXX XXX Technology Co., Ltd.',
            jobTitle: 'XXX XXX title',
            start: 'September 2022',
            end: 'September 2023',
            responsibilities: [
              'XXXXXX',
              'XXXXXX',
              'XXXXXX',
              'XXXXXX',
            ],
            achievements: [
              'XXXXXX',
              'XXXXXX',
              'XXXXXX',
            ],
          },
        ],
        footer: 'Looking forward to working with you',
        galleryItems: [
          'Personal blog: https://xxx.xxx.com/',
          'XXXX project: https://github.com/xxx/xxx',
        ],
        educationExperiences: [
          {
            institutionName: 'XXXX XXXXX University',
            start: 'September 2014',
            end: 'July 2018',
            major: 'XXXXXXX',
            achievements: [
              'Obtained XXX',
              'Obtained XXXXX XXX',
            ],
          },
        ],
        themeConfig: {
          green: {
            sectionTitleWidth: '160px',
          },
        },
      },
      'zh-CN': {
        themeConfig: {
          green: {
            sectionTitleWidth: '100px',
          },
        },
        profile: {
          name: '你的名字',
          careerObjective: 'XXX开发工程师',
          gender: '男',
          birthday: '1995-12',
          location: 'XXX',
          phone: '18888888888',
          email: 'foo@bar.zoo',
        },
        personalAdvantages: [
          'XX年XXX经验',
          '熟悉XXX，XXX',
          '敢于创新，拥抱开源，乐于学习新事物，自驱强',
          '良好的英语听说读写能力（CET6）',
        ],
        workingExperiences: [
          {
            companyName: 'XXXXX科技有限公司',
            jobTitle: 'XXXX',
            start: '2020.08',
            end: '2021.09',
            responsibilities: [
              '负责XXXX职务',
              '负责XXXX项目',
              '管理XXXX团队',
            ],
            achievements: [
              '提升了XXXX',
              '促进了XXXX',
              '达成了XXXX',
            ],
          },
          {
            companyName: 'XXXXX科技有限公司',
            jobTitle: 'XXXX',
            start: '2021.08',
            end: '2022.09',
            responsibilities: [
              '负责XXXX职务',
              '负责XXXX项目',
              '管理XXXX团队',
            ],
            achievements: [
              '提升了XXXX',
              '促进了XXXX',
              '达成了XXXX',
            ],
          },
          {
            companyName: 'XXXXX科技有限公司',
            jobTitle: 'XXXX',
            start: '2022.08',
            end: '2023.09',
            responsibilities: [
              '负责XXXX职务',
              '负责XXXX项目',
              '管理XXXX团队',
            ],
            achievements: [
              '提升了XXXX',
              '促进了XXXX',
              '达成了XXXX',
            ],
          },
        ],
        footer: '期望能与您共事',
        galleryItems: [
          '个人博客：https://xxx.xxx.me',
          'XXX项目：https://github.com/xxx/xx',
        ],
        educationExperiences: [
          {
            institutionName: 'XXXX大学',
            start: '2014.09',
            end: '2018.07',
            major: 'XXX专业',
            achievements: ['获得XXX证书', '获得XXX竞赛第一名'],
          },
        ],
      },
    })

watch(resume, (newResume) => {
  localStorage.setItem(RESUME_KEY, JSON.stringify(newResume))
})

export default resume
