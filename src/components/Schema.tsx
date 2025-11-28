interface FAQItem {
  question: string;
  answer: string;
}

interface SchemaProps {
  schema?: Record<string, unknown>;
  type?: 'FAQPage';
  faqs?: FAQItem[];
}

export default function Schema({ schema, type, faqs }: SchemaProps) {
  if (type === 'FAQPage' && faqs && faqs.length > 0) {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    );
  }

  if (schema) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }

  return null;
}
