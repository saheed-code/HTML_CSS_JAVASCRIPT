const originalText = document.getElementById("ori-text");
const textToScramble = document.getElementById("scr-text");
const redactButton = document.querySelector("button");
const join = document.getElementById("join");


redactButton.addEventListener("click", ($event) => {
  $event.preventDefault();
  let originalTextValue = originalText.value;
  let wordToScrambleArray = textToScramble.value.match(/\w+/g);


  wordToScrambleArray.forEach((wordToScramble) => {
    const pattern = new RegExp(wordToScramble, "g");

    originalTextValue = originalTextValue.replace(pattern, `${wordToScramble[0]}${"*".repeat(wordToScramble.length - 1)}`);
  });



  let scrambled = document.createElement("p");
  scrambled.innerHTML = originalTextValue;
  join.appendChild(scrambled);

  
});
