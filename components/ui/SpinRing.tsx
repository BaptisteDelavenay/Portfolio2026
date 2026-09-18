'use client'

import { ReactNode } from "react";

interface OrbitIcon {
  icon: ReactNode;
  angle: number; // position de départ en degrés
}

interface SpinLogoProps {
  radius: number;
  duration?: number;
  reverse?: boolean;
  icons?: OrbitIcon[];
}

export default function SpinRing({ radius, duration = 20, reverse = false, icons = [] }: SpinLogoProps) {
  const size = radius * 2;
  const strokeWidth = 1;
  const r = radius - strokeWidth / 2;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Le cercle en pointillés (inchangé) */}
      <svg width={size} height={size} className="absolute inset-0">
        <circle
          cx={radius}
          cy={radius}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray="4 8"
          className="text-neutral-300"
        />
      </svg>

      {/* Couche d'orbite : fait tourner les logos autour du cercle */}
      <div
        className="absolute inset-0 animate-[spin_linear_infinite]"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {icons.map((item, i) => {
          // Point exact sur le cercle (repère de la couche d'orbite : taille 2*radius, centre = radius)
          const rad = (item.angle * Math.PI) / 180;
          // arrondi au pixel : évite un mismatch d'hydratation dû aux flottants (serveur vs client)
          const x = Math.round(radius + r * Math.cos(rad));
          const y = Math.round(radius + r * Math.sin(rad));
          return (
            <div key={i} className="absolute" style={{ left: x, top: y }}>
              {/* -translate-1/2 centre l'icône sur le point ; l'animation contre la rotation de l'orbite pour garder le logo droit */}
              <div
                className="-translate-x-1/2 -translate-y-1/2 animate-[spin_linear_infinite]"
                style={{
                  animationDuration: `${duration}s`,
                  animationDirection: reverse ? "normal" : "reverse",
                }}
              >
                {item.icon}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}