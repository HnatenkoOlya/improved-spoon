import css from "./ErrorPage.module.css";
function ErrorPage() {
  return (
    <div className={css.errorPage}>
      <h1 className={css.errorTitle}>Error 404: Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <img src="images/error.jpg" className={css.errorImg} />
      <a href="/" className={css.link}>
        Go back to Home Page
      </a>
    </div>
  );
}
export default ErrorPage;
