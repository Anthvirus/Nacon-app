import Button from "./Button";

export default function HeroSection() {
        return (
                <section className="w-full min-h-[25rem] xl:h-[50rem] hero flex items-center mt-32">
                        <div className="flex flex-col gap-4 lg:ml-32 mt-8 mx-8 text-[var(--Primary)] items-start">
                                <h1 className="text-2xl lg:text-7xl lg:tracking-loose tracking-wider font-bold">Nacon Investment Limited</h1>
                                <p className="font-semibold text-lg lg:text-2xl">Leading the way for logistics excellence and client satisfaction.</p>
                                <Button text="Get In Touch" class=" p-3 font-semibold hover:opacity-85 cursor-pointer delay-[2.5ms] hover:px-4 duration-500 rounded-xl text-xl bg-[var(--Primary)] text-[var(--Accent)]"/>
                        </div>
                </section>
        )
}