import { e as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, k as renderSlot, h as createAstro, i as renderComponent, g as addAttribute, l as renderScript, n as renderHead } from './astro/server_CgKkhHmX.mjs';
import 'html-escaper';
import 'clsx';
import 'kleur/colors';
/* empty css                           */

const $$Astro$4 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Section;
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(Astro2.props)}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/julioserra/web/toggle-track/src/components/Section.astro", undefined);

const $$Astro$3 = createAstro();
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 167 33" fill="#E57CD8"><path d="M103.51 25.802a10.27 10.27 0 01-1.36.084c-1.515 0-2.651-.35-3.409-1.05-.757-.702-1.136-1.924-1.136-3.665V10.586h-3.614V8.754h3.614V4.208h2.1v4.546h4.992v1.832h-4.992v10.686c0 .905.184 1.578.551 2.02.367.44 1.033.66 1.997.66.528 0 .987-.021 1.377-.067.39-.045.78-.102 1.17-.17v1.833c-.436.113-.866.197-1.29.254"></path><path d="M19.761 26.378c-.049-1.438-.48-2.962-1.577-3.966-1.226-1.12-3-1.635-4.648-1.635H6.19c-.725 0-1.369-.537-1.369-1.2 0-.557.386-1.024.91-1.16-.002 0 .123-.032.258-.074 1.315.622 2.799.903 4.28.903 2.266 0 4.537-.656 6.2-2.188 1.618-1.49 2.374-3.576 2.374-5.709 0-2.134-.756-4.22-2.375-5.71A7.532 7.532 0 0014.9 4.533c1.56.356 3.17-.085 4.28-1.97L16.058.353l-2.606 3.573a10.55 10.55 0 00-3.184-.473c-2.265 0-4.537.656-6.199 2.188-1.619 1.49-2.375 3.575-2.375 5.709 0 2.134.756 4.218 2.375 5.71.14.13.286.252.435.37l-.303.158c-.599.33-1.33.857-2.054 1.617C1.12 20.28.094 21.894.094 24.038c0 0-.143 4.578 5.192 4.578h3.865c.889 0 1.795.558 1.795 1.434 0 .317-.095.614-.258.862h7.39c1.119-1.225 1.737-2.962 1.683-4.534M8.958 9.938c.365-.36.865-.515 1.363-.515s.997.155 1.362.515c.356.35.522.841.522 1.343s-.166.992-.522 1.343c-.365.36-.864.515-1.362.515-.498 0-.998-.154-1.363-.515-.356-.35-.522-.84-.522-1.343 0-.502.166-.992.522-1.343" mask="url(#prefix__a)" transform="translate(36.876 1.913)"></path><path d="M20.46 26.378c-.05-1.438-.48-2.962-1.578-3.966-1.225-1.12-2.999-1.635-4.647-1.635l-8.529-.061c-.537 0-.948-.333-.948-.824 0-.405.204-1.009.718-1.11a10.56 10.56 0 003.152.464c2.266 0 4.537-.656 6.2-2.188 1.618-1.49 2.374-3.576 2.374-5.709 0-2.134-.756-4.22-2.374-5.71a7.532 7.532 0 00-1.567-1.107c1.56.356 3.17-.085 4.279-1.97L14.418.353l-2.605 3.573a10.557 10.557 0 00-3.185-.473c-2.265 0-4.536.656-6.199 2.188C.81 7.13.054 9.215.054 11.349c0 2.134.757 4.218 2.375 5.71.48.441 1.01.81 1.576 1.111-.374.28-.767.623-1.16 1.034C1.82 20.28.793 21.894.793 24.038c0 0-.142 4.578 5.193 4.578H9.85c.889 0 1.795.558 1.795 1.434 0 .317-.095.614-.258.862h7.39c1.119-1.225 1.738-2.962 1.683-4.534M7.37 9.938c.365-.36.864-.515 1.363-.515.498 0 .997.155 1.363.515.355.35.522.841.522 1.343s-.167.992-.522 1.343c-.366.36-.865.515-1.363.515-.499 0-.998-.154-1.363-.515-.356-.35-.522-.84-.522-1.343 0-.502.166-.992.522-1.343" mask="url(#prefix__b)" transform="translate(57.22 1.913)"></path><path d="M10.33 25.7v-6.833c-1.592.199-2.146-.907-2.146-2.006V.176H.288v17.932c0 2.227.336 4.084 1.151 5.252 1.253 1.779 2.947 2.943 6.317 2.957.622-.027 1.66-.148 2.574-.617" mask="url(#prefix__c)" transform="translate(76.294 .242)"></path><path d="M34.297 8.345c-2.04-2.05-4.823-2.929-7.602-2.929-2.778 0-5.563.88-7.6 2.929-1.986 1.996-2.913 4.787-2.913 7.643 0 2.857.927 5.647 2.912 7.643 2.038 2.05 4.823 2.928 7.601 2.928 2.779 0 5.563-.878 7.602-2.928 1.984-1.996 2.912-4.787 2.912-7.643s-.928-5.648-2.912-7.643m-5.884 9.287c-.472.466-1.117.664-1.76.664-.644 0-1.289-.198-1.76-.664-.46-.453-.675-1.087-.675-1.735 0-.649.214-1.282.674-1.735.472-.465 1.117-.665 1.76-.665.644 0 1.29.2 1.761.665.46.453.675 1.086.675 1.735 0 .648-.215 1.282-.675 1.735"></path><path d="M13.335 18.894c-1.314 0-1.851-.396-2.337-1.004-.314-.397-.47-.98-.47-1.736v-3.537h4.406v-6.34h-4.407V.176H4.894v2.28c0 2.527-1.953 4.576-4.362 4.576A4.29 4.29 0 010 6.997v5.62h2.958v5.648c0 2.222.407 3.935 1.22 5.101 1.257 1.785 2.65 2.952 6.051 2.952 1.972 0 3.623-.447 4.705-1.043v-6.643c-.408.154-.96.262-1.6.262" mask="url(#prefix__d)" transform="translate(0 .242)"></path><path d="M111.889 9.232c.918-.702 2.03-1.053 3.339-1.053.482 0 1.044.058 1.687.17v2.172a7.246 7.246 0 00-.895-.136 10.122 10.122 0 00-.827-.034c-1.01 0-1.853.192-2.53.577a4.564 4.564 0 00-1.635 1.56c-.413.656-.706 1.436-.878 2.341a15.462 15.462 0 00-.258 2.884v7.837h-2.1V8.587h2.031v3.868c.46-1.448 1.148-2.522 2.066-3.223M119.46 10.656a4.602 4.602 0 011.307-1.306c.551-.373 1.217-.661 1.997-.865.78-.204 1.71-.306 2.789-.306 2.294 0 3.993.52 5.094 1.561 1.102 1.04 1.653 2.602 1.653 4.682V25.55h-2.1v-3.63c-.528 1.29-1.348 2.273-2.462 2.951-1.113.679-2.392 1.019-3.838 1.019-.941 0-1.773-.131-2.496-.39-.723-.26-1.325-.617-1.807-1.07a4.477 4.477 0 01-1.102-1.628 5.443 5.443 0 01-.378-2.035c0-1.584.521-2.794 1.566-3.63 1.044-.838 2.358-1.335 3.942-1.494l5.714-.542c.574-.068.86-.305.86-.713v-.61c0-1.154-.355-2.065-1.066-2.731-.712-.667-1.87-1.001-3.477-1.001-2.915 0-4.602 1.063-5.06 3.189l-1.86-.985a5.88 5.88 0 01.723-1.594zm4.474 6.92c-1.308.137-2.237.504-2.788 1.104-.55.6-.826 1.295-.826 2.087 0 .972.327 1.747.98 2.323.655.577 1.613.865 2.876.865.963 0 1.818-.164 2.564-.491a5.93 5.93 0 001.894-1.29 5.375 5.375 0 001.17-1.815 5.661 5.661 0 00.396-2.07V16.9l-6.266.678zM135.391 13.54a8.278 8.278 0 011.825-2.833 8.198 8.198 0 012.857-1.866c1.113-.441 2.347-.661 3.7-.661 1.24 0 2.359.192 3.357.576a7.86 7.86 0 012.633 1.663l-1.342 1.628a7.786 7.786 0 00-2.186-1.374 6.632 6.632 0 00-2.565-.491c-.986 0-1.893.163-2.72.491a6.328 6.328 0 00-2.134 1.374c-.596.588-1.061 1.312-1.394 2.171-.332.86-.499 1.81-.499 2.85s.167 1.985.5 2.833a6.286 6.286 0 001.393 2.171 6.196 6.196 0 002.135 1.392 7.211 7.211 0 002.685.492c.964 0 1.865-.176 2.702-.526.838-.35 1.59-.82 2.255-1.408l1.273 1.628c-.734.679-1.617 1.233-2.65 1.662-1.033.43-2.215.645-3.546.645-1.354 0-2.582-.22-3.683-.661-1.102-.441-2.043-1.052-2.823-1.832a7.854 7.854 0 01-1.79-2.8c-.413-1.085-.62-2.272-.62-3.562 0-1.289.212-2.476.637-3.562"></path><path mask="url(#prefix__e)" d="M2.315 17.329v5.055h-2.1V.044h2.1v14.639l9.053-9.262h2.961l-7.47 7.396 7.642 9.567h-2.754l-6.3-8.142z" transform="translate(152.165 3.166)"></path></svg>`;
}, "/Users/julioserra/web/toggle-track/public/Logo.astro", undefined);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const MENU_ITEMS = [
    { title: "Home", href: "/" },
    { title: "Company", href: "#" },
    { title: "Marketplace", href: "#" },
    { title: "Resources", href: "#" },
    { title: "Contact", href: "/contact" }
  ];
  const MENU_ITEMS_END = [
    { title: "Book a demo", href: "#", button: false },
    { title: "Log in", href: "#", button: false },
    { title: "Try for free", href: "#", button: true }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="w-full mx-auto bg-[#2d1238] border-gray-200"> <nav> <div class="flex flex-wrap justify-between items-center mx-auto p-10"> <div> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> ${renderComponent($$result, "Logo", $$Logo, { "class": "w-48" })} </a> </div> <button data-collapse-toggle="mega-menu-full-image" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full-image" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> <div id="mega-menu-full-image" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"> <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse"> ${MENU_ITEMS.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")} class="block py-2 px-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-pink-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"> ${item.title} </a> </li>`)} </ul> </div> <div id="mega-menu-full-image" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"> <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse items-center"> ${MENU_ITEMS_END.map((item) => renderTemplate`<li> ${item.button ? renderTemplate`<button class="bg-white rounded-full py-4 px-6 text-pink-400 hover:bg-slate-600"> ${item.title} </button>` : renderTemplate`<a${addAttribute(item.href, "href")} class="block py-2 px-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-pink-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"> ${item.title} </a>`} </li>`)} </ul> </div> </div> <div id="mega-menu-full-image-dropdown" class="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 hidden"> <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6"> <ul class="hidden mb-4 space-y-4 md:mb-0 md:block" aria-labelledby="mega-menu-full-image-button"> <li> <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
Online Stores
</a> </li> <li> <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
Segmentation
</a> </li> <li> <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
Marketing CRM
</a> </li> <li> <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
Online Stores
</a> </li> </ul> <ul class="mb-4 space-y-4 md:mb-0"> <li> <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
Our Blog
</a> </li> <li> <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
Terms & Conditions
</a> </li> <li> <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
License
</a> </li> <li> <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
Resources
</a> </li> </ul> <a href="#" class="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken" style="background-image: url(/docs/images/dashboard-overview.png)"> <p class="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">
Preview the new Flowbite dashboard navigation.
</p> <button type="button" class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-700">
Get started
<svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </button> </a> </div> </div> </nav> </header>`;
}, "/Users/julioserra/web/toggle-track/src/components/Header.astro", undefined);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(["bg-[#2d1238] w-full mx-auto mt-16", Astro2.props.class], "class:list")}> <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8"> <div class="sm:flex sm:items-center sm:justify-between"> ${renderComponent($$result, "Logo", $$Logo, { "class": "w-48 pb-6" })} <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"> <li> <a href="#" class="hover:underline me-4 md:me-6">About</a> </li> <li> <a href="/contact" class="hover:underline">Contact</a> </li> </ul> </div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span> </div> </footer>`;
}, "/Users/julioserra/web/toggle-track/src/components/Footer.astro", undefined);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/julioserra/web/toggle-track/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/julioserra/web/toggle-track/node_modules/astro/components/ClientRouter.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>Astro Basics</title>", "", "</head> <body> ", ' <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"><\/script> </body> </html>'])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/julioserra/web/toggle-track/src/layouts/Layout.astro", undefined);

export { $$Header as $, $$Section as a, $$Footer as b, $$Layout as c };
