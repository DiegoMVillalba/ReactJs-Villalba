


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
                
                
                
                
              </li>
              <li>
                
                  <i className="fa-brands fa-facebook-f"></i>
                
              </li>
            </ul>
          </div>
          <div className="sec quickLinks">
            <h2>ACCESOS RAPIDOS</h2>
            <ul>
              <li>
                Home
              </li>
              <li>
                Hombre
              </li>
              <li>
                Mujer
              </li>
              <li>
                Nosotros
              </li>
              <li>
               
                  Politicas de devolucion
                
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
                  +5491151791994
                  +5491154846574
                </p>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <p>
                  
                    kuma.fitwear@gmail.com
                  
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
