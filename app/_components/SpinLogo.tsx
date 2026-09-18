import SpinRing from "@/components/ui/SpinRing"
import { technologies } from "@/app/_components/TechIcons"

function TechIcon({ id }: { id: string }) {
  const icon = technologies.find((tech) => tech.id === id)?.icon;
  return <span className="block h-8 w-8 [&>svg]:h-full [&>svg]:w-full">{icon}</span>;
}

export default function SpinLogo() {
  return (
    <>
      <div className="absolute">
        <SpinRing
          radius={200}
          duration={25}
          icons={[
            { icon: <TechIcon id="React" />, angle: 0 },
            { icon: <TechIcon id="JavaScript" />, angle: 120 },
            { icon: <TechIcon id="tailwindCSS" />, angle: 240 },
          ]}
        />
      </div>
      <div className="absolute">
        <SpinRing
          radius={100}
          duration={15}
          reverse
          icons={[
            { icon: <TechIcon id="Figma" />, angle: 180 },
            { icon: <TechIcon id="Git" />, angle: 0 },
          ]}
        />
      </div>
    </>
  );
}
