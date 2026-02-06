export function Footer() {
  return (
    <footer className="bg-gray-500 text-white py-6 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

        {/* contact */}
        <div className="text-left">
          <h1 className="font-bold text-lg mb-2">Contact Me</h1>
          <ul className="italic flex flex-col gap-1">
            <li>Contact: 09162366938</li>
            <li>Gmail: Tagsiparnulfo26@gmail.com</li>
            <li>Facebook: Arnulfo Tagsip</li>
            <li>Github: Arnulfo Tagsip</li>
          </ul>
        </div>

        {/* projects */}
        <div className="text-center">
          <h1 className="font-bold text-lg mb-2">Projects</h1>
          <ul className="italic flex flex-col gap-1">
            <li>Community Connect</li>
            <li>Garbage Monitoring</li>
            <li>Attendance Tracking</li>
            <li>Lost & Found</li>
          </ul>
        </div>

        {/* quick links */}
        <div className="text-center items-end">
          <h1 className="font-bold text-lg mb-2">Quick Links</h1>
          <ul className="italic flex flex-col gap-1">
            <li><a href="/Home" className="hover:underline">Home</a></li>
            <li><a href="/About" className="hover:underline">About</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs text-gray-200 mt-6">
        © {new Date().getFullYear()} Arnulfo Tagsip. All rights reserved.
      </div>
    </footer>
  );
}
