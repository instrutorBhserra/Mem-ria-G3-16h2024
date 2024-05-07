// Dom elements
const menu = document.getElementById("menu");
const select = document.getElementById("numCards");
const start = document.getElementById("start");

// Factory
function buildUrl(number) {
	// Mostrar vantagem da factory
	// Turning the number into a string
	number += "";
	// Adding 0 to the left of small numbers
	number = number.padStart(2, "0");
	return `images/heros/card${number}.jpeg`;
}

// Objects
const card = new CardManager(buildUrl);
const board = new BoardManager("board", 50, card);

// Configurating the menu
for (let i = 4; i <= 10; i += 2) {
	// From 4 to 10
	const n = i * i; // Get i²
	// Create a new option for the select
	const op = document.createElement("option");

	// Set both value and content to i²
	op.value = n;
	op.innerHTML = n;

	// Add the new option to the page
	select.appendChild(op);
}

// Event listeners
start.addEventListener("click", () => {
	menu.classList.add("hidden");
	board.node.classList.remove("hidden");
	board.fill(select.value);
});
board.node.addEventListener("click", () => {
	if (board.check()) {
		setTimeout(() => {
			menu.classList.remove("hidden");
			board.node.classList.add("hidden");
		}, 2000);
	}
});

