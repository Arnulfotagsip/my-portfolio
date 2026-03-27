import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function GuestLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow ">
        {children}
      </main>
      <div className="py-6 mt-12">
        <Footer />
      </div>

    </div>
  );
}