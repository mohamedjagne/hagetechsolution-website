import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Button from "../components/ui/Button"
import { successStories } from "../data/successStories"

export default function SuccessStories() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            Success Stories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">
            Transformations Powered by HageTech Solutions
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto">
            Dive into stories from energy, finance, retail, and service innovators who trusted our team to deliver
            measurable outcomes with Odoo ERP.
          </p>
          <Link to="/contact" className="inline-flex justify-center">
            <Button className="inline-flex items-center gap-2">
              Start your story
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Stories */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {successStories.map((story) => (
            <article
              key={story.id}
              className="border border-[var(--border)] rounded-2xl overflow-hidden bg-[var(--card)] shadow-sm hover:shadow-xl transition-shadow"
            >
              {story.heroImage ? (
                <div className="relative w-full h-64 bg-[var(--muted)] overflow-hidden">
                  <img src={story.heroImage} alt={story.title} className="w-full h-full object-cover" />
                </div>
              ) : null}

              <div className="p-8 space-y-6">
                <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
                  <span className="font-semibold text-[var(--primary)]">{story.category}</span>
                  <span>{story.date}</span>
                  <span>by {story.author}</span>
                </div>

                <Link
                  to={`/success-stories/${story.id}`}
                  className="text-3xl font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors block"
                >
                  {story.title}
                </Link>

                <p className="text-[var(--muted-foreground)] leading-relaxed">{story.excerpt}</p>

                <div className="border border-dashed border-[var(--border)] rounded-xl p-6 bg-[var(--muted)]/20 space-y-3 text-sm">
                  <p className="font-semibold text-[var(--foreground)] uppercase tracking-wide">Company Snapshot</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <span>
                      <strong className="text-[var(--foreground)]">Company:</strong> {story.company}
                    </span>
                    <span>
                      <strong className="text-[var(--foreground)]">Industry:</strong> {story.industry}
                    </span>
                    <span>
                      <strong className="text-[var(--foreground)]">Location:</strong> {story.location}
                    </span>
                    <span>
                      <strong className="text-[var(--foreground)]">Company Size:</strong> {story.companySize}
                    </span>
                  </div>
                </div>

                <Link
                  to={`/success-stories/${story.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] uppercase tracking-wide"
                >
                  Read the story
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--primary)] text-[var(--primary-foreground)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to write the next chapter?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Connect with our consultants to explore how Odoo can support your transformation with measurable outcomes.
          </p>
          <Button className="inline-flex items-center gap-2 bg-[var(--primary-foreground)] text-[var(--primary)] hover:opacity-90 hover:bg-[var(--primary-foreground)]/90 px-6 py-3 rounded-lg">
            <Link to="/contact">Talk to an expert</Link>
            <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </main>
  )
}


