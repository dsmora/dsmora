import { Skill } from "@/types";

const levelColors: Record<Skill["level"], string> = {
  beginner: "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300",
  intermediate: "bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-200",
  advanced: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200",
  expert:
    "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200",
};

const categoryLabels: Record<Skill["category"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools",
  design: "Design",
};

type SkillsProps = {
  skills: ReadonlyArray<Skill>;
};

export function Skills({ skills }: SkillsProps) {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill["category"], Skill[]>);

  // Ensure deterministic category order to avoid hydration mismatches
  const categories = (
    Object.keys(categoryLabels) as Skill["category"][]
  ).filter((c) => groupedSkills[c] && groupedSkills[c].length > 0);

  return (
    <section id="skills" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
          Skills & Technologies
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl">
          Technologies and tools I work with to build modern, scalable
          applications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                {categoryLabels[category]}
              </h3>
              <div className="space-y-3">
                {groupedSkills[category].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 glass-card rounded-lg shadow-sm"
                  >
                    <span className="text-zinc-700 dark:text-zinc-200 font-medium">
                      {skill.name}
                    </span>
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        levelColors[skill.level]
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
