import Logo from "../assets/icon/Picture5.png";

const Ingredient = () => {
  return (
    <section id="komposisi">
      <div
        className="imgIng"
        data-aos="fade-right"
        data-aos-offset="400"
        data-aos-duration="1700"
      >
        <img src={Logo} />
      </div>
      <div className="teksIng">
        <div className="judulIng">
          <h1>#build with</h1>
        </div>
        <div className="subJudulIng">
          <p>Lorem dasmkmdkmasmdkasmkasmm</p>
        </div>
      </div>
    </section>
  );
};

export default Ingredient;
