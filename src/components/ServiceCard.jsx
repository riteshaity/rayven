import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ServiceCard({ icon: Icon, title, description, to, accent = 'sap' }) {
  const A = {
    sap:    { top: '#009ad9', iconBg: 'rgba(0,154,217,0.12)', iconColor: '#00b1eb', border: 'rgba(0,154,217,0.16)', hBorder: 'rgba(0,177,235,0.45)', link: '#00b1eb', hoverBg: 'rgba(0,154,217,0.06)' },
    indigo: { top: '#818cf8', iconBg: 'rgba(99,102,241,0.12)', iconColor: '#a5b4fc', border: 'rgba(99,102,241,0.18)', hBorder: 'rgba(99,102,241,0.45)', link: '#a5b4fc', hoverBg: 'rgba(99,102,241,0.06)' },
    cyan:   { top: '#22d3ee', iconBg: 'rgba(6,182,212,0.12)', iconColor: '#67e8f9', border: 'rgba(6,182,212,0.16)', hBorder: 'rgba(6,182,212,0.45)', link: '#22d3ee', hoverBg: 'rgba(6,182,212,0.06)' },
  }
  const a = A[accent] || A.sap

  const inner = (
    <div
      className="group relative h-full rounded-2xl p-6 flex flex-col transition-all duration-250"
      style={{ background: 'rgba(8,18,38,0.75)', border: `1px solid ${a.border}`, boxShadow: '0 2px 8px rgba(0,0,0,0.25)' }}
      onMouseEnter={e => {
        e.currentTarget.style.background   = a.hoverBg
        e.currentTarget.style.borderColor  = a.hBorder
        e.currentTarget.style.transform    = 'translateY(-4px)'
        e.currentTarget.style.boxShadow    = `0 16px 40px rgba(0,0,0,0.30), 0 0 0 1px ${a.hBorder}`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background   = 'rgba(8,18,38,0.75)'
        e.currentTarget.style.borderColor  = a.border
        e.currentTarget.style.transform    = ''
        e.currentTarget.style.boxShadow    = '0 2px 8px rgba(0,0,0,0.25)'
      }}
    >
      {/* Colored top accent */}
      <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl" style={{ background: `linear-gradient(90deg,${a.top},transparent)` }} />

      {Icon && (
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 mt-1 transition-transform duration-200 group-hover:scale-110"
          style={{ background: a.iconBg, border: `1px solid ${a.border}` }}>
          <Icon size={20} style={{ color: a.iconColor }} />
        </div>
      )}

      <h3 className="text-[15px] text-white mb-2 leading-snug" style={{ fontWeight: 700 }}>{title}</h3>
      <p className="text-slate-400 text-[13.5px] leading-relaxed flex-1">{description}</p>

      {to && (
        <div className="flex items-center gap-1.5 mt-5 text-[13px] font-semibold transition-all duration-200 group-hover:gap-2.5"
          style={{ color: a.link }}>
          Learn more <ArrowRight size={13} />
        </div>
      )}
    </div>
  )

  if (to) return <Link to={to} className="block h-full">{inner}</Link>
  return inner
}

export function FeatureRow({ icon: Icon, title, description }) {
  return (
    <div className="flex gap-4 py-5 border-b last:border-0" style={{ borderColor: 'rgba(0,154,217,0.08)' }}>
      {Icon && (
        <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
          style={{ background: 'rgba(0,154,217,0.10)', border: '1px solid rgba(0,154,217,0.18)' }}>
          <Icon size={17} style={{ color: '#009ad9' }} />
        </div>
      )}
      <div>
        <h4 className="text-white font-semibold text-[14px] mb-1">{title}</h4>
        <p className="text-slate-400 text-[13.5px] leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export function StatCard({ value, label, sublabel }) {
  return (
    <div className="card p-6 text-center">
      <div className="text-3xl font-extrabold sap-text-full mb-1" style={{ letterSpacing: '-0.03em' }}>{value}</div>
      <div className="text-white font-semibold text-[13px]">{label}</div>
      {sublabel && <div className="text-slate-500 text-[12px] mt-0.5">{sublabel}</div>}
    </div>
  )
}
