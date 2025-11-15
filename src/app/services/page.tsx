import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const services = [
  {
    title: "POS Systems",
    description: "Modern point-of-sale solutions for retail and hospitality businesses. Cloud-based, intuitive, and feature-rich.",
    features: ["Inventory Management", "Sales Analytics", "Multi-location Support", "Payment Integration"],
    benefits: [
      "Real-time inventory tracking across multiple locations",
      "Comprehensive sales reports and analytics",
      "Integrated payment processing with multiple providers",
      "Customer relationship management tools",
      "Employee management and scheduling"
    ]
  },
  {
    title: "Business Management",
    description: "Comprehensive business management software to streamline operations and boost productivity.",
    features: ["CRM Integration", "Project Management", "Financial Tracking", "Team Collaboration"],
    benefits: [
      "Centralized customer database and communication",
      "Task and project tracking with team collaboration",
      "Financial reporting and budget management",
      "Document management and file sharing",
      "Automated workflow and approval processes"
    ]
  },
  {
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with powerful features to grow your online business.",
    features: ["Storefront Builder", "Order Management", "Marketing Tools", "Analytics Dashboard"],
    benefits: [
      "Customizable storefront with drag-and-drop builder",
      "Multi-channel selling (web, mobile, social)",
      "Automated order processing and fulfillment",
      "SEO optimization and marketing automation",
      "Customer analytics and behavior tracking"
    ]
  },
  {
    title: "Custom Software",
    description: "Tailored software solutions designed specifically for your unique business needs.",
    features: ["Custom Development", "API Integration", "Scalable Architecture", "Ongoing Support"],
    benefits: [
      "Solutions built to your exact specifications",
      "Integration with existing systems and tools",
      "Scalable infrastructure that grows with you",
      "Dedicated support and maintenance team",
      "Regular updates and feature enhancements"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive software solutions designed to transform your business operations and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-start">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
                  >
                    Learn More
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Benefits
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss how our solutions can help your business thrive.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
