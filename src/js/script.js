const grid = document.querySelector("#grid");
let gridSize = 16;
let mode = "pen";

// Removes the child elements of the grid
function clearGrid() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        grid.removeChild(pixel);
    });
}

// mouseenter event handler
function draw(event) {
    if(event.buttons === 1 && mode === "pen")
        event.target.style.backgroundColor = "black";
    else if(event.buttons === 1 && mode === "eraser")
        event.target.style.backgroundColor = "white";
    else if(event.buttons === 1 && mode === "rainbow") {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        event.target.style.backgroundColor = "#" + randomColor;
    }
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
        pixel.addEventListener("mouseover", draw);
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

document.querySelector(".btn-eraser").addEventListener("click", () => {
    mode = "eraser";
});

document.querySelector(".btn-pen").addEventListener("click", () => {
    mode = "pen";
});

document.querySelector(".btn-rainbow").addEventListener("click", () => {
    mode = "rainbow";
});