import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import { ArrowLeft, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const numericId = Number.parseInt(id || "", 10);
  const study = caseStudies.find((item) => item.id === numericId);

  if (!study) {
    return (
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl font-bold text-[var(--foreground)]">
            Case Study Not Found
          </h1>
          <p className="text-lg text-[var(--muted-foreground)]">
            We couldn&apos;t locate the case study you were looking for. Please
            select another case.
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => navigate(-1)}>Go Back</Button>
            <Button
              variant="secondary"
              onClick={() => navigate("/case-studies")}
            >
              View All Case Studies
            </Button>
          </div>
        </div>
      </main>
    );
  }

  const currentIndex = caseStudies.findIndex((item) => item.id === study.id);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < caseStudies.length - 1
      ? caseStudies[currentIndex + 1]
      : null;

  return (
    <main>
      <section className="py-6 bg-[var(--background)] border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/case-studies"
            className="flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary)]/80 transition"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Case Studies</span>
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[var(--primary)]/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-8 flex-col md:flex-row">
            <div className="w-full md:w-32 h-32 flex-shrink-0 bg-[var(--muted)] rounded-lg p-4 flex items-center justify-center">
              <img
                src={study.logo || "/placeholder.svg"}
                alt={study.company}
                className="object-contain w-full h-full"
              />
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide mb-2">
                {study.industry}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
                {study.company}
              </h1>
              <p className="text-lg text-[var(--muted-foreground)] mb-6">
                {study.title}
              </p>

              <div className="space-x-2 flex items-center">
                {study.featuredStat.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-[var(--primary)]/10 rounded-lg p-6 inline-block"
                  >
                    <p className="text-4xl font-bold text-[var(--primary)] mb-2">
                      {stat.value}
                    </p>
                    <p className="text-sm text-[var(--muted-foreground)] mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 border border-[var(--border)] bg-[var(--card)] rounded-2xl">
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">
                The Challenge
              </h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                {study.challenge}
              </p>
            </div>
            <div className="p-8 border border-[var(--border)] bg-[var(--card)] rounded-2xl">
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">
                Our Solution
              </h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                {study.solution}
              </p>
            </div>
            <div className="p-8 border border-[var(--border)] bg-[var(--card)] rounded-2xl">
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">
                About {study.company}
              </h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                {study.description}
              </p>
            </div>
          </div>

          <div className="relative w-full h-96 rounded-xl overflow-hidden mb-12">
            <img
              src={study.image || "/placeholder.svg"}
              alt={study.title}
              className="object-cover w-full h-full"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8">
              Key Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-[var(--muted)]/50 rounded-lg border border-[var(--border)]"
                >
                  <CheckCircle2
                    className="text-[var(--primary)] flex-shrink-0 mt-1"
                    size={24}
                  />
                  <p className="text-[var(--foreground)] leading-relaxed">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center my-7">
        <div
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
          <p className="text-[var(--foreground)] mb-6">{study.testimonial.text}</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[var(--muted)]"></div>
            <div>
              <p className="font-bold text-[var(--foreground)]">
                {study.testimonial.name}
              </p>
              <p className="text-sm text-[var(--muted-foreground)]">
                {study.testimonial.role}, {study.testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--muted)]/30 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevStudy ? (
              <Link to={`/case-studies/${prevStudy.id}`}>
                <div className="p-6 border border-[var(--border)] bg-[var(--card)] rounded-2xl hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide mb-2">
                    Previous Case
                  </p>
                  <p className="text-lg font-bold text-[var(--foreground)] transition">
                    ← {prevStudy.company}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextStudy ? (
              <Link to={`/case-studies/${nextStudy.id}`}>
                <div className="p-6 border border-[var(--border)] bg-[var(--card)] rounded-2xl hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide mb-2">
                    Next Case
                  </p>
                  <p className="text-lg font-bold text-[var(--foreground)] transition">
                    {nextStudy.company} →
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--primary)] text-[var(--primary-foreground)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want Similar Results?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            We can help transform your business too. Let us know about your
            challenges and goals.
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
