import { U as head, a0 as ensure_array_like, $ as bind_props } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    let puzzle = data.puzzle;
    head("ss03k7", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Today's Pangram - NYT Spelling Bee Solver</title>`);
      });
    });
    $$renderer2.push(`<div class="bg-gray-50 py-12"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-8"><h1 class="text-4xl font-bold text-gray-900 mb-2">Today's Pangram</h1> <p class="text-xl text-gray-600">${escape_html(puzzle.formattedDate)}</p></div> <div class="bg-white rounded-lg shadow-md p-8 text-center"><p class="text-gray-600 mb-6">Words that use all 7 letters (${escape_html(puzzle.letters.toUpperCase())})</p> <!--[-->`);
    const each_array = ensure_array_like(puzzle.pangrams);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let pangram = each_array[$$index];
      $$renderer2.push(`<div class="text-5xl font-bold text-yellow-600 mb-4">${escape_html(pangram.toUpperCase())} ★</div>`);
    }
    $$renderer2.push(`<!--]--> <div class="mt-8 pt-8 border-t"><a href="/answers" class="btn-primary">View All Answers →</a></div></div></div></div>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
