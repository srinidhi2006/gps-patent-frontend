'use client';

import { useEffect, useState } from 'react';
import { mockRoutes, currentLocation } from '../../data/routes';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(m => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(m => m.TileLayer), { ssr: false });
const Polyline = dynamic(() => import('react-leaflet').then(m => m.Polyline), { ssr: false });
const CircleMarker = dynamic(() => import('react-leaflet').then(m => m.CircleMarker), { ssr: false });

export default function LiveMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full min-h-[400px] glass rounded-2xl flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[700px] rounded-2xl overflow-hidden border border-cyan-500/20 shadow-[0_0_30px_rgba(0,229,255,0.1)] group">
      {/* HUD overlay */}
      <div className="absolute inset-0 pointer-events-none z-[1000] border-2 border-transparent group-hover:border-cyan-500/30 transition-colors duration-500 rounded-2xl" />
      <div className="absolute top-4 left-4 z-[1000] glass px-3 py-1 rounded-md text-xs font-mono text-cyan-400 pointer-events-none">
        LAT: {currentLocation.lat.toFixed(4)} | LNG: {currentLocation.lng.toFixed(4)}
      </div>

      <MapContainer 
        center={[currentLocation.lat, currentLocation.lng]} 
        zoom={16} 
        style={{ height: '700px', width: '100%', background: '#0a0f1d' }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />
        
        {/* GPS Route (Faulty) */}
        <Polyline 
          positions={mockRoutes.find(r => r.type === 'gps')?.path.map(p => [p.lat, p.lng]) || []} 
          color="#ef4444" 
          weight={4}
          opacity={0.6}
          dashArray="10, 10"
        />

        {/* AI Corrected Route */}
        <Polyline 
          positions={mockRoutes.find(r => r.type === 'ai-corrected')?.path.map(p => [p.lat, p.lng]) || []} 
          color="#00E5FF" 
          weight={4}
          opacity={0.9}
        />

        {/* Current Location Pulse */}
        <CircleMarker 
          center={[currentLocation.lat, currentLocation.lng]}
          radius={8}
          color="#00E5FF"
          fillColor="#00E5FF"
          fillOpacity={1}
          className="animate-pulse"
        />
      </MapContainer>
    </div>
  );
}
