import style from '../styles/Footer.module.css';
import imgInstagram from '../public/logo/Instagram.gif';
import imgFacebook from '../public/logo/Facebook.gif';
import imgTwitter from '../public/logo/Twitter.gif';
import imgWhatsApp from '../public/logo/WhatsApp.gif';

function Footer () {
  return (
    <div className={style.container}>
      <div className={style.musContainer}>
        <h1 className={style.musHeading}>MUSICOLOGY</h1>
        <p className={style.musText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae praesentium veniam ipsum, reiciendis et, dolores nostrum fuga quisquam</p>
        <div className={style.iconContainer}>
          <img className={style.icon} src={imgInstagram} alt="Instagram" />
          <img className={style.icon} src={imgFacebook} alt="Facebook" />
          <img className={style.icon} src={imgTwitter} alt="Twitter" />
          <img className={style.icon} src={imgWhatsApp} alt="WhatsApp" />
        </div>
      </div>
      <div className={style.aboutContainer}>
        <h1 className={style.aboutHeading}>ABOUT</h1>
        <div>
          <p className={style.pList}>History</p>
          <p className={style.pList}>Our Team</p>
          <p className={style.pList}>Brand Guidelines</p>
          <p className={style.pList}>Terms & Condition</p>
          <p className={style.pList}>Privacy Policy</p>
        </div>
      </div>
      <div className={style.servicesContainer}>
        <h1 className={style.servicesHeading}>SERVICES</h1>
        <div>
          <p className={style.pList}>How to Order</p>
          <p className={style.pList}>Our Product</p>
          <p className={style.pList}>Order Status</p>
          <p className={style.pList}>Promo</p>
          <p className={style.pList}>Payment Method</p>
        </div>
      </div>
        <div className={style.otherContainer}>
          <h1 className={style.otherHeading}>OTHER</h1>
          <div>
            <p className={style.pList}>Contact Us</p>
            <p className={style.pList}>Help</p>
            <p className={style.pList}>Privacy</p>
          </div>
        </div>
    </div>
  )
}

export default Footer;