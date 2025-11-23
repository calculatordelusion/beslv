import { U as head, a0 as ensure_array_like, _ as attr, W as stringify, $ as bind_props } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    let puzzles = data.puzzles;
    head("1d6nxft", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Archive - NYT Spelling Bee Solver</title>`);
      });
    });
    $$renderer2.push(`<div class="bg-gray-50 py-12"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-8"><h1 class="text-4xl font-bold text-gray-900 mb-2">Puzzle Archive</h1> <p class="text-xl text-gray-600">Browse past Spelling Bee puzzles</p></div> <div class="bg-white rounded-lg shadow-md overflow-hidden"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Letters</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Words</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"><!--[-->`);
    const each_array = ensure_array_like(puzzles);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let puzzle = each_array[$$index_1];
      $$renderer2.push(`<tr class="hover:bg-gray-50"><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm font-medium text-gray-900">${escape_html(puzzle.formattedDate)}</div> <div class="text-sm text-gray-500">${escape_html(puzzle.date)}</div></td><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center space-x-1"><span class="px-2 py-1 bg-bee-yellow text-xs font-bold rounded">${escape_html(puzzle.centerLetter.toUpperCase())}</span> <!--[-->`);
      const each_array_1 = ensure_array_like(puzzle.outerLetters);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let letter = each_array_1[$$index];
        $$renderer2.push(`<span class="px-2 py-1 bg-gray-200 text-xs font-bold rounded">${escape_html(letter.toUpperCase())}</span>`);
      }
      $$renderer2.push(`<!--]--></div></td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">`);
      if (puzzle.answers) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`${escape_html(puzzle.answers.length)} words`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`—`);
      }
      $$renderer2.push(`<!--]--></td><td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2"><a${attr("href", `/${stringify(puzzle.date)}/hints`)} class="text-blue-600 hover:text-blue-900">Hints</a> <a${attr("href", `/${stringify(puzzle.date)}/answers`)} class="text-blue-600 hover:text-blue-900">Answers</a></td></tr>`);
    }
    $$renderer2.push(`<!--]--></tbody></table></div></div></div>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
