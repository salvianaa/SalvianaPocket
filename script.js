let target = parseInt(localStorage.getItem("target")) || 0;
let tabungan = parseInt(localStorage.getItem("tabungan")) || 0;

function updateDisplay() {
  document.getElementById("totalTabungan").textContent = "Total Tabungan: Rp" + tabungan;
  document.getElementById("targetTabungan").textContent = "Target: Rp" + target;

  let persen = target > 0 ? (tabungan / target) * 100 : 0;
  document.getElementById("persentase").textContent = "Pencapaian: " + persen.toFixed(2) + "%";

  if (persen >= 100) {
    alert("🎉 Tabungan sudah penuh!");
  }
}

function setTarget() {
  let input = parseInt(document.getElementById("targetInput").value);
  if (!isNaN(input) && input > 0) {
    target = input;
    localStorage.setItem("target", target);
    updateDisplay();
  }
}

function addSavings() {
  let input = parseInt(document.getElementById("amountInput").value);
  if (!isNaN(input) && input > 0) {
    tabungan += input;
    localStorage.setItem("tabungan", tabungan);
    updateDisplay();
  }
}

updateDisplay();
