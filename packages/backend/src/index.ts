import { Hono } from "hono"

const app = new Hono<{ Bindings: CloudflareBindings }>().get("*", (c) => {
	return c.env.ASSETS.fetch(c.req.url)
})

export default app
