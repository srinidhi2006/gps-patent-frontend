import { RouteData } from '../types/navigation';

export const mockRoutes: RouteData[] = [
  {
    id: 'r1',
    type: 'gps',
    status: 'failure',
    path: [
      { lat: 37.7749, lng: -122.4194 },
      { lat: 37.7750, lng: -122.4180 },
      { lat: 37.7760, lng: -122.4150 }, // Drift starts
      { lat: 37.7780, lng: -122.4100 }, // Spoofed
      { lat: 37.7800, lng: -122.4050 },
    ]
  },
  {
    id: 'r2',
    type: 'ai-corrected',
    status: 'normal',
    path: [
      { lat: 37.7749, lng: -122.4194 },
      { lat: 37.7750, lng: -122.4180 },
      { lat: 37.7751, lng: -122.4170 }, // AI maintains course
      { lat: 37.7752, lng: -122.4160 },
      { lat: 37.7753, lng: -122.4150 },
    ]
  }
];

export const currentLocation = { lat: 37.7751, lng: -122.4170 };
