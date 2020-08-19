export default function ExternalLink({ url, children }) {
  return (
    <>
      <a href={url} target="_blank">
        {children}
      </a>
    </>
  );
}
