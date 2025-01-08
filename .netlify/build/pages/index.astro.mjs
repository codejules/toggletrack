/* empty css                                   */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, h as createAstro, i as renderComponent, g as addAttribute, j as Fragment } from '../chunks/astro/server_CgKkhHmX.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { a as $$Section, $ as $$Header, b as $$Footer, c as $$Layout } from '../chunks/Layout_Dx5I3yxT.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Arrow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Arrow;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg>`;
}, "/Users/julioserra/web/toggle-track/src/assets/arrow.astro", undefined);

const CARD = [
  {
    title: "80 hours",
    description: "saved monthly with Toggl Track's user-friendly interface",
    image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    paragraph: "'We chose Toggl Track, and it took our agency’s time racking compliance to the next level.'",
    url: "http://astro.build",
    bgColor: "bg-orange-100",
    readMore: "Read more"
  },
  {
    title: "100%",
    description: "time tracking adoption in a team of 500+",
    image: "https://flowbite.com/docs/images/blog/image-2.jpg",
    paragraph: "'There is hardly any other solution that could handle a large amount of data while providing a smooth UX experience for the team of 500.'",
    url: "https://www.typescriptlang.org/",
    bgColor: "bg-yellow-100",
    readMore: "Read more"
  },
  {
    title: "6X",
    description: "team growth while maintaining work-life balance",
    image: "https://flowbite.com/docs/images/blog/image-3.jpg",
    paragraph: "'Trust in the team is paramount. We didn’t want anything intrusive, like a tool to take screenshots of what our employees are working on.'",
    url: "http://react.dev",
    bgColor: "bg-pink-200",
    readMore: "Read more"
  }
];

const $$Card = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class": "max-w-screen-xl mx-auto", "data-astro-cid-dohjnao5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="card" class="grid md:grid-cols-2 lg:grid-cols-3 md:px-4 gap-4 xl:gap-0 py-16" data-astro-cid-dohjnao5> ${CARD.map(
    ({
      title,
      description,
      image,
      paragraph,
      url,
      bgColor,
      readMore
    }) => renderTemplate`<a class="flex justify-center"${addAttribute(url, "href")} target="_blank" data-astro-cid-dohjnao5> <div${addAttribute(`h-full max-w-sm rounded-lg flex flex-col gap-6 hover:scale-105 transition ease-in duration-300 cursor-pointer ${bgColor}`, "class")} data-astro-cid-dohjnao5> <div class="text-center flex flex-col gap-3 pt-8" data-astro-cid-dohjnao5> <h2 class="mb-2 text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white" data-astro-cid-dohjnao5> ${title} </h2> <p class="px-12 font-light" data-astro-cid-dohjnao5>${description}</p> </div> <div class="px-6 hidden lg:block" data-astro-cid-dohjnao5> <img class="rounded-2xl lg:block"${addAttribute(image, "src")} alt="" data-astro-cid-dohjnao5> </div> <div class="px-5 lg:pt-5 flex-grow" data-astro-cid-dohjnao5> <p class="text-center lg:text-left mb-3 font-normal text-gray-700 dark:text-gray-400" data-astro-cid-dohjnao5> ${paragraph} </p> </div> <div class="px-5 pb-5 flex justify-end" data-astro-cid-dohjnao5> <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-right text-slate-500" data-astro-cid-dohjnao5> ${readMore} ${renderComponent($$result2, "Arrow", $$Arrow, { "class": "rtl:rotate-180 w-3.5 h-3.5 ms-2", "data-astro-cid-dohjnao5": true })} </p> </div> </div> </a>`
  )} </div> ` })} `;
}, "/Users/julioserra/web/toggle-track/src/components/Card.astro", undefined);

const $$Astro$1 = createAstro();
const $$Video = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Video;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 165 164"><path d="M82.5 163.299c45.563 0 82.5-36.555 82.5-81.65C165 36.557 128.063 0 82.5 0S0 36.556 0 81.65c0 45.094 36.937 81.649 82.5 81.649z" fill="#FEFBFA"></path><path d="M67.106 110.983l46.458-28.391L67.106 54.2v56.782z" fill="#2C1338"></path></svg>`;
}, "/Users/julioserra/web/toggle-track/src/assets/Video.astro", undefined);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class": "bg-[#2d1238] w-full mx-auto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-screen-xl mx-auto py-6 lg:py-20 flex flex-col gap-6 lg:gap-12 px-2"> <h1 class="text-2xl lg:text-6xl text-center font-light text-white lg:px-56">
Where <span class="text-pink-400 font-semibold"> teams </span>
and time tracking <span class="text-pink-400 font-semibold">data</span> meet
</h1> <p class="text-md lg:text-4xl text-center text-white lg:px-44">
The only time tracking software that builds custom reports from your
            team's time data to maximize productivity and revenue.
</p> </div> <div class="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-9"> <button class="bg-pink-400 px-6 py-4 rounded-full text-white hover:bg-slate-600">Start tracking for free</button> <button class="bg-slate-800 px-6 py-4 rounded-full text-white flex flex-row items-center gap-3 hover:bg-slate-700">${renderComponent($$result2, "IconVideo", $$Video, { "class": "size-6" })} See how it works</button> </div> <div class="w-full mx-auto py-12 lg:py-24"> <img class="px-4 lg:px-32" src="./banner-image.webp" title="" alt=""> </div> ` })}`;
}, "/Users/julioserra/web/toggle-track/src/components/Hero.astro", undefined);

const $$Astro = createAstro();
const $$BentoItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BentoItem;
  const { title, description, id, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(id, "id")}${addAttribute(`
    ${Astro2.props.class}
    lg:col-span-5
    relative rounded-xl
    border border-black/10
    shadow-inner shadow-white/10
    w-full
    `, "class")} data-astro-cid-scffcbwq> <div class="flex flex-col h-full justify-between" data-astro-cid-scffcbwq> <div class="flex flex-col gap-2 p-6" data-astro-cid-scffcbwq> <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center" data-astro-cid-scffcbwq> ${title} </p> <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center" data-astro-cid-scffcbwq> ${description} </p> </div> <div class="px-16 w-full pb-4 lg:pb-12" data-astro-cid-scffcbwq> <img class="max-h-[13rem] rounded object-cover object-top w-full"${addAttribute(image, "src")} alt="" data-astro-cid-scffcbwq> </div> </div> </article> `;
}, "/Users/julioserra/web/toggle-track/src/components/BentoItem.astro", undefined);

const BENTO = [
  {
    title: "Mobile friendly",
    description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    image: "https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png",
    animation: "card-mobile",
    id: "mobile",
    rowSpan: "col-span-10 lg:col-span-4"
  },
  {
    title: "Performance",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.",
    image: "https://tailwindui.com/plus/img/component-images/bento-03-performance.png",
    animation: "card-performance",
    id: "performance",
    rowSpan: "col-span-10 lg:col-span-6"
  },
  {
    title: "Security",
    description: "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.",
    image: "https://tailwindui.com/plus/img/component-images/bento-03-security.png",
    animation: "card-security",
    id: "security",
    rowSpan: "col-span-10 lg:col-span-6"
  },
  {
    title: "Powerful APIs",
    description: "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.",
    image: "https://tailwindui.com/plus/img/component-images/bento-02-integrations.png",
    animation: "card-powerful",
    id: "powerful",
    rowSpan: "col-span-10 lg:col-span-4"
  }
];

const $$Priority = createComponent(($$result, $$props, $$slots) => {
  const title = "The time tracker that prioritizes \u2013";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class": "max-w-screen-xl mx-auto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="text-2xl lg:text-5xl text-center font-semibold text-dark lg:px-56">${title}</h2> <div class="w-full lg:max-w-[1280px] grid lg:grid-cols-10 lg:auto-rows-[25rem] gap-4 mx-auto p-4 lg:p-16"> ${BENTO.map(({ title: title2, description, id, image, rowSpan }) => renderTemplate`${renderComponent($$result2, "BentoItem", $$BentoItem, { "class": rowSpan, "title": title2, "description": description, "image": image, "id": id })}`)} </div> ` })}`;
}, "/Users/julioserra/web/toggle-track/src/components/Priority.astro", undefined);

const TABS = [
  {
    title: "Calendar view",
    description: "Our most popular feature. Integrate calendars and copy time entries into your workspace.",
    id: "profile-tab",
    dataTabsTarget: "#profile",
    ariaControls: "profile",
    url: "./calendar-view.webp",
    imgTitle: "calendar view",
    imgAlt: "calendar view"
  },
  {
    title: "Track time your way",
    description: "Track time from web, desktop apps, mobile apps, and browser extensions.",
    id: "dashboard-tab",
    dataTabsTarget: "#dashboard",
    ariaControls: "dashboard",
    url: "./track-time.webp",
    imgTitle: "track time",
    imgAlt: "track time"
  },
  {
    title: "Automated time tracking",
    description: "Switch on background tracking for any app or website. Team members can turn activity into time entries for reporting. Otherwise, it will remain private to them.",
    id: "settings-tab",
    dataTabsTarget: "#settings",
    ariaControls: "settings",
    url: "./track-time-automated.webp",
    imgTitle: "track time automated",
    imgAlt: "track time automated"
  },
  {
    title: "100+ integrations",
    description: "Plug in popular tools like Jira, Salesforce, and Asana. Use our API to custom-fit Toggl Track into your tech stack.",
    id: "contacts-tab",
    dataTabsTarget: "#contacts",
    ariaControls: "contacts",
    url: "./track-time-integrations.webp",
    imgTitle: "track time integrations",
    imgAlt: "track time integrations"
  }
];

const $$Tracker = createComponent(($$result, $$props, $$slots) => {
  const title = "The time tracker that achieves 100% user adoption in your team";
  const description = "Time tracking is a chore, which is why we built Toggl Track differently.";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class": "max-w-screen-xl mx-auto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-8 py-16"> <h2 class="text-2xl lg:text-4xl text-center font-semibold text-slate-600 lg:px-44"> ${title.split("100%").map((part, i) => i === 0 ? part : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`<span class="text-pink-400 font-semibold">100%</span>${part}` })}`)} </h2> <p class="text-center text-xl"> ${description} </p> <div class="flex flex-col lg:grid lg:grid-cols-2 gap-5"> <div class="mb-4 dark:border-gray-700"> <ul class="flex flex-col justify-start text-sm font-medium" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist"> ${TABS.map(
    ({
      id,
      dataTabsTarget,
      ariaControls,
      title: title2,
      description: description2
    }) => renderTemplate`<li class="me-2" role="presentation"> <button class="p-4 border-l-2 text-left text-slate-600 flex flex-col gap-4 hover:text-slate-700" type="button" role="tab"${addAttribute(id, "id")}${addAttribute(dataTabsTarget, "data-tabs-target")}${addAttribute(ariaControls, "aria-controls")} aria-selected="false"> <span class="text-2xl text-pink-400"> ${title2} </span> <p class="text-sm">${description2}</p> </button> </li>`
  )} </ul> </div> <div id="default-tab-content"> ${TABS.map(({ ariaControls, id, url, imgAlt, imgTitle }) => renderTemplate`<div class="hidden"${addAttribute(ariaControls, "id")} role="tabpanel"${addAttribute(id, "aria-labelledby")}> <picture class="flex justify-center w-full"> <img class="w-11/12 xl:w-full"${addAttribute(url, "src")}${addAttribute(imgAlt, "alt")}${addAttribute(imgTitle, "title")}> </picture> </div>`)} </div> </div> </div> ` })}`;
}, "/Users/julioserra/web/toggle-track/src/components/Tracker.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Tracker", $$Tracker, {})} ${renderComponent($$result2, "Card", $$Card, {})} ${renderComponent($$result2, "Priority", $$Priority, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/julioserra/web/toggle-track/src/pages/index.astro", undefined);

const $$file = "/Users/julioserra/web/toggle-track/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
