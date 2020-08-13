const div1 = document.createElement("div");
div1.innerText = "1";
const div2 = document.createElement("div");
div2.innerText = "2";
const div3 = document.createElement("div");
div3.innerText = "3";
const div4 = document.createElement("div");
div4.innerText = "4";

const app = document.querySelector("#app");

const userHash = window.location.hash.substring(1);

switch (userHash) {
  case "1":
    app.innerHTML = "";
    app.append(div1);
    break;
  case "2":
    app.innerHTML = "";
    app.append(div2);
    break;
  case "3":
    app.innerHTML = "";
    app.append(div3);
    break;
  case "4":
    app.innerHTML = "";
    app.append(div4);
    break;
  default:
    app.innerHTML = "";
    app.append(div1);
    break;
}

