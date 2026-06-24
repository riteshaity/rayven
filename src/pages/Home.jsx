import { Link } from 'react-router-dom'
import {
  ArrowRight, Code2, BarChart3, Settings2, Lightbulb,
  ShieldCheck, Database, Server, Globe, Smartphone,
  Layers, Factory, Users, CheckCircle, Award, Zap, TrendingUp
} from 'lucide-react'
import { ServiceCard } from '../components/ServiceCard'

/* ─── data ─────────────────────────────────────── */
const services = [
  { icon: Code2,       title: 'Application Development',             description: 'Full lifecycle and cooperative development using Agile methodology — enterprise apps, mobile, web, integrations, and product support.',             to: '/application-development',       accent: 'sap' },
  { icon: BarChart3,   title: 'Data Science & Analytics Consulting',  description: 'Data strategy, governance, BI, AI/ML pipelines and big data services that turn raw information into competitive intelligence.',                    to: '/analytics-consulting',           accent: 'indigo' },
  { icon: Settings2,   title: 'Outsourcing & Managed Services',       description: 'New implementations, legacy migrations, application maintenance and software upgrades using our proven methodology.',                               to: '/outsourcing-managed-services',   accent: 'cyan' },
  { icon: Lightbulb,   title: 'Strategic Consulting',                 description: 'SAP solution assessments, application management evaluations, IT strategy and roadmaps aligned to your business objectives.',                       to: '/strategic-consulting',           accent: 'sap' },
  { icon: ShieldCheck, title: 'SAP GRC',                              description: 'End-to-end security, risk and compliance management — role design, SoD frameworks, access controls and audit support.',                            to: '/sap-grc',                        accent: 'indigo' },
  { icon: Zap,         title: 'FLEX Support',                         description: 'Pay per actual use. Up and running almost immediately. Flex pricing that reflects your business demands with minimal base cost.',                    to: '/flex-support',                   accent: 'cyan' },
]

const solutions = [
  { icon: Database,   label: 'Analytics & Big Data', to: '/big-data' },
  { icon: Server,     label: 'SAP HANA',             to: '/sap-hana' },
  { icon: Globe,      label: 'IT Infrastructure',    to: '/it-infrastructure' },
  { icon: Smartphone, label: 'Mobility',             to: '/mobility' },
  { icon: Layers,     label: 'SAP',                  to: '/sap' },
  { icon: Users,      label: 'SuccessFactors',       to: '/successfactors' },
  { icon: Factory,    label: 'SAP MII',              to: '/sap-mii' },
]

const stats = [
  { value: '15+', label: 'Years Experience',  sub: 'Est. 2009' },
  { value: '3',   label: 'Global Offices',    sub: 'NJ · India · Canada' },
  { value: '$0',  label: 'Company Debt',      sub: 'Financially stable' },
  { value: '100%',label: 'SAP Commitment',    sub: 'Certified partner' },
]

const partners = ['SAP', 'Wipro', 'ltelligence']

/* ─── component ────────────────────────────────── */
export default function Home() {
  return (
    <div className="bg-white">

      {/* ═══ HERO ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6" style={{ background: '#f5f9ff' }}>
        {/* Grid */}
        <div className="absolute inset-0 grid-bg" style={{ opacity: 0.7 }} />
        {/* Radial glow top */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(0,154,217,0.12) 0%, transparent 65%)' }} />

        <div className="container-xl relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7 text-[11.5px] font-bold tracking-wide"
                style={{ background: 'rgba(0,127,196,0.08)', border: '1px solid rgba(0,127,196,0.18)', color: '#007fc4' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
                Minority Women Owned · Edison, NJ
              </div>

              <h1 className="text-5xl md:text-[62px] font-extrabold text-gray-900 leading-[1.06] mb-6 text-balance"
                style={{ letterSpacing: '-0.035em' }}>
                Enterprise SAP &amp;<br />
                <span className="sap-text-full">IT That Delivers.</span>
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-3 max-w-xl">
                RAYVEN IT Solutions LLC is a Minority Women Owned Certified Business in New Jersey dedicated to providing the best SAP and IT Solutions and Professional Services.
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-10 max-w-xl">
                We deliver the right business solutions that integrate{' '}
                <span className="text-gray-800 font-semibold">People, Process and emerging Technology</span>{' '}
                to help clients achieve collaborative enterprise results at very affordable prices.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-sap text-[15px] px-7 py-3">
                  Start a Conversation <ArrowRight size={16} />
                </Link>
                <Link to="/mission" className="btn-outline-sap text-[15px] px-7 py-3">
                  About RAYVEN IT
                </Link>
              </div>
            </div>

            {/* Right — floating dashboard card */}
            <div className="hidden lg:block relative">
              <div className="rounded-2xl overflow-hidden bg-white"
                style={{ boxShadow: '0 30px 80px rgba(0,112,196,0.14), 0 6px 20px rgba(0,0,0,0.08)', border: '1px solid rgba(0,112,196,0.12)' }}>
                {/* Top accent bar */}
                <div className="h-1.5" style={{ background: 'linear-gradient(90deg,#00b1eb,#006eb8)' }} />

                {/* Header */}
                <div className="px-6 pt-5 pb-4 flex items-center justify-between"
                  style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <div>
                    <div className="font-extrabold text-gray-900 text-[15px]">RAYVEN IT Solutions</div>
                    <div className="text-gray-400 text-[11.5px]">SAP & Enterprise IT Consulting</div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#22c55e' }} />
                    <span className="text-[11px] font-semibold" style={{ color: '#16a34a' }}>Active</span>
                  </div>
                </div>

                {/* Stats 2×2 grid */}
                <div className="p-5 grid grid-cols-2 gap-3">
                  {stats.map((s, i) => (
                    <div key={i} className="rounded-xl p-4" style={{ background: '#f5f9ff', border: '1px solid rgba(0,112,196,0.09)' }}>
                      <div className="text-[26px] font-black sap-text-full leading-none mb-1" style={{ letterSpacing: '-0.04em' }}>{s.value}</div>
                      <div className="text-gray-800 text-[12px] font-semibold">{s.label}</div>
                      <div className="text-gray-400 text-[11px] mt-0.5">{s.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Partners row */}
                <div className="px-5 pb-5">
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2.5">Technology Partners</div>
                  <div className="flex gap-2">
                    {partners.map((p, i) => (
                      <div key={i} className="flex-1 rounded-xl py-2.5 text-center text-[12.5px] font-bold"
                        style={{ background: 'rgba(0,127,196,0.06)', color: '#007fc4', border: '1px solid rgba(0,127,196,0.14)' }}>
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 rounded-2xl px-4 py-3 bg-white"
                style={{ boxShadow: '0 8px 28px rgba(0,0,0,0.12)', border: '1px solid rgba(0,0,0,0.07)' }}>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Certified</div>
                <div className="text-gray-900 font-extrabold text-[13px]">Minority Women Owned</div>
              </div>

              {/* Floating GRC badge */}
              <div className="absolute -top-3 -right-3 rounded-xl px-3.5 py-2.5 bg-white"
                style={{ boxShadow: '0 6px 20px rgba(0,0,0,0.10)', border: '1px solid rgba(99,102,241,0.15)' }}>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}>
                    <ShieldCheck size={13} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">SAP</div>
                    <div className="text-gray-900 font-extrabold text-[12.5px]">GRC Partner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══════════════════════════════════════════ */}
      <section className="section bg-white px-6">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="section-label">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-0" style={{ letterSpacing: '-0.03em' }}>
                Comprehensive <span className="sap-text-full">IT Services</span>
              </h2>
            </div>
            <p className="text-gray-500 text-[14.5px] max-w-sm md:text-right leading-relaxed">
              From strategy through implementation, managed services and ongoing support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => <ServiceCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      {/* ═══ SOLUTIONS STRIP ════════════════════════════════════ */}
      <section className="section-sm px-6" style={{ background: '#f5f9ff', borderTop: '1px solid rgba(0,112,196,0.07)', borderBottom: '1px solid rgba(0,112,196,0.07)' }}>
        <div className="container-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <p className="section-label mb-0">Technology Solutions</p>
            <Link to="/sap" className="text-[13px] font-semibold flex items-center gap-1.5 transition-colors" style={{ color: '#007fc4' }}
              onMouseEnter={e => e.currentTarget.style.color = '#005c9b'}
              onMouseLeave={e => e.currentTarget.style.color = '#007fc4'}>
              View all solutions <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {solutions.map((s, i) => (
              <Link key={i} to={s.to}
                className="group flex flex-col items-center gap-2.5 py-5 px-3 text-center rounded-2xl bg-white transition-all duration-200"
                style={{ border: '1px solid rgba(0,112,196,0.10)', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,154,217,0.35)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,112,196,0.10)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,112,196,0.10)'; e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'; e.currentTarget.style.transform = '' }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,127,196,0.09)', border: '1px solid rgba(0,127,196,0.15)' }}>
                  <s.icon size={17} style={{ color: '#007fc4' }} />
                </div>
                <span className="text-gray-600 text-[12px] font-semibold leading-tight group-hover:text-gray-900 transition-colors">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ══════════════════════════════════════════════ */}
      <section className="section bg-white px-6">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="section-label">About RAYVEN IT</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6" style={{ letterSpacing: '-0.03em' }}>
                Financially Stable.<br /><span className="sap-text-full">Zero-Debt Company.</span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
                RAYVEN IT Solutions LLC is a Minority Women Owned Certified Business in New Jersey dedicated to providing the best SAP and IT Solutions and Professional Services. Established in 2009, we maintain headquarters in Edison, NJ with an offshore delivery center in Hyderabad, India and a presence in Vancouver, Canada.
              </p>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                RAYVEN IT approaches problem solving by taking a multi-dimensional approach — combining business requirements with accurate technology mappings to forge appropriate solution sets for complex business needs.
              </p>

              <div className="space-y-3 mb-10">
                {[
                  'Established 2009 — 15+ years of enterprise IT experience',
                  'Certified SAP partner with global delivery capability',
                  'Financially stable, zero-debt company',
                  'Offshore center in Hyderabad, India for 24/7 coverage',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: 'rgba(0,127,196,0.10)' }}>
                      <CheckCircle size={12} style={{ color: '#007fc4' }} />
                    </div>
                    <span className="text-gray-600 text-[14.5px]">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/mission" className="btn-outline-sap">Our Mission & Values</Link>
            </div>

            {/* Right panel */}
            <div className="space-y-4">
              {/* Quote card */}
              <div className="rounded-2xl p-6" style={{ background: '#f5f9ff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="text-[40px] font-black leading-none mb-3" style={{ color: '#009ad9', opacity: 0.3 }}>"</div>
                <p className="text-gray-700 text-[14.5px] italic leading-relaxed mb-5">
                  The biggest pride of RAYVEN IT is our clients and our driving force is our partners.
                </p>
                <div className="flex items-center gap-2.5">
                  <Award size={15} style={{ color: '#009ad9' }} />
                  <span className="text-gray-500 text-[12px] font-semibold uppercase tracking-wider">RAYVEN IT Core Belief</span>
                </div>
              </div>

              {/* Partners */}
              <div className="rounded-2xl p-6 bg-white" style={{ border: '1px solid rgba(0,112,196,0.10)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-4">Technology Partners</div>
                <div className="flex gap-2.5 mb-4">
                  {partners.map((p, i) => (
                    <div key={i} className="flex-1 rounded-xl py-3 text-center text-[13px] font-bold"
                      style={{ background: 'rgba(0,127,196,0.06)', color: '#007fc4', border: '1px solid rgba(0,127,196,0.14)' }}>
                      {p}
                    </div>
                  ))}
                </div>
                <Link to="/partners" className="flex items-center gap-1.5 text-[13px] font-semibold" style={{ color: '#007fc4' }}>
                  View all clients & partners <ArrowRight size={13} />
                </Link>
              </div>

              {/* Testimonial */}
              <div className="rounded-2xl p-6 bg-white" style={{ border: '1px solid rgba(0,112,196,0.10)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <p className="text-gray-600 text-[13.5px] italic leading-relaxed mb-4">
                  "RAYVEN IT delivered a cost-effective solution to meet our IT needs. Their expertise in advanced tools and implementation speed exceeded our expectations."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] font-bold"
                    style={{ background: 'linear-gradient(135deg,#009ad9,#006eb8)' }}>C</div>
                  <div>
                    <div className="text-gray-900 text-[13px] font-semibold">Operations Director</div>
                    <div className="text-gray-400 text-[11px]">Manufacturing Company, NJ · SAP Implementation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SUCCESSFACTORS QUOTE ═══════════════════════════════ */}
      <section className="section-sm px-6" style={{ background: '#f5f9ff', borderTop: '1px solid rgba(0,112,196,0.07)', borderBottom: '1px solid rgba(0,112,196,0.07)' }}>
        <div className="container-lg">
          <div className="rounded-3xl overflow-hidden" style={{ boxShadow: '0 4px 24px rgba(0,112,196,0.10)' }}>
            {/* Gradient header strip */}
            <div className="px-10 py-6 flex items-center gap-3" style={{ background: 'linear-gradient(135deg,#009ad9,#006eb8)' }}>
              <Users size={18} className="text-white/80" />
              <span className="text-white/90 font-bold text-[13px] uppercase tracking-widest">SAP SuccessFactors</span>
            </div>
            {/* Body */}
            <div className="bg-white px-10 py-10 md:py-14">
              <div className="text-[64px] font-black leading-none mb-2" style={{ color: '#009ad9', opacity: 0.15 }}>"</div>
              <blockquote className="text-gray-800 text-xl md:text-2xl font-semibold leading-relaxed mb-8 max-w-3xl" style={{ letterSpacing: '-0.01em' }}>
                By transitioning to SuccessFactors, you have invested in a future for your human capital management and talent management systems that are more ambitious than just technology.
              </blockquote>
              <p className="text-gray-500 text-[14.5px] mb-8 max-w-2xl leading-relaxed">
                RAYVEN IT is an authorized SuccessFactors reseller and implementation partner across all modules — Employee Central, Recruiting, Learning, Performance &amp; Goals, Compensation, and more.
              </p>
              <Link to="/successfactors" className="btn-sap">Explore SuccessFactors <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═════════════════════════════════════════ */}
      <section className="section-sm bg-white px-6">
        <div className="container-xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 justify-between mb-8">
            <p className="section-label mb-0">Industries We Serve</p>
            <div className="flex items-center gap-2 text-[12px] text-gray-400 font-medium">
              <TrendingUp size={13} />
              <span>Serving complex business-critical projects</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {['Aerospace', 'Finance', 'Healthcare', 'Manufacturing', 'Software', 'Telecommunications', 'Retail', 'Chemical Industry', 'Higher Education', 'Non-profits'].map((ind, i) => (
              <span key={i} className="px-4 py-2 rounded-xl text-gray-600 text-[13px] font-medium transition-all duration-150"
                style={{ background: '#f5f9ff', border: '1px solid rgba(0,112,196,0.10)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,154,217,0.35)'; e.currentTarget.style.color = '#007fc4' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,112,196,0.10)'; e.currentTarget.style.color = '' }}>
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ════════════════════════════════════════════════ */}
      <section className="section px-6" style={{ background: 'linear-gradient(135deg,#009ad9 0%,#007fc4 40%,#0069b4 100%)' }}>
        <div className="container-lg text-center relative">
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 grid-bg" style={{ opacity: 0.08 }} />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-[11.5px] font-bold tracking-wide"
              style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.20)', color: '#fff' }}>
              <Zap size={12} />
              Affordable Pricing · No Retainer Waste
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-balance" style={{ letterSpacing: '-0.03em' }}>
              Ready to get started?
            </h2>
            <p className="text-white/80 text-[15.5px] mb-10 max-w-lg mx-auto leading-relaxed">
              Tell us about your project and we'll put together the right solution — People, Process &amp; Technology.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-[15px] transition-all duration-200 bg-white hover:-translate-y-px"
                style={{ color: '#007fc4', boxShadow: '0 6px 20px rgba(0,0,0,0.15)' }}>
                Contact Us Today <ArrowRight size={16} />
              </Link>
              <Link to="/careers"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-[15px] text-white transition-all duration-200 hover:-translate-y-px"
                style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)' }}>
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
