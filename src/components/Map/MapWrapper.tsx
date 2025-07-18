import { MapContainer, TileLayer } from 'react-leaflet';
import { places } from '../../data/places';
import { PlaceMarker } from './PlaceMarker';

const mostRecent = places[places.length - 1];

export function MapWrapper() {
  return (
    <MapContainer
      center={mostRecent.position}
      zoom={4}
      scrollWheelZoom={true}
      className="w-full h-full rounded-xl shadow-md z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places.map((place) => {
        return (
          <PlaceMarker
            key={place.id}
            name={place.name}
            description={place.description}
            position={place.position as [number, number]}
          />
        )
      })}

    </MapContainer>
  );
}
