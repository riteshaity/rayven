import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const services = [
  { title: 'SAP Solution Assessment', body: 'Business assessment and strategy development covering process mapping, scope definition, implementation approach, and transition to managed services.' },
  { title: 'Application Management Assessment', body: 'Evaluation of basis support, ABAP, hosting, help desk functions, and recommendations to enhance performance while reducing costs.' },
  { title: 'Software Optimization', body: 'Configuration improvements in core ERP areas — Financial Accounting, Sales & Distribution, Materials Management, and Production Planning.' },
  { title: 'IT Strategy and Road Map', body: 'Development of strategic plans for business applications and infrastructure based on current state analysis and future vision.' },
  { title: 'Strategic Management & Learning', body: 'Strategy articulation, balanced scorecard development, and deployment guidance for organizational alignment and change management.' },
]

export default function StrategicConsulting() {
  return (
    <div style={{ background: '#ffffff' }}>
      <PageHeader
        badge="Application Services"
        title="Strategic"
        highlight="Consulting"
        subtitle="RAYVEN IT is a certified SAP partner with over 10 years of experience in SAP implementation and support services, providing strategic consulting and technology solutions globally."
        breadcrumb={[{ label: 'Services' }, { label: 'Strategic Consulting' }]}
      />

      <section className="section pt-0 px-6">
        <div className="container-lg">
          <p className="section-label mb-2">Service Areas</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10" style={{ letterSpacing: '-0.02em' }}>
            Strategic <span className="sap-text-full">Services</span>
          </h2>
          <div className="space-y-4">
            {services.map((s, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl items-start"
                style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-black text-[15px]"
                  style={{ background: 'rgba(0,154,217,0.10)', color: '#009ad9' }}>{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="text-gray-900 font-bold text-[15px] mb-1.5">{s.title}</h3>
                  <p className="text-gray-600 text-[13.5px] leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#f8faff' }}>
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-2">Our Approach</p>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-5" style={{ letterSpacing: '-0.02em' }}>
                Strategy Grounded <span className="sap-text-full">in Reality</span>
              </h2>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-4">We begin every engagement with an honest current-state assessment. Our consultants work closely with your stakeholders to understand not just the technology, but the business processes, constraints, and goals that shape a successful strategy.</p>
              <p className="text-gray-600 text-[14px] leading-relaxed">With a certified SAP partner track record and over a decade of implementation experience, RAYVEN IT translates strategy into measurable results — on time and within budget.</p>
            </div>
            <div className="space-y-3">
              {['Current State Assessment','Gap Analysis','Roadmap Development','Prioritization & Planning','Implementation Oversight','Performance Measurement'].map((step, i) => (
                <div key={i} className="flex items-center gap-4 px-4 py-3 rounded-xl"
                  style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold text-white shrink-0"
                    style={{ background: 'linear-gradient(135deg,#009ad9,#006eb8)' }}>{i + 1}</span>
                  <span className="text-gray-700 text-[13.5px] font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#f8faff' }}>
        <div className="container-lg text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>Build a <span className="sap-text-full">winning IT strategy</span></h2>
          <p className="text-gray-600 text-[14px] mb-8">We'll help you define where you are, where you need to go, and how to get there.</p>
          <Link to="/contact" className="btn-sap">Start the Conversation <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  )
}
