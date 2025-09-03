export const InfertilityAndPCOD = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center transform transition-all hover:scale-105">
        Ayurvedic Solutions for Fertility & PCOD
      </h1>
      
      <div className="prose max-w-4xl mx-auto">
        <section className="mb-8 animate-slide-up">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-l-4 border-pink-500 pl-3">
            Reproductive Health in Ayurveda
          </h2>
          <div className="bg-gradient-to-r from-pink-50/50 to-rose-50/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-pink-800 mb-2">Key Focus Areas:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Balancing Artava Dhatu (Reproductive tissue)</li>
              <li>Regulating menstrual cycles</li>
              <li>Improving ovarian health</li>
              <li>Reducing hormonal imbalances</li>
            </ul>
          </div>
        </section>

        <section className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-l-4 border-pink-500 pl-3">
            Treatment Modules
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-medium mb-3">Fertility Therapies</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Uttara Basti (Uterine therapy)</li>
                <li>Yoni Pichu (Medicated tampons)</li>
                <li>Shodhana Chikitsa (Purification)</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-medium mb-3">PCOD Management</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kanchanar Guggulu</li>
                <li>Hormone-regulating diet plans</li>
                <li>Stress management protocols</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-br from-pink-400 to-rose-500 p-6 rounded-2xl text-center hover:shadow-xl transition-shadow animate-slide-up">
          <button className="bg-white text-pink-700 px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
            Book Fertility Assessment
          </button>
        </div>
      </div>
    </div>
  )
}
