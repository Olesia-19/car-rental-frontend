"use client";
import { getCars } from "@/lib/api/clientApi";
import { useCarsStore } from "@/lib/store/carsStore";
import { useFavoritesStore } from "@/lib/store/favoritesStore";
import { useEffect } from "react";
import CarList from "@/components/CarList/CarList";

export default function CatalogPage() {
  const { cars, setCars, appendCars, page, setPage, totalPages, setLoading } =
    useCarsStore();
  const { favorites, toggleFavorite } = useFavoritesStore();
  // const { filters } = useFiltersStore();

  useEffect(() => {
    const loadCars = async () => {
      setLoading(true);
      const data = await getCars({ page });
      if (page === 1) {
        setCars(data.cars, data.totalCars, data.totalPages);
      } else {
        appendCars(data.cars);
      }
      setLoading(false);
    };

    loadCars();
  }, [page]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <>
      <CarList
        cars={cars}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      {page < totalPages && <button onClick={handleLoadMore}>Load More</button>}
    </>
  );
}
