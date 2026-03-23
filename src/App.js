import { useEffect } from 'react';
import { render as renderKatex } from 'katex';
import './index.css';

function App() {
  useEffect(() => {
    const renderMath = () => {
      document.querySelectorAll('.katex-render').forEach((el) => {
        const latex = el.getAttribute('data-latex');
        if (latex) {
          try {
            renderKatex(latex, el, {
              throwOnError: false,
              displayMode: true,
            });
          } catch (e) {
            console.error('Failed to render math:', e);
          }
        }
      });
    };

    renderMath();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              PillowDash
            </h1>
            <span className="text-sm text-gray-500">Portfolio & Proofs</span>
  </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Automation Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Workflows & Automation</h2>
          <p className="text-gray-600 mb-6">Building scalable automation solutions</p>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Automation Anywhere Bot</h3>
                <p className="text-gray-600 leading-relaxed">
                  Developing scalable solutions using the <strong>Automation Anywhere Community Edition</strong>. 
                  This workflow demonstrates process logic for data handling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculus Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Calculus: ε-δ Proofs</h2>
          <p className="text-gray-600 mb-6">Rigorous mathematical proofs using the formal definition of limits</p>
          
          <div className="space-y-6">
            {/* Proof 1: Limit of 1/x³ at x=2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    ∫
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Limit of 1/x³ at x=2</h3>
                  <div className="katex-render text-center py-3" data-latex="\lim_{x\to 2} \frac{1}{x^3} = \frac{1}{8}"></div>
                  <p className="text-gray-600 leading-relaxed">
                    Rigorous proof using the formal definition of a limit. We analyze the behavior as x approaches the constant a.
                  </p>
                </div>
              </div>
            </div>

            {/* Proof 2: General Limit of 1/x */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    ∑
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">General Limit of 1/x</h3>
                  <div className="katex-render text-center py-3" data-latex="\lim_{x \to a} \frac{1}{x} = \frac{1}{a}"></div>
                  <p className="text-gray-600 leading-relaxed">
                    Exploration of the ε-δ relationship for rational functions.
                  </p>
                  <a 
                    href="https://math.stackexchange.com/questions/1872265/epsilon-delta-proof-lim-limits-x-to-a-frac1x-frac1a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 underline decoration-2 hover:decoration-4 transition-all"
                  >
                    View Detailed Solution
                    <svg className="w-4 h-4 ml-1 inline" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18.965 10.001c-.232-2.072-1.48-3.918-3.414-5.096 1.934 1.178 3.182 3.024 3.414 5.096zm-3.653 1.904c-1.178-1.934-3.024-3.182-5.096-3.414 1.178 1.934 3.024 3.182 5.096 3.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Proof 3: Rational Function */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    ∑
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Rational Function Proof</h3>
                  <div className="katex-render text-center py-3" data-latex="\lim_{x\rightarrow -2} \frac{x-1}{x+1}=3"></div>
                  <p className="text-gray-600 leading-relaxed">
                    Application of the triangle inequality and bounding techniques for denominators near a point.
                  </p>
                  <a 
                    href="https://math.stackexchange.com/questions/1187971/using-epsilon-delta-definition-to-prove-that-lim-x-to-2-fracx-1x1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-rose-600 hover:text-rose-700 underline decoration-2 hover:decoration-4 transition-all"
                  >
                    Discussion Thread
                    <svg className="w-4 h-4 ml-1 inline" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18.965 10.001c-.232-2.072-1.48-3.918-3.414-5.096 1.934 1.178 3.182 3.024 3.414 5.096zm-3.653 1.904c-1.178-1.934-3.024-3.182-5.096-3.414 1.178 1.934 3.024 3.182 5.096 3.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Proof 4: Unit Case */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Unit Case</h3>
                  <div className="katex-render text-center py-3" data-latex="\lim_{x \to 1} \frac{1}{x} = 1"></div>
                  <p className="text-gray-600 leading-relaxed">
                    A simplified case study highlighting the fundamental mechanics of the limit definition.
                  </p>
                  <a 
                    href="https://math.stackexchange.com/questions/418961/epsilon-delta-proof-that-lim-limits-x-to-1-frac1x-1?noredirect=1&lq=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 underline decoration-2 hover:decoration-4 transition-all"
                  >
                    Step-by-Step Breakdown
                    <svg className="w-4 h-4 ml-1 inline" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18.965 10.001c-.232-2.072-1.48-3.918-3.414-5.096 1.934 1.178 3.182 3.024 3.414 5.096zm-3.653 1.904c-1.178-1.934-3.024-3.182-5.096-3.414 1.178 1.934 3.024 3.182 5.096 3.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-center text-gray-500 text-sm">
        <p>© 2024 PillowDash. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;