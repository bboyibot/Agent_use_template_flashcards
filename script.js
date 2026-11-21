const moves = [
  {
    name: "Indian Step",
    category: "Toprock",
    difficulty: "Beginner",
    description: "A basic step that moves side to side."
  },
  {
    name: "Salsa Step",
    category: "Toprock",
    difficulty: "Beginner",
    description: "A rhythmic step with a small turn."
  },
  {
    name: "Six-Step",
    category: "Footwork",
    difficulty: "Beginner",
    description: "A circular floor pattern using six steps."
  },
  {
    name: "Three-Step",
    category: "Footwork",
    difficulty: "Beginner",
    description: "A simple floor pattern made with three steps."
  },
  {
    name: "CCs",
    category: "Footwork",
    difficulty: "Intermediate",
    description: "A floor move with one leg kicking to the side."
  },
  {
    name: "Windmill",
    category: "Powermoves",
    difficulty: "Intermediate",
    description: "A spinning move that rolls across the shoulders."
  },
  {
    name: "Airflare",
    category: "Powermoves",
    difficulty: "Advanced",
    description: "A powerful move with repeated hand-to-hand rotations."
  },
  {
    name: "Baby Freeze",
    category: "Freezes",
    difficulty: "Beginner",
    description: "A balanced pose supported by the arms and head."
  },
  {
    name: "Airchair",
    category: "Freezes",
    difficulty: "Intermediate",
    description: "A one-arm freeze with the body tilted sideways."
  }
];

console.log(moves);

// Find moves that match both selected options.
function filterMoves() {
  const selectedCategory = document.getElementById("category").value;
  const selectedDifficulty = document.getElementById("difficulty").value;
  const resultsSection = document.getElementById("results");
  let foundMove = false;

  // Clear old results before showing new matches.
  resultsSection.innerHTML = "";

  for (let i = 0; i < moves.length; i++) {
    if (moves[i].category === selectedCategory &&
        moves[i].difficulty === selectedDifficulty) {
      foundMove = true;

      const moveCard = document.createElement("div");
      moveCard.className = "move-card";

      const moveName = document.createElement("h2");
      moveName.textContent = moves[i].name;

      const moveCategory = document.createElement("p");
      moveCategory.textContent = "Category: " + moves[i].category;

      const moveDifficulty = document.createElement("p");
      moveDifficulty.textContent = "Difficulty: " + moves[i].difficulty;

      const moveDescription = document.createElement("p");
      moveDescription.textContent = moves[i].description;

      moveCard.appendChild(moveName);
      moveCard.appendChild(moveCategory);
      moveCard.appendChild(moveDifficulty);
      moveCard.appendChild(moveDescription);
      resultsSection.appendChild(moveCard);
    }
  }

  if (foundMove === false) {
    const noMovesMessage = document.createElement("p");
    noMovesMessage.textContent = "No moves found";
    resultsSection.appendChild(noMovesMessage);
  }
}

const findMovesButton = document.getElementById("findMovesBtn");
findMovesButton.addEventListener("click", filterMoves);
