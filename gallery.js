const galleryData = {
  roses: [
    { name: "Red Rose", img: "red.jpg", desc: "Symbol of love and passion" },
    { name: "Pink Rose", img: "pink.jpg", desc: "Gentle and graceful" },
    { name: "Yellow Rose", img: "yellow.jpg", desc: "Joyful and bright" },
    { name: "White Rose", img: "white.jpg", desc: "Pure and elegant" },
    { name: "Orange Rose", img: "orange.jpg", desc: "Warm and vibrant" }
  ],
  bouquets: [
    { name: "Single Bouquet", img: "single.jpg", desc: "Minimal and chic" },
    { name: "3-Rose Bouquet", img: "3rose.jpg", desc: "Simple elegance" },
    { name: "6-Rose Bouquet", img: "6rose.jpg", desc: "Balanced beauty" },
    { name: "8-Rose Bouquet", img: "8rose.jpg", desc: "Full and lush" },
    { name: "Multi-Rose Bouquet", img: "multi.jpg", desc: "Colorful celebration" }
  ],
  baskets: [
    { name: "Newborn Baby Basket", img: "baby.jpg", desc: "Soft pastel blooms for new beginnings" },
    { name: "Birthday Basket", img: "birthday.jpg", desc: "Festive and bright floral joy" },
    { name: "Wedding Basket", img: "wedding.jpg", desc: "Elegant whites for timeless love" },
    { name: "Thank You Basket", img: "thankyou.jpg", desc: "Warm gratitude in every petal" },
    { name: "Congratulations Basket", img: "congrats.jpg", desc: "Joyful mix to celebrate milestones" }
  ]
};

function renderCards(categoryId, items) {
  const container = document.querySelector(`#${categoryId} .card-container`);
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "flower-card";
    card.innerHTML = `
      <img src="images/${item.img}" alt="${item.name}">
      <h4>${item.name}</h4>
      <p>${item.desc}</p>
    `;
    container.appendChild(card);
  });
}

renderCards("roses", galleryData.roses);
renderCards("bouquets", galleryData.bouquets);
renderCards("baskets", galleryData.baskets);