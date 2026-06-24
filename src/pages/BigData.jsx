import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const biServices = ['Dashboards','Reporting','Analytical Processing','Analytics','Data Mining','Process Mining','Complex Event Processing','Prescriptive Analytics']
const eimServices = ['ECM','BPM','CEM','Master Data Management','Master Data Governance']

export default function BigData() {
  return (
    <div style={{ background: '#ffffff' }}>
      <PageHeader
        badge="Solutions"
        title="Analytics &"
        highlight="Big Data"
        subtitle="Analytics is enabling organizations to predict customer behavior, meet their needs and cement long-term customer relationships. RAYVEN IT makes this capability accessible to every enterprise."
        breadcrumb={[{ label: 'Solutions' }, { label: 'Analytics & Big Data' }]}
      />

      <section className="section pt-0 px-6">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl p-8" style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <p className="section-label mb-3">Business Intelligence</p>
              <p className="text-gray-600 text-[13.5px] leading-relaxed mb-5">
                Our BI practice delivers dashboards, reporting, analytical processing, analytics, data mining, process mining, complex event processing, and prescriptive analytics to support both operational and strategic decisions.
              </p>
              <div className="flex flex-wrap gap-2">
                {biServices.map((s, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg text-[12px] font-medium" style={{ background: 'rgba(0,154,217,0.08)', color: '#009ad9', border: '1px solid rgba(0,154,217,0.18)' }}>{s}</span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-8" style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <p className="text-[10px] font-800 uppercase tracking-[0.15em] mb-3" style={{ color: '#22d3ee', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ display: 'inline-block', width: 20, height: 2, borderRadius: 1, background: '#22d3ee' }} />Enterprise Information Management</p>
              <p className="text-gray-600 text-[13.5px] leading-relaxed mb-5">
                RAYVEN IT's EIM practice manages information from an enterprise perspective — spanning ECM, BPM, CEM, Master Data Management, and Master Data Governance to ensure data is trusted, governed and actionable.
              </p>
              <div className="flex flex-wrap gap-2">
                {eimServices.map((s, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg text-[12px] font-medium" style={{ background: 'rgba(6,182,212,0.07)', color: '#22d3ee', border: '1px solid rgba(6,182,212,0.18)' }}>{s}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-8" style={{ background: 'rgba(0,127,196,0.04)', border: '1px solid rgba(0,112,196,0.10)' }}>
            <p className="section-label mb-3">Our Value Proposition</p>
            <p className="text-gray-700 text-[15px] leading-relaxed max-w-3xl">
              RAYVEN IT provides a pool of consultants with extensive experience in Master Data and Big Data Services across diverse industries. Our internal training ensures consultant expertise remains current. We offer full-spectrum service delivery from consulting through operations scaling — including cloud data services and API integration expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="section-sm px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#f8faff' }}>
        <div className="container-lg text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>Turn data into <span className="sap-text-full">decisive action</span></h2>
          <p className="text-gray-600 text-[14px] mb-8">Let's design an analytics solution tailored to your business goals.</p>
          <Link to="/contact" className="btn-sap">Explore Analytics Solutions <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  )
}
