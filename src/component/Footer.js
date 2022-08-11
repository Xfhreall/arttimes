const Footer = () => {
  return (
    <footer className="footerPage">
      <div className="container">
        <div className="row">
          <div
            className="footer-col"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <h4>Art Times</h4>
            <ul>
              <li>
                <a href="#beranda">homepage</a>
              </li>
              <li>
                <a href="#tentang">about us</a>
              </li>
              <li>
                <a href="#produk">product</a>
              </li>
              <li>
                <a href="#hubungi">contact</a>
              </li>
            </ul>
          </div>
          <div
            className="footer-col"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            {/* eslint-disable-next-line */}
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="author">
          <p data-aos="fade-up" data-aos-duration="700" data-aos-offset="-15">
            Made with ❤ by @RisqiFahreal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
