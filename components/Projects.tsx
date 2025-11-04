export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with cart functionality, payment integration, and admin dashboard.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team features.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with forecasts, maps, and detailed weather analytics.",
      technologies: ["React", "TypeScript", "OpenWeather API", "Recharts"],
      link: "#",
    },
    {
      title: "Blog Platform",
      description:
        "A modern blogging platform with markdown support, comments, and SEO optimization.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
