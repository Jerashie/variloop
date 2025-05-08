function calculate() {
    const frequency = parseFloat(document.getElementById("frequency").value);
    const bendGap = parseFloat(document.getElementById("bendgap").value);
  
    if (isNaN(frequency) || isNaN(bendGap) || frequency <= 0) {
      alert("Please enter valid numbers for frequency and bend gap.");
      return;
    }
  
    const totalLength = ((468 / frequency) * 12) - bendGap;
    const roundedLength = totalLength.toFixed(2);
  
    document.getElementById("dispFreq").textContent = frequency;
    document.getElementById("dispBend").textContent = bendGap;
    document.getElementById("totalLength").textContent = roundedLength;
    document.getElementById("resultBox").style.display = "block";
  }

