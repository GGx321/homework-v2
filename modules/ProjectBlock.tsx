import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="w-full px-5 py-10">
      <h1 className="text-center text-3xl text-white mb-24 font-bold">Мои проекты</h1>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="relative w-[450px] aspect-video rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
          <Image src="/img/portfolio.png" alt="Портфолио" layout="fill" objectFit="cover" className="transition-all duration-300 group-hover:blur-sm group-hover:scale-110" />
          <div className=" flex flex-col justify-between absolute top-0 left-0 w-4/5 h-full p-5 bg-purple-700 rounded-r-lg transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <div>
            <h2 className="text-lg font-bold text-white">Портфолио</h2>
            <p className="mt-2 text-sm text-white">Мое портфолио до которого руки не доходят.</p>
            </div>
            <Link href="https://alex-portfolio.top/" target="_blank" className="text-purple-300 hover:text-white rounded-lg p-4 hover:bg-purple-950 bg-purple-900 block w-full">Посмотреть</Link>
          </div>
        </div>
        <div className="relative w-[450px] aspect-video rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
          <Image src="/img/jeski.png" alt="Крипто-услуги" layout="fill" objectFit="cover" className="transition-all duration-300 group-hover:blur-sm group-hover:scale-110" />
          <div className=" flex flex-col justify-between absolute top-0 left-0 w-4/5 h-full p-5 bg-purple-700 rounded-r-lg transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <div>
            <h2 className="text-lg font-bold text-white">Крипто-услуги</h2>
            <p className="mt-2 text-sm text-white">Сайт создан для создания крипто-услуг. Обычный простой код.</p>
            </div>
            <Link href="https://jetski-products.xyz/" target="_blank" className="text-purple-300 hover:text-white rounded-lg p-4 hover:bg-purple-950 bg-purple-900 block w-full">Посмотреть</Link>
          </div>
        </div>
        <div className="relative w-[450px] aspect-video rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl group z-0">
          <Image src="/img/mem-coin.jpeg" alt="Мем токен" layout="fill" objectFit="cover" className="transition-all duration-300 group-hover:blur-sm group-hover:scale-110" />
          <div className=" flex flex-col justify-between absolute top-0 left-0 w-4/5 h-full p-5 bg-purple-700 rounded-r-lg transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <div>
            <h2 className="text-lg font-bold text-white">Мем токен</h2>
            <p className="mt-2 text-sm text-white">2 сайта для проекта в котором я сейчас работаю. Этот сайт главный. Второй сайт переписывается под swap.</p>
            </div>
            <Link href="https://govnoton.com/" target="_blank" className="text-purple-300 hover:text-white rounded-lg p-4 hover:bg-purple-950 bg-purple-900 block w-full">Посмотреть</Link>
          </div>
        </div>
        <div className="relative w-[450px] aspect-video rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
          <Image src="/img/beauty.jpeg" alt="Визитка" layout="fill" objectFit="cover" className="transition-all duration-300 group-hover:blur-sm group-hover:scale-110" />
          <div className=" flex flex-col justify-between absolute top-0 left-0 w-4/5 h-full p-5 bg-purple-700 rounded-r-lg transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <div>
            <h2 className="text-lg font-bold text-white">Визитка</h2>
            <p className="my-2 text-sm text-white">Это сайт визитка для визажиста. Так же был написан ТГ бот с помощью которого можно записаться на прием (сейчас выключен).</p>
            </div>
            <Link href="https://maryka-beauty.netlify.app/" target="_blank" className="text-purple-300 hover:text-white rounded-lg p-4 hover:bg-purple-950 bg-purple-900 block w-full">Посмотреть</Link>
          </div>
        </div>
        <div className="relative w-[450px] aspect-video rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
          <Image src="/img/mem-coin2.jpeg" alt="Визитка" layout="fill" objectFit="cover" className="transition-all duration-300 group-hover:blur-sm group-hover:scale-110" />
          <div className=" flex flex-col justify-between absolute top-0 left-0 w-4/5 h-full p-5 bg-purple-700 rounded-r-lg transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <div>
            <h2 className="text-lg font-bold text-white">Swapper</h2>
            <p className="my-2 text-sm text-white">Это второй сайт по проекту который был написан на коленке и на скорую руку так как требовался для верификации. Сейчас переписывается под Swapper (уже почти месяц)</p>
            </div>
            <Link href="https://govno-ton.netlify.app/" target="_blank" className="text-purple-300 hover:text-white rounded-lg p-4 hover:bg-purple-950 bg-purple-900 block w-full">Посмотреть</Link>
          </div>
        </div>
        <div className="relative w-[450px] bg-purple-950 aspect-video rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl group content-center justify-items-center">
          <Image src="/img/soon.png" alt="Рефералка" width={100} height={100}  className=" transition-all duration-300 group-hover:blur-sm group-hover:scale-110 invert" />
          <div className=" flex flex-col justify-between absolute top-0 left-0 w-4/5 h-full p-5 bg-purple-700 rounded-r-lg transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <div>
            <h2 className="text-lg font-bold text-white">Рефералка</h2>
            <p className="my-2 text-sm text-white">Скоро будет. Сейчас пишу сайт по созданию рефералок с админкой и бэком.</p>
            </div>
            <Link href="/" target="_blank" className="text-purple-300 hover:text-white rounded-lg p-4 hover:bg-purple-950 bg-purple-900 block w-full">Скоро</Link>
          </div>
        </div>
      </div>
    </section>
  );
}