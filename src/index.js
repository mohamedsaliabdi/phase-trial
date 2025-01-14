document.addEventListener("DOMContentLoaded", () => {
    
    fetch("./db.json") 
      .then((response) => response.json())
      .then((data) => {
        initializeApp(data.cakes); 
      });
  });
  
  function initializeApp(cakes) {
    const cakeList = document.getElementById("cake-list");
    const cakeName = document.getElementById("cake-name");
    const cakeImage = document.getElementById("cake-image");
    const cakeDescription = document.getElementById("cake-description");
    const reviewList = document.getElementById("review-list");
  
  
    populateCakeList(cakes, cakeList);
  
  
  
    
    cakeList.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        const selectedCake = cakes.find(
          (cake) => cake.id === parseInt(event.target.dataset.cakeId)
        );
        displayCakeDetails(selectedCake, cakeName, cakeImage, cakeDescription, reviewList);
      }
    });
  }
  
  function populateCakeList(cakes, cakeList) {
    cakes.forEach((cake) => {
      const li = document.createElement("li");
      li.textContent = cake.name;
      li.dataset.cakeId = cake.id; 
      cakeList.appendChild(li);
    });
  }
  
  function displayCakeDetails(cake, cakeName, cakeImage, cakeDescription, reviewList) {
    
    cakeName.textContent = cake.name;
    cakeImage.src = cake.image_url;
    cakeImage.alt = cake.name;
    cakeDescription.textContent = cake.description;
  
    
    reviewList.innerHTML = ""; 
    cake.reviews.forEach((review) => {
      const li = document.createElement("li");
      li.textContent = review;
      reviewList.appendChild(li);
    });
  }
  