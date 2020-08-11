import styles from "./ExternalLink.module.scss";
export default function ExternalLink({ url, children }) {
  return (
    <>
      <a href={url} target="_blank" className={styles.externalLink}>
        {children}
      </a>
    </>
  );
}
