import React from 'react';
import { playClickSound } from './utils/sound';

function Examples() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', lineHeight: 1.6, color: '#333' }}>
      {/* Header Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <div style={{ textAlign: 'left' }}>
              <a href="/" onClick={(e) => { e.preventDefault(); playClickSound(); setTimeout(() => window.location.href='/', 160); }} style={{ display: 'inline-block', background: 'rgba(255,255,255,0.12)', color: 'white', padding: '8px 14px', borderRadius: 10, textDecoration: 'none', fontWeight: 700 }}>← Return to Sales Page</a>
            </div>
            <div style={{ flex: 1 }} />
          </div>
          <h1 style={{ fontSize: '3em', fontWeight: 700, marginBottom: '20px' }}>
            See It In Action
          </h1>
          <p style={{ fontSize: '1.2em', opacity: 0.9 }}>
            Real examples of how different people organize their bookmarks with our themes
          </p>
        </div>
      </section>

      {/* Visual Examples Section */}
      <section style={{ padding: '80px 20px', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5em', fontWeight: 600, marginBottom: '20px', color: '#2c3e50' }}>
            Perfect for Every Lifestyle
          </h2>
          <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#666', marginBottom: '60px' }}>
            See how different people use our bookmark pages to stay organized
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {/* Student Example */}
            <div id="student" style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ height: '250px', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                  background: '#f8f9fa',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid #e0e0e0'
                }}>
                  <div style={{ fontSize: '1em', color: '#2c3e50', fontWeight: 600 }}>Sarah's Study Hub</div>
                </div>
                <div style={{
                  padding: '20px 15px',
                  height: 'calc(100% - 40px)',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)'
                }}>
                  <h3 style={{ fontSize: '0.9em', marginBottom: '12px', color: '#333' }}>📚 Study Resources</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                    <div style={{
                      background: '#f8f9fa',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8em',
                      color: '#666',
                      borderLeft: '3px solid #667eea'
                    }}>📖 Khan Academy</div>
                    <div style={{
                      background: '#f8f9fa',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8em',
                      color: '#666',
                      borderLeft: '3px solid #667eea'
                    }}>🎓 Coursera</div>
                    <div style={{
                      background: '#f8f9fa',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8em',
                      color: '#666',
                      borderLeft: '3px solid #667eea'
                    }}>📝 Google Docs</div>
                  </div>
                  <h3 style={{ fontSize: '0.9em', marginBottom: '12px', color: '#333' }}>🏫 University Links</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{
                      background: '#f8f9fa',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8em',
                      color: '#666',
                      borderLeft: '3px solid #667eea'
                    }}>🎯 Student Portal</div>
                    <div style={{
                      background: '#f8f9fa',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8em',
                      color: '#666',
                      borderLeft: '3px solid #667eea'
                    }}>📅 Class Schedule</div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '25px' }}>
                <h4 style={{ fontSize: '1.3em', marginBottom: '12px', color: '#2c3e50' }}>👩‍🎓 College Student</h4>
                <p style={{ color: '#666', fontSize: '0.95em', lineHeight: 1.5, marginBottom: '15px' }}>
                  "Perfect for keeping all my study materials, university portals, and research links organized in one beautiful place."
                </p>
                <div style={{ fontSize: '0.85em', color: '#999', fontStyle: 'italic' }}>
                  Study Tools • University • Research • Notes
                </div>
              </div>
            </div>

            {/* Business Example */}
            <div id="freelancer" style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ height: '250px', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                  background: '#f8f9fa',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid #e0e0e0'
                }}>
                  <div style={{ fontSize: '1em', color: '#2c3e50', fontWeight: 600 }}>Mike's Business Dashboard</div>
                </div>
                <div style={{
                  padding: '20px 15px',
                  height: 'calc(100% - 40px)',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                  color: 'white'
                }}>
                  <h3 style={{ fontSize: '0.9em', marginBottom: '12px', color: '#fbbf24' }}>💼 Client Work</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                    <div style={{
                      background: 'rgba(51, 65, 85, 0.8)',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8em',
                      color: '#e2e8f0',
                      borderLeft: '3px solid #fbbf24'
                    }}>👥 Client Portal</div>
                    <div style={{
                      background: 'rgba(51, 65, 85, 0.8)',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8em',
                      color: '#e2e8f0',
                      borderLeft: '3px solid #fbbf24'
                    }}>📊 Analytics</div>
                    <div style={{
                      background: 'rgba(51, 65, 85, 0.8)',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8em',
                      color: '#e2e8f0',
                      borderLeft: '3px solid #fbbf24'
                    }}>💰 Invoicing</div>
                  </div>
                  <h3 style={{ fontSize: '0.9em', marginBottom: '12px', color: '#fbbf24' }}>🛠️ Business Tools</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{
                      background: 'rgba(51, 65, 85, 0.8)',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8em',
                      color: '#e2e8f0',
                      borderLeft: '3px solid #fbbf24'
                    }}>📧 Business Email</div>
                    <div style={{
                      background: 'rgba(51, 65, 85, 0.8)',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8em',
                      color: '#e2e8f0',
                      borderLeft: '3px solid #fbbf24'
                    }}>🗓️ Scheduling</div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '25px' }}>
                <h4 style={{ fontSize: '1.3em', marginBottom: '12px', color: '#2c3e50' }}>💼 Freelancer</h4>
                <p style={{ color: '#666', fontSize: '0.95em', lineHeight: 1.5, marginBottom: '15px' }}>
                  "Keeps all my client portals, invoicing tools, and business resources organized. The dark theme looks so professional!"
                </p>
                <div style={{ fontSize: '0.85em', color: '#999', fontStyle: 'italic' }}>
                  Clients • Tools • Finance • Communication
                </div>
              </div>
            </div>

            {/* Creative Example */}
            <div id="designer" style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ height: '250px', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                  background: '#f8f9fa',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid #e0e0e0'
                }}>
                  <div style={{ fontSize: '1em', color: '#2c3e50', fontWeight: 600 }}>Emma's Creative Space</div>
                </div>
                <div style={{
                  padding: '20px 15px',
                  height: 'calc(100% - 40px)',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 100%)',
                  color: 'white'
                }}>
                  <h3 style={{ fontSize: '0.9em', marginBottom: '12px', color: 'white' }}>🎨 Design Inspiration</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8em',
                      color: 'white',
                      borderLeft: '3px solid white'
                    }}>🌈 Behance</div>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8em',
                      color: 'white',
                      borderLeft: '3px solid white'
                    }}>📌 Pinterest</div>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8em',
                      color: 'white',
                      borderLeft: '3px solid white'
                    }}>🎭 Dribbble</div>
                  </div>
                  <h3 style={{ fontSize: '0.9em', marginBottom: '12px', color: 'white' }}>🛠️ Creative Tools</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8em',
                      color: 'white',
                      borderLeft: '3px solid white'
                    }}>✏️ Figma</div>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8em',
                      color: 'white',
                      borderLeft: '3px solid white'
                    }}>📷 Unsplash</div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '25px' }}>
                <h4 style={{ fontSize: '1.3em', marginBottom: '12px', color: '#2c3e50' }}>🎨 Graphic Designer</h4>
                <p style={{ color: '#666', fontSize: '0.95em', lineHeight: 1.5, marginBottom: '15px' }}>
                  "The gradient theme matches my creative vibe perfectly. All my inspiration sites and design tools in one gorgeous page."
                </p>
                <div style={{ fontSize: '0.85em', color: '#999', fontStyle: 'italic' }}>
                  Inspiration • Design Tools • Resources • Portfolio
                </div>
              </div>
            </div>

            {/* Family Example */}
            <div id="family" style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ height: '250px', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                  background: '#f8f9fa',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid #e0e0e0'
                }}>
                  <div style={{ fontSize: '1em', color: '#2c3e50', fontWeight: 600 }}>The Johnson Family Hub</div>
                </div>
                <div style={{
                  padding: '20px 15px',
                  height: 'calc(100% - 40px)',
                  overflow: 'hidden',
                  background: '#ffffff'
                }}>
                  <h3 style={{ fontSize: '0.9em', marginBottom: '12px', color: '#333' }}>🏠 Family Life</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                    <div style={{
                      background: '#f1f5f9',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8em',
                      color: '#666',
                      borderLeft: '3px solid #10b981'
                    }}>🍕 Meal Planning</div>
                    <div style={{
                      background: '#f1f5f9',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8em',
                      color: '#666',
                      borderLeft: '3px solid #10b981'
                    }}>🎬 Family Netflix</div>
                    <div style={{
                      background: '#f1f5f9',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8em',
                      color: '#666',
                      borderLeft: '3px solid #10b981'
                    }}>🛒 Online Shopping</div>
                  </div>
                  <h3 style={{ fontSize: '0.9em', marginBottom: '12px', color: '#333' }}>📚 Kids' Learning</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{
                      background: '#f1f5f9',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8em',
                      color: '#666',
                      borderLeft: '3px solid #10b981'
                    }}>🎮 Educational Games</div>
                    <div style={{
                      background: '#f1f5f9',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8em',
                      color: '#666',
                      borderLeft: '3px solid #10b981'
                    }}>📖 Reading Apps</div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '25px' }}>
                <h4 style={{ fontSize: '1.3em', marginBottom: '12px', color: '#2c3e50' }}>👨‍👩‍👧‍👦 Busy Parents</h4>
                <p style={{ color: '#666', fontSize: '0.95em', lineHeight: 1.5, marginBottom: '15px' }}>
                  "Finally, one organized place for all our family websites - from meal planning to the kids' educational sites."
                </p>
                <div style={{ fontSize: '0.85em', color: '#999', fontStyle: 'italic' }}>
                  Family • Shopping • Kids • Entertainment
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Preview Section */}
      <section style={{ padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5em', fontWeight: 600, marginBottom: '20px', color: '#2c3e50' }}>
            4 Stunning Themes Included
          </h2>
          <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#666', marginBottom: '60px' }}>
            Each theme is professionally designed and fully customizable with your content
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2em',
                fontWeight: 600
              }}>
                Corporate Blue
              </div>
              <div style={{ padding: '25px' }}>
                <h4 style={{ fontSize: '1.3em', marginBottom: '10px', color: '#2c3e50' }}>Corporate Blue</h4>
                <p style={{ color: '#666', fontSize: '0.95em' }}>
                  Professional design perfect for business use. Clean, trustworthy, and organized.
                </p>
              </div>
            </div>
            
            <div style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2em',
                fontWeight: 600
              }}>
                Executive Dark
              </div>
              <div style={{ padding: '25px' }}>
                <h4 style={{ fontSize: '1.3em', marginBottom: '10px', color: '#2c3e50' }}>Executive Dark</h4>
                <p style={{ color: '#666', fontSize: '0.95em' }}>
                  Sophisticated dark theme with gold accents. Premium feel for executive use.
                </p>
              </div>
            </div>
            
            <div style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#333',
                fontSize: '1.2em',
                fontWeight: 600
              }}>
                Minimalist White
              </div>
              <div style={{ padding: '25px' }}>
                <h4 style={{ fontSize: '1.3em', marginBottom: '10px', color: '#2c3e50' }}>Minimalist White</h4>
                <p style={{ color: '#666', fontSize: '0.95em' }}>
                  Clean, minimal design with lots of white space. Perfect for distraction-free browsing.
                </p>
              </div>
            </div>
            
            <div style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2em',
                fontWeight: 600
              }}>
                Sunset Gradient
              </div>
              <div style={{ padding: '25px' }}>
                <h4 style={{ fontSize: '1.3em', marginBottom: '10px', color: '#2c3e50' }}>Sunset Gradient</h4>
                <p style={{ color: '#666', fontSize: '0.95em' }}>
                  Vibrant, energetic design with animated gradients. Great for creative professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white', 
        textAlign: 'center', 
        padding: '80px 20px' 
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5em', marginBottom: '20px' }}>Ready to Get Started?</h2>
          <p style={{ fontSize: '1.2em', marginBottom: '40px', opacity: 0.9 }}>
            Create your own beautiful bookmark page with any of these themes
          </p>
          <a 
            href="/"
            style={{
              display: 'inline-block',
              background: '#ff6b6b',
              color: 'white',
              padding: '15px 40px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.2em',
              fontWeight: '600',
              transition: 'transform 0.3s ease'
            }}
          >
            Get Started Today - $29
          </a>
        </div>
      </section>
    </div>
  );
}

export default Examples;