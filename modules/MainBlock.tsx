import Link from "next/link";
import Image from "next/image";

const MainBlock = () => {
    return (
        <main className="grid grid-cols-2 items-center h-screen w-full px-[7%]">
            <div className="justify-center text-white animate-fade-right animate-delay-300 animate-ease-in-out">
                <div className="text-2xl font-bold mb-5">
                    Добро пожаловать на Home Work v3!
                </div>
                <div className="">
                    Это - как вы уже поняли
                    <div className="text-purple-text font-bold inline"> ТРЕТЬЯ </div>
                    версия моего сайта по домашним заданиям для IT Step.
                </div>
                <div className="mb-10 ">
                    Где посмотреть домашние задания вы уже знаете. Хорошего дня!
                </div>
                <Link
                    href="#projects"
                    scroll={true}
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
                >
                    Проекты
                </Link>
            </div>
            <div className="justify-items-center animate-fade-left animate-delay-300 animate-ease-in-out">
            <Image
                    src="/img/logo1.svg"
                    alt="Logo"
                    width={500}
                    height={500}
                    className="animate-none"
                >
                </Image>
            </div>
        </main>
    )
}

export default MainBlock;