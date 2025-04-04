import NaconLogo from "../assets/Nacon.jpg"

const Links = [
        {
                name: "About Us",
                url: "",
        },
        {
                name: "Services",
                url: "",
        },{
                name: "Tracking",
                url: "",
        },
]

export default function Navbar() {
        return (
                <nav className="min-w-full h-24 flex items-center text-[var(--Accent)] bg-[var(--Primary)] px-4 lg:px-20 fixed top-0 z-50 justify-between lg:justify-around">
                        <div className="lg:text-2xl tracking-wider font-extrabold cursor-pointer flex items-center gap-4">
                                <img src={NaconLogo}  className="size-24"/>
                                <h1 className="hidden lg:flex">Nacon Investment Limited</h1>
                        </div>
                        <div className="xl:flex gap-24 hidden">
                                {Links.map((Link) => (
                                        <ul>
                                                <dl className="text-lg cursor-pointer hover:scale-110 duration-300 delay-[.5ms] hover:font-semibold">
                                                        <a>{Link.name}</a>
                                                </dl>
                                        </ul>
                                ))}
                        </div>
                </nav>
)
}