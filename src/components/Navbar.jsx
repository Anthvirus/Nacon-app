const links = {
}

export default function Navbar() {
        return (
                <nav className="min-w-full h-24 flex items-center text-[var(--Primary)] px-2 lg:px-20 fixed top-0 z-50">
                        <div className="text-xl tracking-wider font-extrabold cursor-pointer">
                                <img />{/*Icon*/}
                                <h1>Nacon Investment Limited.</h1>
                        </div>
                        <div>
                                {/* links go here */}
                        </div>
                </nav>
)
}