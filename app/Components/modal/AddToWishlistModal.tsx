"use client";
import Modal from "./Modal";
import useWishListModal from "@/app/Others/hooks/useWishlistModal";
import useAddToWishlist from "@/app/Others/hooks/useAddToWishlist";
import toast from "react-hot-toast";
import { JSX } from "react";

export default function AddToWishlistModal() {
  const wishlist = useWishListModal();
  const addToWishlistModal = useAddToWishlist();

  const onCreateNew = () => {
    addToWishlistModal.onClose();
    wishlist.onOpen();
  };

  const addToExisting = (listName: string) => {
    wishlist.setSelectedWishlist(listName);

    //check if it already exists in the selected one
    const selectedWishlist = wishlist.selectedWishlist;
    const selectWishlistItems = wishlist.all_wishlists.find(
      (l) => l.listName === listName
    );
    const alreadyExists = selectWishlistItems.listItems.some(
      (i) => i.id === addToWishlistModal.productToAdd.id
    );
    if (alreadyExists) {
      toast.error("Already Exists in the Wishlist");
      wishlist.setSelectedWishlist("");
      addToWishlistModal.onClose();
      return;
    } else {
      wishlist.addToSelectedWishlist(addToWishlistModal.productToAdd);
      wishlist.setSelectedWishlist("");
      toast.success("Added");
      addToWishlistModal.onClose();
    }
  };
  
  let body: JSX.Element;

  if (wishlist.all_wishlists.length === 0) {
    body = (
      <div>
        <p className="text-sm text-slate-400">
          No wishlist, kindly create new.
        </p>
      </div>
    );
  } else {
    body = (
      <div>
        <p className="text-slate-500 text-sm">In which one you want to add ?</p>
        {wishlist.all_wishlists.map((wishlist) => (
          <li
            className="text-bold hover:bg-slate-100 cursor-pointer"
            onClick={() => addToExisting(wishlist.listName)}
            key={wishlist.listName}
          >
            {wishlist.listName}
          </li>
        ))}
      </div>
    );
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
  );
}
