export default function Footer(){
    return(
        <footer className="bg-gray-900 text-white py-12">
  <div className="container mx-auto px-6 sm:px-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      {/* Logo UFPB */}
      <div className="flex justify-center md:justify-start">
        <img
          src="/images/logoufpb.png" // Substitua pelo caminho correto do logo da UFPB
          alt="Logo UFPB"
          className="h-40"
        />
      </div>

      {/* Logo DCE e Gestão */}
      <div className="flex justify-center md:justify-start items-center space-x-4">
        <img
          src="/images/logodce.png" // Substitua pelo caminho correto do logo do DCE
          alt="Logo DCE"
          className="h-20"
        />
        <img
          src="/images/renova.jpg" // Substitua pelo caminho correto do logo da gestão
          alt="Logo Gestão"
          className="h-20"
        />
      </div>

      {/* Informações de Contato */}
      <div className="text-sm space-y-4">
        <p>&copy; {new Date().getFullYear()} DCE UFPB. Todos os direitos reservados.</p>
        <p>Cidade Universitária, Prédio do DCE - Conj. Pres. Castelo Branco III, João Pessoa - PB, 58050-585</p>
        <p>
          <a
            href="mailto:co.geral.dce.ufpb@gmail.com"
            className="text-sky-400 hover:underline"
          >
            co.geral.dce.ufpb@gmail.com
          </a>
        </p>
        <p>
          <a
            href="https://www.instagram.com/dceufpb.oficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:underline"
          >
            @dceufpb.oficial
          </a>
        </p>
      </div>
    </div>
  </div>
</footer>
    )
}