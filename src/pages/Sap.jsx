import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const modules = [
  { title: 'SAP Human Capital Management (HCM)', desc: 'Talent acquisition, workforce development, rewards administration, and employee self-service platforms that optimize your people operations.' },
  { title: 'SAP Customer Relationship Management (CRM)', desc: 'Integrate customer service operations, optimize costs, manage field services, and provide customer self-service capabilities at scale.' },
  { title: 'SAP Financial Management', desc: 'General ledger integration, regulatory compliance, entity close automation, and financial data governance for accurate, reliable reporting.' },
  { title: 'SAP Supply Chain Management (SCM)', desc: 'Demand planning, warehouse management, manufacturing planning, and transportation management across the full supply chain.' },
]

const capabilities = [
  'New SAP deployments and greenfield implementations',
  'Legacy system migrations and system consolidations',
  'Incremental module additions to existing SAP landscapes',
  'SAP upgrade planning and execution',
  'Custom development: reports, interfaces, forms, extensions',
  'Post-go-live support and continuous optimization',
]

export default function Sap() {
  return (
    <div style={{ background: '#ffffff' }}>
      <PageHeader
        badge="Solutions"
        title="SAP"
        highlight="Solutions"
        subtitle="RAYVEN IT is primarily focused to provide solutions to its clients leveraging the fully integrated SAP business suite of modules — with deep expertise across HCM, CRM, Financial Management, and Supply Chain."
        breadcrumb={[{ label: 'Solutions' }, { label: 'SAP' }]}
      />

      <section className="section pt-0 px-6">
        <div className="container-lg">
          <p className="section-label mb-2">Core Modules</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10" style={{ letterSpacing: '-0.02em' }}>
            SAP Module <span className="sap-text-full">Expertise</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {modules.map((m, i) => (
              <div key={i} className="card-hover rounded-2xl p-6">
                <h3 className="text-gray-900 font-bold text-[15px] mb-3">{m.title}</h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-2">Our SAP Practice</p>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-5" style={{ letterSpacing: '-0.02em' }}>
                10+ Years of <span className="sap-text-full">SAP Expertise</span>
              </h2>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-6">
                As a certified SAP partner, RAYVEN IT brings over a decade of implementation experience across industries. Our proprietary methodology ensures predictable delivery with minimal business disruption. RAYVEN provides the best people and a long-standing alliance with SAP to help clients get creative in driving business value from enterprise systems.
              </p>
              <div className="space-y-2.5">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={14} style={{ color: '#009ad9', marginTop: 2, flexShrink: 0 }} />
                    <span className="text-gray-600 text-[13.5px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <h3 className="text-gray-900 font-bold text-[15px] mb-5">SAP Delivery Approach</h3>
                {['Blueprint & Design','Configuration & Build','Integration Testing','User Training','Go-Live & Cutover','Hypercare & Support'].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 mb-3 last:mb-0">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0"
                      style={{ background: 'linear-gradient(135deg,#009ad9,#006eb8)' }}>{i + 1}</div>
                    <span className="text-gray-700 text-[13.5px]">{step}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3">
                {['ERP','CRM','SCM','HCM','BW/BI','GRC'].map((mod, i) => (
                  <div key={i} className="rounded-xl p-3 text-center" style={{ background: 'rgba(0,154,217,0.06)', border: '1px solid rgba(0,154,217,0.12)' }}>
                    <span className="text-[13px] font-bold" style={{ color: '#009ad9' }}>{mod}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#f8faff' }}>
        <div className="container-lg text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>Your SAP <span className="sap-text-full">implementation partner</span></h2>
          <p className="text-gray-600 text-[14px] mb-8">From initial assessment through go-live and beyond — RAYVEN IT is with you every step.</p>
          <Link to="/contact" className="btn-sap">Start Your SAP Journey <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  )
}
