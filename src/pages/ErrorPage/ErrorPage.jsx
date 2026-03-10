import css from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className={css.errorPage}>
      <h1 className={css.errorTitle}>Error 404: Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <img src="images/error.jpg" className={css.errorImg} />
      <Link to="/" className={css.link}>
        Go back to Home Page
      </Link>
    </div>
  );
}
export default ErrorPage;
