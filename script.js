const wordForm = document.querySelector("#word-form");
const englishWordInput = document.querySelector("#english-word");
const germanWordInput = document.querySelector("#german-word");
const formMessage = document.querySelector("#form-message");
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
}

wordForm.addEventListener("submit", addWordPair);
