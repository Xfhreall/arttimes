const LinkHero = () => {
  return (
    <section className="linkHero">
      <div className="linkList">
        <ul>
          <li>
            <p> Author :</p>
          </li>
          <li>
            <a
              data-aos="fade-right"
              data-aos-offset="0"
              data-aos-duration="1400"
              data-aos-delay="1400"
              href="#tentang"
            >
              Profil
            </a>
          </li>
          <li
            className="line"
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-duration="1400"
            data-aos-delay="800"
          >
            |
          </li>
          <li>
            <a
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-duration="1400"
              data-aos-delay="1000"
              href="#produk"
            >
              Projek
            </a>
          </li>
          <li
            className="line"
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-duration="1400"
            data-aos-delay="800"
          >
            |
          </li>
          <li>
            <a
              data-aos="fade-left"
              data-aos-offset="0"
              data-aos-duration="1400"
              data-aos-delay="1400"
              href="#hubungi"
            >
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LinkHero;
