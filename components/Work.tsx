const steps = [
  { number: "01", title: "Understand", description: "Understand your business, target audience and requirements." },
  { number: "02", title: "Plan", description: "Choose the right technology, structure and design for the goal." },
  { number: "03", title: "Build", description: "Develop the solution and check its key journeys across devices." },
  { number: "04", title: "Launch", description: "Deploy the finished solution and provide agreed support." },
];

export default function Work() {
  return <section className="work-section section" aria-labelledby="process-title">
    <div className="container">
      <div className="work-header"><div><span className="section-label">A clear process</span><h2 className="section-title" id="process-title">From Idea to Digital Reality</h2></div><p className="section-description">A thoughtful process keeps the work focused on what your business and customers need.</p></div>
      <div className="process-grid">{steps.map((step) => <article className="process-step" key={step.number}><span className="process-number">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
    </div>
  </section>;
}
