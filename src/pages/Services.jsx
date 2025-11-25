import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { ArrowRight } from "lucide-react";
import { industries } from "../data/industries";

export default function Industries() {
  const navigate = useNavigate();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[var(--primary)]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight mb-4">
            Industry Solutions
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto mb-8">
            Tailored Odoo ERP solutions for every sector. We have deep expertise
            across industries from retail to logistics.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.id}
                  className="p-6 border border-[var(--border)] hover:shadow-lg transition-all cursor-pointer group rounded-xl bg-[var(--card)]"
                  onClick={() => navigate(industry.to)}
                >
                  <Icon className="text-[var(--primary)] mb-4 text-3xl" />
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {industry.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[var(--border)]">
                    <p className="text-xs text-[var(--accent)] font-semibold">
                      Learn more
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--primary)] text-[var(--primary-foreground)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Didn't Find Your Industry?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            We serve many more industries and can customize Odoo ERP solutions
            for any sector.
          </p>
          <Button className="inline-flex items-center gap-2 bg-[var(--primary-foreground)] text-[var(--primary)] hover:opacity-90 hover:bg-[var(--primary-foreground)]/90 px-6 py-3 rounded-lg">
            <Link className="inline-flex items-center gap-2" to="/contact">
              Contact Our Experts
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
