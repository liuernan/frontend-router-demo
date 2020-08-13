const div1 = document.createElement("div");
div1.innerText = "1";
const div2 = document.createElement("div");
div2.innerText = "2";
const div3 = document.createElement("div");
div3.innerText = "3";
const div4 = document.createElement("div");
div4.innerText = "4";

const app = document.querySelector("#app");

const hashMap = {
  "default": div1,
  "1": div1,
  "2": div2,
  "3": div3,
  "4": div4
};

const router = () => {
  const userHash = window.location.hash.substring(1);

  app.innerHTML = "";
  app.append(hashMap[userHash] || hashMap.default);
};

router();

window.addEventListener("hashchange", function () {
  router();
}, false);



