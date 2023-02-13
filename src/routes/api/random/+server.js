/** @type {import('./$types').RequestHandler} */
export function GET() {
	return new Response(String(Math.random()));
}
