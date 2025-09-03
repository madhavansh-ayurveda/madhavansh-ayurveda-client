export const KidneyAndBladder = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center transform transition-all hover:scale-105">
        Renal Health & Urinary System Care
      </h1>
      
      <div className="prose max-w-4xl mx-auto">
        <section className="mb-8 animate-slide-up">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-l-4 border-blue-500 pl-3">
            Ayurvedic Kidney Care
          </h2>
          <div className="bg-gradient-to-r from-blue-50/50 to-cyan-50/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Treatment Principles:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Detoxifying Mutravaha Srotas</li>
              <li>Balancing Apana Vata</li>
              <li>Herbal diuretics</li>
              <li>Acid-alkaline balance</li>
            </ul>
          </div>
        </section>

        <section className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-l-4 border-blue-500 pl-3">
            Therapeutic Approaches
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-medium mb-3">Kidney Cleansing</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Punarnava formulations</li>
                <li>Gokshura supplements</li>
                <li>Varuna bark therapies</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-medium mb-3">Bladder Health</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Chandraprabha Vati</li>
                <li>Uttara Basti therapy</li>
                <li>Hydration protocols</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-6 rounded-2xl text-center hover:shadow-xl transition-shadow animate-slide-up">
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
            Assess Renal Health
          </button>
        </div>
      </div>
    </div>
  )
}
