import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const lifecycleFocus = [
  'Enterprise application development',
  'Application Integrations',
  'Mobile application development',
  'Rapid business prototyping',
  'Web Application development',
  'Product training, consulting, support and customization',
]

const cooperativeTech = [
  'SAP', 'Java/J2EE', 'Microsoft .NET', 'Portals and content management',
  'SOA', 'Messaging and integration', 'Oracle', 'Hadoop', 'Neo4j', 'Enterprise Application Servers',
]

export default function ApplicationDev() {
  return (
    <div style={{ background: '#ffffff' }}>
      <PageHeader
        badge="Application Services"
        title="Application"
        highlight="Development"
        subtitle="As a software development service provider, RAYVEN IT strives to provide our customers quality application development services and web development services that help keep our customers ahead with their competitors."
        breadcrumb={[{ label: 'Services' }, { label: 'Application Development' }]}
      />

      {/* Two models */}
      <section className="section pt-0 px-6">
        <div className="container-lg">
          <p className="section-label mb-2">Our Approach</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
            Two Development <span className="sap-text-full">Models</span>
          </h2>
          <p className="text-gray-600 text-[14.5px] leading-relaxed mb-12 max-w-2xl">
            Our team follows one of two approaches to development. In full lifecycle application projects, we assume complete responsibility for analysis, design, implementation, testing and integration of systems. In cooperative development, we work with your IT professionals to jointly analyze, design, implement, test and integrate systems.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Full Lifecycle */}
            <div className="rounded-2xl p-8" style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(0,154,217,0.10)' }}>
                <span className="text-[20px] font-black sap-text">1</span>
              </div>
              <h3 className="text-gray-900 font-bold text-xl mb-3">Full Lifecycle Development</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-6">
                Our Team uses Agile application development methodology to enable faster development, improve developer productivity and reduces time to market.
              </p>
              <p className="text-[11px] font-700 uppercase tracking-widest mb-4" style={{ color: '#009ad9', fontWeight: 700 }}>Focus Areas</p>
              <ul className="space-y-2.5">
                {lifecycleFocus.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={14} style={{ color: '#009ad9', marginTop: 2, flexShrink: 0 }} />
                    <span className="text-gray-700 text-[13.5px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cooperative */}
            <div className="rounded-2xl p-8" style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(99,102,241,0.10)' }}>
                <span className="text-[20px] font-black" style={{ background: 'linear-gradient(135deg,#818cf8,#6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>2</span>
              </div>
              <h3 className="text-gray-900 font-bold text-xl mb-3">Cooperative Development</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-6">
                Specialists across our global delivery network work with you to provide the skills you need, when you need them, for streamlining, managing and maximizing all systems, applications and enterprise platforms including:
              </p>
              <p className="text-[11px] font-700 uppercase tracking-widest mb-4" style={{ color: '#818cf8', fontWeight: 700 }}>Technologies</p>
              <div className="flex flex-wrap gap-2">
                {cooperativeTech.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg text-gray-700 text-[12.5px] font-medium"
                    style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.08)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-sm px-6 bg-[#f8faff]" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="container-lg">
          <p className="section-label mb-2">Development Process</p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10" style={{ letterSpacing: '-0.02em' }}>
            How We <span className="sap-text-full">Deliver</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { step: '01', title: 'Discovery & Analysis', body: 'Deep dive into your business requirements, technical constraints, and success criteria.' },
              { step: '02', title: 'Architecture & Design', body: 'Solution architecture, technology stack selection, and detailed technical design.' },
              { step: '03', title: 'Agile Development', body: 'Sprint-based delivery with continuous integration, code reviews and velocity tracking.' },
              { step: '04', title: 'QA & Testing', body: 'Rigorous quality assurance including unit, integration, performance and user acceptance testing.' },
              { step: '05', title: 'Deployment & Integration', body: 'Cloud or on-premise deployment with seamless integration to existing enterprise systems.' },
              { step: '06', title: 'Support & Optimization', body: 'Ongoing maintenance, performance monitoring, and continuous improvement post-launch.' },
            ].map((item, i) => (
              <div key={i} className="card-hover rounded-2xl p-6">
                <div className="text-[32px] font-black mb-3 leading-none" style={{ color: 'rgba(0,127,196,0.12)', letterSpacing: '-0.04em' }}>{item.step}</div>
                <h3 className="text-gray-900 font-bold text-[15px] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#f8faff' }}>
        <div className="container-lg text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
            Ready to build <span className="sap-text-full">something great?</span>
          </h2>
          <p className="text-gray-600 text-[14px] mb-8">Tell us about your project and we'll propose the right development model.</p>
          <Link to="/contact" className="btn-sap">Get in Touch <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  )
}
