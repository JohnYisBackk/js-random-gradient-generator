// ======================================
// 1. NAČÍTANIE DOM ELEMENTOV
// ======================================

const gradientPreview = document.getElementById("gradientPreview");

const gradientCode = document.getElementById("gradientCode");
const directionSelect = document.getElementById("directionSelect");

const colorOnePreview = document.getElementById("colorOnePreview");
const colorOneHex = document.getElementById("colorOneHex");
const colorTwoPreview = document.getElementById("colorTwoPreview");
const colorTwoHex = document.getElementById("colorTwoHex");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const statusMessage = document.getElementById("statusMessage");

// ======================================
// 2. GAME / APP STATE
// ======================================

let colorOne = "";
let colorTwo = "";
let currentDirection = "";

// ======================================
// 3. FUNKCIA NA GENEROVANIE RANDOM HEX FARBY
// ======================================

function generateRandomColor() {
  const hexChars = "0123456789ABCDEF";

  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    color += hexChars[randomIndex];
  }

  return color;
}

// ======================================
// 4. FUNKCIA NA VYTVORENIE GRADIENT STRINGU
// ======================================

function createGradientString(direction, colorOne, colorTwo) {
  const gradient = `linear-gradient(${direction}, ${colorOne}, ${colorTwo})`;

  return gradient;
}

// ======================================
// 5. FUNKCIA NA UPDATE UI
// ======================================

function updateUI() {
  const gradient = createGradientString(currentDirection, colorOne, colorTwo);

  gradientPreview.style.background = gradient;
  gradientCode.textContent = gradient;

  colorOnePreview.style.background = colorOne;
  colorTwoPreview.style.background = colorTwo;

  colorOneHex.textContent = colorOne;
  colorTwoHex.textContent = colorTwo;
}

// ======================================
// 6. FUNKCIA NA GENEROVANIE NOVÉHO GRADIENTU
// ======================================

function generateGradient() {
  colorOne = generateRandomColor();
  colorTwo = generateRandomColor();

  currentDirection = directionSelect.value;

  updateUI();

  statusMessage.textContent = "New gradient generated.";
}

// ======================================
// 7. COPY CSS FUNCTION
// ======================================

function copyGradientCode() {
  const code = gradientCode.textContent;

  navigator.clipboard.writeText(code);

  statusMessage.textContent = "Gradient CSS copied!";
}

// ======================================
// 8. DIRECTION CHANGE FUNCTION
// ======================================

function handleDirectionChange() {
  currentDirection = directionSelect.value;

  updateUI();

  statusMessage.textContent = "Gradient direction updated.";
}

// ======================================
// 9. RESET / INITIALIZE APP
// ======================================

function init() {
  currentDirection = directionSelect.value;

  colorOne = "#6a11cb";
  colorTwo = "#2575fc";

  updateUI();

  statusMessage.textContent = "Ready to generate a new gradient.";
}

// ======================================
// 10. EVENT LISTENERS
// ======================================

generateBtn.addEventListener("click", generateGradient);
copyBtn.addEventListener("click", copyGradientCode);

directionSelect.addEventListener("change", handleDirectionChange);

// ======================================
// 11. SPUSTENIE APPKY
// ======================================

init();
