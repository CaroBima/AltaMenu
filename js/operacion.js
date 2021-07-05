function funcionSuma(numero1, numero2){
  let valor1 = document.getElementById("numero1").value;
  let valor2 = document.getElementById("numero2").value;
  let val1 = parseInt(valor1);
  let val2 = parseInt(valor2);
  let res = val1 + val2;
  console.log(val1);
  console.log(val2);
  console.log(res);
  document.getElementById("resultado").value = res;
}
