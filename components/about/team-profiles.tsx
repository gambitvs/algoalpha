import Image from "next/image";
import { team } from "@/lib/constants";

const personalStatements: Record<string, string> = {
  "Robert Miller":
    "I noticed many competitors didn't have adequate risk controls — so I dove in full time.",
  "Wences Navarro":
    "Our goal is to ensure every member has the support they need to succeed.",
};

export default function TeamProfiles() {
  return (
    <section className="px-6 lg:px-8 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            Leadership
          </p>
          <h2 className="text-h2 font-serif text-text-primary max-w-3xl">
            Meet Our Executive Team
          </h2>
        </div>

        {/* Team grid */}
        <div className="flex flex-col gap-0">
          {team.map((member, i) => (
            <div key={member.name} className="border-t border-border">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-14 lg:py-20 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Photo */}
                <div
                  className={`relative aspect-[4/5] w-full max-w-md overflow-hidden bg-bg-surface max-h-[400px] lg:max-h-none ${
                    i % 2 === 1 ? "lg:order-2 lg:ml-auto" : ""
                  }`}
                >
                  <Image
                    src={member.imagePath}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Info */}
                <div
                  className={`flex flex-col justify-center ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-h2 font-serif text-text-primary">
                    {member.name}
                  </h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber mt-2">
                    {member.title}
                  </p>

                  <p className="text-body text-text-secondary leading-relaxed mt-6 max-w-lg">
                    {member.bio}
                  </p>

                  {/* Personal statement */}
                  {personalStatements[member.name] && (
                    <div className="mt-8 border-l-2 border-amber/30 pl-5 py-1">
                      <span
                        className="font-serif text-[2.5rem] leading-none text-amber/20 select-none block -mb-3"
                        aria-hidden="true"
                      >
                        &ldquo;
                      </span>
                      <p className="text-body text-text-primary italic leading-relaxed">
                        {personalStatements[member.name]}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
