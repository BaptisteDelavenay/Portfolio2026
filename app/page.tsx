import SpinLogo from "@/app/_components/SpinLogo"

import HeroSection from "@/components/section/heroSection"
import Header from "@/components/section/header"

export default function Home() {
  return (
    <>
      <Header/>
      <div className="mt-50 flex items-center justify-between">
        <HeroSection/>
        <div className="flex items-center justify-center">
          <SpinLogo/>
        </div>
      </div>
    </>
  )
}
