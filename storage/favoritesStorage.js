import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default useFavoritesStore = create(
    persist(
        (set) => ({
            favorites: [],
            addToFavorites: (product) => {
                set((state) => {
                    const productInFavorites = state.favorites.find((item) => item.product.id === product.id);
                    if (productInFavorites) {
                        return {
                            favorites: state.favorites.map((item) =>
                                item.product.id === product.id
                                    ? { ...item }
                                    : item
                            ),
                        };
                    } else {
                        return {
                            favorites: [...state.favorites, { product }],
                        };
                    }
                });
            },
            removeFromFavorites: (productId) => {
                set((state) => ({
                    favorites: state.favorites.filter((item) => item.product.id !== productId),
                }));
            },
            clearFavorites: () => set({ favorites: [] }),
        }), {
        name: "favorites-storage",
        storage: createJSONStorage(() => AsyncStorage),
    }));