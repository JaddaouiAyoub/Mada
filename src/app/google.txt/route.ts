export default async function googleSiteVerification() {
  return new Response(
    'google-site-verification: YOUR_GOOGLE_VERIFICATION_CODE',
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
}
