export async function getProducts() {
    const res= await fetch("https://fakestoreapi.com/products")
    if(!res.ok) throw new Error("Failed to Fetch")
    const data= await res.json()
    return data
}