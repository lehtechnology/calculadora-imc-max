function calculateIMC(event) {
    event.preventDefault();

    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    
    if (isNaN(weight) || isNaN(height)) {
      alert("Por favor, insira valores válidos para peso e altura.");
      return;
    }
    
    var heightMeters = height / 100;
    var imc = weight / (heightMeters * heightMeters);
    
    var imcLabel = "";
    
    if (imc < 18.5) {
      imcLabel = "Baixo peso";
    } else if (imc < 25) {
      imcLabel = "Peso normal";
    } else {
      imcLabel = "Alto peso";
    }
    
    document.getElementById("imcResult").textContent = "Seu IMC é " + imc.toFixed(2);
    document.getElementById("imcLabel").textContent =  imcLabel;
  }