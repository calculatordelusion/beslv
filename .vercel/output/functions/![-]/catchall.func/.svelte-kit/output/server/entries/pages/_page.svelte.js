import { U as head, _ as attr, $ as bind_props } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import { e as escape_html } from "../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    let puzzle = data.puzzle;
    let customLetters = { center: "", outer: ["", "", "", "", "", ""] };
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>NYT Spelling Bee Solver</title>`);
      });
      $$renderer3.push(`<meta name="description" content="New York Times Spelling Bee Solver | Get Spoiler-Aware Hints &amp; Answers to Solve the Puzzle and Win the Queen Bee Crown - Updated Daily"/>`);
    });
    $$renderer2.push(`<div class="bg-gray-50 py-12"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">NYT Spelling Bee Solver</h1> <p class="text-xl text-gray-600 mb-2">Customizable Hints and Answers for the NYT Spelling Bee</p> <p class="text-lg text-gray-500">${escape_html(puzzle.formattedDate)}</p></div> <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12"><h2 class="text-2xl font-bold text-center mb-6">Spelling Bee Solver</h2> <p class="text-center text-gray-600 mb-6">Enter letters and click on a button below to get hints or answers.</p> <div class="flex flex-col items-center mb-6"><div class="flex justify-center mb-2"><input type="text" maxlength="1" class="honeycomb-letter honeycomb-outer mx-2 text-center uppercase"${attr("value", customLetters.outer[0])} placeholder=""/> <input type="text" maxlength="1" class="honeycomb-letter honeycomb-outer mx-2 text-center uppercase"${attr("value", customLetters.outer[1])} placeholder=""/></div> <div class="flex justify-center mb-2"><input type="text" maxlength="1" class="honeycomb-letter honeycomb-outer mx-2 text-center uppercase"${attr("value", customLetters.outer[2])} placeholder=""/> <input type="text" maxlength="1" class="honeycomb-letter honeycomb-center mx-2 text-center uppercase"${attr("value", customLetters.center)} placeholder=""/> <input type="text" maxlength="1" class="honeycomb-letter honeycomb-outer mx-2 text-center uppercase"${attr("value", customLetters.outer[3])} placeholder=""/></div> <div class="flex justify-center"><input type="text" maxlength="1" class="honeycomb-letter honeycomb-outer mx-2 text-center uppercase"${attr("value", customLetters.outer[4])} placeholder=""/> <input type="text" maxlength="1" class="honeycomb-letter honeycomb-outer mx-2 text-center uppercase"${attr("value", customLetters.outer[5])} placeholder=""/></div></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex justify-center space-x-4 mt-6 border-t pt-6"><button class="btn-primary">Get Hints →</button> <span class="text-gray-500 font-semibold">or</span> <button class="btn-secondary">Get All Answers →</button></div></div> <div class="max-w-4xl mx-auto prose prose-blue"><h2>Spelling Bee Solver</h2> <p>Spelling Bee Solver is a free tool that helps players solve the New York Times Spelling Bee puzzle. 
				It can be used to find all the possible words that can be created from a given set of letters.</p> <h3>Spelling Bee Answers</h3> <p>If you're looking for the answers to the Spelling Bee puzzle, you've come to the right place. 
				We have a page dedicated to the <a href="/pangram">Spelling Bee Pangrams &amp; Answers for Today</a>, 
				and a page dedicated to those who want <a href="/hints">spoiler-aware hints to today's puzzle</a>. 
				For those who want to catch up with yesterday's answers, we have a <a href="/yesterday/answers">page for that too</a>. 
				We also have an <a href="/archive">archive for past Spelling Bee puzzles</a>.</p> <h3>Spelling Bee</h3> <p>The New York Times Spelling Bee is a popular word puzzle game published by The New York Times. 
				The game presents players with a honeycomb-shaped grid of seven letters, one at the center and the others surrounding it. 
				The goal is to create as many words as possible from these letters.</p></div></div></div>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
