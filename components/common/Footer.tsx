export  function Footer() {
    return (
        <footer className="bg-gray-500 text-white py-6 mt-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
                {/* contact */}
                <div  className="text-left">
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
                {/* extra */}
                <div className="text-right">
                    <h1 className="font-bold text-lg mb-2">More Info</h1>
                    <ul className="italic flex flex-col gap-1">
                        <li>Contact</li>
                        <li>Gmail</li>
                        <li>Facebook</li>
                        <li>Github</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}