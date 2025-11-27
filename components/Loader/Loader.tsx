import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loaderContainer}>
      <div className={css.spinner}></div>
      <span className={css.loadingText}>Loading, please wait...</span>
    </div>
  );
}
