const HeroPage = () => {
  return (
    <section id="beranda">
      <div
        className="hero-content"
        data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-duration="1700"
        data-aos-delay="500"
      >
        <h1 className="hero-title">Art Times</h1>

        <h2 className="hero-subtitle">
          Halaman Web Art Times<br></br>"The Source Of Ar-Rahmat Information"
        </h2>

        <div className="button" id="button-3">
          <div id="circle"></div>
          <a href="#tentang">Telusuri</a>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
