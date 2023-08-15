//funcion que va a entregar dimension aleatoria de la 1 a la 126
//numero aleatorio de 1 a 126
// y expotamos la funcion

export const getRandomDimension = (limit) => {
  return Math.floor(Math.random() * limit) + 1;
};
