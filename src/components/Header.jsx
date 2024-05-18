import logo from "/logo.svg"
import whatsapp from "/whatsapp.svg"

const Header = () => {
  return (
    <header className="header_content">
      <img className="header_logo" src={logo} alt="" />
      <a 
        href="https://wa.me/2224586636"
        target="_blank"
      >
        <img className="whatsapp" src={whatsapp} alt="icon whatsapp" />
      </a>

    </header>
  )
}

export default Header