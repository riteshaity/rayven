import { useState } from 'react'
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const offices = [
  {
    city: 'Edison, NJ', country: 'United States · Headquarters',
    address: '1 Ethel Road Suite 204B, Edison, NJ 08817',
    phone: '+1 (732) 379-9069',
  },
  {
    city: 'Hyderabad', country: 'India · Offshore Center',
    address: 'Plot No. 39, Jayabheri Silicon County, Nallagandla, Hyderabad – 500 019',
    phone: '+91 40 6677 4477',
  },
  {
    city: 'Vancouver', country: 'Canada',
    address: '885 W Georgia St, Vancouver, BC V6C 3E8',
    phone: '+1 (604) 757-2642',
  },
]

const topics = ['SAP Implementation','SuccessFactors','SAP GRC','FLEX Support','Application Development','Analytics & BI','IT Infrastructure','Staffing & Outsourcing','General Inquiry']

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', regarding: '', country: '', phone: '', mobile: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => { e.preventDefault(); setSent(true) }

  const inputCls = 'w-full rounded-xl px-4 py-2.5 text-[13.5px] text-gray-900 placeholder-gray-400 outline-none transition-all'
  const inputStyle = { background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.08)' }

  return (
    <div style={{ background: '#ffffff' }}>
      <PageHeader
        badge="Contact"
        title="Talk to"
        highlight="RAYVEN IT"
        subtitle="Reach out to discuss your SAP, QA, or enterprise IT needs. Our team responds within one business day."
        breadcrumb={[{ label: 'Contact' }]}
      />

      {/* Offices */}
      <section className="section pt-0 px-6">
        <div className="container-lg">
          <p className="section-label mb-2">Our Offices</p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8" style={{ letterSpacing: '-0.02em' }}>
            Three Locations, <span className="sap-text-full">One Team</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {offices.map((o, i) => (
              <div key={i} className="card-hover rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(0,154,217,0.1)', border: '1px solid rgba(0,154,217,0.2)' }}>
                  <MapPin size={16} style={{ color: '#009ad9' }} />
                </div>
                <div className="text-gray-900 font-bold text-[15px]">{o.city}</div>
                <div className="text-gray-400 text-[12px] mb-3">{o.country}</div>
                <p className="text-gray-600 text-[13px] leading-relaxed mb-3">{o.address}</p>
                <div className="flex items-center gap-1.5 text-[12.5px]" style={{ color: '#009ad9' }}>
                  <Phone size={11} />{o.phone}
                </div>
              </div>
            ))}
          </div>

          {/* Form + Sidebar */}
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <p className="section-label mb-2">Send a Message</p>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
                Get in <span className="sap-text-full">Touch</span>
              </h2>

              {sent ? (
                <div className="rounded-2xl p-10 text-center" style={{ background: 'rgba(0,127,196,0.04)', border: '1px solid rgba(0,112,196,0.10)' }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg,#009ad9,#006eb8)' }}>
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <h3 className="text-gray-900 font-bold text-xl mb-2">Message Sent</h3>
                  <p className="text-gray-600 text-[14px]">We'll get back to you within one business day.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-gray-500 text-[11.5px] font-medium block mb-1.5">Name *</label>
                      <input required name="name" value={form.name} onChange={handle} placeholder="Your full name" className={inputCls} style={inputStyle} />
                    </div>
                    <div>
                      <label className="text-gray-500 text-[11.5px] font-medium block mb-1.5">Company Name</label>
                      <input name="company" value={form.company} onChange={handle} placeholder="Your company" className={inputCls} style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-500 text-[11.5px] font-medium block mb-1.5">Regarding</label>
                    <select name="regarding" value={form.regarding} onChange={handle} className={inputCls}
                      style={{ ...inputStyle, color: form.regarding ? '#111827' : '#9ca3af' }}>
                      <option value="" style={{ background: '#ffffff' }}>Select a topic</option>
                      {topics.map(opt => <option key={opt} value={opt} style={{ background: '#ffffff' }}>{opt}</option>)}
                    </select>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-gray-500 text-[11.5px] font-medium block mb-1.5">Country</label>
                      <input name="country" value={form.country} onChange={handle} placeholder="Your country" className={inputCls} style={inputStyle} />
                    </div>
                    <div>
                      <label className="text-gray-500 text-[11.5px] font-medium block mb-1.5">Phone</label>
                      <input name="phone" value={form.phone} onChange={handle} placeholder="+1 (___) ___-____" className={inputCls} style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-500 text-[11.5px] font-medium block mb-1.5">Mobile</label>
                    <input name="mobile" value={form.mobile} onChange={handle} placeholder="Mobile / WhatsApp" className={inputCls} style={inputStyle} />
                  </div>
                  <div>
                    <label className="text-gray-500 text-[11.5px] font-medium block mb-1.5">Message *</label>
                    <textarea required name="message" value={form.message} onChange={handle} rows={5}
                      placeholder="Describe your project or requirement..."
                      className={inputCls} style={{ ...inputStyle, resize: 'none' }} />
                  </div>
                  <button type="submit" className="btn-sap w-full justify-center">
                    Send Message <ArrowRight size={15} />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <div className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <h3 className="text-gray-900 font-bold text-[15px] mb-5">Direct Contact</h3>
                <div className="space-y-4">
                  {[
                    { label: 'General Enquiries', email: 'info@rayvenit.solutions' },
                    { label: 'Careers / Resumes', email: 'resumes@rayvenit.solutions' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(0,154,217,0.1)' }}>
                        <Mail size={14} style={{ color: '#009ad9' }} />
                      </div>
                      <div>
                        <div className="text-gray-500 text-[11.5px] mb-0.5">{item.label}</div>
                        <a href={`mailto:${item.email}`} className="text-[13.5px] font-medium hover:underline" style={{ color: '#009ad9' }}>{item.email}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid rgba(0,112,196,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <h3 className="text-gray-900 font-bold text-[15px] mb-4">What to Expect</h3>
                {[
                  { label: 'Response Time', value: '≤ 1 business day' },
                  { label: 'Initial Call', value: '30-min discovery' },
                  { label: 'Proposal', value: 'Within 5 business days' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2.5"
                    style={{ borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                    <span className="text-gray-500 text-[13px]">{item.label}</span>
                    <span className="text-gray-900 text-[13px] font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl p-5"
                style={{ background: 'rgba(0,127,196,0.04)', border: '1px solid rgba(0,112,196,0.10)' }}>
                <p className="text-gray-700 text-[13px] leading-relaxed">
                  <span className="font-semibold text-gray-900">Minority Women Owned</span> — RAYVEN IT Solutions LLC is a certified Minority Women Owned Business in the state of New Jersey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
