export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I'm a passionate full-stack developer with expertise in building modern web applications.
            I love creating user-friendly interfaces and robust backend systems that make a difference.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            With a strong foundation in computer science and years of hands-on experience, I specialize
            in JavaScript/TypeScript ecosystems, including React, Next.js, Node.js, and various databases.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source
            projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
}
