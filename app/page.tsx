import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function Home(){
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1">
      </main>
      <Footer />
    </div>
  );
}