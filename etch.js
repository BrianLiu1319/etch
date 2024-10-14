const div_cont = document.querySelector("#grid_container");
// const row_div = document.createElement("div");

// row_div.style.cssText = "display:flex;";

// div_cont.addEventListener("onmouseenter", (evt) => {
//     let matches = Array.prototype.slice.call(document.querySelectorAll("div"));
  
//     // Test to see if array contains the one that was clicked
//     if(matches.includes(evt.target)){
//         evt.target.style.backgroundColor = "brown";
//     }
// });

for (let i = 0; i < 8; i ++){
    const sq_div = document.createElement("div");
    sq_div.classList.add('sq');
    row_div.appendChild(sq_div);
}

for(let i = 0; i < 8; i++){
    div_cont.appendChild(row_div.cloneNode(true));
}


// var sq_lst = document.querySelectorAll(".sq");

// console.log(sq_lst);

// div_cont.addEventListener("click", (evt) => {
//     evt.target.style.backgroundColor = "brown";
// })

// for(let i = 0; i < 16 ; i++){
//     for(let j = 0; j < 16; j++){
//         let el = document.createElement("div");
//         el.classList.add("sq");
//         div_cont.appendChild(el);

//         el.addEventListener("mouseover", (evt) => {
//             el.style.backgroundColor = "black";
//         });
//     }
// }