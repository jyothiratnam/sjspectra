import Image from "next/image";

const services = [
  {
    number: "01",
    category: "Web & Platforms",
    title: "Website Design & Development",
    description:
      "Your website is often the first impression customers have of your business. We create responsive, well-structured websites that showcase your brand, communicate your services, and make it easy for visitors to contact you.",
    highlights: [
      "Business and service websites",
      "Responsive desktop and mobile layouts",
      "Landing pages and enquiry forms",
      "Website maintenance and improvements",
    ],
    image: "/images/services/photography/website-design.jpg",
    alt: "Business website and analytics displayed on a laptop in a bright workspace",
    cta: "Discuss Your Website",
  },
  {
    number: "02",
    category: "Mobile Applications",
    title: "Android App Development",
    description:
      "Turn your business requirements into a practical mobile experience. We develop Android applications designed around your customers, workflows, and required features.",
    highlights: [
      "Business application development",
      "User-friendly mobile interfaces",
      "API and backend integration where required",
      "Testing and deployment support",
    ],
    image: "/images/services/photography/android-service.jpg",
    alt: "Hand holding a smartphone displaying a mobile application interface",
    cta: "Discuss Your App",
  },
  {
    number: "03",
    category: "Digital Growth",
    title: "Digital Marketing",
    description:
      "Reach the right audience with a digital marketing approach aligned with your business goals. We help businesses plan campaigns, communicate their value, and improve their online presence.",
    highlights: [
      "Campaign planning",
      "Google Ads campaign management",
      "Meta Ads campaign management",
      "Performance monitoring and optimisation",
    ],
    image: "/images/services/photography/digital-marketing.png",
    alt: "Digital marketing professional reviewing marketing information on a tablet",
    cta: "Grow Your Business",
  },
  {
    number: "04",
    category: "Search Visibility",
    title: "Search Engine Optimization",
    description:
      "Help potential customers discover your business through useful content, sound website structure, and search optimisation practices.",
    highlights: [
      "On-page SEO",
      "Technical SEO fundamentals",
      "Website content optimisation",
      "Local SEO guidance where applicable",
    ],
    image: "/images/services/photography/seo.jpg",
    alt: "Search engine optimization concept with a magnifying glass and search analytics elements",
    cta: "Improve Your Visibility",
  },
  {
    number: "05",
    category: "Social & Reach",
    title: "Social Media Marketing",
    description:
      "Build a consistent online identity through thoughtful social media content and campaigns that help your audience understand your brand.",
    highlights: [
      "Social media content planning",
      "Instagram and Facebook creatives",
      "Post and campaign coordination",
      "Brand communication",
    ],
    image: "/images/services/photography/social-media.jpg",
    alt: "Smartphone displaying social media applications",
    cta: "Plan Your Social Presence",
  },
  {
    number: "06",
    category: "Creative Studio",
    title: "Creative Design & Video Content",
    description:
      "Communicate your business through engaging visual content. We create promotional creatives and video content tailored to your brand and intended audience.",
    highlights: [
      "Promotional videos",
      "Social media reels",
      "Business posters and creatives",
      "Brand-focused visual content",
    ],
    image: "/images/services/photography/creative-content.jpg",
    alt: "Video editor working with promotional footage at a desktop computer",
    cta: "Create Your Content",
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section section">
      <div className="container">
        <div className="services-header">
          <div>
            <span className="section-label">What We Do</span>
            <h2 className="section-title">
              Digital Solutions That Move Your Business Forward
            </h2>
          </div>
          <p className="section-description">
            Everything you need to build, launch and grow your digital presence.
          </p>
        </div>
      </div>

      <div className="service-showcase">
        {services.map((service, index) => (
          <article
            className={`service-row${index % 2 === 1 ? " service-row-reverse" : ""}${index === 1 || index === 4 ? " service-row-tint" : ""}`}
            key={service.number}
          >
            <div className="service-row-inner">
              <div className="service-row-media">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={1400}
                  height={933}
                  sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1160px) 46vw, 540px"
                  className="service-row-image"
                  priority={index < 2}
                />
                <span className="service-row-number" aria-hidden="true">
                  {service.number}
                </span>
              </div>

              <div className="service-row-content">
                <span className="service-row-category">{service.category}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <a className="service-row-cta" href="#contact">
                  {service.cta}<span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="container">
        <div className="services-bottom">
          <p>Have a project in mind?</p>
          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
