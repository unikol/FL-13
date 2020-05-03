function countPoints(games) {

  let teamScore = 0;
  for (let i=0; i<games.length; i++) {
  
    let home = parseInt(games[i].charAt(0));
    let away = parseInt(games[i].charAt(2));
    if (home > away) {
      teamScore += 3; 
      } else if (home === away) {
      teamScore += 1; 
      }         
    }
  return teamScore;
  }
  console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']));
        
       