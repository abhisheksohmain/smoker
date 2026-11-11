import { LOCAL } from '@/data/images';

// Image with automatic local fallback if the remote image fails
export default function Img({ src, alt = '', fallback = LOCAL.lounge, ...rest }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => { if (e.currentTarget.src.indexOf(fallback) === -1) e.currentTarget.src = fallback; }}
      {...rest}
    />
  );
}
