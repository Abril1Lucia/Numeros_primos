 function generarPrimos(limite) {
    // el array ;-;
    const isPrime = new Array(limite + 1).fill(true);
    isPrime[0] = isPrime[1] = false; // 0 y 1 no son primos
  

    for (let p = 2; p * p <= limite; p++) {
      if (isPrime[p]) {
        for (let i = p * p; i <= limite; i += p) {
          isPrime[i] = false;
        }
      }
    }
  
    // array con los números primos
    const primos = [];
    for (let i = 2; i <= limite; i++) {
      if (isPrime[i]) {
        primos.push(i);
      }
    }
  
    return primos;
  }
  
  // límite del usuario
  const limite = parseInt(prompt("pasa un numero para ver la magia :D"));
  
  //mostrar los números 
  const numerosPrimos = generarPrimos(limite);


alert("Mira, aca esta la magia, numero solicitado :  " + limite + " estos son sus numeros primos: " + numerosPrimos)