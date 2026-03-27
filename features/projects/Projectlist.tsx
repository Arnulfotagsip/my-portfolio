type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
};
import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-3 max-w-full max-h-50 gap-4">
      {projects.slice(0, 6).map((project) => (
        <div key={project.title} className="border p-4 rounded-lg">
          <Image src={project.image} alt={project.title} width={400} height={400} className="mb-4 p-2 border border-gray-500 max-h-50 max-w-full rounded-lg" />
          <h2 className="mb-2 font-bold">{project.title}</h2>
          <p>{project.description}</p>
           
          <Button className="item-center  mt-4">View All</Button>
        </div>

      ))}
    </div>
  
  );
}