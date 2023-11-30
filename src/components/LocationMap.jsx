import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const LocationMap = ({ center }) => {
  const mapContainerStyle = {
    width: '50%',
    height: '200px',
  };
        console.log("desde componente", center)

  return (
    <LoadScript googleMapsApiKey="AIzaSyAgmP2XLPCHVGdTYKjTidcRto7s5GHVzlI">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
        {/* Utiliza la posición del usuario como posición del marcador */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default LocationMap;
