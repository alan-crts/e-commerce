import { create } from "zustand";

export default useFilterStore = create((set) => ({
    sort: null,
    categories: [],
    addToCategory: (category) => {
        set((state) => {
            if(!state.categories.includes(category)) {
                return {
                    categories: [...state.categories, category],
                };
            }
            return {
                categories: [...state.categories],
            }
        });
    },
    removeFromCategory: (category) => {
        set((state) => ({
            categories: state.categories.filter((item) => item !== category),
        }));
    },
    setSort: (sort) => {
        set(() => ({
            sort,
        }));
    },
}));