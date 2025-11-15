import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const plans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for small businesses just getting started",
    features: [
      "Basic POS System",
      "Up to 2 locations",
      "5 user accounts",
      "Email support",
      "Basic reporting",
      "Mobile app access",
      "Cloud backup"
    ],
    highlighted: false,
    cta: "Get Started"
  },
  {
    name: "Professional",
    price: "$699",
    period: "/month",
    description: "Ideal for growing businesses with multiple locations",
    features: [
      "Advanced POS System",
      "Up to 10 locations",
      "Unlimited user accounts",
      "Priority support",
      "Advanced analytics",
      "Mobile app access",
      "Cloud backup",
      "Inventory management",
      "CRM integration",
      "API access"
    ],
    highlighted: true,
    cta: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with specific needs",
    features: [
      "Custom POS Solution",
      "Unlimited locations",
      "Unlimited users",
      "24/7 dedicated support",
      "Custom analytics",
      "White-label options",
      "On-premise deployment",
      "Custom integrations",
      "SLA guarantee",
      "Dedicated account manager"
    ],
    highlighted: false,
    cta: "Contact Sales"
  }
];

const addons = [
  { name: "E-commerce Integration", price: "$99/month" },
  { name: "Advanced Analytics", price: "$149/month" },
  { name: "Custom Reporting", price: "$199/month" },
  { name: "Payment Gateway Integration", price: "$79/month" },
  { name: "Marketing Automation", price: "$249/month" },
  { name: "Additional Training", price: "$500/session" }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Choose the plan that's right for your business. All plans include core features with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-blue-600 text-white shadow-2xl scale-105 border-4 border-blue-400"
                    : "bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700"
                }`}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.highlighted ? "text-blue-100" : "text-gray-600 dark:text-gray-300"}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900 dark:text-white"}`}>
                    {plan.price}
                  </span>
                  <span className={plan.highlighted ? "text-blue-100" : "text-gray-600 dark:text-gray-300"}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                          plan.highlighted ? "text-blue-200" : "text-green-500"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={plan.highlighted ? "text-blue-100" : "text-gray-600 dark:text-gray-300"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center px-8 py-4 rounded-lg font-semibold transition ${
                    plan.highlighted
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Enhance your plan with these optional add-ons
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex justify-between items-center"
              >
                <span className="text-gray-900 dark:text-white font-medium">
                  {addon.name}
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have questions? We've got answers.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Can I switch plans later?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Is there a setup fee?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                No setup fees for Starter and Professional plans. Enterprise plans may have a one-time implementation fee depending on customization requirements.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We accept all major credit cards, ACH transfers, and wire transfers for Enterprise plans. All payments are processed securely.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Do you offer refunds?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We offer a 30-day money-back guarantee on all plans. If you're not satisfied, contact us for a full refund within the first 30 days.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Is training included?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! All plans include basic onboarding and training. Professional and Enterprise plans include comprehensive training sessions for your team.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Can I cancel anytime?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you can cancel your subscription at any time. Your service will remain active until the end of your current billing period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is here to help you choose the right plan for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg"
          >
            Contact Sales
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
