import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-start gap-1">

        {/* Image */}
        <div className="md:w-1/2">
          <Image
            src="/test2.jpg"
            alt="Profile"
            width={500}
            height={400}
            className="rounded-[25px] border border-transparent object-top"
          />
        </div>

        {/* About Content */}
        <main className="md:w-1/2 -ml-3 flex flex-col items-center justify-center px-6">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-900 dark:text-gray-200 max-w-xl text-center mb-6">
            Hi, I’m Arnulfo Tagsip. I’m passionate about learning web development and I’m eager to venture deeper into full-stack development. I’m currently focusing on the Next.js as my tech stack, using React as my main library and Tailwind CSS as my styling framework. I enjoy building modern, responsive, and user-friendly websites, and I’m always exploring new tools and techniques to improve my skills. My goal is to become a confident full-stack developer, capable of creating efficient and scalable web applications from start to finish.
          </p>

        </main>



      </div>
    </div>
  );
}
