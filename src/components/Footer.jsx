
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_info">
        <img
          className="footer_img"
          src="phone-solid.svg"
          alt="icon number phone"
        />
        <a href="tel:2224586636">22-24-58-66-36</a>
      </div>

      <div className="footer_info">
        <img
          src="mapsPin.svg"
          alt="icono ubicación"
          className="footer_img"
        />
        <a
          href="https://www.google.com.mx/maps/place/Av+14+Ote+4203,+Zona+Sin+Asignaci%C3%B3n+de+Nombre+de+Col+41,+Am%C3%A9rica+Sur,+72340+Heroica+Puebla+de+Zaragoza,+Pue./@19.0437738,-98.1665412,17z/data=!3m1!4b1!4m6!3m5!1s0x85cfc04f9d41a173:0x64577becbd0642d4!8m2!3d19.0437687!4d-98.1639663!16s%2Fg%2F11jk4nhb5b?entry=ttu"
          target="_blank"
        >
          Visitanos
        </a>
      </div>
    </footer>
  )
}

export default Footer