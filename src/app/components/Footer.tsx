import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div>
            <Logo className="h-8 w-auto mb-4" />
            <p className="text-gray-400">
              Empowering businesses with innovative software solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services" className="hover:text-blue-400 transition">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-400 transition">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link href="/case-studies" className="hover:text-blue-400 transition">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/blog" className="hover:text-blue-400 transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Documentation</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Support</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">API</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SoftServe Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
