let list = document.getElementById("list");

let touchMe = document.createElement("li");
touchMe.textContent = "YOU CANT TOUCH ME, HAHAHA";
touchMe.classList.add("touch-me");
list.append(touchMe);

touchMe.addEventListener("mouseover", () => {
  let array = list.getElementsByTagName("li");
  let result = array.length;

  let random = Math.floor(Math.random() * (result + 1));
  setTimeout(list.insertBefore(touchMe, array[random]), 10);
});

touchMe.addEventListener("click", () => {
  alert("OMG, YOU CAN TOUCH ME AND CONGRATS");
});
