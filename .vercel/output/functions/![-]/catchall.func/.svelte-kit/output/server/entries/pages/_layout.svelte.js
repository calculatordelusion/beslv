import { U as head, V as attr_class, W as stringify, X as store_get, Y as slot, Z as unsubscribe_stores } from "../../chunks/index2.js";
import { g as getContext } from "../../chunks/context.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "clsx";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<link rel="icon" type="image/png" href="/favicon.png"/> <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>`);
    });
    $$renderer2.push(`<header><div class="mb-4 border-b-2 border-black bg-yellow-300 shadow"><div class="mx-auto flex max-w-5xl items-baseline gap-3 px-2 py-3"><a class="flex items-center gap-2 text-center text-xl font-semibold hover:underline" href="/">🐝 Bee Solver</a> <span class="text-center">Customizable Hints and Answers for the NYT Spelling Bee</span> <a href="/archive" class="ml-auto hover:underline">Archive</a> <div class="self-stretch border-r border-black/50"></div> <a href="https://fiveletterwordfinder.com" class="flex items-center gap-1 hover:underline" target="_blank">Wordle Solver <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path></svg></a></div></div> <nav class="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2 px-2 sm:gap-3 sm:px-4"><a href="/"${attr_class(`tooltip tooltip-bottom-middle relative bg-white text-sm sm:text-base text-center border border-black px-2 sm:px-4 py-1.5 sm:py-2 font-semibold shadow-yellow transition hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === "/" ? "bg-yellow-300" : "")}`, "svelte-12qhfyh")} data-tooltip="Home" aria-label="Home"><svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 sm:h-6 sm:w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path></svg></a> <a href="/hints"${attr_class(`tooltip tooltip-bottom-middle relative bg-white text-sm sm:text-base text-center border border-black px-2 sm:px-4 py-1.5 sm:py-2 font-semibold shadow-yellow transition hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === "/hints" ? "bg-yellow-300" : "")}`, "svelte-12qhfyh")} data-tooltip="Spoilers are hidden by default">Today's Hints</a> <a href="/answers"${attr_class(`tooltip tooltip-bottom-middle relative bg-white text-sm sm:text-base text-center border border-black px-2 sm:px-4 py-1.5 sm:py-2 font-semibold shadow-yellow transition hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === "/answers" ? "bg-yellow-300" : "")}`, "svelte-12qhfyh")} data-tooltip="All Pangrams and Answers for Today's Puzzle">Today's Answers</a> <a href="/pangram"${attr_class(`tooltip tooltip-bottom-middle relative bg-white text-sm sm:text-base text-center border border-black px-2 sm:px-4 py-1.5 sm:py-2 font-semibold shadow-yellow transition hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === "/pangram" ? "bg-yellow-300" : "")}`, "svelte-12qhfyh")} data-tooltip="All Pangrams for Today's Puzzle">Today's Pangram</a> <a href="/yesterday/answers"${attr_class(`tooltip tooltip-bottom-middle relative bg-white text-sm sm:text-base text-center border border-black px-2 sm:px-4 py-1.5 sm:py-2 font-semibold shadow-yellow transition hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === "/yesterday/answers" ? "bg-yellow-300" : "")}`, "svelte-12qhfyh")} data-tooltip="All Pangrams and Answers for Yesterday's Puzzle">Yesterday's Answers</a> <a href="/faq"${attr_class(`tooltip tooltip-bottom-middle relative bg-white text-sm sm:text-base text-center border border-black px-2 sm:px-4 py-1.5 sm:py-2 font-semibold shadow-yellow transition hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === "/faq" ? "bg-yellow-300" : "")}`, "svelte-12qhfyh")} data-tooltip="FAQ" aria-label="FAQ"><svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 sm:h-6 sm:w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path></svg></a></nav></header> <main class="entry-content mx-auto my-4 max-w-5xl bg-white px-2 py-4 shadow-sm sm:px-4"><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></main> <footer class="border-t-2 border-black"><div class="mx-auto flex max-w-5xl items-center justify-center gap-2 px-2 py-4">© 2025 <a class="hover:underline" href="/">Bee Solver</a> · <a class="hover:underline" href="/contact">Contact Us</a> · <a class="hover:underline" href="/privacy-policy">Privacy Policy</a></div></footer>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _layout as default
};
