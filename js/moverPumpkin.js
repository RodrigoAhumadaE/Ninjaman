var move = "x";
var sentido = "-";

function movimiento(pumpkin, world) {
  moverse();

  function moverse() {
    if (move == "y" && sentido == "-") {
      sentidoYMenos();
    } else if (move == "y" && sentido == "+") {
      sentidoYMas();
    } else if (move == "x" && sentido == "-") {
      sentidoXMenos();
    } else if (move == "x" && sentido == "+") {
      sentidoXMas();
    }
  }

  function sentidoYMenos() {
    if (world[pumpkin.y - 1][pumpkin.x] != 1) {
      pumpkin.y--;
    } else {
      move = "x";
      sentidoRandom();
      moverse();
    }
  }

  function sentidoYMas() {
    if (world[pumpkin.y + 1][pumpkin.x] != 1) {
      pumpkin.y++;
    } else {
      move = "x";
      sentidoRandom();
      moverse();
    }
  }

  function sentidoXMas() {
    let cont = 0;
    if (world[pumpkin.y][pumpkin.x + 1] != 1) {
      pumpkin.x++;
      cont++;
      if (cont == 3) {
        move = "y";
        sentidoRandom();
        moverse();
      }
    } else {
      move = "y";
      sentidoRandom();
      moverse();
    }
  }

  function sentidoXMenos() {
    let cont = 0;
    if (world[pumpkin.y][pumpkin.x - 1] != 1) {
      pumpkin.x--;
      cont++;
      if (cont == 3) {
        move = "y";
        sentidoRandom();
        moverse();
      }
    } else {
      move = "y";
      sentidoRandom();
      moverse();
    }
  }

  function sentidoRandom() {
    const numeroAleatorio = Math.random();
    if (numeroAleatorio < 0.5) {
      sentido = "+";
    } else {
      sentido = "-";
    }
  }
  return pumpkin;
}
