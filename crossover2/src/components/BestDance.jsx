import style from '../styles/BestDance.module.css';
import imgBackground from '../public/bg/bestDanceBg.jpg';

function BestDance () {
  return (
    <div className={style.Container} style={{backgroundImage: `url(${imgBackground})`}}>
      
        <div className={style.bestDanceContainer}>
          <h1 className={style.heading}>Best Dance</h1>
          <p className={style.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
          <button className= {style.bestDanceButton}> Read More</button>
       </div>
       <div className={style.imageContainer}> 
       <img className={style.bestDanceImage} src="./src/public/img/bestDance.jpg" alt="best Dance" />
       </div>     
     
    </div>
  )
}

export default BestDance;
