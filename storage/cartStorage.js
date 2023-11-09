import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default useCartStore = create(
    persist(
        (set) => ({
            cart: [],
            addToCart: (product, quantityToAdd) => {
                set((state) => {
                    const productInCart = state.cart.find((item) => item.product.id === product.id);
                    if (productInCart) {
                        return {
                            cart: state.cart.map((item) =>
                                item.product.id === product.id
                                    ? { ...item, quantity: item.quantity + quantityToAdd }
                                    : item
                            ),
                        };
                    } else {
                        return {
                            cart: [...state.cart, { quantity: quantityToAdd, product }],
                        };
                    }
                });
            },
            removeFromCart: (productId) => {
                set((state) => ({
                    cart: state.cart.filter((item) => item.product.id !== productId),
                }));
            },
            clearCart: () => set({ cart: [] }),
            updateQuantity: (productId, quantity) => {
                set((state) => ({
                    cart: state.cart.map((item) =>
                        item.product.id === productId ? { ...item, quantity } : item
                    ),
                }));
            },
        }), {
        name: "cart-storage",
        storage: createJSONStorage(() => AsyncStorage),
    }));