import React from 'react';

function SalesPage() {
  const styles = {
    body: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      lineHeight: 1.6,
      color: '#333',
      margin: 0,
      padding: 0
    },
    hero: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '100px 20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    heroContent: {
      maxWidth: '800px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2
    },
    logo: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      marginBottom: '30px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
    },
    heroH1: {
      fontSize: '3.5em',
      fontWeight: 700,
      marginBottom: '20px',
      lineHeight: 1.2
    },
    heroP: {
      fontSize: '1.3em',
      marginBottom: '40px',
      opacity: 0.9
    },
    ctaButton: {
      display: 'inline-block',
      background: '#ff6b6b',
      color: 'white',
      padding: '20px 40px',
      textDecoration: 'none',
      borderRadius: '50px',
      fontSize: '1.2em',
      fontWeight: 600,
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 30px rgba(255, 107, 107, 0.3)',
      border: 'none',
      cursor: 'pointer'
    },
    price: {
      fontSize: '2em',
      fontWeight: 700,
      margin: '20px 0 10px'
    },
    priceSubtitle: {
      opacity: 0.8,
      fontSize: '0.9em'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    section: {
      padding: '80px 0'
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '2.5em',
      fontWeight: 600,
      marginBottom: '20px',
      color: '#2c3e50'
    },
    sectionSubtitle: {
      textAlign: 'center',
      fontSize: '1.2em',
      color: '#666',
      marginBottom: '60px',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    examplesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      marginTop: '60px'
    },
    exampleCard: {
      background: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease'
    },
    exampleImage: {
      height: '250px',
      position: 'relative',
      overflow: 'hidden'
    },
    browserBar: {
      background: '#f8f9fa',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: '1px solid #e0e0e0'
    },
    browserTitle: {
      fontSize: '1em',
      color: '#2c3e50',
      fontWeight: 600
    },
    mockPage: {
      padding: '20px 15px',
      height: 'calc(100% - 40px)',
      overflow: 'hidden'
    },
    mockPageH3: {
      fontSize: '0.9em',
      marginBottom: '12px',
      color: '#333'
    },
    mockLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginBottom: '20px'
    },
    mockLink: {
      background: '#f8f9fa',
      padding: '8px 12px',
      borderRadius: '8px',
      fontSize: '0.8em',
      color: '#666',
      borderLeft: '3px solid #667eea'
    },
    exampleInfo: {
      padding: '25px'
    },
    exampleInfoH4: {
      fontSize: '1.3em',
      marginBottom: '12px',
      color: '#2c3e50'
    },
    exampleInfoP: {
      color: '#666',
      fontSize: '0.95em',
      lineHeight: 1.5,
      marginBottom: '15px'
    },
    exampleCategories: {
      fontSize: '0.85em',
      color: '#999',
      fontStyle: 'italic'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      marginTop: '60px'
    },
    feature: {
      textAlign: 'center',
      padding: '40px 30px',
      borderRadius: '15px',
      background: 'white',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease'
    },
    featureIcon: {
      fontSize: '3em',
      marginBottom: '20px',
      display: 'block'
    },
    featureH3: {
      fontSize: '1.5em',
      marginBottom: '15px',
      color: '#2c3e50'
    },
    featureP: {
      color: '#666',
      lineHeight: 1.6
    },
    themesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      marginTop: '60px'
    },
    themeCard: {
      background: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease'
    },
    themePreview: {
      height: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.2em',
      fontWeight: 600
    },
    themeInfo: {
      padding: '25px'
    },
    themeInfoH4: {
      fontSize: '1.3em',
      marginBottom: '10px',
      color: '#2c3e50'
    },
    themeInfoP: {
      color: '#666',
      fontSize: '0.95em'
    },
    steps: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      marginTop: '60px'
    },
    step: {
      textAlign: 'center',
      position: 'relative'
    },
    stepNumber: {
      width: '60px',
      height: '60px',
      background: '#667eea',
      color: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5em',
      fontWeight: 700,
      margin: '0 auto 20px'
    },
    stepH4: {
      fontSize: '1.3em',
      marginBottom: '15px',
      color: '#2c3e50'
    },
    stepP: {
      color: '#666'
    },
    testimonial: {
      background: 'white',
      padding: '40px',
      borderRadius: '15px',
      marginBottom: '30px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
    },
    testimonialText: {
      fontStyle: 'italic',
      fontSize: '1.1em',
      marginBottom: '20px',
      color: '#555'
    },
    testimonialAuthor: {
      fontWeight: 600,
      color: '#2c3e50'
    },
    pricingCard: {
      maxWidth: '400px',
      margin: '0 auto',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '60px 40px',
      borderRadius: '20px',
      position: 'relative',
      overflow: 'hidden'
    },
    pricingTitle: {
      fontSize: '2em',
      margin: '40px 0 20px'
    },
    pricingPrice: {
      fontSize: '3.5em',
      fontWeight: 700,
      marginBottom: '10px'
    },
    pricingSubtitle: {
      opacity: 0.9,
      marginBottom: '40px'
    },
    pricingFeatures: {
      listStyle: 'none',
      marginBottom: '40px',
      padding: 0
    },
    pricingFeaturesLi: {
      padding: '10px 0',
      fontSize: '1.1em'
    },
    faqItem: {
      background: 'white',
      marginBottom: '20px',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
    },
    faqQuestion: {
      padding: '25px',
      fontWeight: 600,
      color: '#2c3e50',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      width: '100%',
      textAlign: 'left',
      fontSize: '1.1em'
    },
    faqAnswer: {
      padding: '0 25px 25px',
      color: '#666',
      lineHeight: 1.6,
      display: 'none'
    },
    footerCta: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '80px 20px'
    },
    footerCtaH2: {
      fontSize: '2.5em',
      marginBottom: '20px'
    },
    footerCtaP: {
      fontSize: '1.2em',
      marginBottom: '40px',
      opacity: 0.9
    }
  };

  const handleFaqClick = (e) => {
    const answer = e.target.nextElementSibling;
    if (answer) {
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    }
  };

  const handleCtaHover = (e, isHover) => {
    if (isHover) {
      e.target.style.transform = 'translateY(-3px)';
      e.target.style.boxShadow = '0 15px 40px rgba(255, 107, 107, 0.4)';
    } else {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = '0 10px 30px rgba(255, 107, 107, 0.3)';
    }
  };

  return (
    <div style={styles.body}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <img 
            src="/logo_white_bg_refined.jpeg" 
            alt="Timeless Links Logo" 
            style={styles.logo}
          />
          <h1 style={styles.heroH1}>Create Beautiful Bookmark Pages in Minutes</h1>
          <p style={styles.heroP}>Organize your favorite websites with stunning, professional designs. No coding required!</p>
          <div style={styles.price}>$29</div>
          <div style={styles.priceSubtitle}>One-time purchase • Instant download</div>
          <a 
            href="#purchase" 
            style={styles.ctaButton}
            onMouseEnter={(e) => handleCtaHover(e, true)}
            onMouseLeave={(e) => handleCtaHover(e, false)}
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* Visual Examples Section */}
      <section style={{...styles.section, background: '#f8f9fa'}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Perfect for Every Lifestyle</h2>
          <p style={styles.sectionSubtitle}>See how different people use our bookmark pages to stay organized</p>
          
          <div style={styles.examplesGrid}>
            {/* Student Example */}
            <div style={styles.exampleCard}>
              <div style={styles.exampleImage}>
                <div style={styles.browserBar}>
                  <div style={styles.browserTitle}>Sarah's Study Hub</div>
                </div>
                <div style={{...styles.mockPage, background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)'}}>
                  <h3 style={styles.mockPageH3}>📚 Study Resources</h3>
                  <div style={styles.mockLinks}>
                    <div style={styles.mockLink}>📖 Khan Academy</div>
                    <div style={styles.mockLink}>🎓 Coursera</div>
                    <div style={styles.mockLink}>📝 Google Docs</div>
                  </div>
                  <h3 style={styles.mockPageH3}>🏫 University Links</h3>
                  <div style={styles.mockLinks}>
                    <div style={styles.mockLink}>🎯 Student Portal</div>
                    <div style={styles.mockLink}>📅 Class Schedule</div>
                  </div>
                </div>
              </div>
              <div style={styles.exampleInfo}>
                <h4 style={styles.exampleInfoH4}>👩‍🎓 College Student</h4>
                <p style={styles.exampleInfoP}>"Perfect for keeping all my study materials, university portals, and research links organized in one beautiful place."</p>
                <div style={styles.exampleCategories}>Study Tools • University • Research • Notes</div>
              </div>
            </div>

            {/* Business Example */}
            <div style={styles.exampleCard}>
              <div style={styles.exampleImage}>
                <div style={styles.browserBar}>
                  <div style={styles.browserTitle}>Mike's Business Dashboard</div>
                </div>
                <div style={{...styles.mockPage, background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', color: 'white'}}>
                  <h3 style={{...styles.mockPageH3, color: '#fbbf24'}}>💼 Client Work</h3>
                  <div style={styles.mockLinks}>
                    <div style={{...styles.mockLink, background: 'rgba(51, 65, 85, 0.8)', color: '#e2e8f0', borderLeftColor: '#fbbf24'}}>👥 Client Portal</div>
                    <div style={{...styles.mockLink, background: 'rgba(51, 65, 85, 0.8)', color: '#e2e8f0', borderLeftColor: '#fbbf24'}}>📊 Analytics</div>
                    <div style={{...styles.mockLink, background: 'rgba(51, 65, 85, 0.8)', color: '#e2e8f0', borderLeftColor: '#fbbf24'}}>💰 Invoicing</div>
                  </div>
                  <h3 style={{...styles.mockPageH3, color: '#fbbf24'}}>🛠️ Business Tools</h3>
                  <div style={styles.mockLinks}>
                    <div style={{...styles.mockLink, background: 'rgba(51, 65, 85, 0.8)', color: '#e2e8f0', borderLeftColor: '#fbbf24'}}>📧 Business Email</div>
                    <div style={{...styles.mockLink, background: 'rgba(51, 65, 85, 0.8)', color: '#e2e8f0', borderLeftColor: '#fbbf24'}}>🗓️ Scheduling</div>
                  </div>
                </div>
              </div>
              <div style={styles.exampleInfo}>
                <h4 style={styles.exampleInfoH4}>💼 Freelancer</h4>
                <p style={styles.exampleInfoP}>"Keeps all my client portals, invoicing tools, and business resources organized. The dark theme looks so professional!"</p>
                <div style={styles.exampleCategories}>Clients • Tools • Finance • Communication</div>
              </div>
            </div>

            {/* Creative Example */}
            <div style={styles.exampleCard}>
              <div style={styles.exampleImage}>
                <div style={styles.browserBar}>
                  <div style={styles.browserTitle}>Emma's Creative Space</div>
                </div>
                <div style={{...styles.mockPage, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 100%)', color: 'white'}}>
                  <h3 style={{...styles.mockPageH3, color: 'white'}}>🎨 Design Inspiration</h3>
                  <div style={styles.mockLinks}>
                    <div style={{...styles.mockLink, background: 'rgba(255, 255, 255, 0.2)', color: 'white', borderLeftColor: 'white'}}>🌈 Behance</div>
                    <div style={{...styles.mockLink, background: 'rgba(255, 255, 255, 0.2)', color: 'white', borderLeftColor: 'white'}}>📌 Pinterest</div>
                    <div style={{...styles.mockLink, background: 'rgba(255, 255, 255, 0.2)', color: 'white', borderLeftColor: 'white'}}>🎭 Dribbble</div>
                  </div>
                  <h3 style={{...styles.mockPageH3, color: 'white'}}>🛠️ Creative Tools</h3>
                  <div style={styles.mockLinks}>
                    <div style={{...styles.mockLink, background: 'rgba(255, 255, 255, 0.2)', color: 'white', borderLeftColor: 'white'}}>✏️ Figma</div>
                    <div style={{...styles.mockLink, background: 'rgba(255, 255, 255, 0.2)', color: 'white', borderLeftColor: 'white'}}>📷 Unsplash</div>
                  </div>
                </div>
              </div>
              <div style={styles.exampleInfo}>
                <h4 style={styles.exampleInfoH4}>🎨 Graphic Designer</h4>
                <p style={styles.exampleInfoP}>"The gradient theme matches my creative vibe perfectly. All my inspiration sites and design tools in one gorgeous page."</p>
                <div style={styles.exampleCategories}>Inspiration • Design Tools • Resources • Portfolio</div>
              </div>
            </div>

            {/* Family Example */}
            <div style={styles.exampleCard}>
              <div style={styles.exampleImage}>
                <div style={styles.browserBar}>
                  <div style={styles.browserTitle}>The Johnson Family Hub</div>
                </div>
                <div style={{...styles.mockPage, background: '#ffffff'}}>
                  <h3 style={styles.mockPageH3}>🏠 Family Life</h3>
                  <div style={styles.mockLinks}>
                    <div style={{...styles.mockLink, background: '#f1f5f9', borderLeftColor: '#10b981'}}>🍕 Meal Planning</div>
                    <div style={{...styles.mockLink, background: '#f1f5f9', borderLeftColor: '#10b981'}}>🎬 Family Netflix</div>
                    <div style={{...styles.mockLink, background: '#f1f5f9', borderLeftColor: '#10b981'}}>🛒 Online Shopping</div>
                  </div>
                  <h3 style={styles.mockPageH3}>📚 Kids' Learning</h3>
                  <div style={styles.mockLinks}>
                    <div style={{...styles.mockLink, background: '#f1f5f9', borderLeftColor: '#10b981'}}>🎮 Educational Games</div>
                    <div style={{...styles.mockLink, background: '#f1f5f9', borderLeftColor: '#10b981'}}>📖 Reading Apps</div>
                  </div>
                </div>
              </div>
              <div style={styles.exampleInfo}>
                <h4 style={styles.exampleInfoH4}>👨‍👩‍👧‍👦 Busy Parents</h4>
                <p style={styles.exampleInfoP}>"Finally, one organized place for all our family websites - from meal planning to the kids' educational sites."</p>
                <div style={styles.exampleCategories}>Family • Shopping • Kids • Entertainment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Why Choose Our Bookmark Builder?</h2>
          <p style={styles.sectionSubtitle}>Everything you need to create organized, beautiful bookmark pages that work offline</p>
          
          <div style={styles.featuresGrid}>
            <div style={styles.feature}>
              <span style={styles.featureIcon}>🚀</span>
              <h3 style={styles.featureH3}>No Coding Required</h3>
              <p style={styles.featureP}>Simple form-based builder. Just fill in your links and descriptions - we handle the rest!</p>
            </div>
            
            <div style={styles.feature}>
              <span style={styles.featureIcon}>🎨</span>
              <h3 style={styles.featureH3}>4 Professional Themes</h3>
              <p style={styles.featureP}>Corporate Blue, Executive Dark, Minimalist White, and Sunset Gradient themes included.</p>
            </div>
            
            <div style={styles.feature}>
              <span style={styles.featureIcon}>📱</span>
              <h3 style={styles.featureH3}>Mobile Responsive</h3>
              <p style={styles.featureP}>Your bookmark pages look perfect on desktop, tablet, and mobile devices.</p>
            </div>
            
            <div style={styles.feature}>
              <span style={styles.featureIcon}>🔍</span>
              <h3 style={styles.featureH3}>Built-in Search</h3>
              <p style={styles.featureP}>Find your bookmarks instantly with the integrated search functionality.</p>
            </div>
            
            <div style={styles.feature}>
              <span style={styles.featureIcon}>💾</span>
              <h3 style={styles.featureH3}>Works Offline</h3>
              <p style={styles.featureP}>No subscriptions, no accounts. Your bookmark page works anywhere, anytime.</p>
            </div>
            
            <div style={styles.feature}>
              <span style={styles.featureIcon}>⚡</span>
              <h3 style={styles.featureH3}>Instant Setup</h3>
              <p style={styles.featureP}>Download and start building immediately. Create your page in under 10 minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Preview */}
      <section style={{...styles.section, background: '#f8f9fa'}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>4 Stunning Themes Included</h2>
          <p style={styles.sectionSubtitle}>Each theme is professionally designed and fully customizable with your content</p>
          
          <div style={styles.themesGrid}>
            <div style={styles.themeCard}>
              <div style={{...styles.themePreview, background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'}}>Corporate Blue</div>
              <div style={styles.themeInfo}>
                <h4 style={styles.themeInfoH4}>Corporate Blue</h4>
                <p style={styles.themeInfoP}>Professional design perfect for business use. Clean, trustworthy, and organized.</p>
              </div>
            </div>
            
            <div style={styles.themeCard}>
              <div style={{...styles.themePreview, background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'}}>Executive Dark</div>
              <div style={styles.themeInfo}>
                <h4 style={styles.themeInfoH4}>Executive Dark</h4>
                <p style={styles.themeInfoP}>Sophisticated dark theme with gold accents. Premium feel for executive use.</p>
              </div>
            </div>
            
            <div style={styles.themeCard}>
              <div style={{...styles.themePreview, background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)', color: '#333'}}>Minimalist White</div>
              <div style={styles.themeInfo}>
                <h4 style={styles.themeInfoH4}>Minimalist White</h4>
                <p style={styles.themeInfoP}>Clean, minimal design with lots of white space. Perfect for distraction-free browsing.</p>
              </div>
            </div>
            
            <div style={styles.themeCard}>
              <div style={{...styles.themePreview, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 100%)'}}>Sunset Gradient</div>
              <div style={styles.themeInfo}>
                <h4 style={styles.themeInfoH4}>Sunset Gradient</h4>
                <p style={styles.themeInfoP}>Vibrant, energetic design with animated gradients. Great for creative professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{...styles.section, background: 'white'}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>How It Works</h2>
          <p style={styles.sectionSubtitle}>Get your custom bookmark page in 3 simple steps</p>
          
          <div style={styles.steps}>
            <div style={styles.step}>
              <div style={styles.stepNumber}>1</div>
              <h4 style={styles.stepH4}>Fill Out Simple Forms</h4>
              <p style={styles.stepP}>Just type your website names and URLs into easy forms - like filling out a survey!</p>
            </div>
            
            <div style={styles.step}>
              <div style={styles.stepNumber}>2</div>
              <h4 style={styles.stepH4}>Click "Create My Page"</h4>
              <p style={styles.stepP}>One click automatically downloads your personalized bookmark page to your computer.</p>
            </div>
            
            <div style={styles.step}>
              <div style={styles.stepNumber}>3</div>
              <h4 style={styles.stepH4}>Double-Click to Open</h4>
              <p style={styles.stepP}>Find the downloaded file and double-click it. It opens in your web browser instantly - bookmark it!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{...styles.section, background: '#f8f9fa'}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>What People Are Saying</h2>
          
          <div style={styles.testimonial}>
            <div style={styles.testimonialText}>"This saved me hours of trying to organize my bookmarks. The themes are gorgeous and it works perfectly offline!"</div>
            <div style={styles.testimonialAuthor}>- Sarah K., Marketing Manager</div>
          </div>
          
          <div style={styles.testimonial}>
            <div style={styles.testimonialText}>"Finally, a bookmark solution that doesn't require a subscription. Set it up once and it just works!"</div>
            <div style={styles.testimonialAuthor}>- Mike D., Freelance Developer</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{...styles.section, background: 'white', textAlign: 'center'}} id="purchase">
        <div style={styles.container}>
          <div style={styles.pricingCard}>
            <div style={{
              content: '⭐ LAUNCH SPECIAL',
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#ff6b6b',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '0.8em',
              fontWeight: '600'
            }}>
              ⭐ LAUNCH SPECIAL
            </div>
            
            <h3 style={styles.pricingTitle}>Complete Package</h3>
            <div style={styles.pricingPrice}>$29</div>
            <div style={styles.pricingSubtitle}>One-time purchase, lifetime access</div>
            
            <ul style={styles.pricingFeatures}>
              {[
                'Visual bookmark builder (no coding!)',
                '4 professional themes included',
                'Works like any website - just double-click!',
                'Mobile responsive designs',
                'Built-in search functionality',
                'Works offline - no subscriptions',
                'Step-by-step video tutorial',
                'Quick start PDF guide',
                '30-day money-back guarantee'
              ].map((