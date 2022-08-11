import logo from "../assets/asset logo/logo.png";

const Navtop = () => {
  return (
    <div>
      <nav data-aos="fade-down" data-aos-duration="2300" className="wrapper">
        <div id="logo">
          <a href=".">
            <img src={logo} alt="gambar" />
          </a>
        </div>
        <ul className="navigation">
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
          <li>
            {/* eslint-disable-next-line */}
            <a className="aktif" id="themetoggle" onClick={() => theme()}>
              🌙
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
        <div id="logo">
          <a href=".">
            <img src={logo} alt="gambar" />
          </a>
        </div>
        <ul className="navigation">
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
          <li>
            {/* eslint-disable-next-line */}
            <a className="aktif" id="theme2" onClick={() => theme2()}>
              🌙
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

function theme() {
  let themes = document.querySelector("#themetoggle");
  themes.onclick = () => {
    document.body.classList.toggle("light-theme");
  };
}

function theme2() {
  let themes2 = document.querySelector("#theme2");

  themes2.onclick = () => {
    document.body.classList.toggle("light-theme");
  };
}

export default Navtop;
