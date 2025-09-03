export const TreatmentDefault = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Our Treatments</h1>
      <p className="text-muted-foreground">
        Welcome to Madhavansh Ayurveda's comprehensive treatment center. We offer a wide range of 
        traditional Ayurvedic treatments customized to your specific needs. Please select a treatment 
        from the sidebar to learn more about our specialized care options.
      </p>
      <div className="grid gap-4 mt-6">
        <div className="p-4 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Why Choose Ayurvedic Treatment?</h3>
          <p className="text-muted-foreground">
            Ayurvedic treatment focuses on holistic healing, addressing not just the symptoms but 
            the root cause of health issues. Our traditional methods combined with modern healthcare 
            standards provide effective, natural solutions for various health conditions.
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
          <p className="text-muted-foreground">
            Each treatment plan is personalized based on your body constitution (Prakriti) and current 
            health condition (Vikriti). We use authentic herbs and time-tested procedures to ensure 
            the best results for our patients.
          </p>
        </div>
      </div>
    </div>
  )
} 