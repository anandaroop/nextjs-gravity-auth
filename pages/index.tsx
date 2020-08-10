import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS Artsy Auth Demo</title>
      </Head>

      <h1>NextJS Artsy Auth Demo</h1>

      <p>
        <Link href="/authenticated">
          <a>Visit an authenticated page that requires an Artsy login &rarr;</a>
        </Link>
      </p>
    </div>
  );
}
