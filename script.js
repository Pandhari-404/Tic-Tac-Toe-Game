
// let marks = [97, 64, 32, 49, 99, 96, 86];

// let toppers = marks.filter((val) => {
//    return val > 90;
// }); 
// console.log(toppers);

let marks = [97, 64, 32, 49, 99, 96, 86];

let toppers = marks.filter((val) => {
   return val > 90;
}); 
console.log(toppers);

//  DOM:
// Example:
// Q. Create a H2 heading element with text - "Hello JavaScript". Append "From Apna College Student"
//  to this text using JS.

// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from Apna College student";


// Example:

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";

// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";

// document.querySelector("body").prepend(newBtn);


const product = {
   title: "Ball Pen",
   rating: 4,
   offer: 5,
   price: 270,
};
console.log(product);

// let mode = "dark";
// let color;

// if(mode === "dark") {
//    color = "black";
// }

// if(mode === "light") {
//    color = "white";
// }
// console.log(mode);

let age = 18;
if(age > 18) {
   console.log("vote");
}else{
   console.log("not vote");
}

//  Odd or even value program:

// let num = 10;

// if(num % 2 === 10) {
//    console.log(num, "is even");
// }else{
//    console.log(num, "is odd");
// }

let mode = "blue";
let color;

if(mode === "dark") {
   color = "black";
}else if (mode === "blue") {
   color = "blue";
}else if (mode === "pink") {
   color = "pink";
}else{
   color = "white";
}
console.log(color);

let size = 25;
let result = size >= 18 ? "adult" : "not adult";
console.log(result);

age < 19 ? "adult" : "not adult";
console.log(age);


// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "light"; // "dark"

// modeBtn.addEventListner("click", () => {
//    if (currMode === "light") {
//      currMode = "dark";
//      body.classList.add("dark");
//    } else {
//       currMode = "light";
//       body.classList.add("light");
//    }

//    console.log(currMode);
// });



let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
   [0, 1, 2],
   [0, 3, 6],
   [0, 4, 8],
   [1, 4, 7],
   [2, 5, 8],
   [3, 4, 5],
   [6, 7, 8],
];

const resetGame  = () => {
   turn0 = true;
   enableBoxes();
   msgContainer.classList.add("hide");

};

boxes.forEach((box) => {
   box.addEventListener("click", () => {
      
      box.innerText = "Abcd";
      if(turn0) {
         box.innerText = "o";
         turn0 = false;
      }else {
         box.innerText = "x";
         turn0 = true;
      }
      box.disabled = true;

      checkWinner();
   });
});

const enableBoxes = () => {
   for(let box of boxes) {
      box.disabled  = false;
      box.innerText = "";
   }
};

const showWinner = (winner) => {
   msg.innerText = `Congratulations, Winners is ${winner}`;
   msgContainer.classList.remove("hide");
};

const checkWinner = () => {
   for(let pattern of winPatterns) {
      
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;

      if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
         if (pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("winner", pos1Val);

            showWinner(pos1Val);
         }
      }
   }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);



//  Classes & Object :

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary: 50000,
    calcTax() {
        console.log("tax rate is 20%");
    },
};
karanArjun.__proto__ = employee;