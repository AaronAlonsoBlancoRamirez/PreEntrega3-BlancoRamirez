function myFunction() {
    var x = document.getElementById("barra");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }