fetchData("https://8251bd1746791081.mokky.dev/favorites").then((data) =>
  renderSneakers(data)
);

let nameInput = document.getElementById("name");
let btn = document.getElementById("submit");

btn.addEventListener("click", function () {
  let nameValue = nameInput.value;
  return fetch("https://8251bd1746791081.mokky.dev/favorites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: nameValue }),
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
});