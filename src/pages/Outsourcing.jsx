import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const coreServices = [
  { title: 'New Implementations', desc: 'Greenfield SAP deployments using our proven implementation methodology for predictable, on-time delivery.' },
  { title: 'Migrating from Legacy Enterprise Systems', desc: 'Structured migration from legacy platforms with minimal business disruption and data integrity assurance.' },
  { title: 'Consolidating Distributed Systems', desc: 'System landscape consolidation that reduces complexity, lowers TCO, and simplifies ongoing operations.' },
  { title: 'Implementing Incremental SAP Modules', desc: 'Phased, module-by-module SAP adoption that delivers value quickly without big-bang risk.' },
  { title: 'Application Customization Services', desc: 'Custom reports, interfaces, forms, extensions, and conversions tailored to your business processes.' },
  { title: 'Application Maintenance Services (AMS)', desc: 'Operational excellence and comprehensive infrastructure management for existing SAP customers.' },
]

const advantages = [
  'User experience focus throughout all engagements',
  'Flexible team structuring with scalable engagement models',
  'Industry-specific vertical expertise',
  'Proven track record in ERP, CRM, PLM implementations',
  'Experienced consulting staff with deep domain knowledge',
  'Continuous improvement and post-go-live optimization',
]

export default function Outsourcing() {
  return (
    <div style={{ background: '#ffffff' }}>
      <PageHeader
        badge="Application Services"
        title="Outsourcing &"
        highlight="Managed Services"
        subtitle="End-to-end SAP services — from new implementations to application maintenance — so you can focus on your core business while we manage the technology."
        breadcrumb={[{ label: 'Services' }, { label: 'Outsourcing & Managed Services' }]}
      />

      <section className="section pt-0 px-6">
        <div className="container-lg">
          <p className="section-label mb-2">Core Services</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10" style={{ letterSpacing: '-0.02em' }}>
            Full SAP <span className="sap-text-full">Service Lifecycle</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreServices.map((s, i) => (
              <div key={i} className="card-hover rounded-2xl p-6">
                <div className="text-[28px] font-black mb-3 leading-none" style={{ color: 'rgba(0,127,196,0.12)', letterSpacing: '-0.04em' }}>0{i + 1}</div>
                <h3 className="text-gray-900 font-bold text-[15px] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#f8faff' }}>
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-2">Why Choose Us</p>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
                Competitive <span className="sap-text-full">Advantages</span>
              </h2>
              <div className="space-y-3.5">
                {advantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={14} style={{ color: '#009ad9', marginTop: 2, flexShrink: 0 }} />
                    <span className="text-gray-600 text-[14px]">{adv}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="section-label mb-5">Engagement Models</p>
              {[
                { model: 'Full Outsourcing', desc: 'We own and manage the entire SAP environment on your behalf.' },
                { model: 'Staff Augmentation', desc: 'Extend your team with our certified SAP consultants.' },
                { model: 'Project-Based', desc: 'Fixed-scope implementations, upgrades, and migrations.' },
                { model: 'FLEX Support', desc: 'Pay-per-use ongoing maintenance and ticket resolution.' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl mb-3 last:mb-0"
                  style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                  <div className="w-1.5 h-10 rounded-full shrink-0" style={{ background: 'linear-gradient(180deg,#009ad9,#0069b4)' }} />
                  <div>
                    <div className="text-gray-900 font-semibold text-[14px]">{item.model}</div>
                    <div className="text-gray-500 text-[12.5px] mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#f8faff' }}>
        <div className="container-lg text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>Let us <span className="sap-text-full">manage the complexity</span></h2>
          <p className="text-gray-600 text-[14px] mb-8">Contact us to discuss the right managed services model for your organization.</p>
          <Link to="/contact" className="btn-sap">Get Started <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  )
}
