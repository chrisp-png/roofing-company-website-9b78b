import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(blogPosts.map((post) => post.category)))];

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <>
      <SEO
        title="Roofing Blog | All Phase Construction USA"
        description="Expert roofing advice for South Florida homeowners. Learn about tile roofing, underlayment, wind mitigation, insurance savings, hurricane prep, and avoiding roofing scams."
      />

      <div className="bg-black text-white min-h-screen">
        <section className="relative bg-gradient-to-br from-neutral-950 to-black border-b border-neutral-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Roofing Education & Insurance Savings for South Florida Homeowners
              </h1>
              <p className="text-xl text-neutral-300 leading-relaxed">
                Expert insights on tile roofs, foam and underlayment, wind mitigation, hurricane-proofing,
                timing your roof replacement, understanding change orders, and maximizing insurance savings.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Filter by Category</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-red-600 text-white shadow-lg shadow-red-900/50'
                        : 'bg-neutral-900 text-neutral-300 border border-neutral-700 hover:border-red-500 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-black border border-neutral-800 rounded-2xl overflow-hidden hover:border-red-500 transition-all duration-300 flex flex-col"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-600/10 border border-red-500/30 rounded-full">
                        <Tag className="w-3.5 h-3.5 text-red-500" />
                        <span className="text-xs font-semibold text-red-500">{post.category}</span>
                      </div>
                      {post.featured && (
                        <span className="px-3 py-1 bg-yellow-600/10 border border-yellow-500/30 rounded-full text-xs font-semibold text-yellow-500">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-neutral-300 text-sm leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-neutral-400 mb-4 pb-4 border-b border-neutral-800">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {post.cityFocus && (
                      <p className="text-xs text-neutral-500 mb-4">
                        <span className="font-semibold">Focus:</span> {post.cityFocus}
                      </p>
                    )}

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-500 transition-colors duration-200 w-full justify-center"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-neutral-400 text-lg">No blog posts found in this category.</p>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-black border-t border-neutral-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get a Roof Cost Estimate?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Use our interactive Roof Cost Calculator to get an instant estimate for your South Florida home
            </p>
            <Link
              to="/roof-cost-calculator"
              className="inline-block px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
            >
              Try the Roof Cost Calculator
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
