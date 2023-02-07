class RestaurantItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: "open" });
  }
  render() {
    this.innerHTML = `
    
    <article class="restaurant-item">
        <img class="restaurant-item-thumbnail"
                src="https://restaurant-api.dicoding.dev/images/medium/07"
                alt="gambar makanan"
              />
              <div class="restaurant-item-content">
                <h1 class="restaurant-item-title">Title makanan</h1>
                <p class="restaurant-item-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat, aliquam eius! Nisi sunt modi placeat.
                </p>
              </div>
            </article>
    `;
  }
}
