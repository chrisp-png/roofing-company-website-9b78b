export default function FooterNew() {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">
              All Phase Construction USA, LLC
            </h3>
            <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
              Professional roofing and general contracting solutions for Broward and Palm Beach Counties.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Information</h4>
            <div className="space-y-2 text-sm text-neutral-400">
              <p>590 Goolsby Blvd</p>
              <p>Deerfield Beach, FL 33442</p>
              <p className="pt-2">
                <a href="tel:754-227-5605" className="hover:text-red-500 transition-colors">
                  Phone: 754-227-5605
                </a>
              </p>
              <p>
                <a href="mailto:info@allphaseusa.com" className="hover:text-red-500 transition-colors">
                  Email: info@allphaseusa.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Licenses & Service Area</h4>
            <div className="space-y-2 text-sm text-neutral-400">
              <p>FL General Contractor: CGC1526236</p>
              <p>FL Roofing Contractor: CCC1331464</p>
              <p className="pt-2">
                Serving Broward & Palm Beach Counties
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} All Phase Construction USA, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
