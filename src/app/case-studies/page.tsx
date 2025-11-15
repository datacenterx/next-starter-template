import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const caseStudies = [
  {
    id: 1,
    client: "RetailMax",
    industry: "Retail",
    title: "Transforming Multi-Location Retail Operations",
    challenge: "RetailMax was struggling with inconsistent inventory management across 25 retail locations, leading to stockouts and overstock situations.",
    solution: "We implemented our comprehensive POS system with real-time inventory synchronization, automated reordering, and centralized reporting.",
    results: [
      "40% reduction in inventory carrying costs",
      "95% decrease in stockouts",
      "30% improvement in sales velocity",
      "Real-time visibility across all locations"
    ],
    testimonial: "SoftServe Pro's solution revolutionized how we manage our inventory. We've seen significant cost savings and our customers are happier than ever.",
    author: "John Davis, CEO",
    icon: "🛍️",
    color: "from-blue-500 to-blue-700"
  },
  {
    id: 2,
    client: "TechStart",
    industry: "Technology",
    title: "Custom CRM Solution for Rapid Growth",
    challenge: "TechStart needed a scalable CRM system that could handle their rapid growth from 50 to 500 customers while maintaining personalized service.",
    solution: "We developed a custom CRM platform with automated workflows, customer segmentation, and integrated communication tools.",
    results: [
      "10x increase in customer base managed efficiently",
      "60% reduction in response time",
      "85% improvement in customer satisfaction",
      "Automated 70% of routine tasks"
    ],
    testimonial: "The custom CRM has been a game-changer. We can now scale without sacrificing the personal touch our customers expect.",
    author: "Sarah Chen, Founder",
    icon: "🚀",
    color: "from-green-500 to-green-700"
  },
  {
    id: 3,
    client: "ShopNow",
    industry: "E-commerce",
    title: "E-commerce Platform Driving 200% Growth",
    challenge: "ShopNow's outdated e-commerce platform couldn't handle increasing traffic and lacked modern features needed to compete online.",
    solution: "We built a scalable e-commerce platform with advanced analytics, personalization engine, and seamless checkout experience.",
    results: [
      "200% increase in online sales",
      "45% improvement in conversion rate",
      "65% reduction in cart abandonment",
      "Mobile sales grew 300%"
    ],
    testimonial: "Our new platform exceeded all expectations. The ROI was immediate and continues to grow month over month.",
    author: "Michael Roberts, Director",
    icon: "📈",
    color: "from-purple-500 to-purple-700"
  }
];

const metrics = [
  { value: "500+", label: "Successful Projects" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "$50M+", label: "Revenue Generated" },
  { value: "10+", label: "Years Experience" }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              See how we've helped businesses like yours achieve remarkable results with our software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Side - Info */}
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-xl flex items-center justify-center text-3xl`}>
                        {study.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {study.client}
                        </h2>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {study.industry}
                        </p>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {study.title}
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Challenge
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {study.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Solution
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                    
                    <Link
                      href="/contact"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
                    >
                      Start Your Success Story
                    </Link>
                  </div>
                  
                  {/* Right Side - Results */}
                  <div className={`bg-gradient-to-br ${study.color} p-8 md:p-12 text-white`}>
                    <h4 className="text-2xl font-bold mb-6">Results</h4>
                    <ul className="space-y-4 mb-8">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-lg">{result}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <p className="text-lg italic mb-4">
                        "{study.testimonial}"
                      </p>
                      <p className="font-semibold">
                        — {study.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our solutions can help your business achieve similar results.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
