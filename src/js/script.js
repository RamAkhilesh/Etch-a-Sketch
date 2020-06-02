const grid = document.querySelector("#grid");
let gridSize = 16;

// Removes the child elements of the grid
function clearGrid() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        grid.removeChild(pixel);
    });
}

// mouseenter event handler
function draw(event) {
    event.target.style.backgroundColor = "black";
}

// Creates a grid of dimensions gridSize * gridSize
function createGrid(size) {
    // Clear grid
    clearGrid();
    grid.style.setProperty("grid-template" , `repeat(${size}, 1fr) / repeat(${size}, 1fr)`);
    for(let i = 0; i < size * size; i++) {
        const pixel = document.createElement("div");
        pixel.setAttribute("class", "pixel");
        grid.appendChild(pixel);
        pixel.addEventListener("click", draw);
    }
}
createGrid(gridSize);

// Resets the grid
function resetGrid() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = "white";
    });
}
document.querySelector(".btn-reset").addEventListener("click", resetGrid);

// Change grid size
document.querySelector("#size").addEventListener("change", () => {
    gridSize = document.querySelector("#size").value;
    createGrid(gridSize);
});