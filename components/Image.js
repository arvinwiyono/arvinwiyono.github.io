import cn from "classnames";

export default function Image({ rounded, shadowLarge, src, alt = null }) {
  const klasses = cn("mb-4", "w-1/3", "sm:mr-6", "sm:mb-0", {
    rounded: rounded,
    "shadow-lg dark:shadow-lg-pink": shadowLarge,
  });

  return <img src={src} alt={alt} className={klasses} loading="lazy" />;
}
