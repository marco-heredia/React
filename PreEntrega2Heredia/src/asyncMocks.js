const products = [
    {
        id: "1",
        categoria: "Consola",
        nombre: "Playstation 2",
        detalle: "La consola mas vendida",
        imagen: "../public/images/ps2Fat.jpg",
        precio: 7000,
        stock: 5
    },
    {
        id: "2",
        categoria: "Juego",
        nombre: "Elden ring",
        detalle: "Juego mundo abierto",
        imagen: "../public/images/EldenRing.jpg",
        precio: 5000,
        stock: 7
},
{
        id: "3",
        categoria: "Accesorio",
        nombre: "Joystick Xbox",
        detalle: "Joystick de Xbox 360",
        imagen: "../public/images/JoystickXbox.jpg",
        precio: 8000,
        stock: 4
},
{
        id: "4",
        categoria: "Accesorio",
        nombre: "Teclado mecanico",
        detalle: "Teclado gamer con cable",
        imagen: "../public/images/TecladoMecanico.jpg",
        precio: 7500,
        stock: 3
}
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
         if(products.length>0) {
            setTimeout(() => {
                resolve(products);
              }, 2000)
         } else {
             reject("No hay productos")
         }
     })
 }

export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {
      
      const product = products.find( product => product.id === id); 
      setTimeout( () => { 
        if(!product) {
          reject("No se encontro el producto")
        } else {
          resolve(product);
        }
       }, 2000 )
      
    });
  };