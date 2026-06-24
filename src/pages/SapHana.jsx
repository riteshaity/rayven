import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const useCases = [
  { title: 'Profitability Reporting & Forecasting', body: 'Real-time financial analytics with sub-second query performance across massive datasets.' },
  { title: 'Retail Merchandizing & Supply Chain', body: 'Optimize inventory, demand planning, and supply chain with in-memory analytics at enterprise scale.' },
  { title: 'Security & Fraud Detection', body: 'Real-time transaction monitoring and anomaly detection across millions of transactions.' },
  { title: 'Energy Use Monitoring & Optimization', body: 'Monitor and optimize energy consumption across facilities in real time to reduce costs.' },
  { title: 'Telecommunications Network Monitoring', body: 'Network performance analytics and predictive maintenance for telecom infrastructure.' },
]

export default function SapHana() {
  return (
    <div style={{ background: '#ffffff' }}>
      <PageHeader
        badge="Solutions"
        title="SAP HANA:"
        highlight="Redefines In-Memory Computing"
        subtitle="SAP HANA extends beyond enterprise-class applications into the database storage layer — supporting data exploration, business analytics tasks and transactional applications in a single platform."
        breadcrumb={[{ label: 'Solutions' }, { label: 'SAP HANA' }]}
      />

      <section className="section pt-0 px-6">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <p className="section-label mb-2">Why SAP HANA</p>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
                Beyond the Traditional <span className="sap-text-full">Data Warehouse</span>
              </h2>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-6">
                Traditional data warehouses are expensive, bloated and offer only historical insights. SAP HANA operates on affordable commodity hardware with rapid data replication and integration capabilities, delivering near-real-time data access through in-memory storage — enabling predictive analytics for future planning.
              </p>
              <div className="space-y-3">
                {['Near-real-time data access via in-memory storage','Operates on affordable commodity hardware','Rapid data replication and integration','Enables predictive analytics for future planning','Unified OLTP and OLAP on one platform','Reduces reliance on expensive legacy data warehouses'].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={14} style={{ color: '#009ad9', marginTop: 2, flexShrink: 0 }} />
                    <span className="text-gray-600 text-[13.5px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Traditional DW', value: 'Hours', sub: 'Query time', dim: true },
                { label: 'SAP HANA', value: 'Seconds', sub: 'Query time', dim: false },
                { label: 'Traditional DW', value: 'Historical', sub: 'Insight type', dim: true },
                { label: 'SAP HANA', value: 'Predictive', sub: 'Insight type', dim: false },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl p-5 text-center" style={{ background: '#ffffff', border: `1px solid ${item.dim ? 'rgba(0,0,0,0.08)' : 'rgba(0,154,217,0.18)'}`, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                  <div className="text-2xl font-extrabold mb-1" style={{ letterSpacing: '-0.03em', color: item.dim ? '#374151' : undefined }}>
                    {item.dim ? <span>{item.value}</span> : <span className="sap-text-full">{item.value}</span>}
                  </div>
                  <div className="text-gray-500 text-[11px] mb-1">{item.sub}</div>
                  <div className="text-[11px] font-semibold" style={{ color: item.dim ? '#374151' : '#009ad9' }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="section-label mb-2">Use Cases</p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8" style={{ letterSpacing: '-0.02em' }}>
            Industry <span className="sap-text-full">Applications</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((u, i) => (
              <div key={i} className="card-hover rounded-2xl p-5">
                <h3 className="text-gray-900 font-bold text-[14px] mb-2">{u.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#f8faff' }}>
        <div className="container-lg text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>Ready for <span className="sap-text-full">real-time insights?</span></h2>
          <p className="text-gray-600 text-[14px] mb-8">We'll design and implement an SAP HANA solution tailored to your data and performance needs.</p>
          <Link to="/contact" className="btn-sap">Get SAP HANA Consultation <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  )
}
