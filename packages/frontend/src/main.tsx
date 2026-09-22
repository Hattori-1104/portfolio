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

if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(<RouterProvider router={router} />)
}
