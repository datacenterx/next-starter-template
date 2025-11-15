import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "10 Ways a Modern POS System Can Transform Your Retail Business",
    excerpt: "Discover how upgrading to a modern POS system can streamline operations, improve customer experience, and boost your bottom line.",
    author: "Sarah Johnson",
    date: "October 28, 2025",
    category: "POS Systems",
    readTime: "5 min read",
    image: "📊"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Choosing Business Management Software",
    excerpt: "Learn the key factors to consider when selecting business management software that will grow with your company.",
    author: "Michael Chen",
    date: "October 25, 2025",
    category: "Business Management",
    readTime: "8 min read",
    image: "💼"
  },
  {
    id: 3,
    title: "E-commerce Trends to Watch in 2025",
    excerpt: "Stay ahead of the competition with these emerging e-commerce trends that are reshaping online retail.",
    author: "Emily Rodriguez",
    date: "October 22, 2025",
    category: "E-commerce",
    readTime: "6 min read",
    image: "🛒"
  },
  {
    id: 4,
    title: "Custom Software vs Off-the-Shelf: Making the Right Choice",
    excerpt: "Understand the pros and cons of custom software development versus ready-made solutions for your business.",
    author: "David Park",
    date: "October 20, 2025",
    category: "Custom Software",
    readTime: "7 min read",
    image: "⚙️"
  },
  {
    id: 5,
    title: "How to Improve Customer Experience with Technology",
    excerpt: "Explore practical ways to leverage technology to create exceptional customer experiences that drive loyalty.",
    author: "Lisa Thompson",
    date: "October 18, 2025",
    category: "Customer Experience",
    readTime: "5 min read",
    image: "⭐"
  },
  {
    id: 6,
    title: "Data Security Best Practices for Small Businesses",
    excerpt: "Protect your business and customer data with these essential security practices every small business should implement.",
    author: "James Wilson",
    date: "October 15, 2025",
    category: "Security",
    readTime: "6 min read",
    image: "🔒"
  }
];

const categories = ["All", "POS Systems", "Business Management", "E-commerce", "Custom Software", "Security"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Blog & Resources
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Expert insights, tips, and best practices to help your business thrive with technology.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  index === 0
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 h-48 flex items-center justify-center text-6xl">
                  {post.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {post.author}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {post.date}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest insights and tips delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
