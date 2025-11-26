import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.headerNav}>
          <Link href="/">
            <svg width={104} height={16} className={css.logo}>
              <use href="/sprite.svg#icon-logo"></use>
            </svg>
          </Link>
          <ul className={css.navList}>
            <li className={css.navItem}>
              <Link href="/" className={css.navLink}>
                Home
              </Link>
            </li>
            <li className={css.navItem}>
              <Link href="/catalog" className={css.navLink}>
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
