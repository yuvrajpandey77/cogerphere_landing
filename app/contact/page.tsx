"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LandingHeader } from '@/components/layout/landing-header';
import { LandingFooter } from '@/components/layout/landing-footer';
import { Send, CheckCircle2, AlertCircle, Mail, MessageSquare, User, FileText } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
      submitFormData.append("subject", formData.subject);
      submitFormData.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitFormData
      });

      const data = await response.json();

      if (data.success) {
        setResult({ type: 'success', message: 'Thank you for your message! We\'ll get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setResult({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setResult({ type: 'error', message: 'Failed to send message. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
      <LandingHeader />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100">
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-3">
                    <User className="h-4 w-4" />
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-black focus:bg-white transition-all duration-200 outline-none text-gray-900 placeholder:text-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-3">
                    <Mail className="h-4 w-4" />
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-black focus:bg-white transition-all duration-200 outline-none text-gray-900 placeholder:text-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-3">
                    <FileText className="h-4 w-4" />
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-black focus:bg-white transition-all duration-200 outline-none text-gray-900 placeholder:text-gray-400"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-3">
                    <MessageSquare className="h-4 w-4" />
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-black focus:bg-white transition-all duration-200 outline-none resize-none text-gray-900 placeholder:text-gray-400"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                </div>

                {/* Result Message */}
                {result.message && (
                  <div className={`p-4 rounded-xl flex items-start gap-3 ${
                    result.type === 'success' 
                      ? 'bg-emerald-50 border border-emerald-200' 
                      : 'bg-red-50 border border-red-200'
                  }`}>
                    {result.type === 'success' ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    )}
                    <p className={`text-sm font-medium ${
                      result.type === 'success' ? 'text-emerald-800' : 'text-red-800'
                    }`}>
                      {result.message}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-black to-gray-800 text-white hover:from-gray-800 hover:to-black font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending your message...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <LandingFooter />
    </div>
  );
}
