import Head from 'next/head';

export default function Success() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <Head>
        <title>Köp Bekräftat</title>
      </Head>
      <h1 style={{ color: '#4CAF50' }}>Tack för ditt köp!</h1>
      <p>Ditt abonnemang har startats framgångsrikt.</p>
    </div>
  );
}