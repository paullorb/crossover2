import style from '../styles/Subscribe.module.css';
import imgBackground from '../public/bg/subscribe.jpg';

function Subscribe () {
  return (
    <div className={style.container} style={{backgroundImage: `url(${imgBackground})`}}>
      <div classname={style.subscribe}>
        <img src="crossover2/src/public/bg/subscribe.jpg" alt="" />
      <h1>Subscribe</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
      <input type="email" placeholder="Your Email" />
      <button>Subscripe</button>
    </div>
    </div>
  )
}

export default Subscribe;