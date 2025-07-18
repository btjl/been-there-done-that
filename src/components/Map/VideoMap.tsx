// src/components/Map/VideoMap.tsx

import type { VideoData } from '../../data/videos';

export default function VideoMap({ video }: { video: VideoData }) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{video.title}</h1>

      <div className="aspect-w-16 aspect-h-9 mb-6">
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          className="w-full h-96"
          allowFullScreen
        />
      </div>

      {/* Insert your custom map display here */}
      <div className="border border-gray-300 rounded-xl p-4 shadow">
        Map component placeholder for {video.id}
      </div>
    </div>
  );
}
