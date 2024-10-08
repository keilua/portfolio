import keanuImage from '../assets/keanu.jpg';

export default () => (`
<article class="flex items-center space-x-4 p-4 bg-white shadow-lg rounded-lg">
  <img
    alt="Keanu Richard"
    src="${keanuImage}"
    class="h-32 w-32 rounded-full object-cover shadow-md"
  />

  <div class="flex-1">
    <h3 class="text-xl font-semibold text-gray-900">Keanu Reeves</h3>
    <p class="mt-2 text-sm text-gray-600">
      dev web
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
