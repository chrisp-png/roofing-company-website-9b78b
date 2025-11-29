import { LucideIcon } from 'lucide-react';

interface AuthorityBlockProps {
  icon: LucideIcon;
  title: string;
  content: string;
}

export default function AuthorityBlock({ icon: Icon, title, content }: AuthorityBlockProps) {
  return (
    <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 h-full">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-red-600/10 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-red-500" />
        </div>
        <h3 className="text-xl font-bold text-white flex-1 leading-tight">
          {title}
        </h3>
      </div>
      <p className="text-neutral-300 leading-relaxed">
        {content}
      </p>
    </div>
  );
}
