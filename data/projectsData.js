const projectsData = [
  {
    title: 'Masterverse',
    description: `Web para una landing page, el modelo fue con la idea de una pagina promocional, con diferentes
    animaciones, realemnete colorida. Fue creada con Nextjs 13 para probar las nuevas funciones, como su nuevo 
    sistema de routing`,
    imgSrc: '/static/images/masterverse.png',
    href: 'https://masterverse.vercel.app',
  },
  {
    title: 'Working out Search',
    description: `¿Qué pasa cuando tenemos duda de un ejercicio? O que tal y queremos ver diferentes tecnicas,
    o incluso ejercicios similares, bajo esa premisa se penso en esta página.`,
    imgSrc: '/static/images/gymSearch.png',
    href: 'https://gym-app-lilac.vercel.app',
  },
  {
    title: 'E-commerce demo',
    description: `Buscamos emular una ecommerce, con modelos basados en slug, a partir de sanity, metodo de pago
    con stripe, y usando Next como framework, asi como material UI para el maquetado por componentes`,
    imgSrc: '/static/images/e-commerce.png',
    href: 'https://ecommerce-sanity-tau.vercel.app',
  },
  {
    title: 'Share-me',
    description: `Recreacion de una web con autentificación por Google, base usando sanity para guardar los 
    usuarios e imagenes, frontend hecho con React, NOTA: al parecer han habido cambios en algunas librerias 
    de apoyo para el uso de la autentificación de google, por tanto se deja un pequeño video en lugar de la web,
    en lo que se arregla.`,
    imgSrc: '/static/images/share-me.png',
    href: 'https://clipchamp.com/watch/Uco26WahiIW',
  },
  {
    title: 'Booking-app Hotel',
    description: `Modelo de una aplicacion web para registrar usarios, funciones base de ingresar usuarios, 
    modificarlos y borrar. Al ser un modelo base solo tiene persistencia de datos mientras la aplicacion no se 
    actualice fuera del navegador . Hecho con vitest.`,
    imgSrc: '/static/images/booking-app.png',
    href: 'https://hotel-regi.vercel.app',
  },
  {
    title: 'Planificador de gastos',
    description: `Web app para llevar un control de gastos, se ingresa un presupuestos para iniciar, despues se pasa a 
    una segunda ventana donde ya podemos ingresar nuestros gastos, asi como poder filtrarlos en caso de necesitarlo y
    modificarlos o borrarlos, de igual forma se puede reiniciar la app, hecho con vitest`,
    imgSrc: '/static/images/planificador.png',
    href: 'https://presupuesto-beta.vercel.app',
  },
  {
    title: 'Crypto change',
    description: `Web para revisar los principales cambios de monedas cripto con algunas divisas, como son el Euro,
    Dolar, Peso mexicano y Libra esterlina, el principal ejercicio de esta web fue el uso de una restApi para el 
    valor actualizado de las tasas de cambio, hecho con vitest`,
    imgSrc: '/static/images/cripto-change.png',
    href: 'https://crypto-change.vercel.app',
  },
]

export default projectsData
