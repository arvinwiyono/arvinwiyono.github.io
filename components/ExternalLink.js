export default function ExternalLink({ url, children }) {
  return (
    <>
      <a
        href={url}
        target="_blank"
        className="underline font-semibold transition-colors ease-in-out duration-300"
      >
        {children}
      </a>
      <style jsx>
        {`
          a:hover {
            color: pink;
          }
        `}
      </style>
    </>
  );
}
