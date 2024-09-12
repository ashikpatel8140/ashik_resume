const themes = document.getElementsByClassName("theme");

Array.from(themes).forEach((theme) => {
  theme.addEventListener("click", (e) => {
    document
      .querySelector("body")
      .setAttribute("data-theme", e.target.dataset.theme);
      if (e.target.dataset.theme == "dark") {
        document.getElementById("linkedin_dark_card").style.display = "block";
        document.getElementById("linkedin_white_card").style.display = "none";
      } else {
        document.getElementById("linkedin_white_card").style.display = "block";
        document.getElementById("linkedin_dark_card").style.display = "none";
      }
    localStorage.setItem("theme", e.target.dataset.theme);
  });
});

function getThemeOnLoad() {
  const theme = localStorage.getItem("theme");
  
  if (theme) {
    document.querySelector("body").setAttribute("data-theme", theme);
  }
  if (theme == "dark") {
    document.getElementById("linkedin_dark_card").style.display = "block";
    document.getElementById("linkedin_white_card").style.display = "none";
  } else {
    document.getElementById("linkedin_white_card").style.display = "block";
    document.getElementById("linkedin_dark_card").style.display = "none";
  }
}

getThemeOnLoad();
