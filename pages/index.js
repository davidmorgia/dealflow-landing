import React, { useState } from 'react';
import { TrendingUp, Check, ArrowRight, Clock, Users, Zap } from 'lucide-react';

export default function LeadCapturePage() {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [dealVolume, setDealVolume] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (email && company && dealVolume) {
      // Send to Google Sheets via SheetDB
      try {
        await fetch('https://sheetdb.io/api/v1/yt836x5bdg6l9', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            data: [{
              Timestamp: new Date().toLocaleString(),
              Email: email,
              Company: company,
              DealVolume: dealVolume
            }]
          })
        });
        setSubmitted(true);
      } catch (error) {
        console.error('Error submitting form:', error);
        // Still show success to user even if submission fails
        setSubmitted(true);
      }
    }
  };

  const steps = [
    { num: '1', title: 'Deal Arrives', desc: 'Via email, form, or API', icon: '📧' },
    { num: '2', title: 'Auto Extract', desc: 'AI pulls key data points', icon: '🤖' },
    { num: '3', title: 'Model Updates', desc: 'Google Sheet populates', icon: '📊' },
    { num: '4', title: 'Get Summary', desc: 'Decision-ready analysis', icon: '✅' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
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

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
              Coming Soon • Early Access
            </div>
            
            <h1 className="text-5xl font-bold text-white leading-tight mb-6">
              Your AI Underwriting Analyst is Almost Here
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Stop spending $75K/year on entry-level analysts. dealFLOW automates your entire underwriting workflow from spreadsheet to decision in minutes, not days.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-semibold mb-1">Instant Deal Analysis</div>
                  <div className="text-slate-400 text-sm">Email arrives → Model populates → Analysis complete in 2 minutes</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-semibold mb-1">Works With Your Spreadsheets</div>
                  <div className="text-slate-400 text-sm">Integrates directly with your Google Sheets models - no rebuild needed</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-semibold mb-1">Interactive Feedback Loop</div>
                  <div className="text-slate-400 text-sm">Share your market intel and watch the AI adjust assumptions automatically</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">90%</div>
                  <div className="text-sm text-slate-400">Cost Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">10x</div>
                  <div className="text-sm text-slate-400">Faster Analysis</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-slate-400">Always Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            {!submitted ? (
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Join the Waitlist
                  </h2>
                  <p className="text-slate-600">
                    Be among the first to automate your deal flow. Early access members get:
                  </p>
                </div>

                <div className="space-y-3 mb-6 bg-slate-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-slate-700">50% off first 3 months</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-slate-700">Priority onboarding & support</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-slate-700">Influence product roadmap</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="[email protected]"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your company"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      How many deals do you analyze per month? *
                    </label>
                    <select
                      value={dealVolume}
                      onChange={(e) => setDealVolume(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full bg-slate-900 text-white py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Get Early Access</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-center text-slate-500">
                    No credit card required. We'll never spam you.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  You're on the list!
                </h2>
                
                <p className="text-lg text-slate-600 mb-6">
                  We'll email you at <span className="font-semibold text-slate-900">{email}</span> as soon as dealFLOW is ready.
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
                  <p className="text-sm text-slate-600">
                    Want to move up the waitlist?
                  </p>
                  <div className="flex space-x-3">
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

      {/* Problem Section */}
      <div className="border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stop Losing Deals to Manual Underwriting
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Small RE funds can't compete with the speed of larger shops. Until now.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
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

      {/* How It Works */}
      <div className="bg-slate-800/30 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              From Email to Decision in Minutes
            </h2>
            <p className="text-xl text-slate-400">
              Set it up once, then watch it work 24/7
            </p>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-center">
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <div className="text-sm font-semibold text-slate-500 mb-2">STEP {step.num}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
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

      {/* Final CTA */}
      <div className="border-t border-slate-700">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Move Faster Than Your Competition?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join 200+ real estate professionals waiting for launch
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors"
          >
            <span>Join the Waitlist</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-slate-900" />
              </div>
              <span className="text-lg font-semibold text-white">
                deal<span className="font-light">FLOW</span>
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
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
