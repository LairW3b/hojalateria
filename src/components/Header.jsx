import logo from "/logo.svg"
import whatsapp from "/whatsapp.svg"

const Header = () => {
  return (
    <header className="header_content">
      <img className="header_logo" src={logo} alt="" />
      <a href="tel:2222222">
        <img className="whatsapp" src={whatsapp} alt="" />
      </a>

    </header>
  )
}

export default Header