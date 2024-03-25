import style from '../styles/DanceTour.module.css';
import imgBackground from '../public/bg/danceTourBg.jpg';
import imgAmerica from '../public/img/america.jpg';
import imgAsia from '../public/img/asia.jpg';
import imgAustralia from '../public/img/australia.jpg';


function DanceTour () {
  return(
    <div className={style.container} style={{backgroundImage: `url(${imgBackground})`}}>
      <h1 className={style.heading}>DANCE TOUR</h1>
      <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti rem fuga </p>
    <div className={style.cardContainer}>
      <div className={style.card}>
        <img src={imgAmerica} alt="America" className={style.cardImg}/>
        <div className={style.overlay}>
          <h1 className={style.cardHeading}>America</h1>
          <p className={style.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti rem fuga</p>
        </div>
      </div>
      <div className={style.card}>
        <img src={imgAsia} alt="Asia" className={style.cardImg}/>
        <div className={style.overlay}>
          <h1 className={style.cardHeading}>Asia</h1>
          <p className={style.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti rem fuga</p>
      </div>
      </div>
      <div className={style.card}>
        <img src={imgAustralia} alt="Australia" className={style.cardImg}/>
        <div className={style.overlay}>
          <h1 className={style.cardHeading}>Australia</h1>
          <p className={style.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti rem fuga</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default DanceTour;