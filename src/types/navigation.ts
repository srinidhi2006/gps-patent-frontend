export interface Coordinate {
  lat: number;
  lng: number;
}

export interface RouteData {
  id: string;
  type: 'gps' | 'ai-corrected' | 'current';
  status: 'normal' | 'warning' | 'failure';
  path: Coordinate[];
}
