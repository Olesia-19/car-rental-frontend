"use client";

import { Car } from "@/types/car";
import CarCard from "../CarCard/CarCard";
import css from "./CarList.module.css";

type CarListProps = {
  cars: Car[];
  favorites: string[];
  toggleFavorite: (id: string) => void;
};

export default function CarList({
  cars,
  favorites,
  toggleFavorite,
}: CarListProps) {
  return (
    <div className={css.carList}>
      {cars.map((car) => (
        <CarCard
          key={car.id}
          car={car}
          isFavorite={favorites.includes(car.id)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
