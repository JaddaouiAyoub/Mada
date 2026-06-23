export async function GET() {
  return new Response(
    'google-site-verification: YOUR_GOOGLE_VERIFICATION_CODE',
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
}
