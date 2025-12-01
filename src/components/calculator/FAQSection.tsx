import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What factors affect roof cost in South Florida?',
    answer: 'Roof costs in South Florida depend on roof size, pitch, material (shingle, tile, metal, or flat), code upgrades, and whether decking or fascia wood needs replacement. Labor, permits, and disposal also impact the price.',
  },
  {
    question: 'Is a metal roof more expensive than tile?',
    answer: 'In most cases, metal roofs cost more upfront than shingle and can be similar to or slightly higher than many tile roofs. However, metal systems can last longer, perform better in high winds, and may offer better long-term value.',
  },
  {
    question: 'Does the calculator include permits and disposal?',
    answer: 'Yes, our calculator includes typical permit costs, dumpster fees, and labor. However, final pricing may vary based on specific site conditions, access restrictions, or HOA requirements.',
  },
  {
    question: 'Can I finance my roof replacement?',
    answer: 'Yes! We offer flexible financing options through multiple lenders. Many homeowners qualify for payment plans with competitive rates. Visit our financing page or call us at 754-227-5605 to discuss options.',
  },
  {
    question: 'How accurate is the roof cost calculator?',
    answer: 'Our calculator provides realistic ballpark ranges based on actual South Florida roofing projects. Final pricing depends on your specific roof conditions, code requirements, and material selections. Schedule a free assessment for an exact quote.',
  },
  {
    question: 'What roof material is best for South Florida?',
    answer: 'The best material depends on your budget, home style, and priorities. Tile offers aesthetics and longevity, metal provides superior wind resistance and solar compatibility, shingles are budget-friendly, and flat roofs work well for modern architecture. We can help you evaluate all options.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-neutral-300">
            Common questions about roof costs, materials, and financing in South Florida
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-black border border-neutral-800 rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-bold text-white pr-8">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-neutral-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
