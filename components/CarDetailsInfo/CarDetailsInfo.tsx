import { Car } from "@/types/car";
import css from "./CarDetailsInfo.module.css";

type CarDetailsInfoProps = {
  car: Car;
};

export default function CarDetailsInfo({ car }: CarDetailsInfoProps) {
  return (
    <div className={css.wrapper}>
      <div className={css.generalInfo}>
        <h2 className={css.carName}>
          {car.brand} {car.model}, {car.year}
        </h2>

        <p className={css.addressMileage}>
          <span className={css.addressBlock}>
            <svg width={16} height={16}>
              <use href="/sprite.svg#icon-location"></use>
            </svg>
            {car.address}
          </span>

          <span>
            Mileage: {car.mileage.toLocaleString("en-US").replace(/,/g, " ")} km
          </span>
        </p>
        {/* <h5 className={css.id}>{car.id}</h5> */}

        <h2 className={css.price}>${car.rentalPrice} / 1 hour</h2>
        <p className={css.description}>{car.description}</p>
      </div>

      <div className={css.details}>
        <div className={css.rentConditions}>
          <h3 className={css.detailsTitle}>Rental conditions:</h3>
          <ul className={css.detailsList}>
            {car.rentalConditions.map((item) => (
              <li key={item} value={item} className={css.listItem}>
                <svg width={16} height={16}>
                  <use href="/sprite.svg#icon-check"></use>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={css.specifications}>
          <h3 className={css.detailsTitle}>Specifications:</h3>
          <ul className={css.detailsList}>
            <li className={css.listItem}>
              <svg width={16} height={16}>
                <use href="/sprite.svg#icon-calendar"></use>
              </svg>
              {car.year}
            </li>
            <li className={css.listItem}>
              <svg width={16} height={16}>
                <use href="/sprite.svg#icon-car-type"></use>
              </svg>
              {car.type}
            </li>
            <li className={css.listItem}>
              <svg width={16} height={16}>
                <use href="/sprite.svg#icon-fuel"></use>
              </svg>
              {car.fuelConsumption}
            </li>
            <li className={css.listItem}>
              <svg width={16} height={16}>
                <use href="/sprite.svg#icon-engine-size"></use>
              </svg>
              {car.engineSize}
            </li>
          </ul>
        </div>

        <div className={css.accessories}>
          <h3 className={css.detailsTitle}>Accessories & functionalities:</h3>
          <ul className={css.detailsList}>
            {car.accessories.map((item) => (
              <li key={item} value={item} className={css.listItem}>
                <svg width={16} height={16}>
                  <use href="/sprite.svg#icon-check"></use>
                </svg>
                {item}
              </li>
            ))}
            {car.functionalities.map((item) => (
              <li key={item} value={item} className={css.listItem}>
                <svg width={16} height={16}>
                  <use href="/sprite.svg#icon-check"></use>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
