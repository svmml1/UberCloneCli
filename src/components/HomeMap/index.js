import React from "react";
import { Image, FlatList } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import cars from '../../assets/data/cars';

const HomeMap = (props) => {

  const getImage = (type) => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    return require('../../assets/images/top-UberXL.png');
  };

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: -9.6618829,
        longitude: -35.7066286,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}
        >
          <Image
            style={{width: 70, height: 70, resizeMode: 'contain'}}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;