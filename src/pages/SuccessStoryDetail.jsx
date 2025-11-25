import { Link, useNavigate, useParams } from "react-router-dom"
import { ArrowLeft, ArrowRight, CheckCircle2, Calendar, MapPin, Pen, Tag } from "lucide-react"
import Button from "../components/ui/Button"
import { successStories } from "../data/successStories"

export default function SuccessStoryDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const story = successStories.find((item) => item.id === Number.parseInt(id || "", 10))

  if (!story) {
    return (
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl font-bold text-[var(--foreground)]">Success Story Not Found</h1>
          <p className="text-lg text-[var(--muted-foreground)]">
            We couldn&apos;t locate the success story you were looking for. Please select another story.
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => navigate(-1)}>Go Back</Button>
            <Button variant="secondary" onClick={() => navigate("/success-stories")}>
              View All Stories
            </Button>
          </div>
        </div>
      </main>
    )
  }

  const currentIndex = successStories.findIndex((item) => item.id === story.id)
  const prevStory = currentIndex > 0 ? successStories[currentIndex - 1] : null
  const nextStory = currentIndex < successStories.length - 1 ? successStories[currentIndex + 1] : null

  return (
    <main>
      {/* Breadcrumb */}
      <section className="py-6 bg-[var(--background)] border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/success-stories"
            className="flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary)]/80 transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Success Stories</span>
          </Link>
        </div>
      </section>

      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[var(--primary)]/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--primary)]">
              <Tag size={14} />
              {story.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">{story.title}</h1>
            <p className="text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto">{story.overview}</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--muted-foreground)]">
            <span className="inline-flex items-center gap-2">
              <Pen size={16} className="text-[var(--primary)]" />
              {story.author}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar size={16} className="text-[var(--primary)]" />
              {story.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-[var(--primary)]" />
              {story.location}
            </span>
          </div>

          <div className="border border-[var(--border)] bg-[var(--card)] rounded-2xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-xs uppercase font-semibold text-[var(--muted-foreground)] tracking-wide mb-2">
                  Company
                </p>
                <p className="text-[var(--foreground)]">{story.company}</p>
              </div>
              <div>
                <p className="text-xs uppercase font-semibold text-[var(--muted-foreground)] tracking-wide mb-2">
                  Industry
                </p>
                <p className="text-[var(--foreground)]">{story.industry}</p>
              </div>
              <div>
                <p className="text-xs uppercase font-semibold text-[var(--muted-foreground)] tracking-wide mb-2">
                  Company Size
                </p>
                <p className="text-[var(--foreground)]">{story.companySize}</p>
              </div>
              <div>
                <p className="text-xs uppercase font-semibold text-[var(--muted-foreground)] tracking-wide mb-2">
                  Users
                </p>
                <p className="text-[var(--foreground)]">{story.users}</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-xs uppercase font-semibold text-[var(--muted-foreground)] tracking-wide mb-2">
                  Odoo Apps Implemented
                </p>
                <p className="text-[var(--foreground)]">{story.apps.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      {story.heroImage ? (
        <section className="relative w-full h-[400px] bg-[var(--muted)]">
          <img src={story.heroImage} alt={story.title} className="w-full h-full object-cover" />
        </section>
      ) : null}

      {/* Body */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 border border-[var(--border)] bg-[var(--card)] rounded-xl space-y-3">
              <h2 className="text-lg font-bold text-[var(--foreground)]">Challenge</h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed">{story.challenge}</p>
            </div>
            <div className="p-8 border border-[var(--border)] bg-[var(--card)] rounded-xl space-y-3">
              <h2 className="text-lg font-bold text-[var(--foreground)]">Our Proposition</h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed">{story.proposition}</p>
            </div>
            <div className="p-8 border border-[var(--border)] bg-[var(--card)] rounded-xl space-y-3">
              <h2 className="text-lg font-bold text-[var(--foreground)]">Result</h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed">{story.result}</p>
            </div>
          </div>

          <div className="space-y-6">
            {story.body.map((paragraph, index) => (
              <p key={index} className="text-[var(--foreground)] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {story.tags?.length ? (
            <div className="flex flex-wrap gap-3 pt-6 border-t border-[var(--border)]">
              {story.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium uppercase tracking-wide text-[var(--primary)] bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-full"
                >
                  <CheckCircle2 size={14} />
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-[var(--muted)]/30 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevStory ? (
              <Link to={`/success-stories/${prevStory.id}`}>
                <div className="p-6 border border-[var(--border)] bg-[var(--card)] rounded-xl hover:shadow-lg transition-shadow h-full">
                  <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide mb-2">Previous Story</p>
                  <p className="text-lg font-bold text-[var(--foreground)]">{prevStory.title}</p>
                  <div className="mt-3 flex items-center gap-2 text-[var(--primary)]">
                    <ArrowLeft size={16} />
                    <span className="text-sm font-semibold">Read success story</span>
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextStory ? (
              <Link to={`/success-stories/${nextStory.id}`}>
                <div className="p-6 border border-[var(--border)] bg-[var(--card)] rounded-xl hover:shadow-lg transition-shadow h-full">
                  <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide mb-2">Next Story</p>
                  <p className="text-lg font-bold text-[var(--foreground)]">{nextStory.title}</p>
                  <div className="mt-3 flex items-center gap-2 text-[var(--primary)]">
                    <span className="text-sm font-semibold">Read success story</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--primary)] text-[var(--primary-foreground)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Inspired by this story?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Reach out to our team to discuss how we can help you replicate this success inside your organization.
          </p>
          <Link to="/contact" className="inline-flex justify-center">
            <Button className="bg-[var(--primary-foreground)] text-[var(--primary)] hover:opacity-90">
              Schedule a Consultation
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}


