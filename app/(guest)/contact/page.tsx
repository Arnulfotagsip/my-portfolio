import Link from "next/link";
export default function Contact() {
  return (
    <div>
      <header className="border bg-white shadow-md p-6 ">
        <nav className="flex gap-6 justify-center items-center">
          <Link href="/Home">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <main>
        <div>
          <h1 className="text-3xl font-bold text-center mt-8 mb-200">Contact Me</h1>
        </div>
      </main>
      <div>

      </div>
      <footer className="border-t p-4 text-center mt-8">
        This is my footer
      </footer>
    </div>

  )
}
