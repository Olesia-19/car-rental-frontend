"use client";
import { Car } from "@/types/car";
import css from "./CarCard.module.css";
import Image from "next/image";
import Link from "next/link";

type CarCardProps = {
  car: Car;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
};

export default function CarCard({
  car,
  isFavorite,
  onToggleFavorite,
}: CarCardProps) {
  return (
    <div className={css.card}>
      <div className={css.imgWrapper}>
        <Image
          src={car.img}
          alt={car.model}
          width={276}
          height={268}
          className={css.carImage}
        />
        <button
          onClick={() => onToggleFavorite?.(car.id)}
          className={css.favBtn}
        >
          <svg width="16" height="16">
            <use
              href={
                isFavorite ? "/sprite.svg#icon-saved" : "/sprite.svg#icon-save"
              }
            />
          </svg>
        </button>
      </div>

      <div className={css.cardContent}>
        <div className={css.topRow}>
          <span className={css.carBrand}>
            {car.brand} <span className={css.carModel}>{car.model}</span>,{" "}
            {car.year}
          </span>
          <span className={css.carYear}>$ {car.rentalPrice}</span>
        </div>

        <div className={css.middleRow}>
          <span className={css.details}>
            {car.address} | {car.rentalCompany}
          </span>
          <span className={css.details}>
            {car.type} |{" "}
            {car.mileage.toLocaleString("en-US").replace(/,/g, " ")}
            km
          </span>
        </div>

        <Link href={`/catalog/${car.id}`} className={css.readMoreBtn}>
          Read more
        </Link>
      </div>
    </div>
  );
}
