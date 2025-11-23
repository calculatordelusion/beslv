import { U as head, _ as attr, a0 as ensure_array_like, V as attr_class, W as stringify, $ as bind_props } from "../../../../chunks/index2.js";
import { c as calculateScore } from "../../../../chunks/puzzleData.js";
import { e as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let sortedAnswers;
    let data = $$props["data"];
    const puzzle = data.puzzle;
    const isCustom = data.isCustom || false;
    const customLetters = data.customLetters || "";
    console.log("Puzzle data:", puzzle);
    sortedAnswers = (puzzle.answers || []).sort();
    (puzzle.answers || []).reduce((sum, word) => sum + calculateScore(word, puzzle.pangrams || []), 0);
    head("14e44ch", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(isCustom ? `NYT Spelling Bee Answers for Custom: ${customLetters}` : `${puzzle.formattedDate} Answers - NYT Spelling Bee Solver`)}</title>`);
      });
    });
    $$renderer2.push(`<div class="bg-gray-50 py-12"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-8">`);
    if (!isCustom && puzzle.date) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex justify-between items-center mb-4">`);
      if (puzzle.date) {
        $$renderer2.push("<!--[-->");
        const prevDate = new Date(puzzle.date);
        const nextDate = new Date(puzzle.date);
        const prevStr = prevDate.toISOString().split("T")[0];
        const nextStr = nextDate.toISOString().split("T")[0];
        const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        $$renderer2.push(`${escape_html(prevDate.setDate(prevDate.getDate() - 1))}
						${escape_html(nextDate.setDate(nextDate.getDate() + 1))}  <a${attr("href", `/${stringify(prevStr)}/answers`)} class="text-blue-600 hover:text-blue-800 font-medium">← ${escape_html(prevDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }))}</a> `);
        if (nextStr <= today) {
          $$renderer2.push("<!--[-->");
          if (nextStr === today) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<a href="/answers" class="text-blue-600 hover:text-blue-800 font-medium">Today →</a>`);
          } else {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push(`<a${attr("href", `/${stringify(nextStr)}/answers`)} class="text-blue-600 hover:text-blue-800 font-medium">${escape_html(nextDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }))} →</a>`);
          }
          $$renderer2.push(`<!--]-->`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<span class="text-gray-400">Future date</span>`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <h1 class="text-4xl font-bold text-gray-900 mb-2">`);
    if (isCustom) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`NYT Spelling Bee Answers`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (puzzle.date === (/* @__PURE__ */ new Date()).toISOString().split("T")[0]) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`Today's NYT Spelling Bee Answers`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`NYT Spelling Bee Answers`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></h1> `);
    if (isCustom) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-xl text-gray-600">Custom: ${escape_html(customLetters)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p class="text-xl text-gray-600">${escape_html(puzzle.formattedDate)}</p>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="flex justify-center mb-8"><div class="relative h-64 w-64"><div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(0, -92%)"><svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200"><path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path></svg> <div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">${escape_html(puzzle.outerLetters?.[0]?.toUpperCase())}</div></div> <div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(-80%, -46%)"><svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200"><path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path></svg> <div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">${escape_html(puzzle.outerLetters?.[1]?.toUpperCase())}</div></div> <div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%)"><svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-yellow-300"><path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path></svg> <div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">${escape_html(puzzle.centerLetter?.toUpperCase())}</div></div> <div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(80%, -46%)"><svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200"><path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path></svg> <div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">${escape_html(puzzle.outerLetters?.[2]?.toUpperCase())}</div></div> <div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(-80%, 46%)"><svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200"><path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path></svg> <div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">${escape_html(puzzle.outerLetters?.[3]?.toUpperCase())}</div></div> <div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(0, 92%)"><svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200"><path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path></svg> <div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">${escape_html(puzzle.outerLetters?.[4]?.toUpperCase())}</div></div> <div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(80%, 46%)"><svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200"><path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path></svg> <div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">${escape_html(puzzle.outerLetters?.[5]?.toUpperCase())}</div></div></div></div> `);
    if (isCustom) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6"><p class="text-sm text-blue-700"><strong>Note:</strong> You're looking at answers for a custom solve. The answers below may include words that the NYT Spelling Bee disallows and may be offensive or obscure.</p></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="bg-white rounded-lg shadow-md p-6 mb-6"><h2 class="text-2xl font-bold mb-4">NYT Spelling Bee Pangrams</h2> <div class="flex flex-wrap gap-2 mb-6"><!--[-->`);
    const each_array = ensure_array_like(puzzle.pangrams);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let pangram = each_array[$$index];
      $$renderer2.push(`<div class="pangram-box svelte-14e44ch">${escape_html(pangram.toUpperCase())}</div>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="bg-white rounded-lg shadow-md p-6"><h2 class="text-2xl font-bold mb-4">NYT Spelling Bee Answers</h2> <!--[-->`);
    const each_array_1 = ensure_array_like(Object.entries(sortedAnswers.reduce(
      (groups, word) => {
        const len = word.length;
        if (!groups[len]) groups[len] = [];
        groups[len].push(word);
        return groups;
      },
      {}
    )));
    for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
      let [length, words] = each_array_1[$$index_2];
      $$renderer2.push(`<div class="mb-6"><h3 class="text-xl font-bold mb-3">${escape_html(length)} Letters</h3> <div class="flex flex-wrap gap-2"><!--[-->`);
      const each_array_2 = ensure_array_like(words);
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let word = each_array_2[$$index_1];
        $$renderer2.push(`<div${attr_class(`word-box ${stringify(puzzle.pangrams.includes(word) ? "pangram-word" : "")}`, "svelte-14e44ch")}>${escape_html(word.toUpperCase())}</div>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-6"><a href="/archive" class="btn-secondary">← Back to Archive</a></div></div></div>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
