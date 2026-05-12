import LiveMap from '@/components/map/LiveMap';

export default function MapPage() {
  return (
    <div className="min-h-screen bg-[#050816] pt-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-white mb-4">
          Live Navigation Intelligence
        </h1>

        <p className="text-gray-400 mb-10 text-lg">
          Real-time predictive GPS telemetry and autonomous navigation analysis.
        </p>

        <div className="h-[700px] w-full">
          <LiveMap />
        </div>

      </div>
    </div>
  );
}