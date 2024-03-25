import style from '../styles/Subscribe.module.css';
import imgBackground from '../public/bg/subscribe.jpg';

function Subscribe () {
  return (
    <div className={style.container} style={{backgroundImage: `url(${imgBackground})`}}>
      <div className={style.subscribe}>
        <img src="crossover2/src/public/bg/subscribe.jpg" alt="" />
      <h1 className={style.heading}>Subscribe</h1>
      <p className={style.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
      <input className={style.input} type="email" placeholder="Your Email" />
      <button className={style.button}>Subscribe</button>
    </div>
    </div>
  )
}

export default Subscribe;