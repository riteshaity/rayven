import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const highlights = [
  { title: 'Pay per Actual Use', body: 'Pricing reflects your actual business demands — minimal base cost with consumption-based charges. No wasted budget on idle capacity.' },
  { title: 'Up & Running Almost Immediately', body: 'Rapid onboarding means your support coverage is active almost immediately — no lengthy procurement or ramp-up cycles.' },
  { title: 'Flex Pricing Model', body: 'The FLEX pricing model reflects business demands with a bare minimum base cost. High quality resource pool available on demand.' },
  { title: 'High Quality Resource Pool', body: 'Experienced offshore resources provide seamless support and development with quick turnaround on support tickets.' },
  { title: '24/7 Coverage', body: 'Primary US team plus offshore resources in Hyderabad provide seamless round-the-clock support for critical SAP systems.' },
  { title: 'Periodic Health Assessments', body: 'Proactive system health checks and assessments catch issues before they become incidents — keeping your SAP environment optimized.' },
]

export default function Flex() {
  return (
    <div style={{ background: '#ffffff' }}>
      <PageHeader
        badge="FLEX Support"
        title="FLEX Support:"
        highlight="Pay Per Actual Use"
        subtitle="RAYVEN IT's innovative cost-effective seasoned model — up and running almost immediately with bare minimum base cost and flex pricing that reflects your business demands."
        breadcrumb={[{ label: 'FLEX Support' }]}
      />

      {/* Stats */}
      <section className="section-sm pt-0 px-6">
        <div className="container-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '24/7', label: 'Support Coverage' },
              { value: '<4hr', label: 'Average Response' },
              { value: '99%', label: 'Resolution Rate' },
              { value: '40%', label: 'Cost vs Retainer' },
            ].map((s, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="text-3xl font-extrabold sap-text-full mb-1" style={{ letterSpacing: '-0.03em' }}>{s.value}</div>
                <div className="text-gray-600 text-[13px] font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section px-6 bg-[#f8faff]" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container-lg">
          <p className="section-label mb-2">Key Advantages</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10" style={{ letterSpacing: '-0.02em' }}>
            Everything You Need, <span className="sap-text-full">Nothing You Don't</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((h, i) => (
              <div key={i} className="card-hover rounded-2xl p-6">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(0,154,217,0.10)' }}>
                  <span className="text-[13px] font-black" style={{ color: '#009ad9' }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-gray-900 font-bold text-[15px] mb-2">{h.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-2">How It Works</p>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-5" style={{ letterSpacing: '-0.02em' }}>Simple, <span className="sap-text-full">Transparent Pricing</span></h2>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-6">The FLEX model eliminates inefficiency of traditional retainer agreements. Establish a baseline, consume hours as needed, pay only for actual work performed.</p>
              <div className="space-y-3">
                {['Set a small monthly minimum for baseline availability','Submit tickets via email, portal or phone','Get matched with the right consultant for each issue','Receive detailed time logs and resolution reports','Scale up or down month-to-month as needed'].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(0,127,196,0.12)' }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#009ad9' }} />
                    </div>
                    <span className="text-gray-600 text-[13.5px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <h3 className="text-gray-900 font-bold text-[16px] mb-6">FLEX vs Traditional Retainer</h3>
              {[
                { label: 'Cost', flex: 'Pay per actual use', trad: 'Fixed monthly fee' },
                { label: 'Start Time', flex: 'Almost immediately', trad: 'Weeks to months' },
                { label: 'Scalability', flex: 'Month-to-month', trad: 'Contract-bound' },
                { label: 'Coverage', flex: '24/7 US + Offshore', trad: 'Business hours' },
                { label: 'Transparency', flex: 'Detailed time logs', trad: 'Bundled billing' },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 gap-3 mb-3 text-[12.5px]">
                  <span className="text-gray-500 font-medium self-center">{row.label}</span>
                  <span className="text-center rounded-lg px-2 py-1.5 font-semibold" style={{ background: 'rgba(0,154,217,0.10)', color: '#00b1eb' }}>{row.flex}</span>
                  <span className="text-center rounded-lg px-2 py-1.5 text-gray-500" style={{ background: 'rgba(0,0,0,0.02)' }}>{row.trad}</span>
                </div>
              ))}
              <div className="grid grid-cols-3 gap-3 mt-1 text-[10px] font-bold uppercase tracking-wider">
                <span /><span className="text-center" style={{ color: '#009ad9' }}>FLEX</span><span className="text-center text-gray-400">Traditional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#f8faff' }}>
        <div className="container-lg text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>Ready for <span className="sap-text-full">smarter support?</span></h2>
          <p className="text-gray-600 text-[14px] mb-8">Get FLEX support configured for your SAP environment within days.</p>
          <Link to="/contact" className="btn-sap">Get FLEX Pricing <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  )
}
