import style from '../styles/AmazingDance.module.css';
import imgBackground from '../public/bg/amazingDanceBg.jpg';

function AmazingDance () {
  return (
    <div className={style.Container} style={{backgroundImage: `url(${imgBackground})`}}>
      <div className={style.amazingDanceImage}>
      <img src="./src/public/img/amazingDance.jpg" alt="Amazing Dance" />
     </div> 
     <div className={style.amazingDanceContainer}>
      <img src="./src/public/bg/amazingDanceBg.jpg" alt="" />
      <h1>Amazing Dance</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
      <button> Read More</button>
      </div>
    </div>
  )
}

export default AmazingDance;