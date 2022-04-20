var functionBtns = document.getElementsByClassName("function-btn");
// functionBtns = [del, +, -, /, x, RESET, =]
var numberBtns = document.getElementsByClassName("number-btn");
// numberBtns = [7, 8, 9, 4, 5, 6, 1, 2, 3, ., 0]
var result = document.getElementsByClassName("result")[0];
var firstClick = true;
var hasEvaluated = false;
var evaluation = [];

for (let i = 0; i < numberBtns.length; i++) {
  numberBtns[i].addEventListener("click", () => {
    if (firstClick === false) {
      result.textContent += numberBtns[i].textContent;
    } else {
      result.textContent = "";
      result.textContent += numberBtns[i].textContent;
      firstClick = false;
    }
  });
}

functionBtns[0].addEventListener("click", () => {
  result.textContent = "0";
  firstClick = true;
});

functionBtns[5].addEventListener("click", () => {
  evaluation = [];
  result.textContent = "0";
  firstClick = true;
});

functionBtns[6].addEventListener("click", () => {
  evaluation.push(result.textContent);
  let fNum = parseFloat(evaluation[0]);
  let lNum = parseFloat(evaluation[2]);
  switch (evaluation[1]) {
    case "+": {
      result.textContent = fNum + lNum;
      break;
    }

    case "-": {
      result.textContent = fNum - lNum;
      break;
    }

    case "/": {
      result.textContent = fNum / lNum;
      break;
    }

    case "x": {
      result.textContent = fNum * lNum;
      break;
    }
  }
  hasEvaluated = true;
});

for (let i = 0; i < functionBtns.length; i++) {
  let btnValue = functionBtns[i].textContent;
  functionBtns[i].addEventListener("click", () => {
    switch (btnValue) {
      case "+": {
        if (hasEvaluated === true) {
          evaluation = [];
        }
        evaluation.push(result.textContent);
        evaluation.push(btnValue);
        result.textContent = "0";
        firstClick = true;
        break;
      }
      case "-": {
        if (hasEvaluated === true) {
          evaluation = [];
        }
        evaluation.push(result.textContent);
        evaluation.push(btnValue);
        result.textContent = "0";
        firstClick = true;
        break;
      }
      case "/": {
        if (hasEvaluated === true) {
          evaluation = [];
        }
        evaluation.push(result.textContent);
        evaluation.push(btnValue);
        result.textContent = "0";
        firstClick = true;
        break;
      }
      case "x": {
        if (hasEvaluated === true) {
          evaluation = [];
        }
        evaluation.push(result.textContent);
        evaluation.push(btnValue);
        result.textContent = "0";
        firstClick = true;
        break;
      }
    }
  });
}
