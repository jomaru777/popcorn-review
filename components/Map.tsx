"use client";
import {
  useState,
  useCallback
} from "react";

import {
  APIProvider,
  Map as GoogleMap,
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';

import {
  theaters,
  Theater
} from "@/data/theaters";

import Link from 'next/link';


export default function Map() {
  const MarkerWithInfoWindow = ({ theater }: { theater: Theater }) => {
    const [markerRef, marker] = useAdvancedMarkerRef();
    const [infoWindowShown, setInfoWindowShown] = useState(false);

    const handleMarkerClick = useCallback(
      () => setInfoWindowShown(isShown => !isShown),
      []);

    const handleClose = useCallback(() => setInfoWindowShown(false), []);

    return (
      <>
        <AdvancedMarker
          key={theater.id}
          position={{
            lat: theater.lat,
            lng: theater.lng
          }}
          ref={markerRef}
          onClick={handleMarkerClick}
          style={{
            cursor: 'pointer',
          }}
        />
        {infoWindowShown && (
          <InfoWindow
            anchor={marker}
            onClose={handleClose}
          >
            <div>
              <Link href={`/theater/${theater.id}`}>
                <h2>{theater.name}</h2>
                <p>{theater.address}</p>
              </Link>
            </div>
          </InfoWindow>
        )}
      </>
    );
  };

  return (
    <>
    <p className="text-center mb-2">ポップコーンのレビューをマップから探せるページです。</p>
    <div>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        <GoogleMap
          mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
          style={{
            width: '100%',
            height: '100dvh',
          }}
          defaultCenter={{
            lat: 34.384902991436725,
            lng: 132.45650850113634
          }}
          defaultZoom={12}
          gestureHandling='greedy'
          disableDefaultUI
        >
          {theaters.map((theater: Theater) => (
            <MarkerWithInfoWindow
              key={theater.id}
              theater={theater}
            />
          ))}
        </GoogleMap >
      </APIProvider>
    </div>
    </>
  );
}
