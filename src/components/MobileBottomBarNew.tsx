import { Link } from 'react-router-dom';
import { Phone, MessageSquare, FileText } from 'lucide-react';

export default function MobileBottomBarNew() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black border-t border-neutral-800 shadow-lg">
      <div className="flex items-center justify-around px-2 py-3">
        <a
          href="tel:7542275605"
          className="flex flex-col items-center gap-1 text-white hover:text-red-500 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs font-medium">Call</span>
        </a>

        <a
          href="sms:7542275605"
          className="flex flex-col items-center gap-1 text-white hover:text-red-500 transition-colors"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs font-medium">Text</span>
        </a>

        <Link
          to="/contact"
          className="flex flex-col items-center gap-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors"
        >
          <FileText className="w-5 h-5" />
          <span className="text-xs font-semibold">Get Quote</span>
        </Link>
      </div>
    </div>
  );
}
