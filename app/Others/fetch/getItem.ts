export default async function getItem(id:number) {
    const res= await fetch(`https://fakestoreapi.com/products/${id}`)
    if(!res.ok) throw new Error("Failed to Fetch")
    const data= await res.json()
    return data
}