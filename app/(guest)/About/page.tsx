import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="border-b bg-white shadow-sm">
                <nav className="flex justify-center gap-8 p-6 font-medium">
                    <Link href="/Home" className="hover:text-blue-600 transition">
                        Home
                    </Link>
                    <Link href="/About" className="hover:text-blue-600 transition">
                        About
                    </Link>
                    <Link href="/blog" className="hover:text-blue-600 transition">
                        Blog
                    </Link>
                    <Link href="/contact" className="hover:text-blue-600 transition">
                        Contact
                    </Link>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center px-4">
                <section className="max-w-2xl text-center">
                    <h1 className="text-4xl font-bold mb-6">About Me</h1>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Welcome to the About Me page! Here, you'll find information about my
                        background, interests, and what drives me. I'm passionate about
                        creating meaningful experiences and sharing my journey with others.
                        Feel free to explore and learn more about who I am!
                    </p>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t p-4 text-center text-sm text-gray-600">
                © {new Date().getFullYear()} • All rights reserved
            </footer>
        </div>
    );
}
