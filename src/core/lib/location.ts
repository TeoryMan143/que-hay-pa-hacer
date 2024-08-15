import { Language } from '@googlemaps/google-maps-services-js';
import { mapsClient } from '../maps-api';

export async function getAddressFromCoords(latlng: {
  lat: number;
  lng: number;
}) {
  try {
    const res = await mapsClient.reverseGeocode({
      params: {
        key: process.env.LOCATION_KEY!,
        latlng,
        language: Language.es,
      },
    });

    return res.data.results[0].formatted_address;
  } catch (e) {
    console.log(e);
    return 'Error';
  }
}
