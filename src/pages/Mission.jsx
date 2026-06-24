import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const values = [
  { title: 'Excellence & Innovation', body: 'Team RAYVEN is single-minded about achieving excellence. In our quest for excellence, we push beyond the boundaries of conventional thinking. Our think-out-of-the-box culture helps us in coming up with fresh ideas that have the ability to inspire.' },
  { title: 'Customer Focus', body: 'We are a customer-centered organization. We value our customers and our relationship with them. We put our customer first in everything we do.' },
  { title: 'People Orientation', body: 'RAYVEN IT believes in \'RAYVENians\' — just as \'RAYVENians\' believe in RAYVEN IT. We will accord respect and dignity to every employee. We will aim to attract, develop and retain the best talent, and create an enabling environment where every committed and capable member of the organization has ample opportunities for growth.' },
  { title: 'Team Work', body: 'We treat one another with respect — creating value by working together. We believe that every problem has an innovative solution.' },
  { title: 'Integrity', body: 'We treat our customers, team members and suppliers in a fair and honest manner as we would want to be treated.' },
  { title: 'Agility', body: 'We move quickly, embracing change and seizing opportunities to improve the quality of delivery. We\'re passionate about learning — that\'s how we keep our finger on the pulse.' },
  { title: 'Innovation & Creativity', body: 'We thrive on innovation and originality and encourage fresh ideas. We believe in open communication, where opinions are respected and knowledge is shared.' },
  { title: 'Social Responsibility', body: 'We shall conduct ourselves in a socially responsible manner. We will bear in mind that decisions that are bad for the society cannot be good for business. We will add value to the social environment and proactively embrace our responsibilities as a good corporate citizen in every country we operate.' },
]

const qualityParams = [
  'Improvement of process',
  'High team spirit',
  'Smart working culture rather than over working',
  'HR initiatives in improving employees\' overall quality of life',
  'Cost control measures for profit sustainability',
  'Complying with work, health, safety and professional norms',
]

const offices = [
  { city: 'Edison, NJ', tag: 'USA · Headquarters', addr: '345 Plainfield Ave, Suite #303, Edison, NJ 08817' },
  { city: 'Hyderabad', tag: 'India · Offshore Center', addr: '704 Manjeera Majestic Commercial, JNTU-HITECH City Road, Hyderabad - 500085' },
  { city: 'Vancouver, BC', tag: 'Canada', addr: '2416 Main St., Suite 398, Vancouver, BC V5T 3E2' },
]

export default function Mission() {
  return (
    <div style={{ background: '#ffffff' }}>
      <PageHeader
        badge="About RAYVEN IT"
        title="Our Mission"
        highlight="& Values"
        subtitle="Our Processes, techniques, people, and attitude strive to internalize our clients."
        breadcrumb={[{ label: 'About' }, { label: 'Mission' }]}
      />

      {/* About Us */}
      <section className="section pt-0 px-6">
        <div className="container-lg">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <p className="section-label">About Us</p>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
                Who We <span className="sap-text-full">Are</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-[14.5px] leading-relaxed">
                <p>RAYVEN IT Consulting LLC is a New Jersey based company dedicated to provide the best SAP Solutions and Consulting Services. Team RAYVEN is single-minded about achieving excellence. In our quest for excellence, we push beyond the boundaries of conventional thinking. Our think-out-of-the box culture helps us in coming up with fresh ideas that have the ability to inspire.</p>
                <p>At RAYVEN IT we are professional with impeccable pedigree and vast experience in implementing SAP projects and managing off-shore delivery services, who have led delivery teams at multi-national corporations and have an impressive record of delivering services with a strong value proposition.</p>
                <p>RAYVEN IT approaches problem solving for its customers by taking a multi-dimensional approach when recommending solutions. By combining the business requirements with accurate technology mappings, forges an appropriate solution set to complex business needs. We collaborate with our clients to help them achieve high performance.</p>
                <p>With RAYVEN IT's partnership, many companies have successfully changed their business approach and have utilized ERP systems to provide broad backbone support and have adopted innovative strategies to meet the needs of the Internet.</p>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {/* Mission card */}
              <div className="rounded-2xl p-6" style={{ background: 'rgba(0,127,196,0.04)', border: '1px solid rgba(0,112,196,0.10)' }}>
                <p className="section-label mb-3">Our Mission</p>
                <p className="text-gray-700 text-[14px] leading-relaxed italic">
                  "To deliver the right business solutions that integrate People, Process and emerging Technology to help our clients to achieve the business benefits of a collaborative enterprise at very affordable prices."
                </p>
              </div>
              {/* Vision card */}
              <div className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <p className="text-[10px] font-800 uppercase tracking-[0.15em] mb-3" style={{ color: '#818cf8', fontWeight: 800 }}>Our Vision</p>
                <p className="text-gray-700 text-[14px] leading-relaxed italic">
                  "To be the competent and complete value added technology partner to our clients and be the admired Global software solutions & services provider in Information Technology space in our chosen markets."
                </p>
              </div>
              {/* Offices */}
              <div className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <p className="section-label mb-4">Global Presence</p>
                {offices.map((o, i) => (
                  <div key={i} className="mb-4 last:mb-0 pb-4 last:pb-0" style={{ borderBottom: i < offices.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                    <div className="text-gray-900 font-semibold text-[13px]">{o.city}</div>
                    <div className="text-[10px] font-700 uppercase tracking-wider mb-1" style={{ color: '#009ad9', fontWeight: 700 }}>{o.tag}</div>
                    <div className="text-gray-500 text-[12px]">{o.addr}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="section-sm px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#f8faff' }}>
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Quality Policy</p>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-5" style={{ letterSpacing: '-0.02em' }}>
                Delivering <span className="sap-text-full">Excellence</span>
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed italic mb-6">
                "Deliver innovative software solutions and services, on time with quality, and as per customer expectations."
              </p>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-5">
                RAYVEN IT resources have attained vast experience in providing software services and solutions to its clients across the globe. We strive to serve our clients better on every project. Customer Delight is our true achievement — we achieve this through superior quality projects by imbibing these parameters:
              </p>
            </div>
            <div className="space-y-2.5">
              {qualityParams.map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{ background: 'rgba(0,154,217,0.05)', border: '1px solid rgba(0,154,217,0.10)' }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold text-white" style={{ background: 'linear-gradient(135deg,#009ad9,#006eb8)' }}>{i + 1}</div>
                  <span className="text-gray-700 text-[13.5px]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="container-lg">
          <p className="section-label mb-2">Our Values</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12" style={{ letterSpacing: '-0.02em' }}>
            What We <span className="sap-text-full">Stand For</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <div key={i} className="card-hover rounded-2xl p-6">
                <div className="text-gray-900 font-bold text-[15px] mb-2">{v.title}</div>
                <p className="text-gray-600 text-[13.5px] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#f8faff' }}>
        <div className="container-lg text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>Join the RAYVEN IT team</h2>
          <p className="text-gray-600 text-[14px] mb-8">We're always looking for talented professionals who share our values.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/careers" className="btn-sap">View Open Positions <ArrowRight size={15} /></Link>
            <Link to="/contact" className="btn-outline-sap">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
