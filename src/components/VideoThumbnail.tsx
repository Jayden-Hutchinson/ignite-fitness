import { useState } from "react";

interface VideoThumbnailProps {
  videoId: string;
  title?: string;
  className?: string;
}

export default function VideoThumbnail({
  videoId,
  title = "Video",
  className,
}: VideoThumbnailProps) {
  const [playing, setPlaying] = useState<boolean>(false);

  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-xl bg-black ${className}`}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer p-0"
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <span className="absolute top-1/2 left-1/2 grid h-18 w-18 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-black/65 text-white transition group-hover:scale-110 group-hover:bg-black/80 group-focus-visible:ring-4 group-focus-visible:ring-white">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-1 h-8 w-8"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
