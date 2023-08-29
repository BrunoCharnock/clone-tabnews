function somar(numero1, numero2) {
  if (typeof numero1 !== "number") {
    return "erro";
  }
  if (typeof numero2 !== "number") {
    return "erro";
  }
  return numero1 + numero2;
}

exports.somar = somar;
