let cells = document.querySelectorAll(".cell");
let selected_cell = 0;
let win_state = false

let equality = document.querySelector("#equality");
let x_elements = document.querySelector("#x");
let o_elements = document.querySelector("#o");

let x_wins_count = 0;
let o_wins_count = 0;
let equal_count = 0;

// winning conditions
let wins_plan = [
  //8 condition to win
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// loop to cells
for (let [index, cell] of cells.entries()) {
  cell.addEventListener("click", () => {
    fill_cell(cell);
  });
}

// fill cell
function fill_cell(cell) {

  // check drow
  if (selected_cell === 8 && win_state === false) {
    drow();
    nextGame();
  }



  if (selected_cell % 2 !== 0) {
    console.log(selected_cell);
    if (
      cell.classList.contains("fill-x") ||
      cell.classList.contains("fill-o")
    ) {
      return;
    }
    cell.classList.add("fill-o");
    if (selected_cell >= 4) {
      check_wins("fill-o");
      if (!win_state) {
        selected_cell++;
      }
    } else {
      win_state = false
      selected_cell++;
    }
  } else {
    console.log(selected_cell);
    if (
      cell.classList.contains("fill-x") ||
      cell.classList.contains("fill-o")
    ) {
      return;
    }
    cell.classList.add("fill-x");
    if (selected_cell >= 4) {
       check_wins("fill-x");
      if (!win_state) {
        selected_cell++;
      }
    } else {
      win_state = false
      selected_cell++;
    }
  }


  
}

// check wins
function check_wins(item) {
  wins_plan.map((plan) => {
    if (
      cells[plan[0]].classList.contains(item) &&
      cells[plan[1]].classList.contains(item) &&
      cells[plan[2]].classList.contains(item)
    ) {
      // some one win
      // alert('win')

      if (item === "fill-x") {
        x_wins_count++;
        x_elements.innerHTML = "x-wins-count: " + x_wins_count;
      } else {
        o_wins_count++;
        o_elements.innerHTML = "o-wins-count: " + o_wins_count;
      }
      win_state = true;
      nextGame();

    } else {
      win_state = false;
    }
  });
}

function drow() {
  equal_count++;
  equality.innerText = "drow " + equal_count;

  console.log(equality);
  console.log(`equal count : ${equal_count}`);
}

function nextGame() {
  setTimeout(() => {
    for (let cell of cells) {
      cell.classList.remove("fill-x", "fill-o");
    }
    selected_cell = 0;
  }, 500);
}

