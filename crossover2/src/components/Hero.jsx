import style from '../styles/Hero.module.css'
import imgBackground from '../public/img/hero.jpg'

function Hero () {
  return (
    <div className={style.container}>
      <img src={imgBackground} alt="Hero" className={style.imgBackground} />
      <div className={style.titleContainer}>
        <h1 className={style.title}>Musicology</h1>
      </div>
      <div className={style.subtitleContainer}>
        <p className={style.subtitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quibusdam reiciendis quae dolorum odio facere ipsa dolore non, tempore omnis, ullam molestias iusto facilis ducimus officiis animi vel quidem est?</p>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.button}>Register Now</button>
      </div>
    </div>
  )
}

export default Hero;