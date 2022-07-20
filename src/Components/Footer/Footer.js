


const Footer = () => {
  return (
    <>
      <footer className=" pie">
        <div className="container">
          <div className="sec nosotros">
            <h2>SOBRE NOSOTROS</h2>
            <p>
              Somos una pareja amante del deporte en busca de calidad y confort
              a la hora de entrenar. De ahi surge Kuma, quisimos crear una
              tienda donde puedas encontrar las mejores marcas en un solo lugar.
            </p>
            <ul className="sci">
              <li>
                <a href="https://www.instagram.com/kuma.fitwear/">
                
                
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/Kuma.Fitwear/">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="sec quickLinks">
            <h2>ACCESOS RAPIDOS</h2>
            <ul>
              <li>
                <a href="./index.html">Home</a>
              </li>
              <li>
                <a href="./pagina/hombre.html">Hombre</a>
              </li>
              <li>
                <a href="./pagina/mujer.html">Mujer</a>
              </li>
              <li>
                <a href="./pagina/quienes-somos.html">Nosotros</a>
              </li>
              <li>
                <a href="./pagina/Politicas-devolucion.html">
                  Politicas de devolucion
                </a>
              </li>
            </ul>
          </div>
          <div className="sec contacto">
            <h2>CONTACTO</h2>
            <ul className="info">
              <li>
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span>Av. San Martín, C1419 CABA Argentina</span>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>
                <p>
                  <a href="tel:5491151791994">+5491151791994</a>
                  <a href="tel:5491151791994">+5491154846574</a>
                </p>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <p>
                  <a href="mailto:kuma.fitwear@gmail.com">
                    kuma.fitwear@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyrightText">
        <p>
          Copyright &copy 2022. Todos los derechos reservados. Hecho por Diego
          Villalba
        </p>
      </div>
    </>
  );
};

export default Footer;
