const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Santiago',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Laura',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]

function favoritesSoundsCount(users) {
  let favoritesCount = {}

  for (let { favoritesSounds } of users) {
    for (let sound in favoritesSounds) {
      if (!favoritesCount[sound]) {
        favoritesCount[sound] = 1
      } else {
        favoritesCount[sound] += 1
      }
    }
  }

  return favoritesCount
}

console.log(favoritesSoundsCount(users))
