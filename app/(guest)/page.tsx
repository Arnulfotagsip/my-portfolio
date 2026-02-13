import Image from "next/image";
import MyTypewriter from "@/components/common/typewriter";

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-12 mt-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex justify-start">
          <Image
            src="/test.jpg"
            alt="Profile"
            width={500}
            height={400}
            className="rounded-[25px] border border-transparent"
          />
        </div>
        <div>
          <MyTypewriter />
        </div>
      </div>
    </main>
  );
}
