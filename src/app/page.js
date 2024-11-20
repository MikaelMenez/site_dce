export default function Home() {
  return (
<>

<section className="relative bg-sky-500 text-white">
  <div className="container mx-auto text-center py-80 px-6">
    {/* Texto que ocupa o painel */}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
      <h2 className="text-5xl font-extrabold mb-6 leading-tight">
        Bem-vindo ao Diretório Central dos Estudantes
      </h2>
      <p className="text-2xl mb-8 max-w-2xl mx-auto">
        Representando e defendendo os interesses dos estudantes!
      </p>
      <div className="mt-6">
        <button className="bg-white text-sky-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-200 transition">
          Saiba Mais
        </button>
      </div>
    </div>

    {/* Imagem de fundo */}
    <div className="absolute inset-0 opacity-80">
      <img
        src="/images/panel.png"
        alt="Imagem de fundo do DCE"
        className="object-cover w-full h-full"
      />
    </div>
  </div>
  {/* Gradiente de transição suave */}
  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-sky-500 to-transparent"></div>
</section>


<section className="py-6 sm:py-12 dark:bg-sky-500 dark:text-gray-800">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Notícias</h2>
			<a href='#'><p className="font-serif text-sm dark:text-gray-600" style={{textDecorationLine: 'underline'}}>ver mais</p></a>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>June 1, 2020</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?2" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>June 2, 2020</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?3" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>June 3, 2020</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?4" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>June 4, 2020</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>

</>
  );
}
