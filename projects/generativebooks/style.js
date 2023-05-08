function toggleDivs() {
	var wrapper = document.querySelector(".wrapper");
	var container = document.querySelector(".container");
  
	if (wrapper.style.display === "none") {
	  wrapper.style.display = "block";
	  container.style.display = "none";
	} else {
	  wrapper.style.display = "none";
	  container.style.display = "flex";
	}
  }
