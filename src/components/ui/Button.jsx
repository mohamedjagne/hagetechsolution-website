export default function Button({ children, variant = "primary", ...props }) {
  const baseClasses = "px-4 py-2 rounded-lg transition-colors font-medium inline-flex items-center gap-2"

  const variants = {
    primary: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90",
    secondary: "border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/5",
    outline: "border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--muted)]",
  }

  return (
    <button className={`${baseClasses} ${variants[variant] || variants.primary}`} {...props}>
      {children}
    </button>
  )
}
