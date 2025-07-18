import { Marker, Popup } from 'react-leaflet';

interface PlaceMarkerProps {
  name: string;
  description: string;
  position: [number, number];
}

export function PlaceMarker({ name, description, position }: PlaceMarkerProps) {
  return (
    <Marker position={position}>
      <Popup>
        <strong>{name}</strong>
        <br />
        {description}
      </Popup>
    </Marker>
  );
}
