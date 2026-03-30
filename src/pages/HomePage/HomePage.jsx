import { Link } from "react-router";
import arrowIcon from "../../assets/icons/Arrow 16.svg";
import { useState } from "react";
import css from "./HomePage.module.css";
function HomePage() {
  const [url, setUrl] = useState("");
  const [qrSrc, setQrSrc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setQrSrc(
      `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(url)}`,
    );
  };

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
      <div className={css.qrSection}>
        <h2 className={css.qrSectionTitle}>Share this website</h2>

        <form onSubmit={handleSubmit}>
          <input
            className={css.qrSectionInput}
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL to generate QR"
          />
          <button className={css.qrSectionBtn} type="submit">
            Generate QR
          </button>
        </form>
        <p className={css.qrSectionText}>Enter any URL to generate a QR code</p>
        {qrSrc && (
          <img className={css.qrSectionImg} src={qrSrc} alt="QR Code" />
        )}
      </div>
    </div>
  );
}

export default HomePage;
