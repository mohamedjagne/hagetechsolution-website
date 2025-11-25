import { Link } from "react-router-dom"
import { Mail, MapPin } from "lucide-react"
import { industries } from "../data/industries"

export default function Footer() {
  return (
    <footer className="bg-[var(--card)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-48">
                <img
                  src="/hagetechsolution-logo.png"
                  alt="HageTech Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-[var(--muted-foreground)] text-sm">
              Transforming businesses through innovative Odoo ERP solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {industries.map((industry) => (
                <li key={industry.id}>
                  <Link to={industry.to} className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[var(--accent)] mt-0.5" />
                <span className="text-[var(--muted-foreground)]">info@hagetechsolution.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[var(--accent)] mt-0.5" />
                <span className="text-[var(--muted-foreground)]">Hargeisa, Somaliland</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[var(--muted-foreground)]">
            <p>&copy; 2025 HageTech Solutions. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[var(--primary)]">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[var(--primary)]">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[var(--primary)]">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
