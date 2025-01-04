export async function GET() {
  try {
      const response = await fetch('https://deisishop.pythonanywhere.com/products');
      if (!response.ok) {
          return new Response(JSON.stringify({ error: 'Failed to fetch products' }), { status: 500 });
      }
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
      return new Response(JSON.stringify({ error: 'An error occurred while fetching data' }), { status: 500 });
  }
}
