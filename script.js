document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startbtn");
  const mapList = document.getElementById("mapList");

  const maps = ["Mirage", "Inferno", "Nuke", "Overpass", "Ancient", "Anubis", "Vertigo"];
  const steps = [
    "Team A Ban", "Team B Ban",
    "Team A Pick", "Team B Pick",
    "Team A Ban", "Team B Ban",
    "Decider"
  ];

  let currentStep = 0;

  startBtn.addEventListener("click", () => {
    mapList.innerHTML = "";
    currentStep = 0;

    maps.forEach(name => {
      const div = document.createElement("div");
      div.className = "map";
      div.textContent = name;

      div.addEventListener("click", () => {
        if (div.classList.contains("banned") || div.classList.contains("picked") || currentStep >= steps.length) return;

        if (currentStep < 6) {
          if (currentStep === 0 || currentStep === 1 || currentStep === 4 || currentStep === 5) {
            div.classList.add("banned");
          } else {
            div.classList.add("picked");
          }
         
          currentStep++;
        }

        if (currentStep === 6) {
          const remaining = Array.from(document.querySelectorAll(".map")) //.map is a CSS class selector — not the .map() function in JavaScript arrays.
            .find(m => !m.classList.contains("banned") && !m.classList.contains("picked")); //It returns the first element in the array that satisfies the condition in the callback function
          if (remaining) {
            remaining.classList.add("picked")
            currentStep++;
          }
        }
      });

      mapList.appendChild(div);
    });

    startBtn.classList.add("hidden");
  });
});
