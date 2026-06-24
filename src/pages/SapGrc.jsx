import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const services = [
  'Solution design and implementation',
  'Security assessments',
  'Role design and remediation',
  'Segregation of duty frameworks',
  'Compliance process implementation',
  'Access and fraud management controls',
  'Risk assessment and management',
]

const why = [
  '10+ years of expertise in SAP audit and GRC topics',
  'Comprehensive approach that goes beyond product-specific solutions',
  'Leverages existing SAP functions before adding third-party complexity',
  'Effective system controls design using proven frameworks',
  'Regulatory compliance: SOX, GDPR, and industry-specific standards',
]

const journey = [
  { stage: 'Assess', desc: 'Current security posture and compliance gap analysis' },
  { stage: 'Design', desc: 'Role architecture, SoD rules, and control frameworks' },
  { stage: 'Implement', desc: 'SAP GRC deployment, configuration, and integration' },
  { stage: 'Remediate', desc: 'Role clean-up, user provisioning clean-up, conflict resolution' },
  { stage: 'Monitor', desc: 'Ongoing risk monitoring, audit support, and continuous compliance' },
]

export default function SapGrc() {
  return (
    <div style={{ background: '#ffffff' }}>
      <PageHeader
        badge="Security, Risk & Compliance"
        title="SAP GRC"
        highlight="Services"
        subtitle="RAYVEN IT provides end-to-end security, risk and compliance management services — with 10+ years of expertise in SAP audit and GRC topics, going beyond product-specific solutions."
        breadcrumb={[{ label: 'Security, Risk & Compliance' }, { label: 'SAP GRC' }]}
      />

      <section className="section pt-0 px-6">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="section-label mb-2">GRC Services</p>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
                Comprehensive <span className="sap-text-full">GRC Coverage</span>
              </h2>
              <div className="space-y-3">
                {services.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
                    style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                    <CheckCircle size={15} style={{ color: '#009ad9', flexShrink: 0 }} />
                    <span className="text-gray-700 text-[14px]">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <p className="section-label mb-4">Why RAYVEN IT for GRC</p>
                <h3 className="text-gray-900 font-bold text-[16px] mb-4">Beyond the Product</h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mb-5">
                  Many GRC vendors focus narrowly on their own product's capabilities. RAYVEN IT takes a broader approach — combining deep SAP audit experience with existing SAP functions and best-in-class third-party tools to design effective system controls.
                </p>
                <div className="space-y-2.5">
                  {why.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle size={13} style={{ color: '#009ad9', marginTop: 2, flexShrink: 0 }} />
                      <span className="text-gray-600 text-[13px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <h3 className="text-gray-900 font-bold text-[15px] mb-5">GRC Maturity Journey</h3>
                {journey.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 mb-4 last:mb-0">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-bold text-white text-[12px]"
                      style={{ background: 'linear-gradient(135deg,#009ad9,#006eb8)' }}>{i + 1}</div>
                    <div>
                      <div className="text-gray-900 font-semibold text-[14px]">{item.stage}</div>
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
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>Secure your <span className="sap-text-full">SAP environment</span></h2>
          <p className="text-gray-600 text-[14px] mb-8">Start with a complimentary GRC assessment to understand your current risk posture.</p>
          <Link to="/contact" className="btn-sap">Request an Assessment <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  )
}
