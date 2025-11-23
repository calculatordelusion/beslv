import { U as head, _ as attr, V as attr_class, a0 as ensure_array_like, W as stringify, $ as bind_props } from "../../../../chunks/index2.js";
import { d as getHints } from "../../../../chunks/puzzleData.js";
import { e as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let groupedByFirstLetter;
    let data = $$props["data"];
    let puzzle = data.puzzle;
    let isCustom = data.isCustom || false;
    let customLetters = data.customLetters || "";
    if (!puzzle.answers) puzzle.answers = [];
    if (!puzzle.pangrams) puzzle.pangrams = [];
    if (!puzzle.outerLetters) puzzle.outerLetters = [];
    let hints = getHints(puzzle.answers);
    let revealedSections = {
      pangrams: false,
      twoLetterList: false,
      hints: false,
      allAnswers: false
    };
    groupedByFirstLetter = hints.reduce(
      (acc, hint) => {
        if (!acc[hint.firstLetter]) acc[hint.firstLetter] = [];
        acc[hint.firstLetter].push(hint);
        return acc;
      },
      {}
    );
    head("k17c1m", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(isCustom ? `NYT Spelling Bee Hints for Custom: ${customLetters}` : `${puzzle.formattedDate} - NYT Spelling Bee Hints`)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", isCustom ? `Get hints for custom Spelling Bee puzzle with letters ${customLetters}` : `Get hints for ${puzzle.formattedDate} NYT Spelling Bee puzzle`)}/>`);
    });
    $$renderer2.push(`<div class="bg-gray-50 py-12"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-8"><h1 class="text-4xl font-bold text-gray-900 mb-2">NYT Spelling Bee Hints</h1> <p class="text-xl text-gray-600">${escape_html(isCustom ? `Custom: ${customLetters}` : puzzle.formattedDate)}</p></div> `);
    if (isCustom) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6"><p class="text-sm text-blue-700"><strong>Note:</strong> You're looking at answers for a custom solve. The answers below may include words that the NYT Spelling Bee disallows and may be offensive or obscure.</p></div> <div class="bg-green-50 border-l-4 border-green-400 p-4 mb-6"><p class="text-sm text-green-700"><strong>Note:</strong> This page contains hints to help solve Custom: ${escape_html(customLetters)}'s New York Times Spelling Bee. To reveal a hint, click on any blurred area below. To see all pangrams and answers for this puzzle at once, visit the <a${attr("href", `/${stringify(customLetters)}/answers`)} class="underline font-semibold">Spelling Bee Answers page</a>.</p></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="bg-white rounded-lg shadow-md p-6 mb-6"><div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center"><div><div class="text-gray-600 text-sm mb-1">Center Letter</div> <div class="text-3xl font-bold text-bee-yellow">${escape_html(puzzle.centerLetter.toUpperCase())}</div></div> <div><div class="text-gray-600 text-sm mb-1">Outer Letters</div> <div class="text-xl font-bold text-gray-700">${escape_html(puzzle.outerLetters.join(" ").toUpperCase())}</div></div> <div><div class="text-gray-600 text-sm mb-1">Total Words</div> <div class="text-3xl font-bold text-gray-900">${escape_html(puzzle.answers.length)}</div></div></div></div> <div class="bg-white rounded-lg shadow-md p-6 mb-6"><h2 class="text-2xl font-bold mb-4">Pangram(s)</h2> <p class="text-gray-600 mb-4">Words that use all 7 letters at least once</p> <div class="mb-4"><div${attr_class("", void 0, {
      "blur-spoiler": true,
      "revealed": revealedSections.pangrams
    })}><div class="text-lg font-semibold">`);
    if (puzzle.pangrams.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(puzzle.pangrams);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let pangram = each_array[$$index];
        $$renderer2.push(`<div class="py-2 px-4 bg-yellow-100 text-yellow-900 rounded mb-2 inline-block">${escape_html(pangram.toUpperCase())}</div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="text-gray-500">No pangrams found for this combination</div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div> <button class="btn-primary">${escape_html("Reveal")} Pangram</button></div> <div class="bg-white rounded-lg shadow-md p-6 mb-6"><h2 class="text-2xl font-bold mb-4">Words Grouped by First Two Letters</h2> <p class="text-gray-600 mb-4">See which two-letter combinations start valid words</p> <div class="mb-4"><div${attr_class("", void 0, {
      "blur-spoiler": true,
      "revealed": revealedSections.twoLetterList
    })}>`);
    if (puzzle.answers.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="grid grid-cols-3 md:grid-cols-6 gap-2"><!--[-->`);
      const each_array_1 = ensure_array_like([
        ...new Set(puzzle.answers.map((w) => w.substring(0, 2).toUpperCase()))
      ]);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let twoLetter = each_array_1[$$index_1];
        $$renderer2.push(`<div class="p-2 bg-gray-100 rounded text-center font-mono font-bold">${escape_html(twoLetter)}</div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="text-gray-500">No words found for this combination</div>`);
    }
    $$renderer2.push(`<!--]--></div></div> <button class="btn-primary">${escape_html("Reveal")} Two-Letter List</button></div> <div class="bg-white rounded-lg shadow-md p-6 mb-6"><h2 class="text-2xl font-bold mb-4">Word Hints</h2> <p class="text-gray-600 mb-4">First letter and word length for each answer</p> <div class="mb-4"><div${attr_class("", void 0, {
      "blur-spoiler": true,
      "revealed": revealedSections.hints
    })}>`);
    if (Object.keys(groupedByFirstLetter).length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_2 = ensure_array_like(Object.entries(groupedByFirstLetter).sort());
      for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
        let [letter, words] = each_array_2[$$index_3];
        $$renderer2.push(`<div class="mb-4"><h3 class="text-xl font-bold text-gray-900 mb-2">${escape_html(letter)} (${escape_html(words.length)} words)</h3> <div class="grid grid-cols-2 md:grid-cols-4 gap-2"><!--[-->`);
        const each_array_3 = ensure_array_like(words);
        for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
          let hint = each_array_3[$$index_2];
          $$renderer2.push(`<div class="p-2 bg-gray-100 rounded font-mono text-sm">${escape_html(hint.hint)} (${escape_html(hint.length)})</div>`);
        }
        $$renderer2.push(`<!--]--></div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="text-gray-500">No words found for this combination</div>`);
    }
    $$renderer2.push(`<!--]--></div></div> <button class="btn-primary">${escape_html("Reveal")} Hints</button></div> <div class="bg-white rounded-lg shadow-md p-6"><h2 class="text-2xl font-bold mb-4">All Answers</h2> <p class="text-gray-600 mb-4">Complete list of all valid words</p> <div class="mb-4"><div${attr_class("", void 0, {
      "blur-spoiler": true,
      "revealed": revealedSections.allAnswers
    })}>`);
    if (puzzle.answers.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="columns-2 md:columns-3 gap-4"><!--[-->`);
      const each_array_4 = ensure_array_like(puzzle.answers.sort());
      for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
        let answer = each_array_4[$$index_4];
        $$renderer2.push(`<div class="py-1 px-2 text-sm font-medium break-inside-avoid">${escape_html(answer)} `);
        if (puzzle.pangrams.includes(answer)) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="text-yellow-600">★</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="text-gray-500">No words found for this combination</div>`);
    }
    $$renderer2.push(`<!--]--></div></div> <button class="btn-primary">${escape_html("Reveal")} All Answers</button></div> <div class="flex justify-between mt-8"><a href="/" class="btn-secondary">← Back to Solver</a> <a${attr("href", `/${stringify(isCustom ? customLetters : puzzle.date)}/answers`)} class="btn-primary">View Answers →</a></div></div></div>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
