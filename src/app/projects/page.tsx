import Haul from "@/app/assets/haulshot.png";
import Nakda from "@/app/assets/nakdashot.png";
import Portfolio from "@/app/assets/portfolio.png";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Haul",
      date: "abril de 2023",
      image: Haul,
    },
    {
      title: "Nakda Ecommerce",
      date: "mayo de 2023",
      image: Nakda,
    },
    {
      title: "My Portfolio",
      date: "junio de 2023",
      image: Portfolio,
    },
  ];

  return (
    <div className="flex flex-col gap-8 md:gap-12 py-12 md:py-20 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-48">
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-50 leading-tight">
          Proyectos que he realizado durante mi carrera.
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg max-w-3xl">
          He trabajado en varios proyectos a lo largo de mis 2 años de programador, pero estos son los que más me enorgullecen. Muchos de ellos son privados y no podré mostrarlos a continuación.
        </p>
      </div>
      
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <li
            key={index}
            className="group relative border-2 border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-video bg-neutral-100 dark:bg-neutral-900">
              <Image
                src={project.image || ""}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-medium text-lg">{project.title}</h3>
              <p className="text-neutral-300 text-sm">{project.date}</p>
            </div>
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4'>
              <div className='flex justify-between items-center'>
                <span className="text-white font-medium">{project.title}</span>
                <span className="text-neutral-300 text-sm">{project.date}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
