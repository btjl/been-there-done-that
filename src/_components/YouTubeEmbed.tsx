
type YouTubeEmbedProps = {
  videoId: string;
  start?: number; // in seconds
  end?: number;   // in seconds
};

export const YouTubeEmbed = ({ videoId, start, end }: YouTubeEmbedProps) => {
  const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);
  if (start) embedUrl.searchParams.set("start", start.toString());
  if (end) embedUrl.searchParams.set("end", end.toString());

  embedUrl.searchParams.set("enablejsapi", "1"); // allows more control if needed
  embedUrl.searchParams.set("rel", "0"); // don't show related videos

  return (
    <iframe
      width="100%"
      height="450"
      src={embedUrl.toString()}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{ borderRadius: "8px" }}
    />
  );
};
