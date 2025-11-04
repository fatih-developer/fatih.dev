export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Redux",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express",
        "Python",
        "REST APIs",
        "GraphQL",
        "Microservices",
      ],
    },
    {
      category: "Database",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Redis",
        "Prisma",
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        "Git",
        "Docker",
        "AWS",
        "CI/CD",
        "Jest",
        "Linux",
        "Agile",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-700 dark:text-gray-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
