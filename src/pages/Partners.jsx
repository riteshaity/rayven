import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const testimonials = [
  { quote: 'RAYVEN IT delivered a cost-effective solution to meet our IT needs. Their expertise in advanced tools and implementation speed exceeded our expectations.', client: 'Operations Director', company: 'Manufacturing Company, NJ', service: 'SAP Implementation', color: 'sap' },
  { quote: 'Professional quality and unmatched responsiveness. The team\'s knowledge of SAP modules is exceptional — they handled complexity we thought would take months in weeks.', client: 'IT Director', company: 'University, NC', service: 'Analytics & Data Services', color: 'indigo' },
  { quote: 'The FLEX support model completely changed how we manage SAP. We pay for what we use, and the response times are outstanding.', client: 'CFO', company: 'Chemical Company, Chicago, IL', service: 'FLEX Support', color: 'cyan' },
]

const sectors = ['Manufacturing','Chemical Industry','Higher Education','Non-Profits','Startups','Finance','Healthcare','Telecommunications','Retail','Aerospace']
const regions  = ['United States','Canada','United Kingdom','Continental Europe','South America','Australia','Middle East']

export default function Partners() {
  return (
    <div style={{ background: '#ffffff' }}>
      <PageHeader
        badge="About RAYVEN IT"
        title="Clients &"
        highlight="Partners"
        subtitle='"The biggest pride of RAYVEN IT is our clients and our driving force is our partners."'
        breadcrumb={[{ label: 'About' }, { label: 'Clients & Partners' }]}
      />

      {/* Partners */}
      <section className="section pt-0 px-6">
        <div className="container-lg">
          <p className="section-label mb-2">Technology Partners</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10" style={{ letterSpacing: '-0.02em' }}>
            Backed by <span className="sap-text-full">Global Leaders</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { name: 'SAP', desc: 'Official SAP Partner with certified implementation and reseller capabilities across the full SAP Business Suite.' },
              { name: 'Wipro', desc: 'Strategic alliance enabling extended delivery capacity and complementary technology solutions.' },
              { name: 'ltelligence', desc: 'Partner collaboration for specialized SAP services and industry-specific solutions.' },
            ].map((p, i) => (
              <div key={i} className="card-hover rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(0,154,217,0.08)', border: '1px solid rgba(0,154,217,0.18)' }}>
                  <span className="text-xl font-extrabold sap-text-full">{p.name[0]}</span>
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-3">{p.name}</h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <p className="section-label mb-2">Client Testimonials</p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8" style={{ letterSpacing: '-0.02em' }}>
            What Our Clients <span className="sap-text-full">Say</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {testimonials.map((t, i) => {
              const grad = { sap: 'linear-gradient(135deg,#009ad9,#006eb8)', indigo: 'linear-gradient(135deg,#6366f1,#8b5cf6)', cyan: 'linear-gradient(135deg,#06b6d4,#0891b2)' }[t.color]
              return (
                <div key={i} className="card rounded-2xl p-6 flex flex-col">
                  <div className="flex mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={13} style={{ color: '#f59e0b', fill: '#f59e0b' }} />)}</div>
                  <p className="text-gray-700 text-[13.5px] leading-relaxed italic flex-1 mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[12px] font-bold shrink-0" style={{ background: grad }}>{t.client[0]}</div>
                    <div>
                      <div className="text-gray-900 text-[13px] font-semibold">{t.client}</div>
                      <div className="text-gray-400 text-[11px]">{t.company}</div>
                      <div className="text-[11px] font-medium" style={{ color: '#009ad9' }}>{t.service}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Sectors + Regions */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="section-label mb-5">Industries Served</p>
              <div className="flex flex-wrap gap-2">
                {sectors.map((s, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg text-gray-600 text-[13px] font-medium"
                    style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.08)' }}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="section-label mb-5">Geographic Reach</p>
              <div className="space-y-2">
                {regions.map((r, i) => (
                  <div key={i} className="flex items-center gap-3 py-2" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#009ad9' }} />
                    <span className="text-gray-600 text-[13.5px]">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#f8faff' }}>
        <div className="container-lg text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>Become our <span className="sap-text-full">next success story</span></h2>
          <p className="text-gray-600 text-[14px] mb-8">Join the growing list of organizations that trust RAYVEN IT to deliver results.</p>
          <Link to="/contact" className="btn-sap">Let's Work Together <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  )
}
