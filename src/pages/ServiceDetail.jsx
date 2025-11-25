import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import { ArrowLeft, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { industries } from "../data/industries";

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const industry = industries.find((item) => item.id === id);

  if (!industry) {
    return (
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl font-bold text-[var(--foreground)]">
            Service Not Found
          </h1>
          <p className="text-lg text-[var(--muted-foreground)]">
            We couldn&apos;t locate the service you were looking for. Please
            select another service.
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => navigate(-1)}>Go Back</Button>
            <Button variant="secondary" onClick={() => navigate("/services")}>
              View All Services
            </Button>
          </div>
        </div>
      </main>
    );
  }

  const currentIndex = industries.findIndex((item) => item.id === industry.id);
  const prevIndustry = currentIndex > 0 ? industries[currentIndex - 1] : null;
  const nextIndustry =
    currentIndex < industries.length - 1 ? industries[currentIndex + 1] : null;

  return (
    <main>
      {/* Breadcrumb */}
      <section className="py-6 bg-[var(--background)] border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary)]/80 transition"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Services</span>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[var(--primary)]/5 to-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-[var(--accent)] font-semibold">
                  {industry.name}
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight">
                  {industry.title}
                </h1>
              </div>
              <p className="text-lg text-[var(--muted-foreground)]">
                {industry.description}
              </p>
            </div>

            {/* Right Image */}
            <div className="relative h-80 rounded-lg overflow-hidden">
              {industry.video ? (
                <div className="w-full h-full">
                  <iframe
                    width="560"
                    height="315"
                    src={industry.video}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              ) : (
                <img
                  src={industry.image}
                  alt="Team working on Odoo ERP implementation"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Challenges Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8">
              Common Challenges In This Industry
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industry.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-[var(--muted)]/50 rounded-lg border border-[var(--border)]"
                >
                  <CheckCircle2
                    className="text-[var(--primary)] flex-shrink-0 mt-1"
                    size={24}
                  />
                  <p className="text-[var(--foreground)] leading-relaxed">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Section */}
          {industry.solutions && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8">
                Solutions We Offer
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {industry.solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-[var(--card)] rounded-lg border border-[var(--border)]"
                  >
                    <CheckCircle2
                      className="text-[var(--primary)] flex-shrink-0 mt-1"
                      size={20}
                    />
                    <p className="text-[var(--foreground)]">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[var(--accent)] font-semibold mb-2">
              We are in great company.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
              Top brands trust us!
            </h2>
            <p className="text-[var(--muted-foreground)] mt-4 max-w-2xl mx-auto">
              Leading organizations across industries trust HageTech Solutions
              for their Odoo implementations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {industry.clients.map((client, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center h-20 w-full"
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity max-h-20"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button>
              <Link to="/case-studies">View All Clients</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[var(--accent)] font-semibold mb-2">
              Client Success
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 bg-[var(--card)] border border-[var(--border)] hover:shadow-lg transition-shadow rounded-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[var(--accent)] text-[var(--accent)]"
                    />
                  ))}
                </div>
                <p className="text-[var(--foreground)] mb-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--muted)]"></div>
                  <div>
                    <p className="font-bold text-[var(--foreground)]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to Other Services */}
      <section className="py-16 bg-[var(--muted)]/30 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevIndustry ? (
              <Link to={prevIndustry.to}>
                <div className="p-6 border border-[var(--border)] bg-[var(--card)] rounded-2xl hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide mb-2">
                    Previous Service
                  </p>
                  <p className="text-lg font-bold text-[var(--foreground)] transition">
                    ← {prevIndustry.name}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextIndustry ? (
              <Link to={nextIndustry.to}>
                <div className="p-6 border border-[var(--border)] bg-[var(--card)] rounded-2xl hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide mb-2">
                    Next Service
                  </p>
                  <p className="text-lg font-bold text-[var(--foreground)] transition">
                    {nextIndustry.name} →
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--primary)] text-[var(--primary-foreground)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your {industry.name} Operations?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Let us help you implement Odoo ERP solutions tailored to your
            industry needs. Get in touch with our experts today.
          </p>
          <Link to="/contact" className="inline-flex justify-center">
            <Button className="bg-[var(--primary-foreground)] hover:bg-[var(--primary-foreground)]/90 text-[var(--primary)] font-semibold px-6 py-3 rounded-xl">
              Schedule a Consultation
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
