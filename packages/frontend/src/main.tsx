import { createRouter, RouterProvider } from "@tanstack/react-router"
import ReactDOM from "react-dom/client"
import { routeTree } from "./routeTree.gen"

const router = createRouter({
	routeTree,
	scrollRestoration: true,
	defaultPreload: "intent",
	defaultPreloadStaleTime: 0,
	defaultViewTransition: {
		types({ fromLocation, toLocation, pathChanged }) {
			if (!fromLocation || !pathChanged) return false

			const from = fromLocation.state.__TSR_index
			const to = toLocation.state.__TSR_index

			if (from === to) return ["fade"]

			return [from > to ? "back" : "forward"]
		},
	},
})

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router
	}
}

const rootElement = document.getElementById("app")

const nextFrame = () => new Promise((r) => requestAnimationFrame(() => r(null)))
const timeout = (ms: number) => new Promise((r) => setTimeout(r, ms))

async function hideSplash() {
	// 描画・レイアウトが走ると、使われているフォントの読み込みが始まる
	await nextFrame()
	await nextFrame()
	// フォント読み込み完了か、3秒経過のどちらか早い方で解除
	const fontsReady = async () => {
		await document.fonts.ready
		await timeout(500)
	}
	await Promise.race([fontsReady(), timeout(3000)])

	const splash = document.getElementById("splash")
	if (!splash) return
	splash.classList.add("hide")
	splash.addEventListener("transitionend", () => splash.remove(), {
		once: true,
	})
}

hideSplash()

if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(<RouterProvider router={router} />)
}
