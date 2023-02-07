const main = async () => {
  const restaurants = document.querySelector(".restaurants");
  const hamburgerButton = document.querySelector("#hamburger");
  const nav = document.querySelector(".nav");
  hamburgerButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  let dataObject = await fetch("../DATA.json");
  let data = await dataObject.json();

  data.restaurants.forEach((restaurant) => {
    const restaurantItem = document.createElement("article");
    restaurantItem.classList.add("restaurant-item");

    const restaurantItemThumbnail = document.createElement("img");
    restaurantItemThumbnail.classList.add("restaurant-item-thumbnail");
    restaurantItemThumbnail.src = restaurant.pictureId;
    restaurantItemThumbnail.alt = `gambar restaurant ${restaurant.name}`;

    const restaurantItemContent = document.createElement("div");
    restaurantItemContent.classList.add("restaurant-item-content");

    const restaurantItemTitle = document.createElement("h1");
    restaurantItemTitle.classList.add("restaurant-item-title");
    restaurantItemTitle.innerHTML = restaurant.name;

    const restaurantItemRating = document.createElement("p");
    restaurantItemRating.classList.add("restaurant-item-rating");
    restaurantItemRating.innerHTML = `Rating ${restaurant.rating}`;

    const restaurantItemDescription = document.createElement("p");
    restaurantItemDescription.innerText = restaurant.description;
    restaurantItemDescription.classList.add("restaurant-item-description");

    restaurants.appendChild(restaurantItem);
    restaurantItem.appendChild(restaurantItemThumbnail);
    restaurantItem.appendChild(restaurantItemContent);
    restaurantItemContent.appendChild(restaurantItemTitle);
    restaurantItemContent.appendChild(restaurantItemRating);
    restaurantItemContent.appendChild(restaurantItemDescription);
  });
};

export default main;
