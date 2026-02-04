import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export function Header() {
  return (
    <header className="border-b border-gray-800 py-5">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo (Left) */}
          <h1 className="font-bold text-lg">Portfolio</h1>

          {/* Right side (Nav + Buttons) */}
          <div className="flex items-center gap-8">
             {/* Actions */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
            {/* Navigation */}
          
            <nav>
              <ul className="flex items-center gap-6 text-sm font-medium">
                <li><Link href="/Home">Home</Link></li>
                <li><Link href="/About">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact"><Button>Contact</Button></Link></li>
              </ul>
            </nav>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
