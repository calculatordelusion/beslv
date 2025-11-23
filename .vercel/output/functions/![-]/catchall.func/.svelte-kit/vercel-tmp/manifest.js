export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","words.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.C656tHAm.js",app:"_app/immutable/entry/app.-iPJsxIO.js",imports:["_app/immutable/entry/start.C656tHAm.js","_app/immutable/chunks/GvvcXKfn.js","_app/immutable/chunks/CyW8ltZj.js","_app/immutable/chunks/DYhVuu_j.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/BcRhS3wS.js","_app/immutable/entry/app.-iPJsxIO.js","_app/immutable/chunks/CyW8ltZj.js","_app/immutable/chunks/DkI4MbTz.js","_app/immutable/chunks/C3j538j5.js","_app/immutable/chunks/BcRhS3wS.js","_app/immutable/chunks/DG4ovG7v.js","_app/immutable/chunks/M74isgCv.js","_app/immutable/chunks/B8YYZQMw.js","_app/immutable/chunks/DYhVuu_j.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/answers",
				pattern: /^\/answers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/custom/[letters]/answers",
				pattern: /^\/api\/custom\/([^/]+?)\/answers\/?$/,
				params: [{"name":"letters","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/custom/_letters_/answers/_server.js'))
			},
			{
				id: "/api/custom/[letters]/hints",
				pattern: /^\/api\/custom\/([^/]+?)\/hints\/?$/,
				params: [{"name":"letters","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/custom/_letters_/hints/_server.js'))
			},
			{
				id: "/archive",
				pattern: /^\/archive\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/faq",
				pattern: /^\/faq\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/hints",
				pattern: /^\/hints\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/pangram",
				pattern: /^\/pangram\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/yesterday/answers",
				pattern: /^\/yesterday\/answers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/yesterday/pangram",
				pattern: /^\/yesterday\/pangram\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/[date]/answers",
				pattern: /^\/([^/]+?)\/answers\/?$/,
				params: [{"name":"date","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/[date]/answers/__data.json",
				pattern: /^\/([^/]+?)\/answers\/__data\.json\/?$/,
				params: [{"name":"date","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/_date_/answers/__data.json/_server.js'))
			},
			{
				id: "/[date]/hints",
				pattern: /^\/([^/]+?)\/hints\/?$/,
				params: [{"name":"date","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
