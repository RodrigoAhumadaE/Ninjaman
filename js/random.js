function mapaAleatorio(worldInit) {
  for (let y = 0; y < 13; y+=2) {
    for (let x = 0; x < 13; x++) {
      if (worldInit[y][x] == 0) {
        let numeroAleatorio = Math.random();
        if (numeroAleatorio > 0.5) {
          worldInit[y][x] = 1;
        }
      }
    }
  }
  console.log(worldInit);
  return worldInit;
}

function llenarMapa(worldVacio) {
  for (let y = 0; y < 13; y++) {
    for (let x = 0; x < 13; x++) {
      if (worldVacio[y][x] == 0) {
        const numeroAleatorio = Math.random();
        if (numeroAleatorio < 0.6) {
          worldVacio[y][x] = 2;
        } else {
          worldVacio[y][x] = 3;
        }
      }
    }
  }
  worldVacio[1][1] = 0;
  return worldVacio;
}
