const BASE_URL = "http://localhost:3001/products";

const productList = async () => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error("Erro ao buscar produtos");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar produto:", error);
        return [];
    }
};

const createProduct = async (name, price, image) => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify({ name, price, image })
        });
        const data = await response.json();
    } catch (error) {
        console.log("Erro ao criar o produto:", error);
    }
}

export const servicesProduct = {
    productList,
    createProduct,
};
