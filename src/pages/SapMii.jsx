import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const benefits = [
  'Increased productivity through shop floor–ERP system integration',
  'Real-time ERP data access for operators on the shop floor',
  'Process monitoring and measurement capabilities',
  'Better control and innovation in critical processes',
  'Reduced costs and operational complexity',
  'IIoT sensor data capture and analytics',
]

export default function SapMii() {
  return (
    <div style={{ background: '#ffffff' }}>
      <PageHeader
        badge="Solutions"
        title="SAP MII"
        highlight="Manufacturing Intelligence"
        subtitle="SAP MII delivers computer-integrated manufacturing, IIoT and machine-to-machine (M2M) capabilities, real-time manufacturing intelligence, and more."
        breadcrumb={[{ label: 'Solutions' }, { label: 'SAP MII' }]}
      />

      <section className="section pt-0 px-6">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-2">Manufacturing Intelligence</p>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-5" style={{ letterSpacing: '-0.02em' }}>
                Smart <span className="sap-text-full">Manufacturing</span>
              </h2>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-5">
                SAP MII enables manufacturers to connect shop floor operations with business systems. The solution provides real-time data access and actionable insights for operators, allowing companies to monitor processes and drive efficiency improvements.
              </p>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-8">
                With SAP MII, manufacturers gain computer-integrated manufacturing (CIM), industrial IoT (IIoT) and machine-to-machine (M2M) connectivity — bridging the gap between the shop floor and the enterprise.
              </p>
              <p className="section-label mb-4">Core Benefits</p>
              <div className="space-y-2.5">
                {benefits.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={14} style={{ color: '#009ad9', marginTop: 2, flexShrink: 0 }} />
                    <span className="text-gray-600 text-[13.5px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <h3 className="text-gray-900 font-bold text-[15px] mb-5">Manufacturing Connectivity Stack</h3>
                {[
                  { layer: 'ERP Layer', items: ['SAP ERP','Business Logic','Financial Data'], bright: false },
                  { layer: 'SAP MII Middleware', items: ['Data Integration','Business Rules','Dashboards'], bright: true },
                  { layer: 'Shop Floor', items: ['SCADA / PLC','Sensors / IIoT','Operators'], bright: false },
                ].map((row, i) => (
                  <div key={i}>
                    <div className="text-[10px] font-700 uppercase tracking-widest mb-2 mt-3 first:mt-0" style={{ color: '#4b5563', fontWeight: 700 }}>{row.layer}</div>
                    <div className="flex gap-2">
                      {row.items.map((item, j) => (
                        <div key={j} className="flex-1 rounded-xl p-2.5 text-center text-[12px] font-medium"
                          style={{ background: row.bright ? 'rgba(0,154,217,0.12)' : 'rgba(0,0,0,0.04)', border: `1px solid ${row.bright ? 'rgba(0,154,217,0.28)' : 'rgba(0,0,0,0.08)'}`, color: row.bright ? '#009ad9' : '#4b5563' }}>
                          {item}
                        </div>
                      ))}
                    </div>
                    {i < 2 && <div className="flex justify-center my-2"><div style={{ width: 1, height: 20, background: 'rgba(0,154,217,0.25)' }} /></div>}
                  </div>
                ))}
              </div>

              <div className="rounded-2xl p-6" style={{ background: 'rgba(0,127,196,0.04)', border: '1px solid rgba(0,112,196,0.10)' }}>
                <p className="text-gray-700 text-[14px] leading-relaxed">
                  SAP MII bridges the gap between the shop floor and enterprise systems — giving operators real-time ERP data access while feeding production performance data back into business planning systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#f8faff' }}>
        <div className="container-lg text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>Unlock your <span className="sap-text-full">shop floor potential</span></h2>
          <p className="text-gray-600 text-[14px] mb-8">Connect your manufacturing operations with SAP MII and gain real-time visibility.</p>
          <Link to="/contact" className="btn-sap">Get a Manufacturing Demo <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  )
}
