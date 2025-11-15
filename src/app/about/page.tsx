import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Happy Clients", value: "500+" },
  { label: "Projects Completed", value: "1,000+" },
  { label: "Team Members", value: "50+" }
];

const values = [
  {
    title: "Innovation",
    description: "We stay ahead of technology trends to provide cutting-edge solutions that give your business a competitive advantage."
  },
  {
    title: "Quality",
    description: "We're committed to delivering high-quality software that exceeds expectations and stands the test of time."
  },
  {
    title: "Partnership",
    description: "We build long-term relationships with our clients, acting as a trusted partner in their success."
  },
  {
    title: "Support",
    description: "Our dedicated support team is always ready to help you get the most out of our solutions."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About SoftServe Pro
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Empowering businesses with innovative software solutions since 2015.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Our Story
          </h2>
          <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <p>
              Founded in 2015, SoftServe Pro began with a simple mission: to help businesses leverage technology to achieve their goals. What started as a small team of passionate developers has grown into a full-service software solutions provider.
            </p>
            <p>
              Over the years, we&apos;ve helped hundreds of businesses transform their operations through innovative software solutions. From retail stores implementing their first POS system to enterprises building custom platforms, we&apos;ve been there every step of the way.
            </p>
            <p>
              Today, we&apos;re proud to serve clients across various industries, providing everything from point-of-sale systems to custom enterprise solutions. Our team of experienced developers, designers, and support specialists work together to deliver solutions that not only meet but exceed our clients&apos; expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
            We&apos;re a diverse team of developers, designers, project managers, and support specialists united by a passion for technology and helping businesses succeed.
          </p>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-blue-100 mb-6">
              We&apos;re always looking for talented individuals to join our growing team.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Ready to take your business to the next level? Get in touch with us today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
