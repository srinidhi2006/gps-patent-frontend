interface RouteData {
  latitude: number;
  longitude: number;
}

const expectedRoute = {
  latitude: 17.385,
  longitude: 78.4867
};

const detectRouteDeviation = (data: RouteData) => {
  const latDiff = Math.abs(data.latitude - expectedRoute.latitude);
  const lngDiff = Math.abs(data.longitude - expectedRoute.longitude);

  if (latDiff > 0.05 || lngDiff > 0.05) {
    return true;
  }

  return false;
};

export default detectRouteDeviation;