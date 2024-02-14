//**API RESTFULL LIBRE POKEMON */

//ARMADO DE PETINCIÓN
//CONSUMIENTO FETCH QUE ES UN METODO GLOBAL

fetch("https://pokeapi.co/api/v2/pokemon") //acceso a la api
  .then((respuesta) => respuesta.json())
  .then((data) => {
    console.log(data.results);
    data.results.forEach((element) => {
      console.log(element.name);
    });
  });
