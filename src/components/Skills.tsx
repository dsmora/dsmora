import { Skill } from "@/types";

const levelColors: Record<Skill["level"], string> = {
  beginner:
    "border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400",
  intermediate:
    "border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-300",
  advanced:
    "border-zinc-400 dark:border-zinc-500 text-zinc-700 dark:text-zinc-200",
  expert: "border-zinc-900 dark:border-white text-zinc-900 dark:text-white",
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
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<Skill["category"], Skill[]>,
  );

  // Ensure deterministic category order to avoid hydration mismatches
  const categories = (
    Object.keys(categoryLabels) as Skill["category"][]
  ).filter((c) => groupedSkills[c] && groupedSkills[c].length > 0);

  return (
    <section
      id="skills"
      className="py-24 px-6 border-t border-zinc-100 dark:border-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
          Skills
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-12 max-w-2xl">
          Tecnologías y herramientas con las que trabajo.
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
                    className="flex items-center justify-between p-3 border border-zinc-100 dark:border-zinc-800 rounded"
                  >
                    <span className="text-zinc-700 dark:text-zinc-200 font-medium">
                      {skill.name}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 text-xs font-medium rounded border ${
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
