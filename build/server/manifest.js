const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","imgs/paminfo.png","imgs/sangerlogowhite.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.601a7725.js","app":"_app/immutable/entry/app.e11ef3c0.js","imports":["_app/immutable/entry/start.601a7725.js","_app/immutable/chunks/index.11bf781f.js","_app/immutable/chunks/singletons.19dfdcaa.js","_app/immutable/entry/app.e11ef3c0.js","_app/immutable/chunks/index.11bf781f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-16ce8240.js')),
			__memo(() => import('./chunks/1-4de08824.js')),
			__memo(() => import('./chunks/2-dcb88736.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

export { manifest };
//# sourceMappingURL=manifest.js.map
