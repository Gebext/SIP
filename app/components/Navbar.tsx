const Navbar = () => {
    return (
        <nav>
            <div className="flex justify-between py-4 px-2">
                <h1> LOGO   </h1>
                <button className="bg-zinc-900 px-4 py-2 rounded-full text-white">Get Started</button>
            </div>
            <div className="w-screen">
                <ul className="flex">
                    <li>About</li>
                    <li>Fokus Layanan</li>
                    <li>About</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
