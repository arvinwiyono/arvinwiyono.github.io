export default function ExternalLink({ url, children }) {
  return (
    <>
      <a
        href={url}
        target="_blank"
        className="underline font-semibold transition-colors ease-in-out duration-300 focus:text-gray-600 visited:text-gray-600 hover:text-pink-300"
      >
        {children}
      </a>
    </>
  );
}
