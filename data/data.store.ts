import { create } from "zustand";
import type { IProducts } from "../type/type"



export interface ICartItem extends IProducts {
    quantity: number;
}


type BearState = {
    cart: ICartItem[];
    addToCart: (product: IProducts) => void;
    delCartItem: (id: number | string) => void;
    inCrement: (id: number | string) => void;
    deCremnet: (id: number | string) => void;
    favorite: IProducts[];
    addToFav: (product: IProducts) => void;
    delFavitem: (product: IProducts) => void;
    clearCart: () => void;
}

export const useCart = create<BearState>((set) => ({
    cart: [],
    addToCart: (product: IProducts) => set((state) => {

        const existingProduct = state.cart.find((item) => item.id === product.id)

        if (existingProduct) {

            return {
                cart: state.cart.map((item) => {

                    return item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item

                })
            }

        }

        return {
            cart: [
                ...state.cart,
                {
                    ...product,
                    quantity: 1
                }
            ]
        };


    }),
    clearCart: () => set({ cart: [] }),
    delCartItem: (id: string | number) => set((state) => ({
        cart: state.cart.filter((item) => {

            return item.id != id;

        })
    })),
    inCrement: (id: string | number) => set((state) => ({
        cart: state.cart.map((item) => {

            return item.id === id ? {
                ...item,
                quantity: item.quantity + 1
            } : item

        })
    })),
    deCremnet: (id: string | number) => set((state) => ({
        cart: state.cart.map((item) => {

            return item.id === id ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : 1
            } : item

        })
    })),
    favorite: [],
    addToFav: (product: IProducts) => set((state) => {

        const existingProduct = state.favorite.find((item) => item.id === product.id)

        if (existingProduct) {

            return {
                favorite: state.favorite.map((item) => {

                    return item.id === product.id ? { ...item } : item

                })
            }

        }

        return {
            favorite: [
                ...state.favorite,
                {
                    ...product,
                }
            ]
        };


    }),
    delFavitem: (product: IProducts) => set((state) => ({
        favorite: state.favorite.filter((item) => {
            return item.id != product.id;
        })
    }))











}))
