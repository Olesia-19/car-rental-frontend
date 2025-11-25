import { Car } from "@/types/car";
import { create } from "zustand";

type CarsState = {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
  isLoading: boolean;

  setCars: (cars: Car[], totalCars: number, totalPages: number) => void;
  appendCars: (cars: Car[]) => void;
  setPage: (page: number) => void;
  setLoading: (loading: boolean) => void;
  resetCars: () => void;
};

export const useCarsStore = create<CarsState>((set, get) => ({
  cars: [],
  totalCars: 0,
  page: 1,
  totalPages: 0,
  isLoading: false,

  setCars: (cars, totalCars, totalPages) =>
    set({ cars, totalCars, totalPages }),
  appendCars: (cars) => set({ cars: [...get().cars, ...cars] }),
  setPage: (page) => set({ page }),
  setLoading: (loading) => set({ isLoading: loading }),
  resetCars: () => set({ cars: [], totalCars: 0, page: 1, totalPages: 0 }),
}));
