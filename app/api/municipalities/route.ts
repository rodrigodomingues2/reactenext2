/* app/api/municipalities/route.ts */

export async function GET() {
    return fetch('https://api.carrismetropolitana.pt/municipalities')
        .then(res => res.json())
        .then(data => Response.json(data))
}