import Head from "next/head";
import styles from "../styles/page_layout.module.scss";

export default function PageLayout({ children, pageTitle, pageDescription }) {
  return (
    <>
      <Head>
        <title>Arvin Wiyono | {pageTitle}</title>
        <meta name="author" content="Arvin Wiyono" />
        <meta name="description" content={pageDescription} />
        <link
          href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://unpkg.com/jam-icons/css/jam.min.css"
        ></link>
      </Head>
      <div className={styles.pageWrapper}>
        <main className={styles.mainContent}>
          {children}
        </main>
        <footer className={styles.footer}>
          <div>さよなら 👋</div>
          <code>@awiy1-2020</code>
        </footer>
      </div>
    </>
  );
}
