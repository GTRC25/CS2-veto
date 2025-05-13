document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startbtn");
  const mapList = document.getElementById("mapList");
  const B01 = document.getElementById("B01");
  const B03 = document.getElementById("B03");
  const B05 = document.getElementById("B05");

  const maps = ["Mirage", "Inferno", "Nuke", "Overpass", "Ancient", "Anubis", "Vertigo"];
  const steps = [
    
  ];

  let currentStep = 0;
  let b03Clicked = false; 
  let b01clicked = false;
  let b05clicked = false;

  B01.addEventListener("click", () => {
    b01clicked = true;
    b03Clicked = false;
    b05clicked = false;
  });

  B03.addEventListener("click", () => {
    b03Clicked = true;
    b01clicked = false;
    b05clicked = false;
  });

  B05.addEventListener("click", () => {
    b05clicked = true;
    b03Clicked = false;
    b01clicked = false;
  });

  startBtn.addEventListener("click", () => {
    if (!b03Clicked && !b01clicked && !b05clicked) {
      alert("Please select format first.");
      return;
    }

    if (b03Clicked) {
      bestofthree();
    } else if (b01clicked) {
      bestofone();
    } else if (b05clicked) {
      bestoffive();
    }

    function bestofthree() {
      mapList.innerHTML = "";
      currentStep = 0;

      maps.forEach(name => {
        const div = document.createElement("div");
        div.className = "map";
        div.textContent = name;

        div.addEventListener("click", () => {
          if (div.classList.contains("banned") || div.classList.contains("picked") || currentStep >= 6) return;

          if (currentStep < 6) {
            if (currentStep === 0 || currentStep === 1 || currentStep === 4 || currentStep === 5) {
              div.classList.add("banned");
            } else {
              div.classList.add("picked");
            }

            currentStep++;
          }

          if (currentStep === 6) {
            const remaining = Array.from(document.querySelectorAll(".map"))
              .find(m => !m.classList.contains("banned") && !m.classList.contains("picked"));
            if (remaining) {
              remaining.classList.add("picked");
              currentStep++;
            }
          }
        });

        mapList.appendChild(div);
      });
    }

    function bestofone() {
      mapList.innerHTML = "";
      currentStep = 0;

      maps.forEach(name => {
        const div = document.createElement("div");
        div.className = "map";
        div.textContent = name;

        div.addEventListener("click", () => {
          if (div.classList.contains("banned") || div.classList.contains("picked") || currentStep >= 6) return;

          if (currentStep < 6) {
            if (currentStep === 0 || currentStep === 1 || currentStep === 2 ||currentStep === 3 || currentStep === 4 || currentStep === 5 || currentStep === 6 ) {
              div.classList.add("banned");
            } else {
              div.classList.add("picked");
            }

            currentStep++;
          }

          if (currentStep === 6) {
            const remaining = Array.from(document.querySelectorAll(".map"))
              .find(m => !m.classList.contains("banned") && !m.classList.contains("picked"));
            if (remaining) {
              remaining.classList.add("picked");
              currentStep++;
            }
          }
        });

        mapList.appendChild(div);
      });
    }

    function bestoffive() {
      mapList.innerHTML = "";
      currentStep = 0;

      maps.forEach(name => {
        const div = document.createElement("div");
        div.className = "map";
        div.textContent = name;

        div.addEventListener("click", () => {
          if (div.classList.contains("banned") || div.classList.contains("picked") || currentStep >= 6) return;

          if (currentStep < 6) {
            if (currentStep === 0 || currentStep === 1) {
              div.classList.add("banned");
            } else {
              div.classList.add("picked");
            }

            currentStep++;
          }

          if (currentStep === 6) {
            const remaining = Array.from(document.querySelectorAll(".map"))
              .find(m => !m.classList.contains("banned") && !m.classList.contains("picked"));
            if (remaining) {
              remaining.classList.add("picked");
              currentStep++;
            }
          }
        });

        mapList.appendChild(div);
      });
    }

    startBtn.classList.add("hidden");
    B01.classList.add("hidden");
    B03.classList.add("hidden");
    B05.classList.add("hidden");
  });
});
