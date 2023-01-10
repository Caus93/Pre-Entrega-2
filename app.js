function menuPrincipal() {
  let total = 0;
  let menu;
  do {
    menu = prompt(
      "1- Comprar música (EP) \n 2- Comprar merchandising \n 3- Totalizar cuenta cuenta \n 4 - Salir"
    );
    menu = parseInt(menu);
    switch (menu) {
      case 1:
        total = total + comprarMusica();
        break;
      case 2:
        total = total + comprarMerch();
        break;
      case 3:
        alert("El total de la cuenta es " + total);
        total = 0;
        break;
      case 4:
        alert("Saliendo...");
        break;
      default:
        alert("Opción inválida");
    }
  } while (menu != 4);
}

function comprarMusica() {
  let acumulador = 0;
  alert("Seleccione el EP a comprar");
  alert("1- Freedom EP $15 \n 2- Move EP $10");
  let musica = prompt("Ingrese el EP a comprar");
  musica = parseInt(musica);

  switch (musica) {
    case 1:
      acumulador = 15;
      break;
    case 2:
      acumulador = 10;
      break;
    default:
      alert("Opción inválida");
  }
  return acumulador;
}

function comprarMerch() {
  let acumulador = 0;
  alert("Seleccione la ropa a comprar");
  alert("1- Hoodie $30 \n 2- Camiseta $10");
  let merch = prompt("Ingrese los productos a comprar");
  merch = parseInt(merch);

  switch (merch) {
    case 1:
      acumulador = 30;
      break;
    case 2:
      acumulador = 10;
      break;
    default:
      alert("Opción inválida");
  }
  return acumulador;
}

menuPrincipal();
