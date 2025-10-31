import React, { useState } from 'react';
import { TrendingUp, Check, ArrowRight, Clock, Users, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LeadCapturePage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [dealVolume, setDealVolume] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSubmit = async () => {
    if (email && name && company && dealVolume) {
      try {
        const response = await fetch('/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            name,
            company,
            dealVolume
          })
        });

        if (response.ok) {
          setSubmitted(true);
        } else {
          console.error('Submission failed');
          alert('Something went wrong. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Something went wrong. Please try again.');
      }
    }
  };

  const steps = [
    { num: '1', title: 'Deal Arrives', desc: 'Via email, form, or API', icon: '📧' },
    { num: '2', title: 'Auto Extract', desc: 'AI pulls key data points', icon: '🤖' },
    { num: '3', title: 'Model Updates', desc: 'Google Sheet populates', icon: '📊' },
    { num: '4', title: 'Get Summary', desc: 'Decision-ready analysis', icon: '✅' }
  ];

  const productScreenshots = [
    {
      title: "Dashboard Overview",
      description: "Monitor all your automations and deal pipeline in one place",
      component: 'dashboard'
    },
    {
      title: "Deal Analysis Room",
      description: "Interactive deal analysis with AI-powered feedback loops",
      component: 'analysis'
    },
    {
      title: "Automated Workflows",
      description: "Set up triggers and let dealFLOW handle the rest",
      component: 'workflows'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % productScreenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + productScreenshots.length) % productScreenshots.length);
  };

  const renderScreenshot = () => {
    const current = productScreenshots[currentSlide];
    
    if (current.component === 'dashboard') {
      return (
        <div className="bg-slate-50 rounded-lg overflow-hidden">
          {/* Desktop/Tablet View */}
          <div className="hidden md:block">
            <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center">
                  <TrendingUp className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-900">deal<span className="font-light">FLOW</span></span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-600">
                <div className="px-2 py-1 bg-slate-100 rounded">Automations</div>
                <div className="px-2 py-1">Activity</div>
              </div>
            </div>
            
            <div className="p-4 bg-slate-50">
              <div className="grid grid-cols-4 gap-3 mb-4">
                {[
                  { label: 'Active', value: '12', color: 'text-green-600' },
                  { label: 'Runs Today', value: '47', color: 'text-blue-600' },
                  { label: 'Success Rate', value: '98.2%', color: 'text-slate-900' },
                  { label: 'Time Saved', value: '42h', color: 'text-purple-600' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-lg border border-slate-200 p-3">
                    <div className="text-xs text-slate-600 mb-1">{stat.label}</div>
                    <div className={`text-xl font-semibold ${stat.color}`}>{stat.value}</div>
                  </div>
                ))}
              </div>
              
              <div className="bg-white rounded-lg border border-slate-200">
                <div className="px-3 py-2 border-b border-slate-200 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-900">Your Automations</span>
                  <button className="text-xs bg-slate-800 text-white px-2 py-1 rounded">+ New</button>
                </div>
                
                <div className="divide-y divide-slate-200">
                  {[
                    { name: 'New Deal Email Analysis', status: 'active', icon: '✉️' },
                    { name: 'Weekly Portfolio Update', status: 'active', icon: '📅' },
                    { name: 'Acquisition Form to Model', status: 'paused', icon: '📊' }
                  ].map((auto, idx) => (
                    <div key={idx} className="px-3 py-2 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{auto.icon}</span>
                        <div>
                          <div className="text-xs font-medium text-slate-900">{auto.name}</div>
                          <div className="text-xs text-slate-500">Last run: 2 min ago</div>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        auto.status === 'active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {auto.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Simplified View */}
          <div className="md:hidden p-4 bg-slate-50 min-h-[250px] flex flex-col justify-center">
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Dashboard Overview</h3>
              <p className="text-sm text-slate-600">Track all automations in one place</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white rounded-lg border border-slate-200 p-3 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">12</div>
                <div className="text-xs text-slate-600">Active</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-3 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">47</div>
                <div className="text-xs text-slate-600">Runs Today</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-3 text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">98%</div>
                <div className="text-xs text-slate-600">Success</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-3 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">42h</div>
                <div className="text-xs text-slate-600">Saved</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    if (current.component === 'analysis') {
      return (
        <div className="bg-slate-50 rounded-lg overflow-hidden">
          {/* Desktop/Tablet View */}
          <div className="hidden md:block">
            <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center">
                  <TrendingUp className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-900">523 Main Street</span>
              </div>
              <div className="flex space-x-2">
                <button className="text-xs border border-slate-300 px-2 py-1 rounded">Export</button>
                <button className="text-xs bg-slate-800 text-white px-2 py-1 rounded">Approve</button>
              </div>
            </div>
            
            <div className="p-4 bg-slate-50">
              <div className="bg-white rounded-lg border border-slate-200 p-3 mb-3">
                <div className="grid grid-cols-5 gap-2 text-xs">
                  <div>
                    <div className="text-slate-600 mb-0.5">Type</div>
                    <div className="font-semibold text-slate-900">Multifamily</div>
                  </div>
                  <div>
                    <div className="text-slate-600 mb-0.5">Units</div>
                    <div className="font-semibold text-slate-900">84</div>
                  </div>
                  <div>
                    <div className="text-slate-600 mb-0.5">Price</div>
                    <div className="font-semibold text-slate-900">$12.5M</div>
                  </div>
                  <div>
                    <div className="text-slate-600 mb-0.5">Price/Unit</div>
                    <div className="font-semibold text-slate-900">$148K</div>
                  </div>
                  <div>
                    <div className="text-slate-600 mb-0.5">Location</div>
                    <div className="font-semibold text-slate-900">Austin, TX</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 mb-3 flex items-start space-x-2">
                <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-blue-900">Deal meets investment criteria</div>
                  <div className="text-xs text-blue-800">Levered IRR of 18.2% exceeds 15% hurdle rate</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Levered IRR', value: '18.2%', good: true },
                  { label: 'Equity Multiple', value: '2.1x', good: true },
                  { label: 'Cash-on-Cash', value: '7.4%', good: false },
                  { label: 'Exit Cap Rate', value: '5.2%', good: false }
                ].map((metric, idx) => (
                  <div key={idx} className="bg-white rounded-lg border border-slate-200 p-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-600">{metric.label}</span>
                      {metric.good ? (
                        <Check className="w-3 h-3 text-green-600" />
                      ) : (
                        <span className="text-amber-600 text-xs">⚠</span>
                      )}
                    </div>
                    <div className={`text-lg font-semibold ${
                      metric.good ? 'text-green-600' : 'text-amber-600'
                    }`}>
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Simplified View */}
          <div className="md:hidden p-4 bg-slate-50 min-h-[250px] flex flex-col justify-center">
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">Deal Analysis Room</h3>
              <p className="text-sm text-slate-600 mb-2">523 Main Street, Austin TX</p>
              <div className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                ✓ Meets Criteria
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-lg border border-slate-200 p-3">
                <div className="text-xs text-slate-600 mb-1">Levered IRR</div>
                <div className="text-xl font-bold text-green-600">18.2%</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-3">
                <div className="text-xs text-slate-600 mb-1">Multiple</div>
                <div className="text-xl font-bold text-green-600">2.1x</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-3">
                <div className="text-xs text-slate-600 mb-1">Cash/Cash</div>
                <div className="text-xl font-bold text-slate-900">7.4%</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-3">
                <div className="text-xs text-slate-600 mb-1">Exit Cap</div>
                <div className="text-xl font-bold text-amber-600">5.2%</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="bg-slate-50 rounded-lg overflow-hidden">
        {/* Desktop/Tablet View */}
        <div className="hidden md:block">
          <div className="bg-white border-b border-slate-200 px-4 py-3">
            <span className="text-sm font-semibold text-slate-900">Automation Builder</span>
          </div>
          
          <div className="p-4 bg-slate-50">
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">📧</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-slate-900">Trigger: Email Received</div>
                    <div className="text-xs text-slate-600">When email arrives at deals@company.com</div>
                  </div>
                </div>
                
                <div className="pl-4 border-l-2 border-slate-300 ml-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">🤖</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-slate-900">Extract Data</div>
                      <div className="text-xs text-slate-600">Pull key metrics from attachments</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">📊</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-slate-900">Update Spreadsheet</div>
                      <div className="text-xs text-slate-600">Populate Google Sheets model</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">✉️</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-slate-900">Send Summary</div>
                      <div className="text-xs text-slate-600">Email analysis to team</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-3 border-t border-slate-200">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Status</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Simplified View */}
        <div className="md:hidden p-4 bg-slate-50 min-h-[250px] flex flex-col justify-center">
          <div className="text-center mb-6">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Automated Workflows</h3>
            <p className="text-sm text-slate-600">Set up once, runs 24/7</p>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white rounded-lg border border-slate-200 p-3 flex items-center space-x-3">
              <span className="text-2xl">📧</span>
              <div className="flex-1">
                <div className="text-sm font-semibold text-slate-900">Email Trigger</div>
                <div className="text-xs text-slate-600">Deal arrives</div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-slate-200 p-3 flex items-center space-x-3">
              <span className="text-2xl">🤖</span>
              <div className="flex-1">
                <div className="text-sm font-semibold text-slate-900">AI Extract</div>
                <div className="text-xs text-slate-600">Pulls key data</div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-slate-200 p-3 flex items-center space-x-3">
              <span className="text-2xl">📊</span>
              <div className="flex-1">
                <div className="text-sm font-semibold text-slate-900">Model Updates</div>
                <div className="text-xs text-slate-600">Spreadsheet populates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-slate-900" />
            </div>
            <span className="text-2xl font-semibold text-white">
              deal<span className="font-light">FLOW</span>
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-8">
            <div className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 border border-blue-500/30">
              Coming Soon • Early Access
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 md:mb-6">
              Your AI Underwriting Analyst is Almost Here
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 md:mb-8 leading-relaxed">
              Stop spending $75K/year on entry-level analysts. dealFLOW automates your entire underwriting workflow from spreadsheet to decision in minutes, not days.
            </p>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div className="flex items-start space-x-2 md:space-x-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold mb-1 text-sm md:text-base">Instant Deal Analysis</div>
                  <div className="text-slate-400 text-xs md:text-sm">Email arrives → Model populates → Analysis complete in 2 minutes</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 md:space-x-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold mb-1 text-sm md:text-base">Works With Your Spreadsheets</div>
                  <div className="text-slate-400 text-xs md:text-sm">Integrates directly with your Google Sheets models - no rebuild needed</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 md:space-x-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold mb-1 text-sm md:text-base">Interactive Feedback Loop</div>
                  <div className="text-slate-400 text-xs md:text-sm">Share your market intel and watch the AI adjust assumptions automatically</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 md:p-6 hidden lg:block">
              <div className="grid grid-cols-3 gap-4 md:gap-6 text-center">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">90%</div>
                  <div className="text-xs md:text-sm text-slate-400">Cost Savings</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">10x</div>
                  <div className="text-xs md:text-sm text-slate-400">Faster</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-xs md:text-sm text-slate-400">Available</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:order-last">
            {!submitted ? (
              <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl p-5 md:p-8 sticky top-4">
                <div className="text-center mb-5 md:mb-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2">
                    Join the Waitlist
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-slate-600">
                    Be among the first to automate your deal flow. Early access members get:
                  </p>
                </div>

                <div className="space-y-2 mb-5 md:mb-6 bg-slate-50 rounded-lg p-3 md:p-4">
                  <div className="flex items-center space-x-2 text-xs md:text-sm">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">50% off first 3 months</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs md:text-sm">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">Priority onboarding & support</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs md:text-sm">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">Influence product roadmap</span>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1.5 md:mb-2">Work Email *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="[email protected]"
                      className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1.5 md:mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Smith"
                      className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1.5 md:mb-2">Company Name *</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your company"
                      className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1.5 md:mb-2">
                      How many deals do you analyze per month? *
                    </label>
                    <select
                      value={dealVolume}
                      onChange={(e) => setDealVolume(e.target.value)}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base bg-white"
                    >
                      <option value="">Select volume</option>
                      <option value="1-10">1-10 deals/month</option>
                      <option value="11-30">11-30 deals/month</option>
                      <option value="31-75">31-75 deals/month</option>
                      <option value="76+">76+ deals/month</option>
                    </select>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-slate-900 text-white py-3 md:py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2 text-sm md:text-base mt-2"
                  >
                    <span>Get Early Access</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-center text-slate-500 mt-2">
                    No credit card required. We'll never spam you.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  You're on the list!
                </h2>
                
                <p className="text-base md:text-lg text-slate-600 mb-6">
                  We'll email you at <span className="font-semibold text-slate-900 break-all">{email}</span> as soon as dealFLOW is ready.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-900 font-medium mb-2">
                    🎁 Your early access perks are reserved
                  </p>
                  <p className="text-sm text-blue-800">
                    50% off for 3 months + priority onboarding
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-slate-600">Want to move up the waitlist?</p>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                    <button className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                      Share on LinkedIn
                    </button>
                    <button className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                      Share on Twitter
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stop Losing Deals to Manual Underwriting
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
              Small RE funds can't compete with the speed of larger shops. Until now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Too Slow</h3>
              <p className="text-slate-400 text-sm">
                Manual analysis takes 2-5 days per deal. By the time you're done, someone else has the LOI signed.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Too Expensive</h3>
              <p className="text-slate-400 text-sm">
                Entry-level analysts cost $75K+ with benefits. Small shops can't afford dedicated underwriting staff.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Bottlenecked</h3>
              <p className="text-slate-400 text-sm">
                Your analysts are your constraint. Can't scale deal flow without hiring more people.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/30 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              From Email to Decision in Minutes
            </h2>
            <p className="text-lg md:text-xl text-slate-400">
              Set it up once, then watch it work 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl mb-4">{step.icon}</div>
                  <div className="text-sm font-semibold text-slate-500 mb-2">STEP {step.num}</div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-slate-600 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-16 lg:py-20">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 px-4">
              See dealFLOW in Action
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-400 px-4">
              Preview the platform that will transform your underwriting
            </p>
          </div>

          <div className="relative px-2 md:px-0">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl p-3 md:p-6 lg:p-8 overflow-hidden">
              <div className="mb-4 md:mb-6">
                <div className="bg-slate-900 rounded-lg p-1.5 md:p-2 border border-slate-700">
                  <div className="bg-slate-800 rounded overflow-hidden overflow-y-auto" style={{ minHeight: '250px', maxHeight: '400px' }}>
                    {renderScreenshot()}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4 md:mb-6">
                <button
                  onClick={prevSlide}
                  className="p-2 md:p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors touch-manipulation"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                </button>

                <div className="flex space-x-1.5 md:space-x-2">
                  {productScreenshots.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all touch-manipulation ${
                        idx === currentSlide 
                          ? 'bg-white w-6 md:w-8' 
                          : 'bg-slate-600 hover:bg-slate-500 w-2'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="p-2 md:p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors touch-manipulation"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3 lg:gap-4">
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 md:p-4">
                  <div className="text-green-400 text-xs md:text-sm font-semibold mb-1">✓ Real-time Updates</div>
                  <div className="text-slate-400 text-xs">Spreadsheets sync automatically</div>
                </div>
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 md:p-4">
                  <div className="text-green-400 text-xs md:text-sm font-semibold mb-1">✓ AI Feedback</div>
                  <div className="text-slate-400 text-xs">Adjusts based on your input</div>
                </div>
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 md:p-4">
                  <div className="text-green-400 text-xs md:text-sm font-semibold mb-1">✓ No Rebuild Needed</div>
                  <div className="text-slate-400 text-xs">Works with existing models</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Ready to Move Faster Than Your Competition?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-8">
            Join 200+ real estate professionals waiting for launch
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 bg-white text-slate-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-slate-100 transition-colors"
          >
            <span>Join the Waitlist</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      <footer className="border-t border-slate-700 py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-slate-900" />
              </div>
              <span className="text-base md:text-lg font-semibold text-white">
                deal<span className="font-light">FLOW</span>
              </span>
            </div>
            <div className="flex items-center space-x-4 md:space-x-6 text-xs md:text-sm text-slate-400">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="mailto:[email protected]" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
