import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'

export default function ItInfra() {
  return (
    <div style={{ background: '#ffffff' }}>
      <PageHeader
        badge="Solutions"
        title="IT"
        highlight="Infrastructure"
        subtitle="Make the Complex Simple for the fast, flexible and secure business. RAYVEN IT aligns IT systems with business objectives through expert consulting to maximize technology investments."
        breadcrumb={[{ label: 'Solutions' }, { label: 'IT Infrastructure' }]}
      />

      <section className="section pt-0 px-6">
        <div className="container-lg">
          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {[
              { title: 'IT Management Consulting', body: 'Alignment of IT systems with business objectives through expert consulting to maximize technology investments and reduce operational complexity.' },
              { title: 'Infrastructure Security', body: 'Reducing and managing IT risk through proactive planning and industry best practices — protecting your business from security breaches and data loss.' },
              { title: 'Workplace Services', body: 'Modernization of computing environments with focus on desktop/network upgrades, collaboration tools, help desk support and productivity enhancement.' },
            ].map((s, i) => (
              <div key={i} className="card-hover rounded-2xl p-6">
                <div className="text-[28px] font-black mb-4 leading-none" style={{ color: 'rgba(0,127,196,0.12)', letterSpacing: '-0.04em' }}>0{i + 1}</div>
                <h3 className="text-gray-900 font-bold text-[15px] mb-3">{s.title}</h3>
                <p className="text-gray-500 text-[13.5px] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-2">Our Approach</p>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-5" style={{ letterSpacing: '-0.02em' }}>
                Infrastructure That <span className="sap-text-full">Enables Growth</span>
              </h2>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-6">RAYVEN IT designs and manages infrastructure that supports your business today and scales with your ambitions tomorrow. We combine strategic consulting with hands-on implementation and ongoing management.</p>
              <div className="space-y-3">
                {['Strategic alignment of IT investments with business goals','Risk-based approach to security and compliance','Modern workplace transformation and collaboration tools','Network and desktop environment optimization','Proactive monitoring and incident response'].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={14} style={{ color: '#009ad9', marginTop: 2, flexShrink: 0 }} />
                    <span className="text-gray-600 text-[13.5px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Network & Connectivity', desc: 'WAN/LAN design, optimization, and management' },
                { label: 'Cloud Infrastructure', desc: 'Public, private, and hybrid cloud solutions' },
                { label: 'Security & Compliance', desc: 'Zero-trust architecture and regulatory alignment' },
                { label: 'Disaster Recovery', desc: 'Business continuity planning and DR implementation' },
                { label: 'End-User Computing', desc: 'Device management, VDI, and modern desktop' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                  <div className="w-1.5 h-10 rounded-full shrink-0" style={{ background: 'linear-gradient(180deg,#009ad9,#0069b4)' }} />
                  <div>
                    <div className="text-gray-900 font-semibold text-[14px]">{item.label}</div>
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
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>Build a <span className="sap-text-full">resilient infrastructure</span></h2>
          <p className="text-gray-600 text-[14px] mb-8">Contact us for an infrastructure assessment and roadmap tailored to your business.</p>
          <Link to="/contact" className="btn-sap">Get an Assessment <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  )
}
