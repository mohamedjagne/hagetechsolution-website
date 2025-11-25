import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export function CaseStudyCard({ id, company, industry, logo, description }) {
  return (
    <Link
      to={`/case-studies/${id}`}
      className="group block bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200"
    >
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="h-16 w-16 rounded-2xl border border-border bg-muted/40 flex items-center justify-center overflow-hidden">
          <img src={logo || "/placeholder.svg"} alt={company} className="h-full w-full object-contain" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{industry}</span>
      </div>

      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{company}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{description}</p>
      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
        View case study
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}

