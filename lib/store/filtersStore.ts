import { create } from "zustand";

type Filters = {
  brand: string;
  rentalPrice: string;
  mileageFrom: string;
  mileageTo: string;
};

type FiltersStore = {
  filters: Filters;
  setFilters: (filters: Partial<Filters>) => void;
  resetFilters: () => void;
};

export const useFiltersStore = create<FiltersStore>((set) => ({
  filters: {
    brand: "",
    rentalPrice: "",
    mileageFrom: "",
    mileageTo: "",
  },
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  resetFilters: () =>
    set({
      filters: {
        brand: "",
        rentalPrice: "",
        mileageFrom: "",
        mileageTo: "",
      },
    }),
}));
