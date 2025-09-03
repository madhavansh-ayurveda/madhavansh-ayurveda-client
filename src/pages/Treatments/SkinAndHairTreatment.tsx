export const SkinAndHairTreatment = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center transform transition-all hover:scale-105">
        Ayurvedic Dermatology & Trichology
      </h1>
      
      <div className="prose max-w-4xl mx-auto">
        <section className="mb-8 animate-slide-up">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-l-4 border-green-500 pl-3">
            Holistic Beauty Approach
          </h2>
          <div className="bg-gradient-to-r from-green-50/50 to-emerald-50/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-green-800 mb-2">Core Concepts:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Purifying Rakta Dhatu (Blood tissue)</li>
              <li>Balancing Pitta dosha</li>
              <li>External+Internal treatments</li>
              <li>Detoxification therapies</li>
            </ul>
          </div>
        </section>

        <section className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-l-4 border-green-500 pl-3">
            Treatment Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-medium mb-3">Skin Therapies</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Lepa (Herbal packs)</li>
                <li>Parisheka (Medicated showers)</li>
                <li>Blood purification herbs</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-medium mb-3">Hair Care</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Shiro Abhyanga (Scalp massage)</li>
                <li>Bhringraj formulations</li>
                <li>Nutrition for hair growth</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-br from-emerald-400 to-green-500 p-6 rounded-2xl text-center hover:shadow-xl transition-shadow animate-slide-up">
          <button className="bg-white text-emerald-700 px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
            Book Skin/Hair Analysis
          </button>
        </div>
      </div>
    </div>
  )
}
