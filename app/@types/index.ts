interface Rating{
    rate:number,
    count:number
}
export interface ProductType{
    id:number,
    title:string,
    image:string,
    price:number,
    quantity:number,
    description:string,
    rating:Rating,
    category:string
}
export interface OrderDetailsProps{
    products:ProductType[],
    paymentMethods:string[]
}

