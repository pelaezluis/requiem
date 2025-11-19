import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      blogTitle: 'Cry Love Cry',
      blogPosts: [
        {
          id: 1,
          title: 'El Arte de la Melancolía',
          description: 'Una exploración profunda de los sentimientos más oscuros del alma humana y cómo transformarlos en belleza.',
          author: 'Luna Nocturna',
          image: 'https://i.pinimg.com/564x/9d/dd/15/9ddd15b4f4ef205e75ce212fa66b8ec8.jpg',
          date: '2025-11-19', // Hoy - mostrará "NUEVO"
          content: `
            <p>La melancolía no es simplemente tristeza. Es un estado del alma que nos permite contemplar la profundidad de nuestra existencia, un sentimiento que nos conecta con la belleza efímera de la vida y la inevitabilidad de la pérdida.</p>
            
            <p>En este viaje introspectivo, exploramos cómo los momentos más oscuros pueden transformarse en arte. La melancolía nos enseña a apreciar la luz porque conocemos la oscuridad. Nos permite crear, escribir, pintar y expresar aquello que las palabras simples no pueden capturar.</p>
            
            <p>Muchos artistas a lo largo de la historia han encontrado en la melancolía una fuente de inspiración inagotable. Desde los poemas de Edgar Allan Poe hasta las pinturas de Edvard Munch, la melancolía ha sido el lienzo sobre el cual se han plasmado las emociones más profundas del ser humano.</p>
            
            <p>No debemos temer a la melancolía. En lugar de huir de ella, debemos abrazarla, entenderla y transformarla en algo hermoso. Porque al final, es en nuestros momentos más vulnerables donde encontramos nuestra verdadera fuerza.</p>
            
            <p>La melancolía es un recordatorio de que somos humanos, de que sentimos profundamente, y de que cada emoción, por oscura que parezca, tiene su lugar en el espectro de la experiencia humana.</p>
          `
        },
        {
          id: 2,
          title: 'Sombras en el Espejo',
          description: 'Reflexiones sobre la dualidad de la naturaleza humana y las máscaras que llevamos.',
          author: 'Elena Sombría',
          image: 'https://i.pinimg.com/1200x/c7/86/9e/c7869eef778f4ee562c322a5e871809d.jpg',
          date: '2025-11-17', // Hace 2 días - mostrará "NUEVO"
          content: `
            <p>Cada mañana nos miramos en el espejo y vemos un reflejo. Pero, ¿quién es realmente esa persona que nos devuelve la mirada? ¿Somos la imagen que proyectamos o la sombra que ocultamos?</p>
            
            <p>La dualidad humana es fascinante. Todos llevamos máscaras diferentes según el contexto: la máscara del profesional en el trabajo, la del amigo en las reuniones sociales, la del hijo o hija en casa. Pero detrás de todas estas máscaras, ¿quién somos realmente?</p>
            
            <p>Las sombras que proyectamos no son solo ausencia de luz, son partes de nosotros mismos que preferimos mantener ocultas. Miedos, inseguridades, deseos prohibidos, pensamientos que no nos atrevemos a compartir. Pero estas sombras también son parte de nuestra esencia.</p>
            
            <p>En este ensayo, exploramos la idea de que aceptar nuestras sombras no nos hace más débiles, sino más completos. La integración de todas nuestras facetas, tanto las luminosas como las oscuras, es lo que nos hace verdaderamente humanos.</p>
            
            <p>No debemos temer a nuestras sombras. Debemos conocerlas, entenderlas y, finalmente, abrazarlas. Porque solo cuando aceptamos todas las partes de nosotros mismos, podemos vivir con autenticidad y paz interior.</p>
          `
        },
        {
          id: 3,
          title: 'Lágrimas de Cristal',
          description: 'La fragilidad de las emociones y cómo cada lágrima cuenta una historia diferente.',
          author: 'Marco Melancólico',
          image: 'https://i.pinimg.com/736x/ea/1d/78/ea1d78128e4554b2ecad0838df727ba8.jpg',
          date: '2025-11-14', // Hace 5 días - NO mostrará "NUEVO"
          content: `
            <p>Las lágrimas son el lenguaje silencioso del alma. Cada gota que cae lleva consigo una historia, una emoción, un momento de vulnerabilidad que no puede expresarse con palabras.</p>
            
            <p>Hay lágrimas de alegría, que brillan como cristales bajo la luz del sol. Lágrimas de tristeza, que caen pesadas como gotas de lluvia. Lágrimas de rabia, que queman como fuego. Y lágrimas de alivio, que limpian el alma como un río que fluye.</p>
            
            <p>La fragilidad emocional no es una debilidad. Es una muestra de nuestra humanidad, de nuestra capacidad para sentir profundamente. Cada lágrima es un testimonio de que estamos vivos, de que algo nos importa lo suficiente como para que nos afecte.</p>
            
            <p>En una sociedad que a menudo nos enseña a ocultar nuestras emociones, llorar se ha convertido en un acto de valentía. Es un momento de autenticidad en un mundo lleno de máscaras.</p>
            
            <p>No debemos avergonzarnos de nuestras lágrimas. Debemos honrarlas, porque cada una de ellas cuenta una historia única. Y al final, son estas historias las que nos hacen quienes somos.</p>
            
            <p>Las lágrimas de cristal se rompen, pero también reflejan la luz. Y tal vez, esa es la verdadera belleza de la fragilidad: que incluso en nuestra vulnerabilidad, podemos encontrar fuerza y belleza.</p>
          `
        }
      ]
    }
  },
  mutations: {
    setBlogTitle(state, title) {
      state.blogTitle = title
    },
    addBlogPost(state, post) {
      state.blogPosts.push(post)
    },
    removeBlogPost(state, id) {
      state.blogPosts = state.blogPosts.filter(post => post.id !== id)
    }
  },
  getters: {
    hasPosts: (state) => state.blogPosts.length > 0,
    postCount: (state) => state.blogPosts.length
  }
})

export default store
