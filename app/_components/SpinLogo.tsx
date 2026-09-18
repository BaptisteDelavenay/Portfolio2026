import SpinRing from "@/components/ui/SpinRing"
import { technologies } from "@/app/_components/TechIcons"

function TechIcon({ id }: { id: string }) {
  const icon = technologies.find((tech) => tech.id === id)?.icon;
  return <span className="block h-8 w-8 [&>svg]:h-full [&>svg]:w-full">{icon}</span>;
}

export default function SpinLogo() {
  return (
    // relative + taille de l'anneau le plus grand (rendu dans le flux) : le composant
    // se centre tout seul et les anneaux ne débordent plus hors de la page
    <div className="relative grid place-items-center">
      <SpinRing
        radius={120}
        duration={25}
        color="#706F6F"
        reverse
        icons={[
          { icon: <TechIcon id="NextJS" />, angle: 0 },
          { icon: <TechIcon id="TypeScript" />, angle: 90 },
          { icon: <TechIcon id="ClaudeCode" />, angle: 180 },
          { icon: <TechIcon id="tailwindCSS" />, angle: 270 },
        ]}
      />
      {/* anneau interne superposé, centré sur le même point */}
      <div className="absolute inset-0 grid place-items-center">
        <SpinRing
          radius={50}
          duration={15}
          color="#A6A6A6"
          icons={[
            { icon: <TechIcon id="Figma" />, angle: 180 },
            { icon: <TechIcon id="Git" />, angle: 0 },
          ]}
        />
      </div>
    </div>
  );
}
