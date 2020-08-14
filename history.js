const div1 = document.createElement("div");
div1.innerText = "1";
const div2 = document.createElement("div");
div2.innerText = "2";
const div3 = document.createElement("div");
div3.innerText = "3";
const div4 = document.createElement("div");
div4.innerText = "4";

const app = document.querySelector("#app");

const routeTable = {
  "default": div1,
  "1": div1,
  "2": div2,
  "3": div3,
  "4": div4
};

const router = () => {
  const userPath = window.location.pathname.substring(1);
  console.log(userPath);
  app.innerHTML = "";
  app.append(routeTable[userPath] || routeTable.default);
};

router();

const aTags = document.querySelectorAll("a.route-link");

for (let a of aTags) {
  a.addEventListener("click", (e) => {
    e.preventDefault();

    const href = a.getAttribute("href");
    window.history.pushState(null, `div${href}`, href);
    router()
  });
}


