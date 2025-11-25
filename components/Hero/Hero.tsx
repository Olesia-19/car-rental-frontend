import Link from "next/link";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.heroInfo}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <h2 className={css.text}>
          Reliable and budget-friendly rentals for any journey
        </h2>
        <Link href="/catalog" className={css.btn}>
          View Catalog
        </Link>
      </div>
    </section>
  );
}
