import css from "./HomePage.module.css";
function HomePage() {
  return (
    <div className={css.divHome}>
      <h1 className={css.title}>
        The road to the <span className={css.span}>depths</span> of the human
        soul
      </h1>
      <p className={css.p}>
        We help you to reveal your potential, overcome challenges and find a
        guide in your own life with the help of our experienced psychologists.
      </p>
      <a href="/psychologists" className={css.link}>
        Get started
      </a>
    </div>
  );
}

export default HomePage;
