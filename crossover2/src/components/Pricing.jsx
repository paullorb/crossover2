import style from '../styles/Pricing.module.css';
import imgBackground from '../public/bg/pricing.jpg';
import imgMedaille from '../public/logo/pricing.gif';

function Pricing () {
  return (
    <div className={style.container}>
      <img src={imgBackground} alt="background" className={style.background} />
      <div className={style.headingContainer}>
        <h1 className={style.heading}>Pricing</h1>
      </div>
      <div className={style.paragraphContainer}>
        <p className={style.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.</p>
      </div>
    <div className={style.cardContainer}>
      <div className={style.card}>
        <img src={imgMedaille} alt="medaille" className={style.cardImage} />
        <h2 className={style.cardHeading}>Basic</h2>
        <p className={style.cardParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className={style.cardButton}>$150.00</button>
      </div>
      <div className={style.card}>
      <img src={imgMedaille} alt="medaille" className={style.cardImage} />
        <h2 className={style.cardHeading}>Pro</h2>
        <p className={style.cardParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className={style.cardButton}>$200.00</button>
      </div>
      <div className={style.card}>
      <img src={imgMedaille} alt="medaille" className={style.cardImage} />
        <h2 className={style.cardHeading}>Premium</h2>
        <p className={style.cardParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className={style.cardButton}>$250.00</button>
      </div>
    </div>
    </div>
  )
}

export default Pricing;