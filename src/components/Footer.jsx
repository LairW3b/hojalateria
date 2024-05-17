
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_info">
        <img
          className="footer_img"
          src="phone-solid.svg"
          alt="icon number phone"
        />
        <a href="tel:00000000">22-22-22-22-22</a>
      </div>

      <div className="footer_info">
        <img
          src="mapsPin.svg"
          alt="icono ubicación"
          className="footer_img"
        />
        <a
          href="https://www.google.com.mx/maps/place/Marisquer%C3%ADa+Don+Cangrejo/@19.0683728,-98.1229337,15z/data=!4m6!3m5!1s0x85cfea6f7443f1e5:0x87b94938b6af062d!8m2!3d19.069923!4d-98.1195737!16s%2Fg%2F1pzscbhnv?entry=ttu"
          target="_blank"
        >
          Visitanos
        </a>
      </div>
    </footer>
  )
}

export default Footer