function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Add an event listener to the button
function clk() {
  // Change the background color of the body to a random color
  document.body.style.backgroundColor = getRandomColor();
}
