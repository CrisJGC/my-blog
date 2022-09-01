import Image from 'next/image'

const HomeSelf = () => {
  return (
    <div className="flex flex-1 items-center">
      <div>
        <span className="ml-16 text-4xl">👋</span>
        <div className="mb-8 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent dark:bg-gradient-to-l dark:from-purple-500 dark:to-sky-600 md:text-7xl md:leading-[86px]">
          Hola!{' '}
        </div>
        <Image
          src="/static/images/avatarHome.png"
          width={110}
          height={110}
          className="ml-16 rounded-full"
        />
      </div>
      <div className="m-5">
        <p className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14">
          Soy Cristian Gallegos un desarrollador de software autodidacta en México.
        </p>
        <p className="mt-5 text-lg leading-7 text-gray-500 dark:text-gray-400">
          Me gusta el crecimiento constante en cuanto a las Tecnologías de la Información.
          Actualmente enfocado en el desarrollo web, pero en constante aprendizaje de más
          tecnologias.
        </p>
      </div>
    </div>
  )
}

export default HomeSelf
