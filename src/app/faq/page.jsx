const faqs = [
  { question: "How long does shipping take?", answer: "Standard delivery takes 3-5 business days and express takes 1-2 days." },
  { question: "Can I return a product?", answer: "Yes. Unused items can be returned in 30 days with original packaging." },
  { question: "Do you ship internationally?", answer: "Yes, to selected countries across North America, Europe, and APAC." },
  { question: "How do I track my order?", answer: "Use the Track Order page with your order ID and email/phone." },
];

export default function FaqPage() {
  return (
    <div className="space-y-8">
      <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-semibold text-slate-900">{faq.question}</h2>
            <p className="mt-2 text-slate-600">{faq.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
