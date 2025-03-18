import { Link } from "react-router";

export default function Header() {
    return (
        <>
            <header className="w-full flex items-center py-5 px-5">
                <Link className="flex items-center " to={'/'}>
                    <span className="text-4xl text-black font-semibold">Volunt</span>
                    <span className="text-4xl text-green-500 font-semibold">App</span>
                </Link>
                <nav className="flex-grow mx-5 px-3 ">
                    <ul className="flex gap-5 items-center text-2xl transition-all">
                        <li>
                            <a href="" className="font-semibold hover:text-green-500">Explore</a>
                        </li>
                        <li>
                            <a href="" className="font-semibold hover:text-green-500">Calendar</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
