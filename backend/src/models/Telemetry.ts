import mongoose from 'mongoose';

const telemetrySchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true
  },

  longitude: {
    type: Number,
    required: true
  },

  speed: {
    type: Number,
    required: true
  },

  signalStrength: {
    type: Number,
    required: true
  },

  spoofDetected: {
    type: Boolean,
    default: false
  },

  timestamp: {
    type: Date,
    default: Date.now
  },
  
  routeDeviation: {
  type: Boolean,
  default: false
}

});


export default mongoose.model('Telemetry', telemetrySchema);
