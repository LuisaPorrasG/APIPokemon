//**OPTIMATIZANDO CON AWAIT*/


/**
 * En la versión ECMAScript 2017, se incorpora el asyc / await, 
 * permiten declarar funciones asíncronas, y que tengan un efecto en su comportamiento, 
 * como si fueran síncronas.  Se elimina el then y nos permite entre otros beneficios ahorrar código. 
 * La palabra asyc permite definir una función asíncrona y el await detiene o pausa la ejecución del código de la función,
 * hasta que se retorne el resultado de la promesa.
 */
const pokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    data.results.forEach((element) => {
      console.log(element.name);
    });
  } catch (error) {
    console.log(error);
  }
};

pokemones();
