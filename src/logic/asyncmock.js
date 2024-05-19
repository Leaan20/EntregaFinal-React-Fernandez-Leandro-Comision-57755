const products = [
      {
        id: 1,
        nombre: "Revolution",
        marca: "Billabong",
        color:"azul",
        grosor: "4/3",
        precio: 250000,
        categoria: "trajes de neoprene",
        talles: [
          "s",
          "m"
        ],
        img: "/src/assets/img/products/suits/neoprene-billa-1.png"
      },
      {
        id: 2,
        nombre: "Plus",
        marca: "Hurley",
        color:"gris",
        grosor: "4/3",
        precio: 280000,
        categoria: "trajes de neoprene",
        talles: [
          "m",
          "l",
          "xl"
        ],
        img: "/src/assets/img/products/suits/neoprene-hurley-1.png"
      },
      {
        id: 3,
        nombre: "E-bomb",
        marca: "Rip curl",
        color:"celeste",
        grosor: "4/3",
        precio: 300000,
        categoria: "trajes de neoprene",
        talles: [
          "s",
          "m",
          "xl"
        ],
        img: "/src/assets/img/products/suits/neoprene-rip-1.jpg"
      },
      {
        id: 4,
        nombre: "Flashbomb",
        marca: "Rip curl",
        color:"bordo",
        grosor: "4/3",
        precio: 420000,
        categoria: "trajes de neoprene",
        talles: [
          "s",
          "l",
          "xl"
        ],
        img: "/src/assets/img/products/suits/neoprene-rip-2.png"
      },
      {
        id: 5,
        nombre: "Highline",
        marca: "Quiksilver",
        color:"negro",
        grosor: "4/3",
        precio: 280000,
        categoria: "trajes de neoprene",
        talles: [
          "s",
          "m",
          "l"
        ],
        img: "/src/assets/img/products/suits/neoprene-quik-1.png"
      },
      {
        id: 6,
        nombre: "Marathon",
        marca: "Quiksilver",
        color:"negro",
        grosor: "4/3",
        precio: 250000,
        categoria: "trajes de neoprene",
        talles: [
          "s",
          "m",
          "xl"
        ],
        img: "/src/assets/img/products/suits/neoprene-quik-2.png"
      },
      {
        id: 7,
        nombre: "High Seas",
        marca: "Vissla",
        color:"negro",
        grosor: "4/3",
        precio: 350000,
        categoria: "trajes de neoprene",
        talles: [
          "s",
          "l",
          "xl"
        ],
        img: "/src/assets/img/products/suits/neoprene-vissla-1.png"
      },
      {
        id: 8,
        nombre: "Seas Comp",
        marca: "Vissla",
        color:"bordo",
        grosor: "4/3",
        precio: 290000,
        categoria: "trajes de neoprene",
        talles: [
          "m",
          "l",
          "xl"
        ],
        img: "/src/assets/img/products/suits/neoprene-vissla-2.png"
      },
      {
        id: 9,
        nombre: "FIREWIRE HOUDINI VOLCANIC 6 8",
        marca: "FIREWIRE",
        color:"gris",
        medidas: "6 8",
        litros: "43.1L",
        precio: 200000,
        categoria: "tablas",
        img: "/src/assets/img/products/surfboards/FIREWIRE-HOUDINI-VOLCANIC.jpg"
      },
      {
        id: 10,
        nombre: "HARLEY INGLEBY MOE MINI 6 6",
        marca: "HARLEY",
        color:"celeste",
        medidas: "6 6",
        litros: "41L",
        precio: 220000,
        categoria: "tablas",
        img: "/src/assets/img/products/surfboards/HARLEY-INGLEBY-MOE-MINI.jpg"
      },
      {
        id: 11,
        nombre: "TBLS CAMALEON",
        marca: "TBLS",
        color:"rojo",
        medidas: "6 6",
        litros: "41.5L",
        precio: 285000,
        categoria: "tablas",
        img: "/src/assets/img/products/surfboards/TBLS-CAMALEON.jpg"
      },
      {
        id: 12,
        nombre: "FIREWIRE TOO FISH 5 11",
        marca: "FIREWIRE",
        color:"gris",
        medidas: "5 11",
        litros: "38L",
        precio: 270000,
        categoria: "tablas",
        img: "/src/assets/img/products/surfboards/FIREWIRE-TOO-FISH.jpg"
      },
      {
        id: 13,
        nombre: "OCEAN EARTH MR SUPER TWIN 6 8",
        marca: "OCEAN",
        color: "amarillo/rojo",
        medidas: "6 8",
        litros: "46L",
        precio: 240000,
        categoria: "tablas",
        img: "/src/assets/img/products/surfboards/OCEAN-EARTH-MR-SUPER-TWIN.jpg"
      },
      {
        id: 14,
        nombre: "INDIO ENDURANCE RANCHO 6 2",
        marca: "INDIO",
        color:"naranja",
        medidas: "6 2",
        litros: "40.9L",
        precio: 210000,
        categoria: "tablas",
        img: "/src/assets/img/products/surfboards/INDIO-ENDURANCE-RANCHO.jpg"
      },
      {
        id: 15,
        nombre: "DHD PHOENIX WIDE 5 8",
        marca: "DHD",
        color: 'blanco',
        medidas: "5 8",
        litros: "31.5L",
        precio: 320000,
        categoria: "tablas",
        img: "/src/assets/img/products/surfboards/DHD-PHOENIX-WIDE.jpg"
      },
      {
        id: 16,
        nombre: "GRIP CHANNEL ISLANDS LINED UP FLAT",
        marca:"CHANNEL ISLANDS",
        color: "rosa",
        precio: 20000,
        categoria: "accesorios",
        img: "/src/assets/img/products/accesories/GRIP-CHANNEL-ISLANDS-LINED-UP-FLAT.jpg"
      },
      {
        id: 17,
        nombre: "INVENTO FCS ALL ROUND ESSENTIAL 9",
        marca:"FCS",
        color: "gris",
        precio: 18000,
        categoria: "accesorios",
        img: "/src/assets/img/products/accesories/INVENTO-FCS-ALL-ROUND-ESSENTIAL-9.jpg"
      },
      {
        id: 18,
        nombre: "QUILLAS FCS II PERFORMER PC S TRI-FINS",
        marca:"FCS",
        color: "azul",
        precio: 22000,
        categoria: "accesorios",
        img: "/src/assets/img/products/accesories/QUILLAS-FCS-II-PERFORMER-PC-S-TRI-FINS.jpg"
      },
      {
        id: 19,
        nombre: "QUILLAS FCS II PG ALBUM S-M KEEL TWIN-FINS",
        marca:"FCS",
        color: "negro",
        precio: 20000,
        categoria: "accesorios",
        img: "/src/assets/img/products/accesories/QUILLAS-FCS-II-PG-ALBUM-S-M-KEEL-TWIN-FINS.jpg"
      },
      {
        id: 20,
        nombre: "INVENTO OCEAN EARTH REEF QUICK RELEASE ONE XT 7",
        marca:"OCEAN EARTH",
        color: "negro",
        precio: 23000,
        categoria: "accesorios",
        img: "/src/assets/img/products/accesories/INVENTO-OCEAN-EARTH-REEF-QUICK-RELEASE-ONE-XT-7.jpg"
      },
      {
        id: 21,
        nombre: "QUILLAS FCS II MF PC L TRI-FINS",
        marca:"FCS",
        color: "mango",
        precio: 15000,
        categoria: "accesorios",
        img: "/src/assets/img/products/accesories/QUILLAS-FCS-II-MF-PC-L-TRI-FINS.jpg"
      },
      {
        id: 22,
        nombre: "GRIP CREATURES GROM JACK FREESTONE LITE",
        marca:"CREATURES",
        color: "negro",
        precio: 17000,
        categoria: "accesorios",
        img: "/src/assets/img/products/accesories/GRIP-CREATURES-GROM-JACK-FREESTONE-LITE.jpg"
      },
      {
        id: 23,
        nombre: "GRIP CREATURES ITALO LITE ECOPURE",
        marca:"CREATURES",
        color: "rosa",
        precio: 13000,
        categoria: "accesorios",
        img: "/src/assets/img/products/accesories/GRIP-CREATURES-ITALO-LITE-ECOPURE.jpg"
      },
      {
        id: 24,
        nombre: "GRIP CREATURES MICK EUGENE FANNING LITE",
        marca:"CREATURES",
        color: "cyan",
        precio: 25000,
        categoria: "accesorios",
        img: "/src/assets/img/products/accesories/GRIP-CREATURES-MICK-EUGENE-FANNING-LITE.jpg"
      },
      {
        id: 25,
        nombre: "INVENTO DEFLOW 8FT 7MM",
        marca:"DEFLOW",
        color: "mostaza",
        precio: 27000,
        categoria: "accesorios",
        img: "/src/assets/img/products/accesories/INVENTO-DEFLOW-8FT-7MM.jpg"
      }
    ] ;


    // Funcion que obtiene los productos del array de objetos


    export const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  

    //funcion que encuentra el producto individual por su id
    
    export const getProduct = (id) => {
      return products.find((prod) => prod.id == id);
    };


    //funcion que filtra por categorias

    export const getCategory = (categoria)=> {
      return products.filter((prods)=> prods.categoria === categoria);
    };

