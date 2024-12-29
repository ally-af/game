// Get elements
const button = document.getElementById('moving-button');
const scoreDisplay = document.getElementById('score');

// Initialize score
let score = 0;

// Function to move the button randomly
function moveButton() {
  const x = Math.random() * (window.innerWidth - button.offsetWidth);
  const y = Math.random() * (window.innerHeight - button.offsetHeight);
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}

// Function to update the score
function updateScore() {
  score += 1;
  scoreDisplay.textContent = score;
}

// Event listener for button clicks
button.addEventListener('click', () => {
  updateScore();
  moveButton();
});

// Initial position
moveButton();
