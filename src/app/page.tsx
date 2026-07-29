import { LandingPage } from '@/components/LandingPage'
import { GatewayModal } from '@/components/GatewayModal'

export default function Home() {
  return (
    <>
      <GatewayModal />
      <LandingPage persona="owners" />
    </>
  )
}
