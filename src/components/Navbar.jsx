import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ChevronDown, Menu, X, Zap, ArrowRight,
  Code2, BarChart3, Settings2, Lightbulb, ShieldCheck,
  Database, Server, Globe, Smartphone, Layers, Factory, Users,
  Target, Award, Sparkles,
} from 'lucide-react'

const appServices = [
  { icon: Code2,     label: 'Application Development',        desc: 'Full lifecycle & cooperative dev using Agile', to: '/application-development' },
  { icon: BarChart3, label: 'Analytics Consulting',           desc: 'Data strategy, BI, AI / ML pipelines',        to: '/analytics-consulting' },
  { icon: Settings2, label: 'Outsourcing & Managed Services', desc: 'SAP implementation, AMS & upgrades',          to: '/outsourcing-managed-services' },
  { icon: Lightbulb, label: 'Strategic Consulting',           desc: 'IT strategy, road-maps & assessments',        to: '/strategic-consulting' },
]

const solutions = [
  { icon: Database,   label: 'Analytics & Big Data', to: '/big-data',          desc: 'BI, EIM & predictive analytics' },
  { icon: Server,     label: 'SAP HANA',             to: '/sap-hana',          desc: 'In-memory computing platform'   },
  { icon: Globe,      label: 'IT Infrastructure',    to: '/it-infrastructure', desc: 'Fast, flexible & secure IT'     },
  { icon: Smartphone, label: 'Mobility',             to: '/mobility',          desc: 'SAP Fiori & enterprise mobile'  },
  { icon: Layers,     label: 'SAP',                  to: '/sap',               desc: 'Full SAP Business Suite'        },
  { icon: Users,      label: 'SuccessFactors',       to: '/successfactors',    desc: 'Cloud HCM & talent management'  },
  { icon: Factory,    label: 'SAP MII',              to: '/sap-mii',           desc: 'Manufacturing intelligence'     },
]

const grc = { icon: ShieldCheck, label: 'SAP GRC', to: '/sap-grc', desc: '10+ years: audit, access control, SoD & risk' }

const aboutLinks = [
  { icon: Target, label: 'Our Mission',        to: '/mission',  desc: 'Values, mission & vision'       },
  { icon: Award,  label: 'Clients & Partners', to: '/partners', desc: 'Testimonials & partner network' },
]

/* ── mega menu ── */
function ServicesMegaMenu({ close }) {
  return (
    <div className="absolute inset-x-0 top-full z-40 pt-px">
      <div className="max-w-7xl mx-auto px-6 pb-6">
        <div className="rounded-2xl overflow-hidden"
          style={{ background: 'rgba(6,12,28,0.98)', backdropFilter: 'blur(24px)', border: '1px solid rgba(0,154,217,0.12)', boxShadow: '0 32px 80px rgba(0,0,0,0.7)' }}>

          <div className="grid grid-cols-3 divide-x" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>

            {/* col 1 */}
            <div className="p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-sky-400 mb-4 flex items-center gap-1.5">
                <span className="w-3.5 h-px bg-sky-400 rounded" />Application Services
              </p>
              <ul className="space-y-0.5">
                {appServices.map(s => (
                  <li key={s.to}>
                    <Link to={s.to} onClick={close}
                      className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-all duration-150 hover:bg-sky-500/10">
                      <div className="mt-0.5 w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover:bg-sky-500/20 transition-colors">
                        <s.icon size={15} className="text-sky-400" />
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-slate-200 group-hover:text-white leading-tight">{s.label}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{s.desc}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* col 2 */}
            <div className="p-6 flex flex-col gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-indigo-400 mb-4 flex items-center gap-1.5">
                  <span className="w-3.5 h-px bg-indigo-400 rounded" />Security, Risk & Compliance
                </p>
                <Link to={grc.to} onClick={close}
                  className="group block rounded-xl p-4 border border-indigo-500/20 bg-gradient-to-br from-indigo-500/8 to-purple-500/4 hover:border-indigo-400/40 hover:from-indigo-500/14 transition-all duration-200">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center">
                      <grc.icon size={15} className="text-indigo-400" />
                    </div>
                    <span className="text-[13px] font-bold text-white">{grc.label}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{grc.desc}</p>
                  <div className="flex items-center gap-1 mt-3 text-[11px] font-semibold text-indigo-400 group-hover:gap-2 transition-all">
                    Explore GRC <ArrowRight size={11} />
                  </div>
                </Link>
              </div>
              <Link to="/flex-support" onClick={close}
                className="group block rounded-xl p-4 border border-cyan-500/20 bg-gradient-to-br from-cyan-500/6 to-sky-500/4 hover:border-cyan-400/40 transition-all duration-200">
                <div className="flex items-center gap-2 mb-1.5">
                  <Sparkles size={13} className="text-cyan-400" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-cyan-400">FLEX Support</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">Pay-per-use SAP support — 24/7 coverage, no retainer waste.</p>
                <div className="flex items-center gap-1 mt-2.5 text-[11px] font-semibold text-cyan-400 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={11} />
                </div>
              </Link>
            </div>

            {/* col 3 */}
            <div className="p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-400 mb-4 flex items-center gap-1.5">
                <span className="w-3.5 h-px bg-cyan-400 rounded" />Solutions
              </p>
              <ul className="space-y-0.5">
                {solutions.map(s => (
                  <li key={s.to}>
                    <Link to={s.to} onClick={close}
                      className="group flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-cyan-500/8 transition-all duration-150">
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                        <s.icon size={13} className="text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-[13px] font-medium text-slate-300 group-hover:text-white">{s.label}</div>
                        <div className="text-[11px] text-slate-600">{s.desc}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* footer bar */}
          <div className="px-8 py-3.5 flex items-center justify-between"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.01)' }}>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-[12px] text-slate-500">Minority Women Owned · Edison, NJ</span>
            </div>
            <Link to="/contact" onClick={close}
              className="flex items-center gap-1.5 text-[12px] font-semibold text-sky-400 hover:text-sky-300 transition-colors">
              Talk to an expert <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function AboutDropdown({ close }) {
  return (
    <div className="absolute right-0 top-full z-40 pt-px w-64">
      <div className="mx-4">
        <div className="rounded-2xl overflow-hidden p-2"
          style={{ background: 'rgba(6,12,28,0.98)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,154,217,0.12)', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
          {aboutLinks.map(item => (
            <Link key={item.to} to={item.to} onClick={close}
              className="group flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-sky-500/10 transition-all duration-150">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover:bg-sky-500/20 transition-colors">
                <item.icon size={15} className="text-sky-400" />
              </div>
              <div>
                <div className="text-[13px] font-semibold text-slate-200 group-hover:text-white">{item.label}</div>
                <div className="text-[11px] text-slate-500">{item.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen]                   = useState(null)
  const [mobileOpen, setMobileOpen]       = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const [scrolled, setScrolled]           = useState(false)
  const location  = useLocation()
  const headerRef = useRef(null)
  const timerRef  = useRef(null)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  useEffect(() => { setOpen(null); setMobileOpen(false) }, [location])
  useEffect(() => {
    const h = e => { if (headerRef.current && !headerRef.current.contains(e.target)) setOpen(null) }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])

  const startOpen   = name => { clearTimeout(timerRef.current); setOpen(name) }
  const startClose  = ()   => { timerRef.current = setTimeout(() => setOpen(null), 100) }
  const cancelClose = ()   => clearTimeout(timerRef.current)

  const linkCls = active =>
    `inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[13.5px] font-medium transition-all duration-150 select-none cursor-pointer ${
      active ? 'text-white bg-white/10' : 'text-slate-400 hover:text-white hover:bg-white/[0.07]'
    }`

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: '#060f22',
        borderBottom: '1px solid rgba(0,154,217,0.12)',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.55)' : '0 1px 12px rgba(0,0,0,0.35)',
      }}>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[62px]">

          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-[34px] h-[34px] rounded-xl flex items-center justify-center shadow-lg"
              style={{ background: 'linear-gradient(135deg,#009ad9,#006eb8)', boxShadow: '0 4px 14px rgba(0,110,184,0.45)' }}>
              <Zap size={16} className="text-white" fill="white" />
            </div>
            <span className="font-extrabold text-[17px] tracking-tight">
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">RAYVEN</span>
              <span className="text-white/50 font-medium"> IT</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            <div onMouseEnter={() => startOpen('services')} onMouseLeave={startClose} className="relative">
              <button className={linkCls(open === 'services')}>
                Services
                <ChevronDown size={13} className={`transition-transform duration-200 ${open === 'services' ? 'rotate-180 text-sky-400' : ''}`} />
              </button>
            </div>
            <Link to="/flex-support" className={linkCls(false)}>FLEX Support</Link>
            <Link to="/careers"      className={linkCls(false)}>Careers</Link>
            <div className="relative" onMouseEnter={() => startOpen('about')} onMouseLeave={startClose}>
              <button className={linkCls(open === 'about')}>
                About
                <ChevronDown size={13} className={`transition-transform duration-200 ${open === 'about' ? 'rotate-180 text-sky-400' : ''}`} />
              </button>
              {open === 'about' && (
                <div onMouseEnter={cancelClose} onMouseLeave={startClose}>
                  <AboutDropdown close={() => setOpen(null)} />
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden lg:inline-flex btn-sap">Contact Us</Link>
            <button onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.07] transition-colors">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open === 'services' && (
        <div onMouseEnter={cancelClose} onMouseLeave={startClose}>
          <ServicesMegaMenu close={() => setOpen(null)} />
        </div>
      )}

      {mobileOpen && (
        <div className="lg:hidden overflow-y-auto" style={{ background: '#060f22', borderTop: '1px solid rgba(0,154,217,0.10)', maxHeight: 'calc(100dvh - 62px)' }}>
          <div className="px-4 py-4 space-y-1">

            {/* Services accordion */}
            <button onClick={() => setMobileSection(mobileSection === 'services' ? null : 'services')}
              className="w-full flex items-center justify-between py-3.5 px-4 rounded-xl font-semibold text-[14px] transition-colors"
              style={{ color: mobileSection === 'services' ? '#00b1eb' : '#cbd5e1', background: mobileSection === 'services' ? 'rgba(0,154,217,0.08)' : 'transparent' }}>
              <span>Services</span>
              <ChevronDown size={15} className={`transition-transform duration-200 ${mobileSection === 'services' ? 'rotate-180' : ''}`}
                style={{ color: mobileSection === 'services' ? '#00b1eb' : '#475569' }} />
            </button>

            {mobileSection === 'services' && (
              <div className="rounded-xl overflow-hidden mb-1" style={{ background: 'rgba(0,154,217,0.04)', border: '1px solid rgba(0,154,217,0.10)' }}>
                {/* App Services */}
                <div className="px-4 pt-4 pb-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-sky-400 mb-2">Application Services</p>
                  {appServices.map(s => (
                    <Link key={s.to} to={s.to}
                      className="flex items-center gap-3 px-2 py-2.5 rounded-lg transition-colors hover:bg-white/[0.04]">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(14,165,233,0.12)', border: '1px solid rgba(14,165,233,0.18)' }}>
                        <s.icon size={14} className="text-sky-400" />
                      </div>
                      <span className="text-[13.5px] text-slate-300 font-medium">{s.label}</span>
                    </Link>
                  ))}
                </div>
                {/* GRC */}
                <div className="px-4 py-2" style={{ borderTop: '1px solid rgba(0,154,217,0.07)' }}>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-indigo-400 mb-2">Security & Compliance</p>
                  <Link to={grc.to} className="flex items-center gap-3 px-2 py-2.5 rounded-lg transition-colors hover:bg-white/[0.04]">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.18)' }}>
                      <grc.icon size={14} className="text-indigo-400" />
                    </div>
                    <span className="text-[13.5px] text-slate-300 font-medium">{grc.label}</span>
                  </Link>
                </div>
                {/* Solutions */}
                <div className="px-4 pt-2 pb-4" style={{ borderTop: '1px solid rgba(0,154,217,0.07)' }}>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-cyan-400 mb-2">Solutions</p>
                  <div className="grid grid-cols-2 gap-1">
                    {solutions.map(s => (
                      <Link key={s.to} to={s.to}
                        className="flex items-center gap-2 px-2 py-2 rounded-lg transition-colors hover:bg-white/[0.04]">
                        <s.icon size={13} className="text-cyan-400 shrink-0" />
                        <span className="text-[12.5px] text-slate-400 font-medium">{s.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Simple links */}
            <Link to="/flex-support"
              className="flex items-center gap-3 py-3.5 px-4 rounded-xl text-slate-300 font-semibold text-[14px] hover:bg-white/[0.05] hover:text-white transition-colors">
              <Sparkles size={15} className="text-cyan-400" />FLEX Support
            </Link>
            <Link to="/careers"
              className="flex items-center gap-3 py-3.5 px-4 rounded-xl text-slate-300 font-semibold text-[14px] hover:bg-white/[0.05] hover:text-white transition-colors">
              <Users size={15} className="text-sky-400" />Careers
            </Link>

            {/* About accordion */}
            <button onClick={() => setMobileSection(mobileSection === 'about' ? null : 'about')}
              className="w-full flex items-center justify-between py-3.5 px-4 rounded-xl font-semibold text-[14px] transition-colors"
              style={{ color: mobileSection === 'about' ? '#00b1eb' : '#cbd5e1', background: mobileSection === 'about' ? 'rgba(0,154,217,0.08)' : 'transparent' }}>
              <span>About</span>
              <ChevronDown size={15} className={`transition-transform duration-200 ${mobileSection === 'about' ? 'rotate-180' : ''}`}
                style={{ color: mobileSection === 'about' ? '#00b1eb' : '#475569' }} />
            </button>
            {mobileSection === 'about' && (
              <div className="rounded-xl overflow-hidden" style={{ background: 'rgba(0,154,217,0.04)', border: '1px solid rgba(0,154,217,0.10)' }}>
                <div className="p-3 space-y-0.5">
                  {aboutLinks.map(item => (
                    <Link key={item.to} to={item.to}
                      className="flex items-center gap-3 px-2 py-2.5 rounded-lg transition-colors hover:bg-white/[0.04]">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(14,165,233,0.12)', border: '1px solid rgba(14,165,233,0.18)' }}>
                        <item.icon size={14} className="text-sky-400" />
                      </div>
                      <div>
                        <div className="text-[13.5px] text-slate-300 font-medium">{item.label}</div>
                        <div className="text-[11px] text-slate-600">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="pt-3 pb-3 px-1 mt-2" style={{ borderTop: '1px solid rgba(0,154,217,0.08)' }}>
              <Link to="/contact" className="btn-sap w-full justify-center text-[14.5px] py-3">
                Contact Us <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
