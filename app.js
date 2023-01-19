alert("Bienvenidos a Aftermath Store");

const musica = [
  {
    artista: "Caus",
    ep: "Freedom",
    cantidadTracks: 2,
    precio: 15,
    sello: "Aftermath",
  },
  {
    artista: "Traumer",
    ep: "Soul",
    cantidadTracks: 3,
    precio: 30,
    sello: "Aftermath",
  },
  {
    artista: "Apollonia",
    ep: "Magic",
    cantidadTracks: 3,
    precio: 25,
    sello: "Aftermath",
  },
  {
    artista: "Ben Sterling",
    ep: "Dancing Queen",
    cantidadTracks: 2,
    precio: 20,
    sello: "Aftermath",
  },
];

const ropa = [
  {
    tipo: "Hoodie",
    marca: "Aftermath",
    talla: "M",
    color: "negro",
    precio: 30,
  },
  {
    tipo: "Camiseta",
    marca: "Aftermath",
    talla: "S",
    color: "blanco",
    precio: 10,
  },
  {
    tipo: "Pantalon",
    marca: "Aftermath",
    talla: "L",
    color: "gris",
    precio: 40,
  },
  { tipo: "Gorro", marca: "Aftermath", talla: "M", color: "negro", precio: 5 },
];

let carrito = [];

function menuPrincipal() {
  let menu;
  do {
    menu = prompt(
      "1- Comprar música (EP) \n 2- Comprar merchandising \n 3- Totalizar cuenta cuenta \n 4 - Salir"
    );
    menu = parseInt(menu);
    switch (menu) {
      case 1:
        comprarMusica(musica);
        break;
      case 2:
        comprarMerch(ropa);
        break;
      case 3:
        alert(totalCuenta(carrito));
        break;
      case 4:
        alert("Saliendo...");
        break;
      default:
        alert("Opción inválida");
    }
  } while (menu != 4);
}

function comprarMusica(musica) {
  alert("Seleccione el EP a comprar por el nombre del artista");
  let mensaje = "";
  let mensajeMusica;
  musica.forEach((music) => {
    mensajeMusica =
      "Artista: " +
      music.artista +
      ", Nombre EP: " +
      music.ep +
      ", Cantidad tracks: " +
      music.cantidadTracks +
      ", El precio es: $" +
      music.precio +
      ", Del sello: " +
      music.sello +
      "\n";
    mensaje = mensaje + mensajeMusica;
  });

  let item = prompt(mensaje);
  console.log(item);

  let musicaEncontrada = musica.filter((artista) =>
    artista.artista.includes(item)
  );
  console.log(musicaEncontrada);

  carrito = carrito.concat(musicaEncontrada);
}

function comprarMerch(ropa) {
  alert("Seleccione la ropa a comprar por el tipo");
  let mensaje = "";
  let mensajeRopa;
  ropa.forEach((merch) => {
    mensajeRopa =
      "Tipo: " +
      merch.tipo +
      ", Marca: " +
      merch.marca +
      ", Talla: " +
      merch.talla +
      ", Color: " +
      merch.color +
      ", Precio: $" +
      merch.precio +
      "\n";
    mensaje = mensaje + mensajeRopa;
  });

  let item = prompt(mensaje);
  console.log(item);

  let ropaEncontrada = ropa.filter((tipo) => tipo.tipo.includes(item));
  console.log(ropaEncontrada);

  carrito = carrito.concat(ropaEncontrada);
}

function totalCuenta(carrito) {
  let total = 0;
  carrito.forEach((car) => {
    total = total + car.precio;
  });
  return "el total de la cuenta es " + total;
}

menuPrincipal();
