import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const fioriServices = ['Mobile roadmaps and proof-of-concept projects','Production deployments','System customizations and enhancements','Backend synchronization work','Custom Fiori / UI5 app development','Mobile device management integration']

export default function Mobility() {
  return (
    <div style={{ background: '#ffffff' }}>
      <PageHeader
        badge="Solutions"
        title="Mobility"
        highlight="Solutions"
        subtitle="Mobility enhances enterprise effectiveness by providing relevant information at the right time at the right place — improving employee interaction and customer experiences through real-time engagement."
        breadcrumb={[{ label: 'Solutions' }, { label: 'Mobility' }]}
      />

      <section className="section pt-0 px-6">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-2">SAP Fiori</p>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-5" style={{ letterSpacing: '-0.02em' }}>
                The New UX for <span className="sap-text-full">SAP Software</span>
              </h2>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-6">
                SAP Fiori is the new user experience (UX) for SAP software, applying modern design principles to deliver personalized and responsive experiences across any device. RAYVEN IT provides implementation services including:
              </p>
              <div className="space-y-2.5 mb-8">
                {fioriServices.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={14} style={{ color: '#009ad9', marginTop: 2, flexShrink: 0 }} />
                    <span className="text-gray-600 text-[13.5px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <p className="section-label mb-3">Mobility Consulting</p>
                <p className="text-gray-600 text-[13.5px] leading-relaxed">
                  RAYVEN IT helps organizations develop enterprise mobile strategies. Our approach aims to deliver business value through customer acquisition, satisfaction improvements, workforce productivity gains, and cost reduction. Collaboration, connectivity, and communication are essential for modern organizations.
                </p>
              </div>

              <div className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <p className="section-label mb-4">Business Outcomes</p>
                {[
                  { label: 'Customer Acquisition', desc: 'Mobile-first experiences that drive engagement and conversions.' },
                  { label: 'Workforce Productivity', desc: 'Eliminate paper-based processes and give workers real-time data access.' },
                  { label: 'Cost Reduction', desc: 'Automate manual workflows and reduce administrative overhead.' },
                  { label: 'Customer Satisfaction', desc: 'Faster response times and personalized service through mobile tools.' },
                ].map((o, i) => (
                  <div key={i} className="mb-3.5 last:mb-0">
                    <div className="text-gray-900 font-semibold text-[13px]">{o.label}</div>
                    <div className="text-gray-500 text-[12.5px] mt-0.5">{o.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#f8faff' }}>
        <div className="container-lg text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>Ready to go <span className="sap-text-full">mobile?</span></h2>
          <p className="text-gray-600 text-[14px] mb-8">Let's build your enterprise mobility strategy and get SAP Fiori working for your team.</p>
          <Link to="/contact" className="btn-sap">Start Your Mobile Journey <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  )
}
