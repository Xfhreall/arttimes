import logo from "../assets/asset logo/logo.png";

const Navtop = () => {
  return (
    <div>
      <nav data-aos="fade-down" data-aos-duration="2300" className="wrapper">
        <ul className="navigation">
          <div id="logo">
            <a href=".">
              <img src={logo} alt="gambar" />
            </a>
          </div>
          <li>
            <a href="#beranda">Beranda</a>
          </li>
          <li>
            <a href="#tentang">Tentang</a>
          </li>
          <li>
            <a href="#produk">Karya</a>
          </li>
          <li>
            <a className="hubungi" href="#hubungi">
              Hubungi
            </a>
          </li>
        </ul>
      </nav>
      <nav
        data-aos="fade-down"
        data-aos-offset="1300"
        data-aos-duration="300"
        className="wrapper2"
      >
        <ul className="navigation">
          <div id="logo">
            <a href=".">
              <img src={logo} alt="gambar" />
            </a>
          </div>
          <li>
            <a href="#beranda">Beranda</a>
          </li>
          <li>
            <a href="#tentang">Tentang</a>
          </li>
          <li>
            <a href="#produk">Karya</a>
          </li>
          <li>
            <a className="hubungi" href="#hubungi">
              Hubungi
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navtop;
