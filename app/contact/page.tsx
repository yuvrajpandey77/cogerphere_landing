"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LandingHeader } from '@/components/layout/landing-header';
import { LandingFooter } from '@/components/layout/landing-footer';
import {
  Send, CheckCircle2, AlertCircle,
  Briefcase, Building2, FlaskConical, Handshake, Newspaper, Shield, HelpCircle
} from 'lucide-react';
import { OPENBENTT_URL, COBENTT_URL } from '@/lib/site-content';
import { cn } from '@/lib/utils';

const CONTACT_EMAIL = "cogerphereailabs@gmail.com";

const INQUIRY_TYPES = [
  { id: 'general', label: 'General inquiry', icon: HelpCircle, desc: 'Questions, feedback, or other' },
  { id: 'research', label: 'Research collaboration', icon: FlaskConical, desc: 'Academic or lab partnerships' },
  { id: 'partnerships', label: 'Partnerships', icon: Handshake, desc: 'Strategic or technical partnerships' },
  { id: 'press', label: 'Press & media', icon: Newspaper, desc: 'Interviews, coverage, or press kit' },
  { id: 'enterprise', label: 'Enterprise / Clox', icon: Building2, desc: 'Smart contracts, API, integrations' },
  { id: 'careers', label: 'Careers', icon: Briefcase, desc: 'Join our team' },
  { id: 'security', label: 'Security', icon: Shield, desc: 'Responsible disclosure, vulnerabilities' },
] as const;

const COMPANY_SIZES = [
  'Please select',
  '1–10',
  '11–50',
  '51–200',
  '201–500',
  '501–1000',
  '1000+',
];

type InquiryId = typeof INQUIRY_TYPES[number]['id'];

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState<InquiryId | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    companySize: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const selectInquiry = (id: InquiryId) => {
    setInquiryType(id);
    const type = INQUIRY_TYPES.find(t => t.id === id);
    if (type && !formData.subject) {
      setFormData(prev => ({ ...prev, subject: type.label }));
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult({ type: null, message: '' });

    try {
      const submitFormData = new FormData();
      submitFormData.append("access_key", "84a13767-626f-4def-a6e7-215bbdcc04c2");
      submitFormData.append("name", formData.name);
      submitFormData.append("email", formData.email);
      const subject = formData.subject || (inquiryType ? INQUIRY_TYPES.find(t => t.id === inquiryType)?.label : '') || '';
      submitFormData.append("subject", subject);
      submitFormData.append("message", [
        formData.message,
        inquiryType && `Inquiry type: ${INQUIRY_TYPES.find(t => t.id === inquiryType)?.label}`,
        formData.company && `Company: ${formData.company}`,
        formData.companySize && formData.companySize !== 'Please select' && `Company size: ${formData.companySize}`,
      ].filter(Boolean).join('\n\n'));
      submitFormData.append("inquiry_type", inquiryType || 'general');

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitFormData
      });

      const data = await response.json();

      if (data.success) {
        setResult({ type: 'success', message: 'Thank you! We\'ll respond within 2–3 business days.' });
        setFormData({ name: '', email: '', company: '', companySize: '', subject: '', message: '' });
        setInquiryType(null);
      } else {
        setResult({ type: 'error', message: 'Something went wrong. Please try again or email us directly.' });
      }
    } catch {
      setResult({ type: 'error', message: 'Failed to send. Please check your connection or email us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const showEnterpriseFields = inquiryType === 'enterprise';
  const showCompanyField = inquiryType === 'research' || inquiryType === 'press' || inquiryType === 'enterprise';

  // Success state
  if (result.type === 'success') {
    return (
      <div className="min-h-screen bg-stone-50 text-stone-950">
        <LandingHeader />
        <main className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32 text-center">
          <div className="contact-animate">
            <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="h-10 w-10 text-emerald-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-normal text-stone-950 mb-4">
              Message sent
            </h1>
            <p className="text-xl text-stone-600 mb-8">
              {result.message}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-teal-600 hover:bg-teal-700 rounded-xl">
                <Link href="/">Back to home</Link>
              </Button>
              <Button
                type="button"
                variant="outline"
                className="rounded-xl border-2 border-stone-300"
                onClick={() => setResult({ type: null, message: '' })}
              >
                Send another message
              </Button>
            </div>
          </div>
        </main>
        <LandingFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <LandingHeader />
      
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
        {/* Hero */}
        <div className="text-center mb-16 contact-animate contact-animate-delay-1">
          <h1 className="text-5xl md:text-6xl font-serif font-normal text-stone-950 mb-6">
            Get in touch
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Tell us what you&apos;re looking for and we&apos;ll route you to the right place.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Inquiry type + quick links */}
          <div className="lg:col-span-4 space-y-8">
            <div className="contact-animate contact-animate-delay-2">
              <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-4">
                What are you interested in?
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                {INQUIRY_TYPES.map(({ id, label, icon: Icon, desc }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => selectInquiry(id)}
                    className={cn(
                      "flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200",
                      inquiryType === id
                        ? "border-teal-500 bg-teal-50/50 shadow-sm"
                        : "border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                      inquiryType === id ? "bg-teal-100" : "bg-stone-100"
                    )}>
                      <Icon className={cn("h-5 w-5", inquiryType === id ? "text-teal-600" : "text-stone-600")} />
                    </div>
                    <div className="min-w-0">
                      <span className={cn("font-semibold block", inquiryType === id ? "text-teal-800" : "text-stone-950")}>
                        {label}
                      </span>
                      <span className="text-xs text-stone-500">{desc}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="contact-animate contact-animate-delay-3">
              <div className="bg-stone-900 text-white rounded-2xl p-6">
                <h3 className="font-semibold mb-2">Prefer email?</h3>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-teal-300 hover:text-teal-200 transition-colors break-all text-sm"
                >
                  {CONTACT_EMAIL}
                </a>
                <p className="text-stone-400 text-xs mt-3">
                  We typically respond within 2–3 business days.
                </p>
              </div>
            </div>

            <div className="contact-animate contact-animate-delay-4">
              <p className="text-sm text-stone-500">
                Looking for roles? <Link href="/careers" className="text-teal-600 font-medium hover:underline">View careers</Link>
                <br />
                Research workspace?{" "}
                <a href={OPENBENTT_URL} target="_blank" rel="noopener noreferrer" className="text-teal-600 font-medium hover:underline">
                  Get Openbentt
                </a>
                <br />
                Mobile AI chat?{" "}
                <a href={COBENTT_URL} target="_blank" rel="noopener noreferrer" className="text-teal-600 font-medium hover:underline">
                  Open Cobentt
                </a>
                <br />
                Need Clox? <Link href="https://cogy01.vercel.app/" className="text-teal-600 font-medium hover:underline">Try Clox</Link>
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-stone-200 shadow-sm contact-animate contact-animate-delay-5">
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-stone-950 mb-2">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-stone-50 border-2 border-stone-200 rounded-xl focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-stone-950 placeholder:text-stone-400"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-stone-950 mb-2">
                      Work email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-stone-50 border-2 border-stone-200 rounded-xl focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-stone-950 placeholder:text-stone-400"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                {showCompanyField && (
                  <div className="contact-animate">
                    <label htmlFor="company" className="block text-sm font-semibold text-stone-950 mb-2">
                      {inquiryType === 'enterprise' ? 'Company name' : inquiryType === 'research' ? 'Institution / organization' : 'Publication'}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-stone-50 border-2 border-stone-200 rounded-xl focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-stone-950 placeholder:text-stone-400"
                      placeholder={inquiryType === 'enterprise' ? 'Acme Inc.' : inquiryType === 'research' ? 'Stanford University' : 'TechCrunch'}
                    />
                  </div>
                )}

                {showEnterpriseFields && (
                  <div className="contact-animate">
                    <label htmlFor="companySize" className="block text-sm font-semibold text-stone-950 mb-2">
                      Company size
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-stone-50 border-2 border-stone-200 rounded-xl focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-stone-950"
                    >
                      {COMPANY_SIZES.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-stone-950 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-stone-50 border-2 border-stone-200 rounded-xl focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-stone-950 placeholder:text-stone-400"
                    placeholder="Brief summary of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-stone-950 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    maxLength={2000}
                    className="w-full px-4 py-3.5 bg-stone-50 border-2 border-stone-200 rounded-xl focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20 outline-none transition-all resize-none text-stone-950 placeholder:text-stone-400"
                    placeholder="Tell us more about your needs..."
                  />
                  <p className="text-xs text-stone-400 mt-1.5 text-right">
                    {formData.message.length}/2000
                  </p>
                </div>

                {result.type === 'error' && (
                  <div className="p-4 rounded-xl flex items-start gap-3 bg-red-50 border border-red-200">
                    <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-red-800">{result.message}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 text-white hover:bg-teal-700 font-semibold py-5 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Submit
                      <Send className="h-5 w-5" />
                    </span>
                  )}
                </Button>
              </form>
              <p className="mt-4 text-sm text-stone-500">
                For documentation and tutorials, visit <Link href="/docs" className="text-teal-600 font-medium hover:underline">docs</Link> or <Link href="/learn" className="text-teal-600 font-medium hover:underline">learn</Link>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
