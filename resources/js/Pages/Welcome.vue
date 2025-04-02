<template>
  <Head title="SGX · Representantes Oficiales de ANKAI en Chile">
    <link rel="icon" type="image/x-icon" href="/favicon.ico?v=4" />
  </Head>

  <div class="bg-white text-gray-900">
    <!-- Header -->
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#inicio" class="-m-1.5 p-1.5">
            <span class="sr-only">SGX</span>
            <img class="h-12 w-auto" src="/img/logo.png" alt="SGX Logo" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm font-semibold text-white hover:text-indigo-400"
          >
            {{ item.name }}
          </a>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div class="flex items-center justify-between">
            <a href="#inicio" class="-m-1.5 p-1.5">
              <img class="h-12 w-auto" src="/img/sgx.png" alt="SGX Logo" />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-400"
              @click="mobileMenuOpen = false"
            >
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6">
            <div class="-my-6 divide-y divide-gray-500/25">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-800"
                >
                  {{ item.name }}
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <main>
      <!-- Hero Section -->
      <section id="inicio" class="relative isolate overflow-hidden bg-gray-900 pb-28 pt-36 sm:pb-40">
        <!-- Imagen de fondo -->
        <img
          src="/img/hero.png"
          alt="Bus con ANKAI en carretera"
          class="absolute inset-0 -z-10 w-full h-full object-cover opacity-50 rounded-b-3xl"
        />
        <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 class="text-5xl font-bold tracking-tight text-white sm:text-6xl leading-tight mb-8">
            Representantes oficiales <br />
            de
            <img
              src="/img/ankai.png"
              alt="ANKAI"
              class="inline-block align-middle w-80 h-auto mx-0"
            />
            en Chile.
          </h1>
          <p class="mt-10 text-lg font-bold leading-8 text-white mb-12">
            Impulsamos una nueva era en el transporte público inteligente con un sistema de telemetría de clase mundial.
          </p>
          <div class="mt-28 flex justify-center gap-x-6">
            <a
              href="#contacto"
              class="rounded-md bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-400 focus:outline-none"
            >
              Contáctanos
            </a>
            <a href="#Electromovilidad" class="text-sm font-semibold text-white hover:underline">
              Conoce la Electromovilidad <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Sección: Sobre SGX -->
<section id="sobre" class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-5xl px-6 text-center">
    <h2 class="text-3xl font-bold text-gray-900">
      Sobre
      <img src="/img/sgx.png" alt="SGX" class="inline-block align-middle w-32 h-auto mx-0" />
    </h2>
    <p class="mt-4 text-lg text-gray-700">
      SGX es una empresa chilena líder en movilidad sustentable y representante oficial de
      <span class="text-red-500 font-bold">ANKAI</span>, un fabricante global que produce más de <strong>15,000 autobuses</strong> al año y tiene presencia en casi <strong>100 países</strong>. Con amplia experiencia en el mercado local, SGX integra tecnología de telemetría, conectividad vehicular y análisis avanzado para optimizar la operación y seguridad de flotas.
    </p>
  </div>
</section>

      <!-- Sección: Electromovilidad -->
<section id="Electromovilidad" class="bg-gray-50 py-24 sm:py-32">
  <div class="mx-auto max-w-5xl px-6 text-center">
    <h2 class="text-3xl font-bold text-gray-900">Electromovilidad</h2>
    <p class="mt-4 text-lg text-gray-700">
      Chile es pionero en la adopción de autobuses eléctricos en Latinoamérica, con más de 
      <strong>2.480 unidades</strong> en operación y un ambicioso objetivo de descarbonizar el 100% del transporte público para 2035. Este cambio está transformando ciudades como Santiago, Antofagasta y La Serena.
    </p>
    <p class="mt-4 text-lg text-gray-700">
      Gracias a la tecnología de ANKAI, reconocida mundialmente por su alta autonomía y eficiencia energética, SGX impulsa soluciones de movilidad sustentable que reducen costos operativos, mejoran la calidad del servicio y cumplen con las normativas ambientales más exigentes.
    </p>
  </div>
</section>




      <!-- Sección: Productos ANKAI -->
      <section id="productos" class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-5xl px-6 text-center">
          <h2 class="text-3xl font-bold text-gray-900">
            Productos <span class="text-red-500 font-bold">ANKAI</span>
          </h2>
          <p class="mt-4 text-lg text-gray-700">
            SGX es representante oficial de ANKAI, una de las marcas líderes en autobuses eléctricos a nivel mundial. Descubra nuestra gama de vehículos diseñados para el transporte público y privado:
          </p>
          <ul class="mt-6 text-lg text-gray-700 list-disc list-inside">
            <li>
              <strong>Buses Urbanos 12m:</strong> Ideales para rutas de alto volumen, con capacidad para 90 pasajeros, piso bajo y tecnología de seguridad avanzada.
            </li>
            <li>
              <strong>Midibuses 8–9m:</strong> Perfectos para el transporte de personal en industrias de minería y construcción, con autonomía de hasta 320 km.
            </li>
            <li>
              <strong>Minibuses 6m:</strong> Compactos y maniobrables, ideales para recorridos locales y zonas de difícil acceso.
            </li>
          </ul>
          <p class="mt-4 text-lg text-gray-700">
            Cada modelo incorpora tecnología de vanguardia, eficiencia energética y altos estándares de seguridad, garantizando calidad y confiabilidad en cada proyecto.
          </p>
        </div>
      </section>

      <!-- Sección: Sistema de Telemetría (Dinámica) -->
      <section id="telemetria" class="bg-gray-50 py-24 sm:py-32">
        <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <!-- Fondo dinámico con SVG -->
          <div class="absolute inset-0 -z-10 overflow-hidden">
            <svg
              class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern id="telemetry-pattern" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  stroke-width="0"
                />
              </svg>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#telemetry-pattern)" />
            </svg>
          </div>

          <!-- Grid principal en dos columnas -->
          <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
          >
            <!-- Columna izquierda: Encabezado y descripción -->
            <div
              class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
            >
              <div class="lg:pr-4">
                <div class="lg:max-w-lg">
                  <p class="text-base/7 font-semibold text-indigo-600">Tecnología líder</p>
                  <h1 class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Sistema de Telemetría Avanzado
                  </h1>
                  <p class="mt-6 text-xl/8 text-gray-700">
                    Controle su flota en tiempo real con nuestra plataforma en la nube. Gracias a la tecnología de ANKAI, pionera mundialmente por su mayor autonomía en buses eléctricos, optimice rutas, reduzca costos y mejore la seguridad de sus operaciones.
                  </p>
                </div>
              </div>
            </div>

            <!-- Columna derecha: Imagen sticky -->
            <div
              class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
            >
              <img
                class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                alt="Panel de Telemetría"
              />
            </div>

            <!-- Detalle de funcionalidades y ventajas -->
            <div
              class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
            >
              <div class="lg:pr-4">
                <div class="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                  <p>
                    Nuestra solución de telemetría le permite monitorear cada aspecto de su flota: desde el estado de las baterías y el consumo de energía, hasta el análisis del comportamiento de conducción.
                  </p>
                  <ul role="list" class="mt-8 space-y-8 text-gray-600">
                    <li class="flex gap-x-3">
                      <CloudArrowUpIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      <span>
                        <strong class="font-semibold text-gray-900">Monitoreo de baterías:</strong> Visualice en tiempo real el nivel de carga y la salud de las baterías.
                      </span>
                    </li>
                    <li class="flex gap-x-3">
                      <LockClosedIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      <span>
                        <strong class="font-semibold text-gray-900">Alertas en tiempo real:</strong> Reciba notificaciones inmediatas ante cualquier anomalía operativa.
                      </span>
                    </li>
                    <li class="flex gap-x-3">
                      <ServerIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      <span>
                        <strong class="font-semibold text-gray-900">Reportes analíticos:</strong> Acceda a informes detallados para optimizar el rendimiento de su flota.
                      </span>
                    </li>
                  </ul>
                  <p class="mt-8">
                    Nuestra plataforma se integra con otros sistemas y se ejecuta en la nube, lo que significa que no necesita infraestructura adicional y se adapta fácilmente al crecimiento de su operación.
                  </p>
                  <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Solución en la Nube</h2>
                  <p class="mt-6">
                    Sin servidores físicos ni complicaciones. Disfrute de actualizaciones automáticas, seguridad robusta y soporte 24/7, todo respaldado por la innovación de ANKAI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sección: Impacto SGX y ANKAI -->
<section id="clientes" class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        El impacto de SGX y ANKAI
      </h2>
      <p class="mt-6 text-base/7 text-gray-600">
        Más de 300 buses eléctricos en operación, cientos de miles de pasajeros transportados y decenas de empresas que confían en nuestra tecnología de vanguardia. Estos son los resultados concretos que respaldan nuestro compromiso con la movilidad sustentable.
      </p>
    </div>
    <div class="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
      <!-- Tarjeta 1 -->
      <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
        <p class="flex-none text-3xl font-bold tracking-tight text-gray-900">300+</p>
        <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
          <p class="text-lg font-semibold tracking-tight text-gray-900">Buses eléctricos operando</p>
          <p class="mt-2 text-base/7 text-gray-600">Presencia activa en el transporte público y privado.</p>
        </div>
      </div>

      <!-- Tarjeta 2 -->
      <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
        <p class="flex-none text-3xl font-bold tracking-tight text-white">20+</p>
        <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
          <p class="text-lg font-semibold tracking-tight text-white">Empresas aliadas</p>
          <p class="mt-2 text-base/7 text-gray-400">Organizaciones de transporte que confían en nuestras soluciones.</p>
        </div>
      </div>

      <!-- Tarjeta 3 -->
      <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
        <p class="flex-none text-3xl font-bold tracking-tight text-white">3.2M+</p>
        <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
          <p class="text-lg font-semibold tracking-tight text-white">Pasajeros por año</p>
          <p class="mt-2 text-base/7 text-indigo-200">Movilizados con tecnología limpia, segura y eficiente.</p>
        </div>
      </div>
    </div>
  </div>
</section>


      <!-- Sección: Otros Servicios -->
      <section id="otros-servicios" class="bg-gray-50 py-24 sm:py-32">
        <div class="mx-auto max-w-5xl px-6 text-center">
          <h2 class="text-3xl font-bold text-gray-900">Otros Servicios</h2>
          <p class="mt-4 text-lg text-gray-700">
            En SGX nos especializamos exclusivamente en <strong>buses eléctricos ANKAI</strong> y sistemas de telemetría para la gestión de flotas. Esta concentración nos permite dedicar todos nuestros recursos a brindar productos de excelencia y asesoría especializada.
          </p>
          <p class="mt-4 text-lg text-gray-700">
            Actualmente, no ofrecemos otros servicios adicionales, lo que garantiza un enfoque total en soluciones de movilidad sustentable.
          </p>
        </div>
      </section>

      <!-- Sección: Contacto -->
      <section id="contacto" class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-5xl px-6 text-center">
          <h2 class="text-3xl font-bold text-gray-900">Contacto</h2>
          <p class="mt-4 text-lg text-gray-700">
            ¿Listo para impulsar la movilidad eléctrica? Llámenos al <strong>(+56) 2 1234 5678</strong> o escríbanos a <strong>contacto@sgx.cl</strong>. Estamos aquí para asesorarle y ayudarle a transformar su flota.
          </p>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900">
      <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <img class="h-16" src="/img/logo.png" alt="SGX Chile" />
          <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold text-white">Soluciones</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a
                      href="https://es.ankaiglobal.com/new-energy-technology_d23"
                      class="text-sm text-gray-400 hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tecnología &amp; Nueva Energía
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://es.ankaiglobal.com/products"
                      class="text-sm text-gray-400 hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buses <span class="text-red-500 font-bold">ANKAI</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold text-white">Soporte</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a
                      href="https://es.ankaiglobal.com/contact_d2"
                      class="text-sm text-gray-400 hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contacto Oficial
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://es.ankaiglobal.com/service_d4"
                      class="text-sm text-gray-400 hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Servicio posventa
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold text-white">Empresa</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a
                      href="https://es.ankaiglobal.com/"
                      class="text-sm text-gray-400 hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acerca de ANKAI
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://es.ankaiglobal.com/news_nc1"
                      class="text-sm text-gray-400 hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Noticias
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold text-white">Legal</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a
                      href="https://es.ankaiglobal.com/terms-conditions_d12"
                      class="text-sm text-gray-400 hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Términos y Condiciones
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://es.ankaiglobal.com/privacy-policy_d12"
                      class="text-sm text-gray-400 hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Política de Privacidad
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 class="text-sm font-semibold text-white">Suscríbete al boletín</h3>
            <p class="mt-2 text-sm text-gray-300">
              Recibe noticias, actualizaciones y contenido exclusivo en tu correo.
            </p>
          </div>
          <form class="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <label for="email-address" class="sr-only">Correo electrónico</label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autocomplete="email"
              required
              class="w-full rounded-md bg-white/5 px-3 py-1.5 text-white placeholder:text-gray-500 outline outline-1 outline-white/10 focus:outline-2 focus:outline-indigo-500 sm:w-56 sm:text-sm"
              placeholder="Tu correo electrónico"
            />
            <div class="mt-4 sm:ml-4 sm:mt-0">
              <button
                type="submit"
                class="flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Suscribirse
              </button>
            </div>
          </form>
        </div>

        <!-- Social + Copyright -->
        <div class="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <div class="flex gap-x-6 md:order-2">
            <a
              v-for="item in footerNavigation.social"
              :key="item.name"
              :href="item.href"
              class="text-gray-400 hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="size-6" aria-hidden="true" />
            </a>
          </div>
          <p class="mt-8 text-sm text-gray-400 md:order-1 md:mt-0">
            &copy; 2024 SGX Chile. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, defineComponent, h } from 'vue'
import { Head } from '@inertiajs/vue3'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'

const mobileMenuOpen = ref(false)

// Navegación principal
const navigation = [
  { name: 'Sobre SGX', href: '#sobre' },
  { name: 'Electromovilidad', href: '#Electromovilidad' },
  { name: 'Productos', href: '#productos' },
  { name: 'Telemetría', href: '#telemetria' },
  { name: 'Clientes', href: '#clientes' },
  { name: 'Otros Servicios', href: '#otros-servicios' },
  { name: 'Contacto', href: '#contacto' }
]

// Footer Social Links
const footerNavigation = {
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
              'clip-rule': 'evenodd'
            })
          ])
      })
    },
    {
      name: 'Instagram',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm.315 4.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
              'clip-rule': 'evenodd'
            })
          ])
      })
    },
    {
      name: 'X',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              d: 'M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z'
            })
          ])
      })
    }
  ]
}
</script>
