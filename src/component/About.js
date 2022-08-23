import logo from "../assets/asset logo/logo.png";
import "../styling/css/aboutPage.css";

const About = () => {
  return (
    <div>
      <section id="tentang">
        <div className="isi">
          <div className="titleA">
            <h1 data-aos="fade-down" data-aos-once="true">
              Tentang Kami
            </h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
            className="isiTentang"
          >
            <div className="teksTentang">
              <img
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="2000"
                data-aos-once="true"
                src={logo}
                alt=""
              />
              <p
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                Adalah salah satu ekskul di pondok pesantren modern Ar-Rahmat
                yang berkecimpung dibidang literasi. <br />
                Art Times mulai dibentuk pada tahun 2016 dengan karya pertamanya
                yang berjudul <strong>"ART TIMES #1 Kami Kembali"</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
