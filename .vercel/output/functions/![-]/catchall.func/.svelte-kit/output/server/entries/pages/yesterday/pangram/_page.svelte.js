import { U as head, a0 as ensure_array_like, _ as attr, $ as bind_props, W as stringify } from "../../../../chunks/index2.js";
import { e as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const puzzle = data.puzzle;
    const yesterday = /* @__PURE__ */ new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];
    head("12y1rjw", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Yesterday's NYT Spelling Bee Pangram - ${escape_html(puzzle.formattedDate)}</title>`);
      });
    });
    $$renderer2.push(`<div class="bg-gray-50 py-12"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-8"><h1 class="text-4xl font-bold text-gray-900 mb-2">Yesterday's NYT Spelling Bee Pangram</h1> <p class="text-xl text-gray-600">${escape_html(puzzle.formattedDate)}</p></div> <div class="flex justify-center mb-8"><div class="honeycomb-container svelte-12y1rjw"><div class="honeycomb svelte-12y1rjw"><div class="hex outer svelte-12y1rjw" style="grid-area: top">${escape_html(puzzle.outerLetters[0]?.toUpperCase())}</div> <div class="hex outer svelte-12y1rjw" style="grid-area: topleft">${escape_html(puzzle.outerLetters[1]?.toUpperCase())}</div> <div class="hex center svelte-12y1rjw" style="grid-area: center">${escape_html(puzzle.centerLetter?.toUpperCase())}</div> <div class="hex outer svelte-12y1rjw" style="grid-area: topright">${escape_html(puzzle.outerLetters[2]?.toUpperCase())}</div> <div class="hex outer svelte-12y1rjw" style="grid-area: bottomleft">${escape_html(puzzle.outerLetters[3]?.toUpperCase())}</div> <div class="hex outer svelte-12y1rjw" style="grid-area: bottomright">${escape_html(puzzle.outerLetters[4]?.toUpperCase())}</div> <div class="hex outer svelte-12y1rjw" style="grid-area: bottom">${escape_html(puzzle.outerLetters[5]?.toUpperCase())}</div></div></div></div> <div class="bg-white rounded-lg shadow-md p-6 mb-6"><h2 class="text-2xl font-bold mb-4">Yesterday's NYT Spelling Bee Pangrams</h2> <div class="flex flex-wrap gap-2 mb-6"><!--[-->`);
    const each_array = ensure_array_like(puzzle.pangrams);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let pangram = each_array[$$index];
      $$renderer2.push(`<div class="pangram-box svelte-12y1rjw">${escape_html(pangram.toUpperCase())}</div>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="mt-6 flex gap-4 justify-center"><a${attr("href", `/${stringify(yesterdayStr)}/hints`)} class="text-blue-600 hover:text-blue-800 font-medium">View Hints</a> <a href="/yesterday/answers" class="text-blue-600 hover:text-blue-800 font-medium">View All Answers</a> <a href="/archive" class="text-blue-600 hover:text-blue-800 font-medium">Archive</a></div></div></div>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
