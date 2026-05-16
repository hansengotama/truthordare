import Image from "next/image";

export default function FooterSection() {
    return (
        <footer className="border-t border-white/10 bg-[#0b090d] py-14 text-zinc-100">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:items-center">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Image src="/logo-koi-tod.webp" alt="Truth or Dare Bar koi tod logo" width={36} height={36} style={{ width: "auto", height: "auto" }} />
                        <Image src="/logo.webp" alt="Truth or Dare Bar logo" width={189} height={28} style={{ height: "28px", width: "auto" }} priority loading="eager" />
                    </div>
                    <p className="max-w-md text-sm leading-7 text-zinc-200">
                        A cinematic cocktail destination in Auckland’s Snickel Lane. Reserve early for private tables, curated menus, and refined late-night hospitality.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-3">
                    <div>
                        <p className="text-sm uppercase tracking-[0.28em] text-zinc-200">Hours</p>
                        <p className="mt-3 text-sm leading-7 text-zinc-100">OPEN MON–SAT · 4:00PM – MIDNIGHT</p>
                    </div>
                    <div>
                        <p className="text-sm uppercase tracking-[0.28em] text-zinc-200">Location</p>
                        <p className="mt-3 text-sm leading-7 text-zinc-100">9/23 Commerce Street<br />Snickel Lane, Auckland Central</p>
                    </div>
                    <div>
                        <p className="text-sm uppercase tracking-[0.28em] text-zinc-200">Contact</p>
                        <p className="mt-3 text-sm leading-7 text-zinc-100">truthordarebar@gmail.com</p>
                    </div>
                </div>
                <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
                    <a
                        href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x6d0d47e84ad86fb1:0xef7760fae8e8a763!12e1?source=g.page.m.kd._&laa=lu-desktop-review-solicitation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-200 hover:text-white"
                    >
                        Rate us on Google
                    </a>
                    <div className="flex flex-wrap items-center gap-4">
                        <a href="https://www.instagram.com/truthordarebar" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-white">
                            Instagram
                        </a>
                        <a href="https://www.tiktok.com/@truthordarebar" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-white">
                            TikTok
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
