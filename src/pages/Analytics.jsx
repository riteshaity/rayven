import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const dataStrategy = ['Data lake implementation','Data governance','Data architecture','Data cleansing','Master data management']
const usageRights  = ['Tracking rights','Compliance clearance','Product monetization']
const techStack    = ['PowerCenter','Informatica','Hadoop','Spark','SAP Hana','Tableau','PowerBI','Cloud data services','API integration']
const bi           = ['Data mining','Prescriptive analytics','AI / Machine Learning','Dashboards & reporting','OLAP & analytical processing','Complex event processing']
const eim          = ['ECM','BPM','CEM','Master Data Management','Master Data Governance','Data Quality Management']

export default function Analytics() {
  return (
    <div style={{ background: '#ffffff' }}>
      <PageHeader
        badge="Application Services"
        title="Data Science &"
        highlight="Analytics Consulting"
        subtitle="Analytics is enabling organizations to predict customer behavior, meet their needs and cement long-term customer relationships. RAYVEN IT brings the tools and expertise to make that power accessible."
        breadcrumb={[{ label: 'Services' }, { label: 'Analytics Consulting' }]}
      />

      <section className="section pt-0 px-6">
        <div className="container-lg">
          <p className="section-label mb-2">Service Areas</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10" style={{ letterSpacing: '-0.02em' }}>
            Four Pillars of <span className="sap-text-full">Data Excellence</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Data Strategy & Governance', color: 'sap', items: dataStrategy,
                desc: 'A solid data foundation — from architecture through governance and cleansing.' },
              { title: 'Data Usage Rights & Monetization', color: 'indigo', items: usageRights,
                desc: 'Track rights, ensure compliance clearance, and monetize your data assets.' },
              { title: 'Technology Stack', color: 'cyan', items: techStack,
                desc: 'Industry-leading tools for data integration, transformation and visualization.' },
              { title: 'BI & Analytics', color: 'sap', items: bi,
                desc: 'From operational dashboards to predictive AI — full-spectrum analytics delivery.' },
            ].map((section, i) => {
              const clr = { sap: { border: 'rgba(0,154,217,0.18)', tag: '#009ad9', bg: 'rgba(0,154,217,0.06)' }, indigo: { border: 'rgba(99,102,241,0.18)', tag: '#818cf8', bg: 'rgba(99,102,241,0.06)' }, cyan: { border: 'rgba(6,182,212,0.18)', tag: '#22d3ee', bg: 'rgba(6,182,212,0.06)' } }[section.color]
              return (
                <div key={i} className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                  <h3 className="text-gray-900 font-bold text-[16px] mb-2">{section.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-5">{section.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {section.items.map((item, j) => (
                      <span key={j} className="px-2.5 py-1 rounded-lg text-[12px] font-medium" style={{ background: clr.bg, color: clr.tag, border: `1px solid ${clr.border}` }}>{item}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-sm px-6 bg-[#f8faff]" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#f8faff' }}>
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-2">Enterprise Information Management</p>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-5" style={{ letterSpacing: '-0.02em' }}>
                Managing Information <span className="sap-text-full">Enterprise-Wide</span>
              </h2>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-6">
                RAYVEN IT provides a pool of consultants with extensive experience in Master Data and Big Data Services across industries. Our internal training ensures our consultant expertise remains current, and we offer full-spectrum service delivery from consulting through operations scaling.
              </p>
              <div className="space-y-2.5">
                {['Full-spectrum delivery: consulting through operations scaling','Internal training keeps consultant skills current','Cloud data services and API integration','Industry-specific data models and frameworks','Real-time and batch processing architectures'].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={14} style={{ color: '#009ad9', marginTop: 2, flexShrink: 0 }} />
                    <span className="text-gray-600 text-[13.5px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] font-800 uppercase tracking-[0.15em] mb-4" style={{ color: '#22d3ee', fontWeight: 800 }}>EIM Services</p>
              <div className="grid grid-cols-2 gap-2.5">
                {eim.map((item, i) => (
                  <div key={i} className="rounded-xl px-4 py-3 text-gray-700 text-[13px] font-medium"
                    style={{ background: 'rgba(0,127,196,0.04)', border: '1px solid rgba(0,112,196,0.10)' }}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#f8faff' }}>
        <div className="container-lg text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>Unlock your <span className="sap-text-full">data's potential</span></h2>
          <p className="text-gray-600 text-[14px] mb-8">Let's build an analytics strategy that gives you real competitive advantage.</p>
          <Link to="/contact" className="btn-sap">Schedule a Consultation <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  )
}
