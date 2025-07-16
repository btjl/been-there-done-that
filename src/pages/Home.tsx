import Fuse from 'fuse.js';
import { useMemo, useState } from 'react';
import { VideoCard } from '../components/VideoCard';
import { videos } from '../data/videos';

export default function Home() {
  const [query, setQuery] = useState('');

  const userLang = navigator.language.split('-')[0]; // e.g. 'zh'

  const fuse = useMemo(() => {
    return new Fuse(videos, {
      keys: [
        'title',
        'keywords',
        `localized.${userLang}.title`,
        `localized.${userLang}.keywords`,
      ],
      threshold: 0.3,
    });
  }, [userLang]);


  const filteredVideos = query
    ? fuse.search(query).map(result => result.item)
    : videos;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Been There Done That</h1>

      <input
        type="text"
        placeholder="Search videos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 mb-6 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
      />

      {filteredVideos.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-4">No videos found.</p>
      )}
    </div>
  );
}
