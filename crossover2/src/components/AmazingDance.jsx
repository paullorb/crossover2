import style from '../styles/AmazingDance.module.css';
import imgBackground from '../public/bg/amazingDanceBg.jpg';

function AmazingDance () {
  return (
    <div className={style.Container} style={{backgroundImage: `url(${imgBackground})`}}>
      <div className={style.amazingDanceImage}>
      <img className={style.imageLeft} src="./src/public/img/amazingDance.jpg" alt="Amazing Dance" />
     </div> 
     <div className={style.amazingDanceContainer}>
      <img className={style.imageLeft} src="./src/public/bg/amazingDanceBg.jpg" alt="" />
      <h1 className={style.heading}>Amazing Dance</h1>
      <p className={style.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
      <button className={style.button}> Read More</button>
      </div>
    </div>
  )
}

export default AmazingDance;