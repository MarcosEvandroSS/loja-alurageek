import { servicesProduct } from "../services/product-services";

const productContainer = document.querySelector('[data-product]');
const form = document.querySelector("[data-formulario]")

function createCard({ name, price, image }) {
  const card = document.createElement("div");
  card.classList.add("products__container");
  card.innerHTML = `
    <div class="produto">
      <img src="${image}" alt="${name}" class="produto-img">
      <h3 class="produto-nome">${name}</h3>
      <p class="produto-preco">
        <img class="moeda" src="imagens/moeda.png" alt="moeda">
        ${price} ouros
      </p>
    </div>
  `;
  return card;
}

const renderProducts = async () => {
  try {
    const listProducts = await servicesProduct.productList();
    listProducts.forEach((product) => {
      const productCard = createCard(product);
      productContainer.appendChild(productCard);
    });
  } catch (error) {
    console.error("Erro ao renderizar produtos:", error);
  }
};

formulario.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.querySelector("[data-name]").value;
  const price = document.querySelector("[data-price]").value;
  const image = document.querySelector("[data-image]").value;

  try {
    const newProduct = await servicesProduct.createProduct(name, price, image);
    const newCard = createCard(newProduct);
    productContainer.appendChild(newCard);

  } catch (error) {
    console.log(error);
  }
  form.reset()
})

renderProducts();
