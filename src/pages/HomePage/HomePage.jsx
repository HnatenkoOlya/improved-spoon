import { Link } from "react-router";
import arrowIcon from "../../assets/icons/Arrow 16.svg";
import css from "./HomePage.module.css";
function HomePage() {
  return (
    <div className={css.divHome}>
      <div className={css.divContent}>
        <h1 className={css.title}>
          The road to the <span className={css.span}>depths</span> of the human
          soul
        </h1>
        <p className={css.p}>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <Link to="/psychologists" className={css.link}>
          Get started
          <img src={arrowIcon} alt="Arrow" className={css.arrowIcon} />
        </Link>
      </div>
      <div className={css.divImage}>
        <img
          src="/images/hero/heroImg1x.jpg"
          srcSet="/images/hero/heroImg2x.jpg 2x"
          alt="Psychologist"
        />
      </div>
    </div>
  );
}

export default HomePage;
