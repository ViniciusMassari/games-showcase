export const getGamebyName = async (gameName: string):Promise<IGame | boolean> =>{
  const response = await fetch("https://games-test-api-81e9fb0d564a.herokuapp.com/api/data", {
   headers: {
        'dev-email-address': 'testeTecnico@email.com',
      },
  })
  if (response.status === 200) {
 const resJson:IGame[] = await response.json();
  const game = resJson.filter(gameInfo => gameInfo.title.toLowerCase() === gameName.toLowerCase())[0]
  return game
  }
return false
}

export const filterbyGenre = async(genre: string) =>{
  let genreString = genre
  const response = await fetch("https://games-test-api-81e9fb0d564a.herokuapp.com/api/data", {
   headers: {
        'dev-email-address': 'testeTecnico@email.com',
      },
  })
  
  if (response.status === 200 ) {
    if (genre.includes('%20')) {
      genreString = genre.replace('%20', ' ')
      console.log(genreString);
      
    }
 const resJson:IGame[] = await response.json();
  const games = resJson.filter(gameInfo => gameInfo.genre === genreString)
  return games
  }
return false
}

export const getGameById = async(id:string)=>{
  const idNumber = Number(id)
  const response = await fetch("https://games-test-api-81e9fb0d564a.herokuapp.com/api/data", {
   headers: {
        'dev-email-address': 'testeTecnico@email.com',
      },
  })
  
  if (response.status === 200   ) {
 const resJson:IGame[] = await response.json();
  const game = resJson.filter(gameInfo => gameInfo.id === idNumber)[0]
  return game
  }
return false
}


export async function getGamesInfo(){
     const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('A solicitação demorou muito para responder, tente novamente mais tarde.');
    }, 5000);
  });
  const response = await Promise.race([
    fetch('https://games-test-api-81e9fb0d564a.herokuapp.com/api/data', {
      cache:'no-cache',
      headers: {
        'dev-email-address': 'testeTecnico@email.com',
      },
    }),
    timeoutPromise,
  ]);


  

return response
}
export function errorStatus(status: number){
 switch (status) {
  case 500:
    return false;
  case 502:
    return false
     case 503:
    return false
     case 504:
    return false
     case 507:
    return false
     case 508:
    return false
     case 509:
    return false
 
  default:
    return true
 }
}

