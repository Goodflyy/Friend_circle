// let state = document.getElementById("state");
// let like = state.firstChild;
// console.log(like);
let discussion = document.getElementsByTagName("ul");
// let switchOn = document.getElementById("switchOn");
let switchOn = document.getElementsByClassName("switchOn");
// let switchOff =document.getElementById("switchOff");
let switchOff = document.getElementsByClassName("switchOff");
window.onload = function() {
  for (let len = 0; len < discussion.length; len++) {
    if (discussion[len].children.length > 2) {
      switchOn[0].style.display = "block";
      for (let k = 0; k <= discussion[len].children.length; k++) {
        if (k > 2) {
          discussion[len].children[k - 1].style.display = "none";
        }
      }
    }
  }

  for (let len = 0; len < discussion.length; len++) {
    if (discussion[len].children.length > 2) {
      switchOn[1].style.display = "block";
      for (let k = 0; k <= discussion[len].children.length; k++) {
        if (k > 2) {
          discussion[len].children[k - 1].style.display = "none";
        }
      }
    }
  }
};
function turnOn(order) {
  switch (order) {
    case 0:
      switchOff[0].style.display = switchOn[0].style.display;
      for (let len = 0; len < discussion.length; len++) {
        if (discussion[len].children.length > 2) {
          switchOn[0].style.display = "none";
          for (let k = 0; k <= discussion[len].children.length; k++) {
            if (k > 2) {
              discussion[len].children[k - 1].style.display =
                discussion[0].children[0].style.display;
            }
          }
        }
      }
      break;
    case 1:
      switchOff[1].style.display = switchOn[1].style.display;
      for (let len = 0; len < discussion.length; len++) {
        if (discussion[len].children.length > 2) {
          switchOn[1].style.display = "none";
          for (let k = 0; k <= discussion[len].children.length; k++) {
            if (k > 2) {
              discussion[len].children[k - 1].style.display =
                discussion[0].children[0].style.display;
            }
          }
        }
      }

    default:
      break;
  }
}
function turnOff(order) {
  // alert("aaa")

  switch (order) {
    case 0:
      switchOff[0].style.display = "none";
      switchOn[0].style.display = "block";
      for (let len = 0; len < discussion.length; len++) {
        if (discussion[len].children.length > 2) {
          switchOn[0].style.display = "block";
          for (let k = 0; k <= discussion[len].children.length; k++) {
            if (k > 2) {
              discussion[len].children[k - 1].style.display = "none";
            }
          }
        }
      }
      break;
    case 1:
      switchOff[1].style.display = "none";
      switchOn[1].style.display = "block";
      for (let len = 0; len < discussion.length; len++) {
        if (discussion[len].children.length > 2) {
          switchOn[1].style.display = "block";
          for (let k = 0; k <= discussion[len].children.length; k++) {
            if (k > 2) {
              discussion[len].children[k - 1].style.display = "none";
            }
          }
        }
      }

    default:
      break;
  }
}

// function turnOn_1(){}
