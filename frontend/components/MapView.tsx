import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapView({ kybList }: { kybList: any[] }) {
  return (
    <MapContainer center={[41.0082, 28.9784]} zoom={13} scrollWheelZoom={true} style={{ height: '80vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap katkıcıları'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {kybList.map((business, index) => (
        <Marker key={index} position={[business.lat, business.lng]}>
          <Popup>
            <strong>{business.name}</strong><br />
            {business.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
