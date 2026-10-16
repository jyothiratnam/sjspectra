"use client";

import Image from "next/image";
import Link from "next/link";
import { portfolioSocialLinks } from "@/app/portfolio/social-links";
import { useEffect, useRef, useState } from "react";

type Filter = "All Work" | "Websites & Web Applications" | "Android Application" | "Creative Design" | "Video & Content";

const filters: Filter[] = ["All Work", "Websites & Web Applications", "Android Application", "Creative Design", "Video & Content"];

const designs = [
  { name: "LuxeGlow Salon", detail: "Salon promotional design", src: "/images/posters/LUXEGLOW.png", alt: "LuxeGlow salon services promotional poster" },
  { name: "LuxeGlow Salon", detail: "Bridal beauty design", src: "/images/posters/LUXEGLOW_poster2.png", alt: "LuxeGlow bridal beauty promotional poster" },
  { name: "SK Solar", detail: "Solar energy promotional design", src: "/images/posters/sk-solar-poster1.jpeg", alt: "SK Solar switch to solar promotional poster" },
  { name: "SK Solar", detail: "Solar energy promotional design", src: "/images/posters/sk-solar-poster2.jpeg", alt: "SK Solar electricity bill promotional poster" },
  { name: "SK Solar", detail: "Solar energy promotional design", src: "/images/posters/sk-solar-poster-3.jpeg", alt: "SK Solar rooftop solar promotional poster" },
  { name: "Brew & Bloom Café", detail: "Café promotional design", src: "/images/posters/WhatsApp Image 2026-10-15 at 11.11.26 AM.jpeg", alt: "Brew & Bloom Café coffee and slow mornings poster" },
  { name: "WinterBloom", detail: "Winter clothing launch post", src: "/images/posters/WinterBloom winter clothing launch post.png", alt: "WinterBloom winter clothing launch campaign post" },
  { name: "SJ Spectra", detail: "Digital services poster", src: "/images/posters/SjSpectra_Services.png", alt: "SJ Spectra digital solutions poster featuring website development, digital marketing, social media and content, SEO, and creative services" },
];

const appScreens = [
  { title: "Home screen", src: "/images/RhythuBazaarApp_Android_Images/HomeScreen.jpeg", alt: "Rythu Bazar Billing App home screen with today's prices, create bill, previous bills, and settings" },
  { title: "Today's prices", src: "/images/RhythuBazaarApp_Android_Images/UploadingTodayPrices.jpeg", alt: "Rythu Bazar Billing App screen for uploading today's item prices" },
  { title: "Price calculation", src: "/images/RhythuBazaarApp_Android_Images/PriceCalculations", alt: "Rythu Bazar Billing App bill screen showing item quantities and calculated prices" },
  { title: "Saved bills", src: "/images/RhythuBazaarApp_Android_Images/SavedBills.jpeg", alt: "Rythu Bazar Billing App previous bills screen" },
  { title: "Settings", src: "/images/RhythuBazaarApp_Android_Images/Settings.jpeg", alt: "Rythu Bazar Billing App settings screen" },
];

const corpScreens = [
  { title: "Login", src: "/images/demowebsites/meeting-room/login.png", alt: "CorpReserve login screen" },
  { title: "Dashboard", src: "/images/demowebsites/meeting-room/dashboard.png", alt: "CorpReserve dashboard screen" },
  { title: "Create Booking", src: "/images/demowebsites/meeting-room/create-booking.png", alt: "CorpReserve create booking screen" },
  { title: "My Bookings", src: "/images/demowebsites/meeting-room/my-bookings.png", alt: "CorpReserve my bookings screen" },
];

function ProjectLink({ href, children = "View Website" }: { href: string; children?: React.ReactNode }) {
  return <a className="portfolio-external-link" href={href} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true">↗</span></a>;
}

function BrowserImage({ src, alt, name, onOpen }: { src: string; alt: string; name: string; onOpen: (src: string, alt: string) => void }) {
  return <button className="portfolio-browser" type="button" onClick={() => onOpen(src, alt)} aria-label={`Enlarge ${name} screenshot`}>
    <span className="portfolio-browser-bar"><i/><i/><i/><span>{name}</span></span>
    <span className="portfolio-browser-visual"><Image src={src} alt={alt} fill sizes="(max-width: 760px) 92vw, 650px" /></span>
  </button>;
}

function PosterGallery({ onOpen }: { onOpen: (src: string, alt: string) => void }) {
  return <div className="creative-gallery">
    {designs.map((design) => <button type="button" className="creative-card" key={design.src} onClick={() => onOpen(design.src, design.alt)} aria-label={`View larger: ${design.name}, ${design.detail}`}>
      <span className="creative-image"><Image src={design.src} alt={design.alt} fill sizes="(max-width: 560px) 44vw, (max-width: 900px) 28vw, 220px" /></span>
      <span className="creative-caption"><strong>{design.name}</strong><small>{design.detail}</small></span>
    </button>)}
  </div>;
}

function YouTubeVideo({ videoId, number }: { videoId: string; number: number }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [thumbnailFailed, setThumbnailFailed] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return <article className="youtube-video-card" aria-label={`SJ Rainbow Rhymes video ${number}`}>
    <div className="youtube-player-frame">
      {isLoaded ? <iframe
        title={`SJ Rainbow Rhymes video ${number}`}
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      /> : <button className={`youtube-thumbnail-button${thumbnailFailed ? " is-fallback" : ""}`} type="button" onClick={() => setIsLoaded(true)} aria-label={`Load SJ Rainbow Rhymes video ${number}`}>
        {!thumbnailFailed && <Image src={thumbnail} alt="" fill sizes="(max-width: 760px) 90vw, 560px" unoptimized onError={() => setThumbnailFailed(true)} />}
        <span className="youtube-play-button" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 6v12l10-6z" fill="currentColor"/></svg></span>
        {thumbnailFailed && <span className="youtube-thumbnail-fallback">SJ Rainbow Rhymes · Video {number}</span>}
      </button>}
    </div>
  </article>;
}

export default function PortfolioContent() {
  const [active, setActive] = useState<Filter>("All Work");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const lightboxCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!lightbox) return;
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";
    lightboxCloseRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "Tab") {
        event.preventDefault();
        lightboxCloseRef.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", closeOnEscape); previouslyFocused?.focus(); };
  }, [lightbox]);

  const visible = (category: Filter) => active === "All Work" || active === category;

  return <main className="portfolio-page">
    <section className="portfolio-hero" aria-labelledby="portfolio-title">
      <div className="container portfolio-hero-inner">
        <div className="portfolio-hero-copy">
          <span className="portfolio-eyebrow"><span/>Our portfolio</span>
          <h1 id="portfolio-title">Selected Work.<br/><span>Real Possibilities.</span></h1>
          <p>Explore our websites, mobile application projects, creative designs, and digital content. Each project reflects our approach to turning ideas into useful, engaging digital experiences.</p>
          <div className="portfolio-hero-actions"><a className="btn btn-primary" href="#portfolio-projects">Explore Projects <span aria-hidden="true">↓</span></a><Link className="btn btn-secondary" href="/#contact">Discuss Your Project <span aria-hidden="true">↗</span></Link></div>
        </div>
        <div className="portfolio-hero-aside"><span className="portfolio-hero-mark" aria-hidden="true">✳</span><p>We turn ideas into real-world digital experiences.</p><span className="portfolio-hero-index">WEB · APPS · CREATIVE</span></div>
      </div>
    </section>

    <section className="portfolio-content" id="portfolio-projects">
      <div className="container">
        <div className="portfolio-filter-head"><div><span className="section-label">Browse the work</span><h2 className="section-title">Projects &amp; showcases</h2></div><p className="section-description">A selection of digital projects, practical applications and creative samples.</p></div>
        <div className="portfolio-filters" role="group" aria-label="Filter portfolio projects">
          {filters.map((filter) => <button key={filter} type="button" className={`portfolio-filter${active === filter ? " is-active" : ""}`} aria-pressed={active === filter} onClick={() => setActive(filter)}>{filter}</button>)}
        </div>

        {visible("Websites & Web Applications") && <div className="portfolio-project-list">
          <article className="portfolio-project portfolio-project-featured">
            <div className="project-copy"><span className="project-kicker">Website &amp; creative showcase</span><h2>SK Solar</h2><p className="project-lede">A website and creative content showcase for a solar-energy brand.</p><p>This project brings together a solar-energy business website with related promotional poster designs and video samples.</p><div className="project-deliverables"><h3>Selected deliverables</h3><ul><li>Website design and development showcase</li><li>Solar-related promotional poster designs</li><li>Promotional video samples</li></ul></div><ProjectLink href="https://sk-solar-theta.vercel.app/"/></div>
            <div className="project-visual"><BrowserImage src="/images/demowebsites/sk-solar-webpage.png" alt="SK Solar website showing solar energy services and information" name="SK Solar website" onOpen={(src, alt) => setLightbox({src,alt})}/><span className="visual-caption">Website preview</span></div>
          </article>
          <article className="portfolio-project portfolio-project-reverse">
            <div className="project-copy"><span className="project-kicker">Website presentation &amp; visual branding</span><h2>LuxeGlow Salon</h2><p className="project-lede">A salon website concept and creative design showcase focused on presenting beauty services through an elegant digital experience.</p><p>The website presentation is paired with two supporting promotional designs.</p><div className="project-deliverables"><h3>Selected deliverables</h3><ul><li>Salon website presentation</li><li>Two supporting poster designs</li></ul></div><ProjectLink href="https://luxeglow-salon-wlob67g.gamma.site/"/></div>
            <div className="project-visual"><BrowserImage src="/images/demowebsites/luxeglow-webpage.png" alt="LuxeGlow Salon website presentation" name="LuxeGlow Salon" onOpen={(src, alt) => setLightbox({src,alt})}/><span className="visual-caption">Website presentation</span></div>
          </article>
          <article className="portfolio-project">
            <div className="project-copy"><span className="project-kicker">Website &amp; creative showcase</span><h2>Brew &amp; Bloom Café</h2><p className="project-lede">A café website showcase combining an inviting online presentation with supporting promotional design.</p><p>The café website and its coffee-themed poster are presented together as a compact visual showcase.</p><div className="project-deliverables"><h3>Selected deliverables</h3><ul><li>Café website presentation</li><li>Supporting promotional poster design</li></ul></div><ProjectLink href="https://brew-and-bloom-phi.vercel.app/"/></div>
            <div className="project-visual"><BrowserImage src="/images/demowebsites/brew-and-bloom-page.png" alt="Brew & Bloom Café website preview" name="Brew & Bloom Café" onOpen={(src, alt) => setLightbox({src,alt})}/><span className="visual-caption">Website preview</span></div>
          </article>
          <article className="portfolio-project portfolio-project-reverse corp-project">
            <div className="project-copy"><span className="project-kicker">Web application</span><h2>CorpReserve</h2><p className="project-lede">Meeting Room Booking Application</p><p>A web application project showcasing meeting-room booking workflows and a structured interface for managing reservations.</p><div className="project-deliverables"><h3>Application walkthrough</h3><ul><li>Login and dashboard screens</li><li>Create Booking and My Bookings screens</li><li>Meeting-room reservation demo video</li></ul></div><ProjectLink href="https://corp-reserve.vercel.app/">View Application</ProjectLink></div>
            <div className="project-visual"><BrowserImage src="/images/demowebsites/meeting-room/dashboard.png" alt="CorpReserve dashboard interface" name="CorpReserve dashboard" onOpen={(src, alt) => setLightbox({src,alt})}/><span className="visual-caption">Application dashboard</span></div>
            <div className="corp-walkthrough"><div className="subsection-heading"><div><span className="project-kicker">Interface walkthrough</span><h3>Inside CorpReserve</h3></div><p>Four supplied application screens show the main reservation journey.</p></div><div className="corp-screen-grid">{corpScreens.map((screen) => <button className="corp-screen" key={screen.title} type="button" onClick={() => setLightbox({src:screen.src,alt:screen.alt})} aria-label={`Enlarge ${screen.title} screen`}><span className="corp-screen-frame"><Image src={screen.src} alt={screen.alt} fill sizes="(max-width: 760px) 90vw, 500px" /></span><strong>{screen.title}</strong></button>)}</div>
              <div className="corp-media-grid"><div className="portfolio-video-card"><h4>Application demo</h4><video controls preload="none" playsInline poster="/images/Thumbnails/Smart Meeting Room Booking System.png" aria-label="CorpReserve web application demo video"><source src="/images/demowebsites/meeting-room/corp-reserve-demo.mp4" type="video/mp4"/>Your browser does not support embedded video.</video></div><div className="architecture-card"><h4>Supplied architecture diagram</h4><Image src="/images/demowebsites/meeting-room/meeting-room-architecture.svg" alt="Supplied CorpReserve meeting room booking system architecture diagram" width={1200} height={650} sizes="(max-width: 760px) 90vw, 560px"/><p>Architecture diagram provided with the project assets.</p></div></div>
            </div>
          </article>
        </div>}

        {visible("Android Application") && <section className="android-case" aria-labelledby="android-title"><div className="android-intro"><span className="project-kicker">Android application · practical project</span><h2 id="android-title">Rythu Bazar Billing App</h2><p className="project-lede">Making everyday market billing more manageable.</p><p>A practical Android application developed to support my mother with daily market billing and price calculations for rice and vegetables. The screens show price entry, bill calculations, saved bills and app settings.</p><div className="project-deliverables"><h3>Project status</h3><p>Android application showcase</p></div></div><div className="android-screens">{appScreens.map((screen) => <button className="android-screen" key={screen.title} type="button" onClick={() => setLightbox({src:screen.src,alt:screen.alt})} aria-label={`Enlarge ${screen.title} application screenshot`}><span className="phone-frame"><span className="phone-speaker"/><Image src={screen.src} alt={screen.alt} fill sizes="(max-width: 560px) 65vw, 210px"/></span><strong>{screen.title}</strong></button>)}</div><p className="android-note">Screenshots from the application. No demo video is available yet.</p></section>}

        {visible("Creative Design") && <section className="portfolio-gallery-section" aria-labelledby="creative-title"><div className="subsection-heading"><div><span className="section-label">Creative design</span><h2 className="section-title" id="creative-title">Selected visual work</h2></div><p className="section-description">Promotional designs and creative samples from the portfolio.</p></div><PosterGallery onOpen={(src,alt) => setLightbox({src,alt})}/></section>}

        {visible("Video & Content") && <section className="portfolio-video-section" aria-labelledby="video-title"><div className="subsection-heading"><div><span className="section-label">Video &amp; content</span><h2 className="section-title" id="video-title">Moving ideas forward</h2></div><p className="section-description">Promotional video samples and a web application demo, presented with native playback controls.</p></div><h3 className="video-group-title">Promotional video samples <span>SK Solar</span></h3><div className="video-grid"><div className="portfolio-video-card"><video controls preload="none" playsInline poster="/images/Thumbnails/SJSolar_Thumbnail2.png" aria-label="SK Solar promotional video sample: current bill too high"><source src="/images/content/sk_solar_promotionalVideo.mp4" type="video/mp4"/>Your browser does not support embedded video.</video><p>SK Solar · promotional video sample</p></div><div className="portfolio-video-card"><video controls preload="none" playsInline poster="/images/Thumbnails/SJSolar_Thumbnail1.png" aria-label="SK Solar promotional video sample: high electricity bills"><source src="/images/content/sk-solar-promotionalvideo2.mp4" type="video/mp4"/>Your browser does not support embedded video.</video><p>SK Solar · promotional video sample</p></div></div>
          <p className="video-app-note">The CorpReserve application demo is included in its case study above.</p>
          <section className="youtube-channel-section" aria-labelledby="youtube-channel-title">
            <div className="youtube-section-heading"><div><span className="section-label">SJ Rainbow Rhymes</span><h3 id="youtube-channel-title">From Our YouTube Channel</h3></div><p>Discover videos from SJ Rainbow Rhymes.</p></div>
            <div className="youtube-video-grid"><YouTubeVideo videoId="Wt-xj8Xp_ho" number={1}/><YouTubeVideo videoId="3y51i91QR8I" number={2}/></div>
            <div className="youtube-channel-action"><a className="btn btn-primary" href={portfolioSocialLinks.youtubeChannel} target="_blank" rel="noopener noreferrer">View All Videos on YouTube <span aria-hidden="true">↗</span></a></div>
          </section>
        </section>}
      </div>
    </section>
    <section className="portfolio-cta"><div className="container portfolio-cta-inner"><div><span className="section-label">Have something in mind?</span><h2>Let’s make it real.</h2><p>Tell us about your idea and we’ll explore the right digital approach. <Link href="/#services">Explore our services</Link>.</p></div><Link href="/#contact" className="btn btn-primary">Discuss Your Project <span aria-hidden="true">↗</span></Link></div></section>

    {lightbox && <div className="portfolio-lightbox" role="dialog" aria-modal="true" aria-label={lightbox.alt} onMouseDown={(event) => { if (event.target === event.currentTarget) setLightbox(null); }}><button ref={lightboxCloseRef} type="button" className="lightbox-close" aria-label="Close enlarged image" onClick={() => setLightbox(null)}>×</button><div className="lightbox-content"><Image src={lightbox.src} alt={lightbox.alt} fill sizes="95vw" priority/></div></div>}
  </main>;
}
