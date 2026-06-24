import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHeader({ badge, title, highlight, subtitle, breadcrumb }) {
  return (
    <section className="relative pt-36 pb-24 px-6 overflow-hidden" style={{ background: '#040c1a' }}>
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(0,154,217,0.18) 0%, transparent 68%)' }} />
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(0,154,217,0.25),transparent)' }} />

      <div className="container-lg relative text-center">
        {breadcrumb && (
          <nav className="flex items-center justify-center gap-1 text-[11px] text-slate-600 mb-6 font-medium">
            <Link to="/" className="hover:text-sky-400 transition-colors">Home</Link>
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight size={11} />
                {item.to
                  ? <Link to={item.to} className="hover:text-sky-400 transition-colors">{item.label}</Link>
                  : <span className="text-slate-400">{item.label}</span>}
              </span>
            ))}
          </nav>
        )}

        {badge && <div className="flex justify-center mb-5"><span className="badge-sap">{badge}</span></div>}

        <h1 className="text-4xl md:text-[52px] lg:text-[60px] font-extrabold leading-[1.1] text-balance mb-5 text-white" style={{ letterSpacing: '-0.03em' }}>
          {title}{highlight && <> <span className="sap-text-full">{highlight}</span></>}
        </h1>

        {subtitle && (
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
