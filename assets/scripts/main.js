// let timeNow = formatDate(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"}));

// let phoneTime = document.getElementById('time');
const a = document.getElementById("phone");

document.addEventListener("keydown", function (e) {
  switch (e.keyCode) {
    case 38:
      a.classList.remove("hide-down");   
      break;
    case 40:
      a.classList.add("hide-down");
      break;
  }
});

// let timerId = setInterval(() => phoneTime.innerHTML = timeNow, 1000);
