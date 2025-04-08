export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Logo UFPB a esquerda */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img
              src="/images/logoufpb.png"
              alt="Logo UFPB"
              className="h-32"
            />
          </div>

          {/* Logo DCE + Gestão centralizado */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src="/images/dcelogo.png"
                alt="Logo Gestão"
                className="h-28 w-auto rounded shadow-lg"
              />
            </div>
            <p className="text-sm text-gray-100 text-center">Gestão Renova DCE</p>
          </div>

          {/* Contato alinhado à direita */}
          <div className="text-sm space-y-3 text-gray-300 text-right">
            <p>&copy; {new Date().getFullYear()} DCE UFPB. Todos os direitos reservados.</p>
            <p>
              Cidade Universitária, Prédio do DCE<br />
              Conj. Pres. Castelo Branco III<br />
              João Pessoa - PB, 58050-585
            </p>
            <p>
              📧{' '}
              <a
                href="mailto:co.geral.dce.ufpb@gmail.com"
                className="text-sky-400 hover:underline"
              >
                co.geral.dce.ufpb@gmail.com
              </a>
            </p>
            <p>
              📸{' '}
              <a
                href="https://www.instagram.com/dceufpb.oficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline"
              >
                @dceufpb.oficial
              </a>
            </p>
            <p>
              ❓{' '}
              <a
                href="./faq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline"
              >
                Perguntas frequentes
              </a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
