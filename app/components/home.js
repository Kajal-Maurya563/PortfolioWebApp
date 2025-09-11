import Link from "next/link";

export default function HomeButton() {
    return (
        <div className="absolute top-4 left-4">
            <Link href="/" className="flex items-center gap-2 text-gray-300 hover:bg-gray-800 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
            </Link>
        </div>
    );

}