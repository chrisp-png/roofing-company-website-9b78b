import { Shield, FileCheck, Building2, Calculator, ClipboardCheck, Camera, Award } from 'lucide-react';
import AuthorityBlock from './AuthorityBlock';

export default function AuthorityGroup() {
  const authorityBlocks = [
    {
      icon: Building2,
      title: 'Dual-Licensed GC + Roofing Contractor',
      content:
        'Unlike most roofing companies, All Phase Construction USA holds both a Florida Certified General Contractor (CGC) license and a Certified Roofing Contractor (CCC) license. This means we understand both the structure *and* the roofing system, ensuring roof-to-wall connections, decking, fasteners, and structural details are installed to the highest standards.',
    },
    {
      icon: FileCheck,
      title: 'Wind Mitigation Report Included at Completion',
      content:
        'At the end of every reroof, we provide a completed wind mitigation report — at no cost. This helps homeowners document improvements such as roof-to-wall connections, underlayment upgrades, decking strength, and overall hurricane resilience.',
    },
    {
      icon: Shield,
      title: 'HVHZ Code Compliance Experts',
      content:
        "Broward and Palm Beach Counties fall within Florida's High Velocity Hurricane Zone (HVHZ). Our team installs every roof to exceed HVHZ requirements, including proper underlayments, fastener schedules, decking verification, and flashing details designed for South Florida's toughest weather.",
    },
    {
      icon: Calculator,
      title: 'Transparent Pricing + Roof Cost Estimator',
      content:
        "We offer South Florida's most advanced roof cost calculator, giving homeowners real-world pricing ranges based on roof type, size, and typical code requirements. No hidden fees. No gimmicks. Just accurate information to help you plan confidently.",
    },
    {
      icon: ClipboardCheck,
      title: 'Full Attic Inspection Included',
      content:
        'Every reroof includes a complete attic inspection. We verify decking condition, ventilation, structural connections, and other key details that affect safety, durability, and long-term performance.',
    },
    {
      icon: Camera,
      title: 'Photo Documentation of Your Project',
      content:
        'We provide detailed photo documentation of your roof—before, during, and after installation. This ensures transparency, protects you as the homeowner, and guarantees the work is done exactly as promised.',
    },
    {
      icon: Award,
      title: 'Premium Installation Standards',
      content:
        "Our crews follow strict installation standards, including upgraded underlayments, enhanced flashing systems, proper ventilation improvements, and precise workmanship designed for long-term durability in South Florida's climate.",
    },
  ];

  return (
    <section className="py-16 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose All Phase Construction USA
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            We go beyond basic roofing to deliver unmatched quality, transparency, and protection for South Florida homeowners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {authorityBlocks.map((block, index) => (
            <AuthorityBlock key={index} icon={block.icon} title={block.title} content={block.content} />
          ))}
        </div>
      </div>
    </section>
  );
}
