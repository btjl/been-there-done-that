import type { VideoData } from '../../data/videos';

export function VideoCard({ video }: { video: VideoData }) {
  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-white hover:shadow-lg transition">
      {/* <Link to={`/map/${video.id}`}>
        <img
          src={`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`}
          alt={video.title}
          className="w-full h-48 object-cover"
        />
      </Link> */}

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          {/* <Link to={`/map/${video.id}`} className="hover:underline">
            {video.title}
          </Link> */}
        </h3>

        <a
          href={`https://youtube.com/watch?v=${video.youtubeId}`}
          className="text-blue-600 text-sm hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}
