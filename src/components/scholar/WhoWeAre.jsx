import React from 'react'

function WhoWeAre() {
  return (
    <div>
       {/* How It Works Section */}
       <section className="bg-gray-100 py-10 sm:py-12">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
              How the Program Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              The application process is simple. Follow these steps to apply for our Scholar Program:
            </p>
          </div>
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center justify-center text-lg sm:text-xl text-gray-600">
              <span className="font-semibold text-indigo-600 mr-4">Step 1:</span> Complete the online application form.
            </div>
            <div className="flex items-center justify-center text-lg sm:text-xl text-gray-600">
              <span className="font-semibold text-indigo-600 mr-4">Step 2:</span> Submit your academic documents and personal statement.
            </div>
            <div className="flex items-center justify-center text-lg sm:text-xl text-gray-600">
              <span className="font-semibold text-indigo-600 mr-4">Step 3:</span> Choose the courses you wish to apply for.
            </div>
            <div className="flex items-center justify-center text-lg sm:text-xl text-gray-600">
              <span className="font-semibold text-indigo-600 mr-4">Step 4:</span> Complete an online assessment.
            </div>
            <div className="flex items-center justify-center text-lg sm:text-xl text-gray-600">
              <span className="font-semibold text-indigo-600 mr-4">Step 5:</span> Receive your scholarship offer and begin your journey!
            </div>
          </div>
        </section>
    </div>
  )
}

export default WhoWeAre
