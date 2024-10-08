import wordpress from '../assets/wordpress.jpg';
import sql from '../assets/sql.jpg';
import python from '../assets/python.jpg';
import php from '../assets/php_logo.jpg';
import linux from '../assets/linux.jpg';
import js from '../assets/js.jpg';
import java from '../assets/java.jpg';
import html from '../assets/html.jpg';
import github from '../assets/github.jpg';
import git from '../assets/git.jpg';
import figma from '../assets/figma.jpg';
import css from '../assets/css.jpg';
import c from '../assets/c.jpg';

export default () => (`
<section class="bg-gray-900 text-white py-12">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold sm:text-4xl">My Skills</h2>
    </div>

    <div class="text-center mb-8">
      <h3 class="text-2xl font-semibold mb-4">Skills</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        <div class="bg-gray-800 p-4 rounded-lg shadow-md text-center">
          <img src="${html}" alt="HTML" class="h-16 mx-auto mb-4">
          <h3 class="text-lg font-semibold">HTML</h3>
        </div>
        <div class="bg-gray-800 p-4 rounded-lg shadow-md text-center">
          <img src="${css}" alt="CSS" class="h-16 mx-auto mb-4">
          <h3 class="text-lg font-semibold">CSS</h3>
        </div>
        <div class="bg-gray-800 p-4 rounded-lg shadow-md text-center">
          <img src="${js}" alt="JavaScript" class="h-16 mx-auto mb-4">
          <h3 class="text-lg font-semibold">JavaScript</h3>
        </div>
        <div class="bg-gray-800 p-4 rounded-lg shadow-md text-center">
          <img src="${python}" alt="Python" class="h-16 mx-auto mb-4">
          <h3 class="text-lg font-semibold">Python</h3>
        </div>
        <div class="bg-gray-800 p-4 rounded-lg shadow-md text-center">
          <img src="${php}" alt="PHP" class="h-16 mx-auto mb-4">
          <h3 class="text-lg font-semibold">PHP</h3>
        </div>
        <div class="bg-gray-800 p-4 rounded-lg shadow-md text-center">
          <img src="${java}" alt="Java" class="h-16 mx-auto mb-4">
          <h3 class="text-lg font-semibold">Java</h3>
        </div>
        <div class="bg-gray-800 p-4 rounded-lg shadow-md text-center">
          <img src="${git}" alt="Git" class="h-16 mx-auto mb-4">
          <h3 class="text-lg font-semibold">Git</h3>
        </div>
        <div class="bg-gray-800 p-4 rounded-lg shadow-md text-center">
          <img src="${figma}" alt="Figma" class="h-16 mx-auto mb-4">
          <h3 class="text-lg font-semibold">Figma</h3>
        </div>
        <div class="bg-gray-800 p-4 rounded-lg shadow-md text-center">
          <img src="${linux}" alt="Linux" class="h-16 mx-auto mb-4">
          <h3 class="text-lg font-semibold">Linux</h3>
        </div>
        <div class="bg-gray-800 p-4 rounded-lg shadow-md text-center">
          <img src="${wordpress}" alt="WordPress" class="h-16 mx-auto mb-4">
          <h3 class="text-lg font-semibold">WordPress</h3>
        </div>
        <div class="bg-gray-800 p-4 rounded-lg shadow-md text-center">
          <img src="${sql}" alt="SQL" class="h-16 mx-auto mb-4">
          <h3 class="text-lg font-semibold">SQL</h3>
        </div>
        <div class="bg-gray-800 p-4 rounded-lg shadow-md text-center">
          <img src="${c}" alt="C" class="h-16 mx-auto mb-4">
          <h3 class="text-lg font-semibold">C</h3>
        </div>
      </div>
    </div>

    <div class="text-center mb-8">
      <h3 class="text-2xl font-semibold mb-4">Software</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        <!-- Vous pouvez ajouter ici des cartes pour les logiciels si nécessaire -->
        <div class="bg-gray-800 p-4 rounded-lg shadow-md text-center">
          <img src="${figma}" alt="Figma" class="h-16 mx-auto mb-4">
          <h3 class="text-lg font-semibold">Figma</h3>
        </div>
        <div class="bg-gray-800 p-4 rounded-lg shadow-md text-center">
          <img src="${wordpress}" alt="WordPress" class="h-16 mx-auto mb-4">
          <h3 class="text-lg font-semibold">WordPress</h3>
        </div>
        <div class="bg-gray-800 p-4 rounded-lg shadow-md text-center">
          <img src="${github}" alt="GitHub" class="h-16 mx-auto mb-4">
          <h3 class="text-lg font-semibold">GitHub</h3>
        </div>
      </div>
    </div>
  </div>
</section>
`);
