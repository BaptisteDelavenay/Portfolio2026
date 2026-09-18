import SpinLogo from "@/app/_components/SpinLogo"
import HeroSection from "@/components/section/heroSection"

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-between px-100">
      <HeroSection/>
      <div className="flex items-center justify-center">
        <SpinLogo/>
      </div>
    </div>
  )
}
