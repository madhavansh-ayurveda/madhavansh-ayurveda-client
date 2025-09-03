export const ArthritisAndPain = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center transform transition-all hover:scale-105">
        Ayurvedic Management of Arthritis & Chronic Pain
      </h1>
      
      <div className="prose max-w-4xl mx-auto">
        <section className="mb-8 animate-slide-up">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-l-4 border-amber-500 pl-3">
            Understanding Arthritis in Ayurveda
          </h2>
          <div className="bg-gradient-to-r from-amber-50/50 to-orange-50/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <p className="text-gray-600 mb-4">
              Known as "Amavata" in Ayurveda, arthritis is considered a Vata disorder resulting from...
            </p>
            <div className="p-4 rounded-lg mb-4">
              <h3 className="text-lg font-medium text-amber-800 mb-2">Key Ayurvedic Principles:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Balancing Vata dosha through diet and lifestyle</li>
                <li>Reducing Ama (toxins) through detoxification</li>
                <li>Strengthening digestive fire (Agni)</li>
                <li>Rejuvenating joints with herbal therapies</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-l-4 border-amber-500 pl-3">
            Our Treatment Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Treatment Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-medium mb-3">Panchakarma Therapy</h3>
              <p className="text-gray-600">Customized detox program including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Basti (Medicated Enema)</li>
                <li>Janu Basti (Knee Care Therapy)</li>
                <li>Pinda Sweda (Herbal Bolus Massage)</li>
              </ul>
            </div>
            
            {/* Treatment Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-medium mb-3">Herbal Formulations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ashwagandha: Natural anti-inflammatory</li>
                <li>Guggulu: Joint cleansing properties</li>
                <li>Shallaki: Boswellia-based pain relief</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-l-4 border-amber-500 pl-3">
            Lifestyle Recommendations
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">✅ Recommended</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Warm oil massage (Abhyanga)</li>
                <li>Gentle yoga asanas</li>
                <li>Regular sleep schedule</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">❌ Avoid</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cold foods/drinks</li>
                <li>Excessive raw vegetables</li>
                <li>Stressful environments</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-br from-amber-400 to-orange-400 p-6 rounded-2xl text-center hover:shadow-xl transition-shadow animate-slide-up">
          <h3 className="text-xl font-medium mb-3">Personalized Consultation</h3>
          <p className="mb-4">Schedule a consultation with our Ayurvedic specialists for a customized treatment plan</p>
          <button className="bg-white text-amber-700 px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
            Book Consultation
          </button>
        </div>
      </div>
    </div>
  )
}
