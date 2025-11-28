import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import { Calendar, Clock, Tag, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <>
      <SEO
        title={`${post.title} | All Phase Construction USA`}
        description={post.excerpt}
      />

      <div className="bg-black text-white min-h-screen">
        <div className="bg-neutral-950 border-b border-neutral-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-red-500 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-600/10 border border-red-500/30 rounded-full">
                <Tag className="w-3.5 h-3.5 text-red-500" />
                <span className="text-sm font-semibold text-red-500">{post.category}</span>
              </div>
              {post.featured && (
                <span className="px-3 py-1 bg-yellow-600/10 border border-yellow-500/30 rounded-full text-sm font-semibold text-yellow-500">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400 mb-8 pb-6 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-red-600/5 border border-red-500/20 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-white mb-3">
                  {post.cityFocus ? `Serving ${post.cityFocus}` : 'Serving All of South Florida'}
                </h2>
                <p className="text-neutral-300 mb-4">
                  All Phase Construction USA is a dual-licensed roofing contractor serving Broward and Palm
                  Beach Counties with 25+ years of experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <a
                    href="tel:754-227-5605"
                    className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    754-227-5605
                  </a>
                  <a
                    href="mailto:info@allphaseusa.com"
                    className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    info@allphaseusa.com
                  </a>
                </div>
                <p className="text-xs text-neutral-500 mt-3">
                  FL Licenses: CGC1526236 (General Contractor) • CCC1331464 (Roofing Contractor)
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            {/* TODO: Replace this placeholder content with the full blog article text */}
            {/* from my 10_Fresh_SEO_Blogs_CORRECTED.html document for slug: {post.slug} */}

            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-8 mb-8">
              <p className="text-neutral-300 leading-relaxed mb-4">
                <strong className="text-white">Content Placeholder:</strong> This is where the full blog
                article content will be inserted for "{post.title}".
              </p>
              <p className="text-neutral-400 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Key Takeaways</h3>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>Placeholder bullet point about the topic covered in this article</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>Another important takeaway that readers should remember</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>Final key point that summarizes the article's main message</span>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
              <p className="text-sm text-neutral-400 italic">
                <strong className="text-white">Developer Note:</strong> Replace the placeholder content
                above with the full article HTML from the 10_Fresh_SEO_Blogs_CORRECTED.html document.
                Match the slug "{post.slug}" to find the corresponding article content.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-neutral-800">
            <h3 className="text-xl font-bold text-white mb-2">Related Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {post.targetKeywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-neutral-900 border border-neutral-700 rounded-full text-sm text-neutral-300"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </article>

        <section className="bg-gradient-to-br from-neutral-950 to-black border-t border-neutral-800 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black border border-red-500/30 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                Ready to Get Your Roof Cost Estimate?
              </h2>
              <p className="text-xl text-neutral-300 mb-8 text-center leading-relaxed">
                Use our interactive calculator to get an instant estimate, or schedule a free inspection
                and wind mitigation assessment
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/roof-cost-calculator"
                  className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50 text-center"
                >
                  Try the Roof Cost Calculator
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-red-600 text-red-500 text-lg font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200 text-center"
                >
                  Schedule Free Assessment
                </Link>
              </div>

              <div className="border-t border-neutral-800 pt-6 text-center">
                <p className="text-neutral-400 mb-3">All Phase Construction USA</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-neutral-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>590 Goolsby Blvd, Deerfield Beach, FL 33442</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-red-500" />
                    <a href="tel:754-227-5605" className="hover:text-red-500 transition-colors">
                      754-227-5605
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 border-t border-neutral-800 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">More Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="bg-black border border-neutral-800 rounded-xl p-5 hover:border-red-500 transition-all duration-300"
                  >
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-600/10 border border-red-500/30 rounded-full mb-3">
                      <span className="text-xs font-semibold text-red-500">{relatedPost.category}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 leading-tight">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-neutral-400">{relatedPost.readTime}</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
