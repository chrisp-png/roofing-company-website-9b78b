import { Link } from 'react-router-dom';

interface BlogContentProps {
  slug: string;
}

export default function BlogContent({ slug }: BlogContentProps) {
  if (slug === 'underlayment-and-foam-application') {
    return (
      <div className="space-y-6">
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-8">
          <p className="text-xl text-neutral-300 leading-relaxed mb-6">
            In South Florida, most homeowners obsess over barrel vs. flat tile and color choices. But during a hurricane, the truth shows up fast:
          </p>
          <p className="text-xl text-neutral-300 leading-relaxed mb-4">
            Tiles are decoration.
          </p>
          <p className="text-xl text-neutral-300 leading-relaxed">
            Your real protection is the <strong className="text-white">underlayment and foam adhesive</strong> underneath.
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-neutral-300 leading-relaxed">
            That's why two roofs that look identical from the street can perform completely differently in a storm. This article explains why the "hidden layers" under your tile matter more than anything else.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Concrete Tile Isn't the Hero</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Concrete tile is popular because it looks great and lasts a long time. But structurally, most concrete tiles are very similar. What actually changes how your roof performs is:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>The type of <strong className="text-white">underlayment</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Whether you use <strong className="text-white">mechanical fasteners or foam</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>The <strong className="text-white">foam manufacturer</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>How generously the foam is applied</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>The quality of the <strong className="text-white">installation crew</strong></span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            If a contractor skimps on these hidden details, you get a roof that <em>looks</em> nice but doesn't deliver when wind and rain show up.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Underlayment: The Hidden Waterproofing Layer</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Underlayment is the waterproof membrane between your tile and your wood deck. When tiles crack, shift, or blow off, the underlayment is what keeps water out of your home.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4">
            In South Florida, the gold standard is <strong className="text-white">self-adhered, modified bitumen underlayment</strong>, often called <strong className="text-white">Secondary Water Resistance (SWR)</strong>.
          </p>
          <div className="bg-black border border-red-500/30 rounded-xl p-6 my-6">
            <h3 className="text-xl font-bold text-white mb-4">Benefits of SWR:</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Keeps your home dry if tiles fail in a storm</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Protects your decking from rot and mold</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Helps qualify for <strong className="text-white">major wind-mitigation insurance credits</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Extends the overall life of your roof</span>
              </li>
            </ul>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            Basic synthetic underlayments meet code but usually <strong className="text-white">don't</strong> earn the same credits and don't perform as well when tiles are compromised.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Foam Adhesive Matters So Much</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            For tile roofs in HVHZ (High Velocity Hurricane Zone), <strong className="text-white">foam adhesive</strong> is a game changer.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Compared to simple mechanical fasteners, foam:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Increases uplift resistance in high winds</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Creates a better bond between tile and underlayment</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Reduces the chance of tiles becoming dangerous projectiles</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mb-4">
            But not all foam applications are equal. Key questions:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Is the contractor using <strong className="text-white">premium manufacturers</strong> like Polyfoam or ICP?</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Are they applying <strong className="text-white">enough foam per tile</strong>, or cutting corners to save money?</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Are hips, ridges, and valleys treated with extra care?</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            Two foam jobs can look identical from the street. One might ride out a Category 4. The other might lose tiles in the first strong storm.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Underlayment + Foam = Insurance Savings</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            When you combine <strong className="text-white">SWR underlayment</strong> with <strong className="text-white">proper foam attachment</strong>, you don't just get a stronger roof—you often get <strong className="text-white">real financial savings</strong>:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>Many South Florida homeowners see <strong className="text-white">$2,500/year</strong> in insurance reductions after upgrading</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>That's <strong className="text-white">$25,000 over 10 years</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>And <strong className="text-white">$50,000 over 20 years</strong></span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mb-4">
            When you also improve attic ventilation, you can save around <strong className="text-white">$50/month</strong> on cooling:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span>$50/month = <strong className="text-white">$600/year</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span>$6,000 over 10 years</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span>$12,000 over 20 years</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            Put together, your roof upgrade can <strong className="text-white">pay for itself</strong> through reduced insurance and energy use.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">How All Phase Handles These "Hidden" Details</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            When we install a tile roof, we focus on the parts most companies barely talk about:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>We specify <strong className="text-white">SWR underlayment</strong> wherever possible</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>We use <strong className="text-white">premium foam manufacturers</strong> and generous coverage</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>We document underlayment and foam application with <strong className="text-white">photos</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>We coordinate a new <strong className="text-white">wind mitigation inspection</strong> so you can document your discounts</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>We walk you through how to submit the updated report to your insurer</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            You're not just buying tiles. You're buying a hardened system designed for South Florida storms and insurance requirements.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">When Should You Take Action?</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            You should strongly consider upgrading if:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Your roof was installed before modern SWR requirements</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>You've lost tiles during recent storms</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Your wind mitigation report is older or missing</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Your insurance premiums have jumped dramatically</span>
            </li>
          </ul>

          <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Helpful Links</h3>
            <div className="space-y-3">
              <p className="text-neutral-300">
                <Link to="/wind-mitigation" className="text-red-500 hover:text-red-400 font-semibold">
                  Learn more about wind mitigation & insurance savings →
                </Link>
              </p>
              <p className="text-neutral-300">
                <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 font-semibold">
                  Use the Roof Cost Calculator to see ballpark pricing for different tile systems →
                </Link>
              </p>
              <p className="text-neutral-300">
                <Link to="/roof-types/tile" className="text-red-500 hover:text-red-400 font-semibold">
                  Explore other roof types we install →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (slug === 'wind-mitigation-guide-south-florida') {
    return (
      <div className="space-y-6">
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
          <p className="text-lg text-neutral-300 leading-relaxed mb-4">
            Most South Florida homeowners think about a new roof in terms of "How much will this cost me right now?"
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed mb-4">
            A better question is:
          </p>
          <p className="text-xl text-neutral-300 leading-relaxed mb-4">
            <strong className="text-white">"How much will I save every year in insurance and energy if I install the right roof system and document it properly?"</strong>
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed">
            That's what wind mitigation is all about.
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-neutral-300 leading-relaxed">
            In this guide, we'll break down how wind mitigation inspections work, what insurance companies look for, and how a properly built roof can save you <strong className="text-white">$500–$6,500 per year</strong> on insurance alone.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What Is a Wind Mitigation Inspection?</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            A wind mitigation inspection is a special report (often on <strong className="text-white">Form 1802</strong>) that documents how well your home is built to withstand high winds.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4">
            The inspector looks at things like:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Roof covering type and rating</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Roof deck attachment (nail size, spacing, patterns)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Roof-to-wall connections (clips, straps, wraps)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Secondary Water Resistance (SWR) underlayment</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Roof shape (hip vs gable)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Opening protection (impact windows, doors, shutters)</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            Each feature has a "better" or "worse" category. The more hardened your house is, the more discounts you can qualify for with your insurance carrier.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">How a New Roof Impacts Your Wind Mit Credits</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            When you replace your roof in Broward or Palm Beach, it's not just about new shingles or tiles. A properly designed system affects multiple line items on your wind mitigation report:
          </p>

          <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. Roof Covering</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            Your new roof covering should be <strong className="text-white">FBC-approved</strong> and rated for High Velocity Hurricane Zones (HVHZ).
          </p>

          <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. Roof Deck Attachment</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">
            During re-roofing, we can upgrade:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Nail size</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Nail spacing</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Patterns and edge fasteners</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mb-6">
            This upgrades the "roof deck attachment" part of your report.
          </p>

          <h3 className="text-2xl font-bold text-white mt-8 mb-4">3. Roof-to-Wall Connections</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">
            If accessible and feasible, we can improve or correct:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Clips</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Straps</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Wraps</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Load-path continuity</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mb-6">
            This is one of the biggest line items for insurance savings.
          </p>

          <h3 className="text-2xl font-bold text-white mt-8 mb-4">4. Secondary Water Resistance (SWR)</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Using self-adhered underlayment (SWR) below your tile, shingle, or metal roof earns one of the strongest credits:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>It keeps water out even if the roof covering is damaged</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>It's heavily rewarded on most carrier credit sheets</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">How Much Can You Really Save?</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Every home and carrier is different, but in the real world we often see:
          </p>
          <div className="bg-gradient-to-br from-green-900/20 to-green-700/10 border-2 border-green-500/30 rounded-2xl p-8 mb-6">
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 text-xl">•</span>
                <span><strong className="text-white">$500–$6,500/year</strong> in insurance savings after a new roof + updated wind mitigation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 text-xl">•</span>
                <span>Over <strong className="text-white">10 years</strong>, that can be <strong className="text-white">$5,000–$65,000</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 text-xl">•</span>
                <span>Over <strong className="text-white">20 years</strong>, that can be <strong className="text-white">$10,000–$130,000</strong></span>
              </li>
            </ul>
          </div>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Even at a conservative example of <strong className="text-white">$2,500/year</strong>:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>$2,500 x 10 years = <strong className="text-white">$25,000</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>$2,500 x 20 years = <strong className="text-white">$50,000</strong></span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Add ventilation improvements that save around <strong className="text-white">$50/month</strong> on cooling:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span>$50/month = <strong className="text-white">$600/year</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span><strong className="text-white">$6,000 over 10 years</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span><strong className="text-white">$12,000 over 20 years</strong></span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            Suddenly, the "expensive roof" doesn't look so expensive when you factor in 10–20 years of savings.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Your Contractor Choice Matters</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Not every roofer understands wind mitigation, and many are not licensed to perform structural work.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4">
            All Phase Construction USA is:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>A <strong className="text-white">Certified General Contractor (CGC1526236)</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>A <strong className="text-white">Certified Roofing Contractor (CCC1331464)</strong></span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mb-4">
            That matters because we can:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>Upgrade roof deck attachment during your re-roof</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>Correct roof-to-wall connections where feasible</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>Install SWR underlayment</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>Coordinate a new wind mitigation inspection after the project is complete</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>Provide photo documentation to back up the report</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mb-6">
            We don't just install a roof. We design a <strong className="text-white">roof + documentation + wind mitigation strategy</strong> around your insurance situation.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">When Should You Consider a Wind Mitigation-Focused Re-Roof?</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            You should seriously consider this approach if:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Your roof is nearing the end of its life</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Your insurance premiums have increased sharply</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Your carrier has requested updates or threatened non-renewal</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Your current wind mitigation report is old or missing</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>You live in Boca Raton, Deerfield Beach, Pompano Beach, Coral Springs, or any HVHZ area</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mb-6">
            The sooner you upgrade, the sooner the savings begin.
          </p>

          <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Helpful Links</h3>
            <div className="space-y-3">
              <p className="text-neutral-300">
                <Link to="/wind-mitigation" className="text-red-500 hover:text-red-400 font-semibold">
                  Learn more about our Wind Mitigation services →
                </Link>
              </p>
              <p className="text-neutral-300">
                <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 font-semibold">
                  Use the Roof Cost Calculator to see ballpark pricing →
                </Link>
              </p>
              <p className="text-neutral-300">
                <Link to="/contact" className="text-red-500 hover:text-red-400 font-semibold">
                  Ready for a wind mitigation–focused roof replacement? →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (slug === 'hurricane-proof-your-roof-guide') {
    return (
      <div className="space-y-6">
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
          <p className="text-lg text-neutral-300 leading-relaxed mb-4">
            In South Florida, "hurricane season" isn't a date on a calendar—it's a stress test for your roof.
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed mb-4">
            Every year, homeowners ask the same question:
          </p>
          <p className="text-xl text-neutral-300 leading-relaxed mb-4">
            <strong className="text-white">"Is my roof really ready for a Category 3, 4, or 5 storm?"</strong>
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed">
            This guide walks you through the real-world factors that determine whether your roof is hurricane-ready, and what upgrades provide the best protection (and the best return on investment).
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Start With the Structure, Not Just the Shingles</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Most people think hurricane-proofing starts with the roof covering—shingles, tiles, or metal.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4">
            In reality, a hurricane-ready roof is about the <strong className="text-white">load path</strong>:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>How the wind forces travel from the roof</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Through the walls</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Down into the foundation</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Key pieces of that load path include:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Roof deck attachment</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Roof-to-wall connections</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Straps, clips, and wraps</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Gable end bracing</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Soffit and fascia stability</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            If those pieces are weak or outdated, it doesn't matter how pretty your roof covering is.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Step 1: Choose the Right Roof System</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Each roof type has pros and cons in hurricane conditions:
          </p>

          <div className="bg-black border border-neutral-700 rounded-xl p-6 my-6">
            <h3 className="text-2xl font-bold text-white mb-4">Tile Roofs</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Heavy, can perform very well when properly attached</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Vulnerable to broken or flying tiles if foam is skimped</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Underlayment and foam quality are critical</span>
              </li>
            </ul>
          </div>

          <div className="bg-black border border-neutral-700 rounded-xl p-6 my-6">
            <h3 className="text-2xl font-bold text-white mb-4">Metal Roofs</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Excellent wind resistance</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Mechanically seamed systems perform especially well in HVHZ</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Great platform for future solar attachments</span>
              </li>
            </ul>
          </div>

          <div className="bg-black border border-neutral-700 rounded-xl p-6 my-6">
            <h3 className="text-2xl font-bold text-white mb-4">Shingle Roofs</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Budget-friendly</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>High-performance shingles with proper installation can still meet strong wind ratings</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Underlayment and nailing patterns matter a lot</span>
              </li>
            </ul>
          </div>

          <div className="bg-black border border-neutral-700 rounded-xl p-6 my-6">
            <h3 className="text-2xl font-bold text-white mb-4">Flat Roofs (TPO / Modified / IB PVC)</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Performance depends heavily on slope, drainage, and detailing</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Membrane choice and edge conditions are critical</span>
              </li>
            </ul>
          </div>

          <p className="text-neutral-300 leading-relaxed">
            There's no one "perfect" material for everyone. The right choice depends on your home, your budget, and how long you plan to stay.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Step 2: Upgrade Roof Deck Attachment</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            During a re-roof, we can upgrade:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Nail size (e.g., 8d ring-shank instead of small smooth nails)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Nail spacing (closer spacing equals better uplift resistance)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Edge fastening patterns</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mb-4">
            These changes can:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>Drastically improve uplift resistance</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>Improve your wind mitigation report</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>Increase your insurance discounts</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            It's a small detail with a big impact.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Step 3: Improve Roof-to-Wall Connections</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            If accessible and feasible, roof-to-wall connections can sometimes be improved or corrected during a re-roof.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4">
            This includes:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Adding or correcting straps</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Ensuring clips are properly installed</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Improving continuity in the load path</span>
            </li>
          </ul>
          <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-6 my-6">
            <p className="text-neutral-300 leading-relaxed">
              This is where having a <strong className="text-white">dual-licensed GC + Roofing Contractor</strong> like All Phase Construction USA makes a big difference. We're licensed to handle both the <strong className="text-white">roof</strong> and the <strong className="text-white">structural connections</strong> that support it.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Step 4: Use SWR Underlayment</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Secondary Water Resistance (SWR) is one of the most powerful hurricane upgrades you can add.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Benefits:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>Keeps your home protected even if shingles, tiles, or metal panels are damaged</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>Provides extra time before water intrusion</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>Often yields major insurance discounts</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            In a real storm, SWR is your last line of defense between your family and the elements.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Step 5: Fix Soffit, Fascia & Edge Conditions</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Hurricanes don't just attack the middle of the roof. They hammer the edges.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Common failure points:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span>Weak soffits that blow out and let wind into the attic</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span>Poorly attached fascia</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span>Inadequate drip-edge or edge metal</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span>Loose gutters that become wind catchers</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            Part of hurricane-proofing your roof is making sure the edges and transitions are built like they matter—because they do.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Step 6: Combine Protection With Savings</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            The same upgrades that help your roof withstand a storm are the ones that often maximize your insurance savings:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>Improved roof deck attachment</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>Better roof-to-wall connections</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>SWR underlayment</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>Stronger roof covering</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>Proper documentation and a new wind mitigation inspection</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            Between <strong className="text-white">insurance savings</strong> and <strong className="text-white">ventilation upgrades</strong>, many homeowners see thousands per year in combined benefit over the life of the roof.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">How All Phase Construction USA Can Help</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            When we design a "hurricane-ready" roof system, we focus on:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Matching the roof type (tile, metal, shingle, flat) to your specific home and neighborhood</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Upgrading the structural and attachment details that most roofers gloss over</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Using materials that perform well in HVHZ conditions</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Coordinating a wind mitigation inspection after the job</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Providing photos and documentation you can share with your insurer</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            We don't just sell roofs—we build <strong className="text-white">storm systems</strong> for South Florida homes.
          </p>

          <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Helpful Links</h3>
            <div className="space-y-3">
              <p className="text-neutral-300">
                <Link to="/wind-mitigation" className="text-red-500 hover:text-red-400 font-semibold">
                  Explore our Wind Mitigation & Insurance Savings page →
                </Link>
              </p>
              <p className="text-neutral-300">
                <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 font-semibold">
                  See ballpark pricing with the Roof Cost Calculator →
                </Link>
              </p>
              <p className="text-neutral-300">
                <Link to="/contact" className="text-red-500 hover:text-red-400 font-semibold">
                  Talk to us about a hurricane-focused roof upgrade →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (slug === 'concrete-tile-roofing-good-better-best') {
    return (
      <div className="space-y-6">
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-8">
          <p className="text-xl text-neutral-300 leading-relaxed mb-6">
            Concrete tile is one of the most popular roofing choices in Broward and Palm Beach Counties. Homeowners are often told barrel tile is "better" than flat tile, or that certain profiles justify higher prices.
          </p>
          <p className="text-xl text-neutral-300 leading-relaxed mb-4">
            Here's the truth:
          </p>
          <p className="text-xl text-neutral-300 leading-relaxed mb-4">
            <strong className="text-white">Concrete is concrete.</strong>
          </p>
          <p className="text-xl text-neutral-300 leading-relaxed">
            The real difference in price and performance comes from the <strong className="text-white">system</strong>:
          </p>
          <ul className="space-y-2 text-neutral-300 mt-4">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Attachment method</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Underlayment type</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Foam quality and coverage</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Installation details</span>
            </li>
          </ul>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-neutral-300 leading-relaxed">
            So instead of selling only by "pretty tile," we recommend a <strong className="text-white">Good / Better / Best / Premium</strong> structure that explains exactly what you're paying for.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">GOOD – Concrete Tile with Mechanical Attachment</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            <strong className="text-white">Best for:</strong> strict budgets and inland homes.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Typical features:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Any concrete tile profile (flat, barrel, or S-tile)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Mechanical attachment with screws or ring-shank nails</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Standard synthetic underlayment</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Meets Florida Building Code minimums</span>
            </li>
          </ul>
          <div className="bg-black border border-green-500/30 rounded-xl p-6 my-6">
            <h3 className="text-xl font-bold text-white mb-4">Pros:</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">•</span>
                <span>Lowest upfront cost</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">•</span>
                <span>Still code-compliant</span>
              </li>
            </ul>
          </div>
          <div className="bg-black border border-yellow-500/30 rounded-xl p-6 my-6">
            <h3 className="text-xl font-bold text-white mb-4">Limitations:</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 mt-1">•</span>
                <span>Lower uplift resistance</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 mt-1">•</span>
                <span>Underlayment usually does <strong className="text-white">not</strong> provide SWR</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 mt-1">•</span>
                <span>Limited insurance credits compared to higher tiers</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">BETTER – Concrete Tile with Foam Adhesive</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            <strong className="text-white">Best for:</strong> most South Florida single-family homes.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Features:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Any concrete tile profile</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Two-part foam adhesive attachment</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Enhanced synthetic underlayment</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Quality foam manufacturer</span>
            </li>
          </ul>
          <div className="bg-black border border-blue-500/30 rounded-xl p-6 my-6">
            <h3 className="text-xl font-bold text-white mb-4">Benefits:</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>Much stronger wind uplift performance than mechanical attachment</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>Smoother look (fewer exposed fasteners)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>Generally better eligibility for insurance discounts</span>
              </li>
            </ul>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            This is the "sweet spot" for many homeowners—strong performance without premium pricing.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">BEST – Foam Adhesive + Self-Adhered (SWR) Underlayment</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            <strong className="text-white">Best for:</strong> coastal areas, HVHZ zones, and clients who want maximum protection and savings.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4">
            System details:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Any concrete tile profile</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Premium two-part foam adhesive (Polyfoam, ICP, etc.)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Self-adhered modified bitumen underlayment (SWR)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Generous foam coverage on each tile</span>
            </li>
          </ul>
          <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-6 my-6">
            <h3 className="text-xl font-bold text-white mb-4">Why it's our favorite:</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Maximum wind uplift resistance</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>SWR keeps the home dry even if tiles blow off</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Qualifies for <strong className="text-white">maximum wind-mitigation insurance credits</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Often performs better than "fancier" tiles installed with cheaper methods</span>
              </li>
            </ul>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            This is where the roof truly becomes a <strong className="text-white">hurricane system</strong>, not just a cosmetic upgrade.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">PREMIUM – Clay or Composite Tile Systems</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            <strong className="text-white">Best for:</strong> luxury homes and long-term owners.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Highlights:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Clay or advanced composite tiles</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Premium underlayment + flashings</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Attachment methods tailored to the material</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>50–100 year lifespan in many cases</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            The upfront cost is higher, but the roof can dramatically increase curb appeal and property value and may be the <strong className="text-white">last roof you ever buy</strong>.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">How Pricing Usually Breaks Down</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            While every project needs a site-specific quote, typical installed ranges in South Florida look like:
          </p>
          <div className="bg-black border border-neutral-700 rounded-xl p-6 my-6">
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1 font-bold">•</span>
                <span><strong className="text-white">GOOD:</strong> roughly $12–$16 per sq ft</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1 font-bold">•</span>
                <span><strong className="text-white">BETTER:</strong> roughly $14–$18 per sq ft</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 font-bold">•</span>
                <span><strong className="text-white">BEST:</strong> roughly $16–$20 per sq ft</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 mt-1 font-bold">•</span>
                <span><strong className="text-white">PREMIUM (clay/composite):</strong> roughly $18–$24 per sq ft</span>
              </li>
            </ul>
          </div>
          <p className="text-neutral-300 leading-relaxed mb-4">
            These ranges are heavily influenced by:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Roof size and complexity</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Access and staging requirements</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Code upgrades (straps, deck nailing, ventilation)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Municipality and permitting</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            Use the <strong className="text-white">Roof Cost Calculator</strong> as your starting point, then we refine everything after a site visit.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">How Insurance & Ventilation Offset the Cost</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            A BEST-tier tile system with SWR and proper documentation can unlock:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>Around <strong className="text-white">$2,500/year</strong> in insurance savings</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span><strong className="text-white">$25,000 over 10 years</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span><strong className="text-white">$50,000 over 20 years</strong></span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Add upgraded ventilation and attic airflow:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span>~$50/month off cooling</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span><strong className="text-white">$600/year</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span><strong className="text-white">$6,000 over 10 years</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span><strong className="text-white">$12,000 over 20 years</strong></span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            When you combine these numbers, the <strong className="text-white">net cost of your roof over 10–20 years is far lower</strong> than the sticker shock most homeowners feel up front.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Homeowners Choose All Phase for Tile Roofs</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            When we design a tile system, we focus on:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Explaining Good / Better / Best options in plain English</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Matching the system to your <strong className="text-white">neighborhood, insurance situation, and time horizon</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Using premium foam manufacturers, not generic alternatives</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Installing SWR whenever possible to maximize insurance credits</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Photographing underlayment, foam, and installation details for your records</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            You're not just getting tiles—you're getting a <strong className="text-white">documented, insurable system</strong> that protects your family and your investment.
          </p>

          <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Helpful Links</h3>
            <div className="space-y-3">
              <p className="text-neutral-300">
                <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 font-semibold">
                  See how different tile systems price out with our Roof Cost Calculator →
                </Link>
              </p>
              <p className="text-neutral-300">
                <Link to="/wind-mitigation" className="text-red-500 hover:text-red-400 font-semibold">
                  Learn about wind mitigation and insurance savings →
                </Link>
              </p>
              <p className="text-neutral-300">
                <Link to="/contact" className="text-red-500 hover:text-red-400 font-semibold">
                  Ready for a site-specific quote? →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-8 mb-8">
      <p className="text-neutral-300 leading-relaxed mb-4">
        <strong className="text-white">Content Placeholder:</strong> Full blog content for "{slug}" will be inserted here.
      </p>
      <p className="text-neutral-400 leading-relaxed">
        This placeholder will be replaced with the actual blog article content in small batches after the blog structure is complete.
      </p>
    </div>
  );
}
