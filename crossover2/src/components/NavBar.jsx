import style from '../styles/NavBar.module.css';
import Logo from '../public/logo/logo.gif';
import imgSearch from '../public/icon/search.png';

function NavBar () {
  return (
    <div className={style.navContainer}>
      <nav className={style.nav}>
        <img className={style.logo} src={Logo} alt="logo" />
        <div className={style.navLinks} >
          <h1 className={style.navLink}>Home</h1>
          <h1 className={style.navLink}>Product</h1>
          <h1 className={style.navLink}>Promo</h1>
          <h1 className={style.navLink}>About</h1>
          <h1 className={style.navLink}>Contact</h1>
        </div>
        <img src={imgSearch} alt="search" className={style.search} />
      </nav>
    </div>
  )
}

export default NavBar;