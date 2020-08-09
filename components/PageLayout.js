import Head from "next/head";

export default function PageLayout({ children }) {
  return (
    <div className="page-layout py-16 px-8 max-w-md md:max-w-lg sm:px-0 mx-auto">
      <Head>
        <title>Arvin Wiyono</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://unpkg.com/jam-icons/css/jam.min.css"
        ></link>
      </Head>
      {children}
    </div>
  );
}
