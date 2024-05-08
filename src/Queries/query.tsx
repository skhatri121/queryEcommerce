export async function fetchProducts() {
  const response = await fetch("https://dummyjson.com/products");
  // console.log(response);
  return response.json();
}

export async function fetchProduct(productId) {
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  console.log(response);
  return response.json();
}

export async function deleteProduct(productId) {
  const response = await fetch(`https://dummyjson.com/products/${productId}`, {
    method: "DELETE",
  });
  console.log(response);
  return response.json();
}

export async function fetchCategoryList() {
  const response = await fetch("https://dummyjson.com/products/categories");
  // console.log(response);
  return response.json();
}

export async function fetchCategoryProduct() {
  const response = await fetch(
    "https://dummyjson.com/products/category/products"
  );
  console.log(response);
  return response.json();
}
