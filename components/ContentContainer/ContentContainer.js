import styles from "./ContentContainer.module.scss";

export default function ContentContainer({ children }) {
  return(
    <div className={styles.contentContainer}>
      {children}
    </div>
  )
}
