import style from '../styles/NavBar.module.css';

function NavBar () {
  return (
    <nav className={style.navContainer}>
      <h1>Logo</h1>
      <div className={style.navLinks} >
        <h1>Home</h1>
        <h1>Product</h1>
      </div>
    </nav>
  )
}

export default NavBar;