'use server';

import { Language, PlaceInputType } from '@googlemaps/google-maps-services-js';
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
    return new Error();
  }
}

export async function getAddressFromQuery(q: string) {
  try {
    const res = await mapsClient.findPlaceFromText({
      params: {
        key: process.env.LOCATION_KEY!,
        language: Language.es,
        fields: ['formatted_address', 'geometry'],
        input: q,
        inputtype: PlaceInputType.textQuery,
      },
    });

    return res.data.candidates.map(r => ({
      address: r.formatted_address,
      latlng: {
        lat: r.geometry!.location.lat,
        lng: r.geometry!.location.lng,
      },
    }));
  } catch (e) {
    console.log(e);
    return new Error();
  }
}
