function funcionSuma(numero1, numero2){
  let valor1 = document.getElementById("numero1").value;
  let valor2 = document.getElementById("numero2").value;
  let val1 = parseInt(valor1);
  let val2 = parseInt(valor2);
  let res = val1 + val2;

  //verifico si el valor es un numero. Si lo es los sumo, si no muestro un
  //aviso de que solo se pueden sumar números
  if (!isNaN(res)){
    document.getElementById("resultado").value = res;
  }else{

    document.getElementById("resultado").value = 'Solo se sumar números';
  }

}
