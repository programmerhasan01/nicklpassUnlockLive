import styles from "../../styles/Hero.module.css";
const Hero = ({ title, subTitle }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <div>
          <h1>{title}</h1>
          <p>{subTitle}</p>
        </div>
      </div>
      <div className={styles.heroRight}>
        <img src="./Vector.png" alt="" />
        <img src="./semicirclepair2.png" alt="" />
        <img src="./square-small.png" alt="" />
        <img src="./circleLine.png" alt="" />
        <img src="./abstract4.png" alt="" />
        <img src="./circle-con3.png" alt="" />
        <img src="./rect.png" alt="" />
        <img src="./fill_circle.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
