let loadHTML = (file, elementId) => {
  return fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error("Error loading HTML:", error));
};

let multiLoads = async () => {
  await Promise.all([
    // loadHTML("navbar.html", "nav-bar"),
    loadHTML("..//html/footer.html", "footer"),
  ]);
};

multiLoads();

