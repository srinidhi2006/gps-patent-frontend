export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 px-8">
      
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-5xl font-bold mb-4 text-cyan-400">
          System Settings
        </h1>

        <p className="text-gray-400 mb-12 text-lg">
          Configure AI navigation intelligence and security parameters.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold mb-6">
              AI Sensitivity
            </h2>

            <input
              type="range"
              className="w-full accent-cyan-400"
            />
          </div>

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold mb-6">
              Signal Threshold
            </h2>

            <input
              type="range"
              className="w-full accent-cyan-400"
            />
          </div>

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold mb-6">
              Security Alerts
            </h2>

            <div className="flex justify-between items-center">
              <span className="text-gray-300">
                Enable Threat Monitoring
              </span>

              <button className="w-14 h-8 rounded-full bg-cyan-500" />
            </div>
          </div>

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold mb-6">
              Autonomous Verification
            </h2>

            <p className="text-gray-400">
              Configure predictive correction and adaptive learning behavior.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}