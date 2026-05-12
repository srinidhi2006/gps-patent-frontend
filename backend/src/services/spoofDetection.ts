interface TelemetryData {
  speed: number;
  signalStrength: number;
}

const detectSpoof = (data: TelemetryData) => {
  if (data.speed > 200) {
    return true;
  }

  if (data.signalStrength < 20) {
    return true;
  }

  return false;
};

export default detectSpoof;