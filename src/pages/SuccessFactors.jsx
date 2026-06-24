import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const modules = ['Employee Central','Workforce Planning & Analytics','SAP Jam','Recruiting','Onboarding','Learning','Performance & Goals','Compensation','Succession and Development']

const implementation = [
  { title: 'Project Planning & Scoping', desc: 'Define scope, timeline, resource plan, and success metrics.' },
  { title: 'Configuration & Customization', desc: 'Configure modules to match your HR processes and policies.' },
  { title: 'Data Migration', desc: 'Clean, transform, and migrate employee data from legacy systems.' },
  { title: 'Integration Build', desc: 'Connect SuccessFactors with payroll, ERP, and other systems.' },
  { title: 'Testing & Training', desc: 'UAT coordination, admin training, and end-user enablement.' },
  { title: 'Hypercare & Support', desc: 'Post-launch support, adoption monitoring, and optimization.' },
]

export default function SuccessFactors() {
  return (
    <div style={{ background: '#ffffff' }}>
      <PageHeader
        badge="Solutions"
        title="SAP"
        highlight="SuccessFactors"
        subtitle='"By transitioning to SuccessFactors, you have invested in a future for your human capital management and talent management systems that are more ambitious than just technology."'
        breadcrumb={[{ label: 'Solutions' }, { label: 'SuccessFactors' }]}
      />

      <section className="section pt-0 px-6">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-2">About SuccessFactors</p>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-5" style={{ letterSpacing: '-0.02em' }}>
                Full-Suite <span className="sap-text-full">HCM Platform</span>
              </h2>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-6">
                RAYVEN IT is an authorized SuccessFactors reseller and implementation partner. The platform enables organizations to align workforce strategy with business goals, optimize performance, and accelerate results through cloud-based human capital management.
              </p>

              <p className="section-label mb-3">Module Coverage</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {modules.map((m, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg text-[12.5px] font-medium" style={{ background: 'rgba(0,154,217,0.08)', color: '#009ad9', border: '1px solid rgba(0,154,217,0.18)' }}>{m}</span>
                ))}
              </div>

              <p className="section-label mb-3">Why SuccessFactors</p>
              <div className="space-y-2.5">
                {['Cloud-first HCM with continuous innovation','Global compliance for multi-country organizations','Employee experience from hire to retire','Embedded AI for talent recommendations','Integration with SAP ERP and third-party systems','Mobile-ready for a distributed workforce'].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={14} style={{ color: '#009ad9', marginTop: 2, flexShrink: 0 }} />
                    <span className="text-gray-600 text-[13.5px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <p className="section-label mb-5">Implementation Services</p>
              <div className="space-y-4">
                {implementation.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[12px] font-bold shrink-0 mt-0.5"
                      style={{ background: 'linear-gradient(135deg,#009ad9,#006eb8)' }}>{i + 1}</div>
                    <div>
                      <div className="text-gray-900 font-semibold text-[14px]">{item.title}</div>
                      <div className="text-gray-500 text-[12.5px] mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#f8faff' }}>
        <div className="container-lg text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>Transform your <span className="sap-text-full">HCM strategy</span></h2>
          <p className="text-gray-600 text-[14px] mb-8">Let RAYVEN IT implement SuccessFactors and unlock the full potential of your workforce.</p>
          <Link to="/contact" className="btn-sap">Begin Your Journey <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  )
}
