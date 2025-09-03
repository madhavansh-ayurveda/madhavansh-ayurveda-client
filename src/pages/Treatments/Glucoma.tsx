export const Glucoma = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center transform transition-all hover:scale-105">
        Ayurvedic Management of Glaucoma & Eye Health
      </h1>
      
      <div className="prose max-w-4xl mx-auto">
        <section className="mb-8 animate-slide-up">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-l-4 border-blue-500 pl-3">
            Understanding Glaucoma in Ayurveda
          </h2>
          <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Core Ayurvedic Concepts:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Balancing Vata-Pitta dosha combination</li>
              <li>Enhancing Rasa Dhatu (nutrient fluid)</li>
              <li>Improving ocular circulation</li>
              <li>Reducing intraocular pressure naturally</li>
            </ul>
          </div>
        </section>

        <section className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-l-4 border-blue-500 pl-3">
            Holistic Treatment Protocol
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-medium mb-3">Specialized Therapies</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Netra Basti (Medicated Eye Bath)</li>
                <li>Shirodhara (Forehead Oil Flow)</li>
                <li>Nasya (Nasal Administration)</li>
                <li>Netra Tarpana (Eye Rejuvenation)</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-medium mb-3">Herbal Interventions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Triphala: Antioxidant eye wash</li>
                <li>Amalaki: Vitamin C for ocular health</li>
                <li>Saffron: Retina protection</li>
                <li>Bhumiamalaki: Intraocular pressure control</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-l-4 border-blue-500 pl-3">
            Eye Health Lifestyle Guide
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium mb-2">✅ Recommended Practices</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Trataka (Yogic Eye Exercises)</li>
                <li>Warm eye compresses</li>
                <li>Dark leafy greens in diet</li>
                <li>Regular eye relaxation breaks</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium mb-2">❌ Avoid</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Prolonged screen exposure</li>
                <li>Excessive salty foods</li>
                <li>Smoking and alcohol</li>
                <li>Sleeping with contact lenses</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-6 rounded-2xl text-center hover:shadow-xl transition-shadow animate-slide-up">
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
            Schedule Eye Consultation
          </button>
        </div>
      </div>
    </div>
  )
}