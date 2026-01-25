import { Plus } from 'lucide-react'

import { DashboardResumeCardButton } from './resume-card'

export function DashboardAddResumeButton() {
  return (
    <DashboardResumeCardButton
      title="Create new resume"
      description="Start from scratch"
      icon={<Plus size={50} />}
    />
  )
}
