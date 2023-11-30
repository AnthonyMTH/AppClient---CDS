import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const LocationMap = ({ center }) => {
  try {
  const mapContainerStyle = {
    width: '50%',
    height: '200px',
  };
        console.log("desde componente", center)

  return (
    <LoadScript googleMapsApiKey="AIzaSyAgmP2XLPCHVGdTYKjTidcRto7s5GHVzlI">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={{ lat: center[1], lng: center[0] }} zoom={15}>
        {/* Utiliza la posición del usuario como posición del marcador */}
        <Marker position={{ lat: center[1], lng: center[0] }} />
      </GoogleMap>
    </LoadScript>
  );
    
  } catch (error) {
  console.log(error)  
  }
};

export default LocationMap;
