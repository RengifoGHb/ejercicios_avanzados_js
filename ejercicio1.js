const movies = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]

function categories(movies) {
  let AllCategories = []
  for (let { categories } of movies) {
    for (let categorie of categories) {
      if (!AllCategories.includes(categorie)) {
        AllCategories.push(categorie)
      }
    }
  }
  console.log(AllCategories)
}

categories(movies)
