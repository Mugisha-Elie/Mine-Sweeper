// Color Palette dropdown
const colorBtn = document.getElementById("color-button");
const colorPalette = document.getElementById("color-palette");

colorBtn.addEventListener("click", ()=>{
    colorPalette.classList.toggle("opacity-0");
    colorPalette.classList.toggle("invisible")
});

// Grid Setup

let rows = 10;
let cols = 10;

const grid = [];

for(let r = 0; r < rows; r++){
    const row = [];
    for(let c = 0;  c < cols; c++){
        row.push({isMine:false, isRevealed:false, isFlagged:false, neighbourMines:0});
    }
    grid.push(row);
}

//Mine Generator

let placed = 0;
let totalMines = 10;

while(placed < totalMines){
    let r = Math.floor(Math.random() * rows);
    let c = Math.floor(Math.random() * cols);

    if(!grid[r][c].isMine){
        grid[r][c].isMine = true;
        placed++;
    }
}

//Mine Generator

const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

function countMines(r, c){
    let count = 0;

    directions.forEach(([dr, dc]) => {
        const nr = r + dr;
        const nc = c + dc;
        
        if(nr >= 0 && nr < rows & nc >= 0 && nc < cols ){
            if(grid[nr][nc].isMine){
                count++;
            }
        }
    });
    return count;
}

//Render HTML

const gridContainer = document.getElementById("grid-container");

for(let row = 0; row < grid.length; row++){
    for(let col = 0; col < grid[row].length; col++){
        const cellDiv = document.createElement("div");
        cellDiv.setAttribute("data-row", row);
        cellDiv.setAttribute("data-col", col);
        cellDiv.classList.add("bg-[#A4A2F2]", "aspect-square");

        gridContainer.appendChild(cellDiv);
    }
}
