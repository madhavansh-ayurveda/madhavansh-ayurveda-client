export const Lifestyle = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center transform transition-all hover:scale-105">
        Ayurvedic Lifestyle Optimization
      </h1>
      
      <div className="prose max-w-4xl mx-auto">
        <section className="mb-8 animate-slide-up">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-l-4 border-purple-500 pl-3">
            Daily & Seasonal Routines
          </h2>
          <div className="bg-gradient-to-r from-purple-50/50 to-indigo-50/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-purple-800 mb-2">Pillars of Health:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dinacharya (Daily regimen)</li>
              <li>Ritucharya (Seasonal regimen)</li>
              <li>Sadvritta (Ethical living)</li>
              <li>Marma point activation</li>
            </ul>
          </div>
        </section>

        <section className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-l-4 border-purple-500 pl-3">
            Lifestyle Modules
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-medium mb-3">Daily Practices</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Yoga & Pranayama</li>
                <li>Meditation techniques</li>
                <li>Sleep optimization</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-medium mb-3">Dietary Guidance</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Six tastes balance</li>
                <li>Food combining rules</li>
                <li>Seasonal eating plans</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-br from-indigo-400 to-purple-500 p-6 rounded-2xl text-center hover:shadow-xl transition-shadow animate-slide-up">
          <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
            Analyze Daily Routine
          </button>
        </div>
      </div>
    </div>
  )
}