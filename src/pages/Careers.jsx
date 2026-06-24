import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, MapPin, DollarSign } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const positions = [
  { title: 'Jr. Programmer Analysts',                          salary: '$189,592 – $200,000 / yr', tags: ['Java','J2EE','.NET'] },
  { title: 'Programmer Analysts / Java',                       salary: '$189,592 – $210,000 / yr', tags: ['Java','Spring','Microservices'] },
  { title: 'Programmer Analysts / SAP ABAP/4',                 salary: '$189,592 – $210,000 / yr', tags: ['SAP','ABAP','ABAP/4'] },
  { title: 'Sr. Business Analysts / SAP Functional Consultants',salary: '$150,550 – $190,000 / yr', tags: ['SAP','Business Analysis','Consulting'] },
  { title: 'Business Intelligence Solution Architects',         salary: '$150,550 – $200,000 / yr', tags: ['BI','Tableau','Power BI','SAP BW'] },
  { title: 'Sr. Management Consultants',                       salary: '$150,550 – $210,000 / yr', tags: ['Strategy','SAP','Management'] },
]

const benefits = [
  { title: 'Competitive Compensation', body: 'Performance-based variable components on top of market-competitive base salaries.' },
  { title: 'Health Coverage', body: 'Comprehensive medical/dental including cashless hospitalization at ~2,500 hospitals.' },
  { title: 'RSU Rewards', body: 'Restricted Stock Unit awards tied to performance for top achievers.' },
  { title: 'Career Growth', body: 'Structured career paths, mentoring, and continuous learning opportunities across complex enterprise projects.' },
]

export default function Careers() {
  return (
    <div style={{ background: '#ffffff' }}>
      <PageHeader
        badge="Careers"
        title="Build Your Career"
        highlight="With RAYVEN IT"
        subtitle="RAYVEN IT specializes in complex, business-critical software projects — serving aerospace, finance, healthcare, manufacturing, software, telecommunications, and retail sectors."
        breadcrumb={[{ label: 'Careers' }]}
      />

      {/* Benefits */}
      <section className="section pt-0 px-6">
        <div className="container-lg">
          <p className="section-label mb-2">Why Join Us</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10" style={{ letterSpacing: '-0.02em' }}>
            More Than a <span className="sap-text-full">Job</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {benefits.map((b, i) => (
              <div key={i} className="card-hover rounded-2xl p-6">
                <div className="text-[28px] font-black mb-4" style={{ color: 'rgba(0,127,196,0.12)', letterSpacing: '-0.04em' }}>0{i + 1}</div>
                <h3 className="text-gray-900 font-bold text-[14px] mb-2">{b.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>

          {/* Open Positions */}
          <p className="section-label mb-2">Open Positions</p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3" style={{ letterSpacing: '-0.02em' }}>
            Current <span className="sap-text-full">Opportunities</span>
          </h2>
          <p className="text-gray-500 text-[13.5px] mb-8">All positions require travel/relocation within the United States.</p>

          <div className="space-y-3 mb-16">
            {positions.map((pos, i) => (
              <div key={i} className="card rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                style={{ transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,177,235,0.25)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,145,200,0.10)'}
              >
                <div className="flex-1">
                  <h3 className="text-gray-900 font-bold text-[15px] mb-2">{pos.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 mb-2.5">
                    <span className="flex items-center gap-1.5 text-[13px] font-bold" style={{ color: '#009ad9' }}>
                      <DollarSign size={13} />{pos.salary}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-400 text-[12px]">
                      <MapPin size={11} />USA (Travel Required)
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {pos.tags.map((tag, j) => (
                      <span key={j} className="px-2 py-0.5 rounded text-gray-500 text-[11.5px] font-medium"
                        style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.08)' }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <a href="mailto:resumes@rayvenit.solutions" className="btn-outline-sap text-[13px] py-2 px-4 shrink-0 whitespace-nowrap">
                  Apply <ExternalLink size={13} />
                </a>
              </div>
            ))}
          </div>

          {/* How to apply */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-2">Our Culture</p>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-5" style={{ letterSpacing: '-0.02em' }}>
                A Place Where <span className="sap-text-full">You Grow</span>
              </h2>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-4">RAYVEN IT specializes in complex, business-critical software projects — which means our team is constantly tackling challenging, meaningful work. We invest in our people through continuous learning, mentoring, and clear career advancement paths.</p>
              <p className="text-gray-600 text-[14px] leading-relaxed">Our culture is built on mutual respect, collaboration, and the shared goal of delivering exceptional outcomes for our clients.</p>
            </div>
            <div className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <h3 className="text-gray-900 font-bold text-[16px] mb-6">How to Apply</h3>
              {[
                { step: '1', title: 'Send Your Resume', desc: <>Email to <a href="mailto:resumes@rayvenit.solutions" className="hover:underline" style={{ color: '#009ad9' }}>resumes@rayvenit.solutions</a></> },
                { step: '2', title: 'Initial Screening', desc: 'Our team reviews your background and reaches out within 3–5 business days.' },
                { step: '3', title: 'Technical Interview', desc: 'A focused technical and behavioral interview with the hiring team.' },
                { step: '4', title: 'Offer & Onboarding', desc: 'Competitive offer, background check, and rapid onboarding.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 mb-5 last:mb-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] font-bold shrink-0"
                    style={{ background: 'linear-gradient(135deg,#009ad9,#006eb8)' }}>{item.step}</div>
                  <div>
                    <div className="text-gray-900 font-semibold text-[14px]">{item.title}</div>
                    <div className="text-gray-500 text-[12.5px] mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
              <div className="mt-6">
                <a href="mailto:resumes@rayvenit.solutions" className="btn-sap w-full justify-center">
                  Send Your Resume <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
