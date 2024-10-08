import pc from '../assets/pc.jpg';

export default () => (`
<section
  class="relative bg-cover bg-center bg-no-repeat"
  style="background-image: url(${pc});"
>
  <div
    class="absolute inset-0 bg-gray-900/75"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 class="text-3xl font-extrabold text-white sm:text-5xl">
        Welcome to My Portfolio
      </h1>

      <p class="mt-4 max-w-lg text-white sm:text-xl/relaxed">
        I am thrilled to showcase my work and skills in web development. Explore my projects and learn more about what I can offer!
      </p>
    </div>
  </div>
</section>
`);
