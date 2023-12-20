"use client"
import Modal from "./Modal"
import useWishListModal from "@/app/Others/hooks/useWishlistModal"
import useAddToWishlist from "@/app/Others/hooks/useAddToWishlist"
import toast from "react-hot-toast"

export default function AddToWishlistModal() {

    const wishlist=useWishListModal()
    const addToWishlistModal=useAddToWishlist()

    const onCreateNew=()=>{
        
       addToWishlistModal.onClose()
       wishlist.onOpen()
    }
   
    const addToExisting=(listName:string)=>{
      wishlist.setSelectedWishlist(listName)
      wishlist.addToSelectedWishlist(addToWishlistModal.productToAdd)
      wishlist.setSelectedWishlist("")
      toast.success("Added")
      addToWishlistModal.onClose()

    }
    let body=(
  
    <div>
    
     {wishlist.all_wishlists.map((wishlist)=>(
        <li
         className=" text-bold   hover:bg-slate-100 cursor-pointer"
        onClick={()=>addToExisting(wishlist.listName)}
         key={wishlist.listName}>
            {wishlist.listName}
        </li>
     ))}
    </div>
   
)
if(wishlist.all_wishlists.length===0){
    body=(
     <div>
        <p className="text-sm text-slate-400">No wishlist, kindly create new.</p>
    </div>
    )
}

  return (
    <Modal
    isOpen={addToWishlistModal.isOpen}
    onSubmit={onCreateNew}
    onClose={addToWishlistModal.onClose}
    actionLabel="Create New"
    title="Select Wishlist"
    body={body}
    />
  )
}
