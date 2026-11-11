import React from 'react';
import LiveMap from '../components/LiveMap';

export default function MapScreen({ lang }) {
  return (
    <div className="space-y-4">
      <LiveMap lang={lang} />
    </div>
  );
}