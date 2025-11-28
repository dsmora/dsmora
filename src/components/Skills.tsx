import { skills } from '@/data/portfolio';
import { Skill } from '@/types';

const levelColors: Record<Skill['level'], string> = {
  beginner: 'bg-zinc-200 dark:bg-zinc-700',
  intermediate: 'bg-blue-200 dark:bg-blue-900',
  advanced: 'bg-green-200 dark:bg-green-900',
  expert: 'bg-purple-200 dark:bg-purple-900',
};

const categoryLabels: Record<Skill['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools',
  design: 'Design',
};

export function Skills() {
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<Skill['category'], Skill[]>
  );

  return (
    <section id="skills" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
          Skills & Technologies
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl">
          Technologies and tools I work with to build modern, scalable applications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(Object.keys(groupedSkills) as Skill['category'][]).map((category) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                {categoryLabels[category]}
              </h3>
              <div className="space-y-3">
                {groupedSkills[category].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 bg-white dark:bg-zinc-800 rounded-lg"
                  >
                    <span className="text-zinc-700 dark:text-zinc-300">{skill.name}</span>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${levelColors[skill.level]} text-zinc-700 dark:text-zinc-300`}
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
