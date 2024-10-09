import logo from '../assets/logo.png';

export default () => (`
  <footer class="bg-gray-800">
    <div class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
      <div class="lg:flex lg:items-end lg:justify-between">
        <div class="flex flex-col items-center text-pink-300 lg:items-start">
          <img src="${logo}" alt="Logo" class="h-12 mb-4" />
          <div class="mb-4">
            <a href="https://www.linkedin.com/in/keanu-richard-57b6412a6/" class="mr-4 text-pink-200 hover:text-pink-100">LinkedIn</a>
            <a href="https://github.com/keilua" class="text-pink-200 hover:text-pink-100">GitHub</a>
          </div>
          <div class="mb-4 text-pink-200">
            <p>Email: <span id="email">keilua.richard@email.com</span></p>
            <p>Téléphone: <span id="phone">+33 6 67 07 02 99</span></p>
          </div>
          <a class="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-500" href="mailto:keilua.richard@email.com">Contact</a>
        </div>
      </div>
    </div>
  </footer>
`);
