import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.B4DT8c23.js","_app/immutable/chunks/8ocfAceR.js","_app/immutable/chunks/DGPQMDPo.js","_app/immutable/chunks/C3j538j5.js","_app/immutable/chunks/CyW8ltZj.js","_app/immutable/chunks/C3X0842m.js","_app/immutable/chunks/DkI4MbTz.js","_app/immutable/chunks/DG4ovG7v.js","_app/immutable/chunks/jWG6FY2a.js","_app/immutable/chunks/CR-3D52u.js","_app/immutable/chunks/DsxH-5BP.js","_app/immutable/chunks/M74isgCv.js","_app/immutable/chunks/B8YYZQMw.js","_app/immutable/chunks/DYhVuu_j.js","_app/immutable/chunks/GvvcXKfn.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/BcRhS3wS.js"];
export const stylesheets = [];
export const fonts = [];
