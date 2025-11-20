// script.js
function generateCopypasta() {
  const inputText = document.getElementById('inputText').value;
  const outputArea = document.getElementById('copypastaOutput');

  if (inputText.trim() === '') {
    alert('Please enter some text!');
    return;
  }


  const copypastaText = `
  "${inputText} is a bum. They aren't even the strongest in their verse. Infact, they would lose to a street-tier. Their AP wouldn't even be large stone level. Their durability barely surpasses human tier. And their abilities are uncreative. In fact they have 0 feats and end up losing to every fight. Every single feat would be a result of the authors dumb quotes that don't mean anything. This character is a certified bum, and would be washed by any characters with a modicum of strength."
  `;

  // Display the generated copypasta text
  outputArea.textContent = copypastaText;
}