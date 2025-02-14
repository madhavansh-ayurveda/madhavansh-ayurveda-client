export const Immunity = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center transform transition-all hover:scale-105">
        Ayurvedic Immunity Enhancement
      </h1>

      <div className="prose max-w-4xl mx-auto">
        <section className="mb-8 animate-slide-up">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-l-4 border-orange-500 pl-3">
            Immunity in Ayurveda (Vyadhikshamatva)
          </h2>
          <div className="bg-gradient-to-r from-orange-50/50 to-yellow-50/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-orange-800 mb-2">Immunity Fundamentals:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Balancing all three doshas (Vata-Pitta-Kapha)</li>
              <li>Enhancing digestive fire (Agni)</li>
              <li>Daily detoxification rituals</li>
              <li>Seasonal purification (Ritucharya)</li>
            </ul>
          </div>
        </section>

        <section className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-l-4 border-orange-500 pl-3">
            Immunity Building Protocols
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-medium mb-3">Rasayana Therapies</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Chyawanprash formulations</li>
                <li>Ashwagandha root extracts</li>
                <li>Giloy (Guduchi) supplements</li>
                <li>Golden Milk (Turmeric therapy)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-medium mb-3">Lifestyle Practices</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Abhyanga (Oil massage)</li>
                <li>Pranayama techniques</li>
                <li>Sleep optimization</li>
                <li>Seasonal detox programs</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-br from-orange-400 to-yellow-400 p-6 rounded-2xl text-center hover:shadow-xl transition-shadow animate-slide-up">
          <h3 className="text-xl font-medium mb-3">Custom Immunity Assessment</h3>
          <p className="mb-4">Get your personalized immunity score and enhancement plan</p>
          <button className="bg-white text-orange-700 px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
            Check Immunity Status
          </button>
        </div>
      </div>
    </div>
  )
}
