import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { IProducts } from "../type/type";

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
};

export const useCart = create<BearState>()(
    persist(
        (set) => ({
            cart: [],

            addToCart: (product: IProducts) =>
                set((state) => {
                    const existingProduct = state.cart.find(
                        (item) => item.id === product.id
                    );

                    if (existingProduct) {
                        return {
                            cart: state.cart.map((item) =>
                                item.id === product.id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            )
                        };
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

            delCartItem: (id: string | number) =>
                set((state) => ({
                    cart: state.cart.filter((item) => item.id != id)
                })),

            inCrement: (id: string | number) =>
                set((state) => ({
                    cart: state.cart.map((item) =>
                        item.id === id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                })),

            deCremnet: (id: string | number) =>
                set((state) => ({
                    cart: state.cart.map((item) =>
                        item.id === id
                            ? {
                                ...item,
                                quantity: item.quantity > 1
                                    ? item.quantity - 1
                                    : 1
                            }
                            : item
                    )
                })),

            favorite: [],

            addToFav: (product: IProducts) =>
                set((state) => {
                    const existingProduct = state.favorite.find(
                        (item) => item.id === product.id
                    );

                    if (existingProduct) {
                        return {
                            favorite: state.favorite
                        };
                    }

                    return {
                        favorite: [
                            ...state.favorite,
                            { ...product }
                        ]
                    };
                }),

            delFavitem: (product: IProducts) =>
                set((state) => ({
                    favorite: state.favorite.filter(
                        (item) => item.id != product.id
                    )
                }))
        }),

        {
            name: "shopease-storage"
        }
    )
);
