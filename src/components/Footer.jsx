import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Linkedin, Facebook, ArrowRight, Zap } from 'lucide-react'

const cols = {
  Services: [
    { l: 'Application Development',       to: '/application-development' },
    { l: 'Analytics Consulting',           to: '/analytics-consulting' },
    { l: 'Outsourcing & Managed Services', to: '/outsourcing-managed-services' },
    { l: 'Strategic Consulting',           to: '/strategic-consulting' },
    { l: 'FLEX Support',                   to: '/flex-support' },
    { l: 'SAP GRC',                        to: '/sap-grc' },
  ],
  Solutions: [
    { l: 'SAP',                 to: '/sap' },
    { l: 'SAP HANA',            to: '/sap-hana' },
    { l: 'SuccessFactors',      to: '/successfactors' },
    { l: 'Analytics & Big Data',to: '/big-data' },
    { l: 'IT Infrastructure',   to: '/it-infrastructure' },
    { l: 'Mobility',            to: '/mobility' },
    { l: 'SAP MII',             to: '/sap-mii' },
  ],
  Company: [
    { l: 'Our Mission',        to: '/mission' },
    { l: 'Clients & Partners', to: '/partners' },
    { l: 'Careers',            to: '/careers' },
    { l: 'Contact Us',         to: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: '#0d1b2e', borderTop: '1px solid rgba(0,145,200,0.10)' }}>
      {/* CTA band */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container-xl px-6 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="section-label mb-2">Ready to start?</p>
            <h3 className="text-2xl font-bold text-white" style={{ letterSpacing: '-0.02em' }}>
              Transform your enterprise IT today.
            </h3>
            <p className="text-slate-400 text-[14px] mt-1">People · Process · Technology — delivered at affordable prices.</p>
          </div>
          <Link to="/contact" className="btn-sap shrink-0">
            Get in Touch <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Links grid */}
      <div className="container-xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg,#009ad9,#006eb8)', boxShadow: '0 4px 14px rgba(0,110,180,0.35)' }}>
                <Zap size={15} className="text-white" fill="white" />
              </div>
              <span className="font-extrabold text-[17px]" style={{ letterSpacing: '-0.02em' }}>
                <span className="sap-text">RAYVEN</span>
                <span className="text-slate-400 font-medium"> IT</span>
              </span>
            </Link>

            <p className="text-slate-500 text-[13px] leading-relaxed mb-6 max-w-xs">
              Minority Women Owned Certified Business in New Jersey. Delivering SAP & enterprise IT solutions since 2009.
            </p>

            <div className="space-y-3 text-[13px] text-slate-500">
              <div className="flex items-start gap-2.5">
                <MapPin size={13} style={{ color: '#009ad9', flexShrink: 0, marginTop: 2 }} />
                <span>1 Ethel Road Suite 204B<br />Edison, NJ 08817, USA</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={13} style={{ color: '#009ad9', flexShrink: 0 }} />
                <a href="mailto:info@rayvenit.solutions" className="hover:text-slate-300 transition-colors">info@rayvenit.solutions</a>
              </div>
            </div>

            <div className="flex gap-2.5 mt-6">
              {[
                { href: 'https://www.linkedin.com/company/rayvenit-solutions', Icon: Linkedin },
                { href: 'https://www.facebook.com/pages/Rayven-It-Solutions-LLC/507894239251336', Icon: Facebook },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 transition-all duration-200"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,154,217,0.4)'; e.currentTarget.style.color = '#009ad9' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '' }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(cols).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[11px] uppercase tracking-[0.12em] text-slate-500 mb-4" style={{ fontWeight: 800 }}>{heading}</h4>
              <ul className="space-y-2.5">
                {links.map(({ l, to }) => (
                  <li key={to}>
                    <Link to={to} className="text-slate-500 text-[13px] hover:text-slate-200 transition-colors duration-150">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container-xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-[12px]">© 2009–{new Date().getFullYear()} RAYVEN IT Solutions LLC. All Rights Reserved.</p>
          <p className="text-slate-700 text-[12px]">Minority Women Owned Certified Business · New Jersey</p>
        </div>
      </div>
    </footer>
  )
}
