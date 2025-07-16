import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';
import { videos } from '../data/videos';

export default function VideoMap() {
  const { id } = useParams();
  const video = videos.find(v => v.id === id);
  if (!video) return <p>Video not found.</p>;

  const center = video.timestamps[0] || { lat: 0, lng: 0 };

  return (
    <div className="h-screen w-full">
      <MapContainer center={[center.lat, center.lng]} zoom={14} style={{ height: '90vh', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {video.timestamps.map((t, i) => (
          <Marker key={i} position={[t.lat, t.lng]}>
            <Popup>
              <strong>{t.label}</strong><br />
              Timestamp: {t.time}<br />
              <a
                href={`https://youtube.com/watch?v=${video.youtubeId}&t=${t.time.replace(':', '')}s`}
                target="_blank"
                className="text-blue-600 underline"
              >
                Watch from here
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className="text-center py-4">
        <a
          href={`https://youtube.com/watch?v=${video.youtubeId}`}
          className="text-blue-600 underline"
          target="_blank"
        >
          Open full video
        </a>
      </div>
    </div>
  );
}
