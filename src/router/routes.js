import Apply from '../pages/Apply/Apply.vue'
import EvidenceRecord from '../pages/EvidenceRecord/EvidenceRecord.vue'
import Home from '@/pages/Home/Home.vue'
import Personal from '../pages/Personal/Personal.vue'
import PersonalInformation from '../pages/PersonalInformation/PersonalInformation.vue'
import UserApplication from '../pages/UserApplication/UserApplication.vue'
import UserApprove from '../pages/UserApprove/UserApprove.vue'
import UserMessage from '../pages/UserMessage/UserMessage.vue'

export default [
  {
    path: '/apply',
    component: Apply
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/evidence-record',
    component: EvidenceRecord
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/personal-information',
    component: PersonalInformation
  },
  {
    path: '/user-application',
    component: UserApplication
  },
  {
    path: '/user-approve',
    component: UserApprove
  },
  {
    path: '/user-message',
    component: UserMessage
  }
]
