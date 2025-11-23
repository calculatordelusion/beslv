import * as universal from '../entries/pages/yesterday/answers/_page.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/yesterday/answers/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/yesterday/answers/+page.js";
export const imports = ["_app/immutable/nodes/10.DMGkFj7J.js","_app/immutable/chunks/DGPQMDPo.js","_app/immutable/chunks/C3j538j5.js","_app/immutable/chunks/CyW8ltZj.js","_app/immutable/chunks/C3X0842m.js","_app/immutable/chunks/DkI4MbTz.js","_app/immutable/chunks/CrusgxR6.js","_app/immutable/chunks/jWG6FY2a.js","_app/immutable/chunks/CR-3D52u.js","_app/immutable/chunks/BznUmIfi.js","_app/immutable/chunks/DsxH-5BP.js","_app/immutable/chunks/M74isgCv.js","_app/immutable/chunks/B8YYZQMw.js","_app/immutable/chunks/DYhVuu_j.js"];
export const stylesheets = ["_app/immutable/assets/10.g2on2OJv.css"];
export const fonts = [];
