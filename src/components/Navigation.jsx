import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCaseDropdownOpen, setIsCaseDropdownOpen] = useState(false);
  const [isMobileCaseOpen, setIsMobileCaseOpen] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const openCaseDropdown = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsCaseDropdownOpen(true);
  };

  const scheduleCloseCaseDropdown = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setIsCaseDropdownOpen(false);
    }, 120);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { type: "cases", label: "Case Studies" },
    { to: "/pricing", label: "Pricing" },
    { to: "/contact", label: "Contact" },
  ];

  const caseLinks = [
    { to: "/case-studies", label: "Customers" },
    // { to: "/success-stories", label: "Success Stories" }, // Hidden for now - can be enabled later
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--background)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-48">
              <img
                src="/hagetechsolution-logo.png"
                alt="HageTech Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) =>
              link.type === "cases" ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setIsCaseDropdownOpen(true)}
                  onMouseLeave={() => setIsCaseDropdownOpen(false)}
                  onMouseEnter={openCaseDropdown}
                  onMouseLeave={scheduleCloseCaseDropdown}
                >
                  <button
                    className="text-sm text-[var(--foreground)] hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1"
                    onClick={() => setIsCaseDropdownOpen((prev) => !prev)}
                    type="button"
                  >
                    {link.label}
                    <span
                      className={`transition-transform ${
                        isCaseDropdownOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>
                  {isCaseDropdownOpen ? (
                    <div
                      className="absolute top-full left-0 mt-3 w-56 rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-lg py-2"
                      onMouseEnter={openCaseDropdown}
                      onMouseLeave={scheduleCloseCaseDropdown}
                    >
                      {caseLinks.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="block px-4 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--muted)]"
                          onClick={() => setIsCaseDropdownOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary">
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-[var(--border)]">
            <div className="flex flex-col gap-2 pt-4">
              {links.map((link) =>
                link.type === "cases" ? (
                  <div key={link.label} className="px-4">
                    <button
                      className="w-full flex items-center justify-between py-2 text-[var(--foreground)] hover:bg-[var(--muted)] rounded transition-colors px-2"
                      onClick={() => setIsMobileCaseOpen((prev) => !prev)}
                      type="button"
                    >
                      <span>{link.label}</span>
                      <span
                        className={`transition-transform ${
                          isMobileCaseOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▾
                      </span>
                    </button>
                    {isMobileCaseOpen ? (
                      <div className="mt-1 flex flex-col gap-1 border-l border-[var(--border)] ml-3 pl-3">
                        {caseLinks.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="py-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                            onClick={() => {
                              setIsOpen(false);
                              setIsMobileCaseOpen(false);
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="px-4 py-2 text-[var(--foreground)] hover:bg-[var(--muted)] rounded transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Button variant="primary" className="mx-4 w-[calc(100%-2rem)]">
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
