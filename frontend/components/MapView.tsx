import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import BusinessCard from './BusinessCard';

interface Business {
  name: string;
  lat: number;
  lng: number;
  description: string;
  isPiAccepted: boolean;
  daoScore: number;
  contactLink: string;
}

export default function MapView({ kybList }: { kybList: Business[] }) {
  return (
    <MapContainer
      center={[41.0082, 28.9784]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: '80vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap katkıcıları'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {kybList.map((business, index) => (
        <Marker key={index} position={[business.lat, business.lng]}>
          <Popup>
            <BusinessCard data={business} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
