import { DashboardAddResumeButton } from '../add-resume-button'
import { DashboardResumeCard } from '../resume-card'

export function DashboardResumesList() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-max gap-4 lg:gap-5 flex-1">
      <DashboardAddResumeButton />
      <DashboardResumeCard />
    </section>
  )
}
