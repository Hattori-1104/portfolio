import { Hono } from "hono"

const app = new Hono<CloudflareBindings>()

app.get("/", (c) => {
	return c.text("Hello Hono!")
})

export default app
