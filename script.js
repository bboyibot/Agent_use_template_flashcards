const wordForm = document.querySelector("#word-form");
const englishWordInput = document.querySelector("#english-word");
const germanWordInput = document.querySelector("#german-word");
const formMessage = document.querySelector("#form-message");
const wordList = document.querySelector("#word-list");
const wordPairs = [];

// Handles adding a new word pair.
function addWordPair(event) {
  event.preventDefault();

  const englishWord = englishWordInput.value.trim();
  const germanWord = germanWordInput.value.trim();

  if (englishWord === "" || germanWord === "") {
    formMessage.textContent = "Bitte beide Felder ausfüllen.";
    return;
  }

  wordPairs.push({
    english: englishWord,
    german: germanWord
  });

  wordForm.reset();
  formMessage.textContent = "Wortpaar wurde hinzugefügt.";
  showWordPairs();
}

// Displays every saved word pair in the list.
function showWordPairs() {
  wordList.innerHTML = "";

  for (let i = 0; i < wordPairs.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = wordPairs[i].english + " - " + wordPairs[i].german;
    wordList.appendChild(listItem);
  }
}

wordForm.addEventListener("submit", addWordPair);
