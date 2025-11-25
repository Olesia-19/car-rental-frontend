"use client";
import { getCars } from "@/lib/api/clientApi";
import { useCarsStore } from "@/lib/store/carsStore";
import { useFavoritesStore } from "@/lib/store/favoritesStore";
import { useEffect } from "react";
import CarList from "@/components/CarList/CarList";
import css from "./page.module.css";

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
  } = useCarsStore();
  const { favorites, toggleFavorite } = useFavoritesStore();
  // const { filters } = useFiltersStore();

  useEffect(() => {
    resetCars();
  }, []);

  useEffect(() => {
    const loadCars = async () => {
      setLoading(true);
      const data = await getCars({ page, limit: "12" });
      if (page === 1) {
        setCars(data.cars, data.totalCars, data.totalPages);
      } else {
        appendCars(data.cars);
      }
      setLoading(false);
    };

    loadCars();
  }, [page, setCars, appendCars, setLoading]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <div className={css.container}>
      <CarList
        cars={cars}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      {page < totalPages && (
        <button onClick={handleLoadMore} className={css.LoadMoreBtn}>
          Load More
        </button>
      )}
    </div>
  );
}
