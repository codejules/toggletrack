/* empty css                                   */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, i as renderComponent } from '../chunks/astro/server_CgKkhHmX.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, a as $$Section, b as $$Footer, c as $$Layout } from '../chunks/Layout_Dx5I3yxT.mjs';
import 'clsx';
import { z } from 'zod';
export { renderers } from '../renderers.mjs';

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  honeypot: z.string().max(0, "Spam detected")
  // Honeypot validation
});

const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const submitForm = async (formData) => {
    try {
      contactSchema.parse(formData);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          access_key: "ecfd492c-5690-4951-9be2-b678fecf204e",
          ...formData
        })
      });
      if (!response.ok) {
        throw new Error("Error submitting the form.");
      }
      alert("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("There was an error submitting the form.");
    }
  };
  return renderTemplate`${maybeRenderHead()}<div class="p-8 mx-auto max-w-screen-md bg-white rounded-2xl"> <h3 class="text-xl font-semibold">
Simply dummy text of the printing and typesetting industry.
</h3> <form action="https://api.web3forms.com/submit" method="POST" class="mx-auto max-w-xl pt-6"${addAttribute((event) => {
    const formData = new FormData(event.target);
    submitForm({
      firstName: formData.get("first-name"),
      lastName: formData.get("last-name"),
      email: formData.get("email"),
      message: formData.get("message"),
      honeypot: formData.get("botcheck")
      // Honeypot validation
    });
  }, "on:submit|preventDefault")}> <input type="hidden" name="subject" value="New contact form from Toggl Track website"> <input type="hidden" name="access_key" value="ecfd492c-5690-4951-9be2-b678fecf204e"> <!-- Optional: But Recommended: To Prevent SPAM Submission.
       Make sure its hidden by default HONEYPOT --> <input type="checkbox" name="botcheck" class="hidden" style="display: none;"> <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"> <div> <label for="first-name" class="block text-sm font-semibold text-gray-900">First name</label> <div class="mt-2.5"> <input required type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"> </div> </div> <div> <label for="last-name" class="block text-sm font-semibold text-gray-900">Last name</label> <div class="mt-2.5"> <input required type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"> </div> </div> <div class="sm:col-span-2"> <label for="email" class="block text-sm font-semibold text-gray-900">Email</label> <div class="mt-2.5"> <input required type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"> </div> </div> <div class="sm:col-span-2"> <label for="message" class="block text-sm font-semibold text-gray-900">Message</label> <div class="mt-2.5"> <textarea required name="message" id="message" rows="4" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"></textarea> </div> </div> <div class="flex gap-x-4 sm:col-span-2"> <div class="flex h-6 items-center"> <label class="inline-flex items-center mb-5 cursor-pointer"> <input required type="checkbox" value="" class="sr-only peer"> <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> <span class="ms-3 text-sm text-gray-600">
By selecting this, you agree to our
<a href="#" class="font-semibold text-indigo-600">privacy&nbsp;policy</a> </span> </label> </div> </div> <div class="mt-10"> <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-indigo-600">
Let's talk
</button> </div> </div> </form> </div>`;
}, "/Users/julioserra/web/toggle-track/src/components/Form.astro", undefined);

const $$ContactPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Section", $$Section, { "class": "w-full mx-auto bg-[#2d1238] min-h-svh" }, { "default": ($$result3) => renderTemplate` <div class="max-w-screen-2xl mx-auto py-6 lg:py-20 flex flex-col gap-6 lg:gap-12 px-2"> <h2 class="text-2xl lg:text-6xl text-center font-semibold text-white lg:px-56">
Book your
<span class="text-pink-400 font-semibold">free demo </span>
of Toggl Track
</h2> <p class="text-md lg:text-xl text-center text-slate-500">
Let us show how your team can turn Toggl Track into a
                    decision-making tool
</p> <div class="grid grid-cols-2 lg:grid-cols-2 items-start gap-8 lg:px-56 lg:pt-24"> <div class="flex flex-col gap-16"> <div class="flex flex-col gap-6"> <h3 class="text-pink-400 font-bold text-2xl">
Time tracking with ease and accuracy
</h3> <p class="text-white font-light">
Track time across web, mobile, & desktop with
                                100+ integrations
</p> <p class="text-white font-light">
Simplify workflows with an intuitive interface
                                and organized data
</p> <p class="text-white font-light">
Gain control with alerts, reminders, and
                                approvals
</p> </div> <div class="flex flex-col gap-6"> <h3 class="text-pink-400 font-bold text-2xl">
Time tracking with ease and accuracy
</h3> <p class="text-white font-light">
Track time across web, mobile, & desktop with
                                100+ integrations
</p> <p class="text-white font-light">
Simplify workflows with an intuitive interface
                                and organized data
</p> <p class="text-white font-light">
Gain control with alerts, reminders, and
                                approvals
</p> </div> </div> <div> ${renderComponent($$result3, "Form", $$Form, {})} </div> </div> </div> ` })} </main> ${renderComponent($$result2, "Footer", $$Footer, { "class": "mt-0 bg-[#2d1238] opacity-95" })} ` })}`;
}, "/Users/julioserra/web/toggle-track/src/components/pages/ContactPage.astro", undefined);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ContactPage", $$ContactPage, {})}`;
}, "/Users/julioserra/web/toggle-track/src/pages/contact.astro", undefined);

const $$file = "/Users/julioserra/web/toggle-track/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
