import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <Head>
        <title>Återvinningsschemaläggare</title>
        <meta name="description" content="Håll koll på återvinningen lätt och smidigt." />
      </Head>
      <h1 style={{ color: '#4CAF50' }}>Håll koll på återvinningen</h1>
      <h2>Enkel planering för ditt hushåll</h2>
      <p>
        SSL-säkrad betalning, Betrodd av hushåll, 24/7 kundsupport
      </p>
      <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: '#FFFFFF', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>
        Börja nu (Gratis provmånad)
      </button>
    </div>
  );
}