"use client";
import { getBrands, getCars } from "@/lib/api/clientApi";
import { useCarsStore } from "@/lib/store/carsStore";
import { useFavoritesStore } from "@/lib/store/favoritesStore";
import { useFiltersStore } from "@/lib/store/filtersStore";
import { useEffect, useState } from "react";
import CarList from "@/components/CarList/CarList";
import CarFilters from "@/components/CarFilters/CarFilters";

import css from "./page.module.css";
import Loader from "@/components/Loader/Loader";

export default function CatalogPage() {
  const {
    cars,
    setCars,
    appendCars,
    resetCars,
    page,
    setPage,
    totalPages,
    setLoading,
    isLoading,
  } = useCarsStore();
  const { favorites, toggleFavorite } = useFavoritesStore();
  const { filters, setFilters, resetFilters } = useFiltersStore();

  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const data = await getBrands();
        setBrands(data);
      } catch (err) {
        console.error("Failed to fetch brands:", err);
      }
    };

    fetchBrands();
  }, []);

  useEffect(() => {
    resetCars();
  }, [resetCars]);

  useEffect(() => {
    const loadCars = async () => {
      setLoading(true);
      const data = await getCars({
        page,
        limit: "12",
        brand: filters.brand || undefined,
        rentalPrice: filters.rentalPrice || undefined,
        minMileage: filters.mileageFrom || undefined,
        maxMileage: filters.mileageTo || undefined,
      });

      if (page === 1) {
        setCars(data.cars, data.totalCars, data.totalPages);
      } else {
        appendCars(data.cars);
      }
      setLoading(false);
    };

    loadCars();
  }, [
    page,
    setCars,
    appendCars,
    setLoading,
    filters.brand,
    filters.rentalPrice,
    filters.mileageFrom,
    filters.mileageTo,
  ]);

  const handleSearch = (values: typeof filters) => {
    setFilters(values);
    resetCars();
    setPage(1);
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className={css.container}>
      <div className={css.contentWrapper}>
        <CarFilters brands={brands} onSearch={handleSearch} />

        {cars.length === 0 && isLoading ? (
          <Loader />
        ) : (
          <CarList
            cars={cars}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        )}

        {page < totalPages && (
          <button
            onClick={handleLoadMore}
            className={css.LoadMoreBtn}
            disabled={isLoading}
          >
            {cars.length === 0 && isLoading ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </div>
  );
}
