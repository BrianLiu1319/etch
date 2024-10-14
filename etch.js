
const grid_cont = document.querySelector("#grid_container");
grid_cont.style.cssText = "display:flex;  flex-direction:column; height: 500px; width:500px; border: thin solid black;";
const slider = document.querySelector("#rangeElement");
const output = document.querySelector("#output");
var slider_val = slider.value
output.value = slider_val;
const rainbow = document.querySelector("#rainbow");

rainbow.addEventListener("click", () => {
    
});

createGrid();
oninput();
clear_button();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function clear_button(){
    const clear_ref = document.querySelector("#clear");
    clear_ref.addEventListener("click", () => {
        clearGrid();
        createGrid(output.value)
    })
}


// create grid
function createGrid(gridSize = 16){
    for (let i = 0; i < gridSize; i ++){
        const row_div = document.createElement("div");
    
    
        for(let i = 0; i < gridSize; i++){
            const sq_div = document.createElement("div");
            sq_div.classList.add('sq');
            row_div.appendChild(sq_div);
            row_div.style.cssText = "display:flex; height: 100%; width: 100%;";
    
            sq_div.addEventListener("mouseover", (evt) => {
                if (rainbow) {
                    sq_div.style.backgroundColor = getRandomColor();
                } else {
                    sq_div.style.backgroundColor = getRandomColor();

                }
            });
        }
        grid_cont.appendChild(row_div);
    }
}

function clearGrid() {
    const grid_cont = document.querySelector("#grid_container");
    while (grid_cont.firstChild) {
        grid_cont.removeChild(grid_cont.lastChild);
      }
}

function oninput(){
    slider.oninput = () => {
        slider_val = slider.value;
        output.value = slider_val;
        clearGrid();
        createGrid(slider_val);
    };

    output.oninput = () => {
        output_val = output.value;

        if (output_val > 100){
            output_val = 100;
        } else if (output_val < 0){
            output_val = 1;
        }

        slider.value = output_val;
        output.value = output_val;

        clearGrid();
        createGrid(output_val);
    };

    
}











