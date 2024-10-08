import keanuImage from '../assets/keanu.jpg';

export default () => (`
<article class="bg-gray-800 p-4 rounded-lg shadow-md text-center flex items-center space-x-4">
  <img
    alt="Keanu Richard"
    src="${keanuImage}"
    class="h-32 w-32 rounded-full object-cover shadow-md"
  />

  <div class="flex-1">
    <h3 class="text-xl font-semibold text-white">Keanu Richard</h3>
    <p class="mt-2 text-sm text-gray-300">
      Je suis Keanu Richard, un étudiant en B2 à Coda, passionné par le développement Web. Actuellement à la recherche d'alternances pour ma B2, je crée des jeux en JavaScript. Découvrez mes projets sur GitHub et LinkedIn.
    </p>

    <div class="mt-4">
      <a 
        href="../assets/cv_keanu.pdf" 
        download 
        class="inline-block px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
        Télécharger CV
      </a>
    </div>
  </div>
</article>
`);
