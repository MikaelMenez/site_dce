import Link from 'next/link';


export default function Navbar() {
  return (
    <>
      <nav style={{ backgroundColor: "#111827" }}>
        <div className="wrapper">
        <div className="logo">
          <Link href="/">
            <img src="/images/logodce.png" alt="Logo do DCE" className="h-12 cursor-pointer" />
          </Link>
        </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <i className="fas fa-times"></i>
            </label>

            <li>
              <a href="#manual-dos-feras">Manual do Fera</a>
            </li>
            <li>
              <a href="#noticias">Representação Estudantil</a>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeAJQj4mPjLNkAA0QMwbcNYTAveXd0N72jc3QrOwzYqTMd6QA/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Carteirinha
              </a>
            </li>
            <li>
              <a href="#noticias">Notícias</a>
            </li>
            <li>
              <a href="#contatos">Contatos</a>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScAbN1ze1ad34cUflvi8gISjJ8IfU0qBdBrJi-tT7yF_T5VEw/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ouvidoria
              </a>
            </li>

            {/* Dropdown Menu */}
            <li>
              <a href="#" className="desktop-item">Conselhos Superiores</a>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">Conselhos Superiores</label>
              <ul className="drop-menu">
                <li><a href="/consuni">CONSUNI</a></li>
                <li><a href="/consepe">CONSEPE</a></li>
              </ul>
            </li>

            {/* Mega Menu */}
            <li>
              <a href="#" className="desktop-item">Diretorias</a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">Diretorias</label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img src="/images/renova.jpg" alt="" />
                  </div>
                  <div className="row">
                    <header>Organização e Gestão</header>
                    <ul className="mega-links">
                      <li><a href="#">Organização</a></li>
                      <li><a href="#">Finanças e Patrimonio</a></li>
                      <li><a href="#">Comunicação</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Desenvolvimento Estudantil</header>
                    <ul className="mega-links">
                      <li><a href="#">Integração Estudantil</a></li>
                      <li><a href="#">Assistência e Promoção Estudantil</a></li>
                      <li><a href="#">Ensino, Pesquisa e Extensão</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Cultura e Reinvindicações</header>
                    <ul className="mega-links">
                      <li><a href="#">Opressões</a></li>
                      <li><a href="#">Assuntos Acadêmicos, Formação Política e Movimentos Sociais</a></li>
                      <li><a href="#">Cultura, Esporte e Eventos</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <i className="fas fa-bars"></i>
          </label>
        </div>
      </nav>
    </>
  );
}
