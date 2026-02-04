import { Header } from "@/components/common/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Portfolio</h1>
        {/* Your home content here */}
      </main>
    </div>
  );
}