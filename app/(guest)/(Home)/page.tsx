import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-12 mt-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Text + Buttons */}
        <div className="flex flex-col">
          <p className="text-lg lg:text-2xl font-semibold leading-relaxed text-gray-800">
            I’m an IT student passionate about building efficient code and developing real-world solutions that make an impact.
          </p>

          {/* Buttons BELOW text */}
          <div className="flex gap-4 mt-6">
            <Button>About Me</Button>
            <Button>View My Works</Button>
          </div>
        </div>
        {/* Image */}
        <div className="flex justify-start">
          <Image
            src="/test.jpg"
            alt="Profile"
            width={600}
            height={500}
            className="rounded-[25px]"
          />
        </div>
      </div>
    </main>
  );
}