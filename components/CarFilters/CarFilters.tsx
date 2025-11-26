"use client";

import { Field, Form, Formik } from "formik";
import css from "./CarFilters.module.css";
import { generatePriceOptions } from "@/lib/utils/priceOptions";

type CarFiltersProps = {
  brands: string[];
  onSearch: (values: {
    brand: string;
    rentalPrice: string;
    mileageFrom: string;
    mileageTo: string;
  }) => void;
};

export default function CarFilters({ brands, onSearch }: CarFiltersProps) {
  const priceOptions = generatePriceOptions(30, 200, 10);

  return (
    <Formik
      initialValues={{
        brand: "",
        rentalPrice: "",
        mileageFrom: "",
        mileageTo: "",
      }}
      onSubmit={onSearch}
    >
      {() => (
        <Form className={css.filtersForm}>
          {/* Brand */}
          <div className={css.filterGroup}>
            <label className={css.filterLabel}>Car brand</label>
            <Field
              as="select"
              name="brand"
              className={`${css.filterSelect} ${css.brandOptions}`}
            >
              <option value="" className={css.dropList}>
                All Brands
              </option>
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </Field>
          </div>

          {/* Price */}
          <div className={css.filterGroup}>
            <label className={css.filterLabel}>Price / 1 hour</label>
            <Field
              as="select"
              name="rentalPrice"
              className={`${css.filterSelect} ${css.priceOptions}`}
            >
              <option value="">Choose a price</option>
              {priceOptions.map((price) => (
                <option key={price} value={price}>
                  {price}
                </option>
              ))}
            </Field>
          </div>

          {/* Mileage */}
          <div className={css.filterGroup}>
            <label className={css.filterLabel}>Car mileage / km</label>
            <div className={css.mileageWrapper}>
              <Field
                type="number"
                name="mileageFrom"
                placeholder="From"
                className={`${css.filterInput} ${css.inputLeft}`}
              />
              <span className={css.separator}></span>
              <Field
                type="number"
                name="mileageTo"
                placeholder="To"
                className={`${css.filterInput} ${css.inputRight}`}
              />
            </div>
          </div>

          <button type="submit" className={css.filterBtn}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
}
