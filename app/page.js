'use client';

import { useState } from 'react';

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "FREE FIRE INDIA",
      subtitle: "The Ultimate Battle Royale Returns",
      content: [
        "🎮 Official Launch Announcement",
        "🇮🇳 Made for India, By India",
        "🔥 150 Million+ Players Expected",
        "📅 Grand Launch Strategy"
      ],
      bg: "linear-gradient(135deg, #FF4500 0%, #FF6B00 100%)"
    },
    {
      title: "Executive Summary",
      subtitle: "Why Free Fire India Matters",
      content: [
        "📊 India's Mobile Gaming Market Worth $2.8 Billion",
        "🎯 60% of Users Aged 18-34",
        "💰 Projected Revenue: $500M+ in Year 1",
        "🏆 Most Anticipated Gaming Comeback of 2024",
        "👥 Community-Driven Development",
        "🌟 Localized Content & Regional Events"
      ],
      bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
    },
    {
      title: "Market Landscape",
      subtitle: "India's Gaming Revolution",
      content: [
        "📱 500M+ Mobile Gamers in India",
        "⚡ 4G/5G Penetration: 750M+ Users",
        "💵 Average ARPU: $2.50/User/Month",
        "🎮 Battle Royale Genre: 40% Market Share",
        "📈 YoY Growth: 38% in Mobile Gaming",
        "🏙️ Tier 2/3 Cities: 65% of User Base"
      ],
      bg: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)"
    },
    {
      title: "Game Features",
      subtitle: "What Makes Free Fire India Special",
      content: [
        "🇮🇳 India-Exclusive Maps (Taj Mahal, Gateway of India)",
        "🎭 Regional Characters & Costumes",
        "🗣️ Multi-Language Support (12+ Indian Languages)",
        "⚔️ 10-Minute Fast-Paced Battles",
        "🎨 HD Graphics Optimized for Indian Devices",
        "🤝 Squad Mode & Clan System",
        "🏅 Ranked Tournaments with Cash Prizes"
      ],
      bg: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)"
    },
    {
      title: "Target Audience",
      subtitle: "Understanding Our Players",
      content: [
        "👨‍💼 Primary: Males 16-28 (58% of Users)",
        "👩‍💼 Secondary: Females 18-25 (Growing 35% YoY)",
        "🎓 Students & Young Professionals",
        "📱 Budget to Mid-Range Smartphone Users",
        "🌆 Urban & Semi-Urban Demographics",
        "💪 Competitive Gaming Enthusiasts",
        "👥 Social Gamers (Play with Friends)"
      ],
      bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Monetization Strategy",
      subtitle: "Revenue Streams",
      content: [
        "💎 In-App Purchases (Skins, Characters, Weapons)",
        "🎫 Battle Pass System (₹399/Season)",
        "📦 Loot Boxes & Mystery Rewards",
        "🎯 Sponsored Tournaments & Brand Partnerships",
        "📺 In-Game Advertising (Non-Intrusive)",
        "🏪 Exclusive Merchandise Store",
        "💳 Localized Payment Options (UPI, Paytm, GPay)"
      ],
      bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Launch Campaign",
      subtitle: "Go-To-Market Strategy",
      content: [
        "🎬 Influencer Partnerships (100+ Gaming Creators)",
        "📱 Social Media Blitz (Instagram, YouTube, Twitter)",
        "🏆 Pre-Registration Rewards (5M+ Expected)",
        "🎉 Launch Week Mega Tournament (₹1 Crore Prize)",
        "📺 TV Commercials & OTT Ads",
        "🏟️ City-Based Launch Events (Mumbai, Delhi, Bangalore)",
        "🤝 IPL & Cricket Celebrity Tie-Ups"
      ],
      bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "Competitive Advantages",
      subtitle: "Why We'll Win",
      content: [
        "⚡ 30% Lower Data Consumption vs Competitors",
        "📱 Runs Smoothly on 2GB RAM Devices",
        "🎮 Weekly Content Updates & New Modes",
        "🏅 Established Esports Ecosystem",
        "💯 Anti-Cheat System (Fair Play Guarantee)",
        "🎯 Localized Events (Diwali, Holi Special)",
        "📞 24/7 Customer Support in Local Languages"
      ],
      bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "Esports Ecosystem",
      subtitle: "Building Champions",
      content: [
        "🏆 Free Fire India Championship (₹2 Crore Prize Pool)",
        "📅 Monthly Tournaments in Every State",
        "🎓 Pro Player Development Program",
        "📺 Dedicated Streaming Platform Integration",
        "🌍 Pathway to International Competitions",
        "🏫 College & School Tournaments",
        "👥 Team Sponsorship Opportunities"
      ],
      bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      title: "Community Building",
      subtitle: "Player-First Approach",
      content: [
        "👥 Discord & Community Forums (Hindi/English)",
        "🎨 User-Generated Content Showcase",
        "📝 Regular Feedback Surveys & Implementation",
        "🎁 Community Event Rewards",
        "🌟 Top Player Recognition Program",
        "📱 Dedicated App for Clans & Social Features",
        "🎤 Monthly AMA with Development Team"
      ],
      bg: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    },
    {
      title: "Technology & Infrastructure",
      subtitle: "Built for India",
      content: [
        "🖥️ Servers in Mumbai, Delhi, Bangalore (Low Ping)",
        "⚡ CDN Optimization for Tier 2/3 Cities",
        "🔒 Data Privacy (India Data Residency Compliant)",
        "📊 Real-Time Analytics & Player Insights",
        "🛡️ DDoS Protection & Security",
        "🔄 Seamless Updates (No Long Downtime)",
        "📱 Cross-Device Progress Sync"
      ],
      bg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      title: "Partnerships & Collaborations",
      subtitle: "Strategic Alliances",
      content: [
        "📱 Device Partnerships (Xiaomi, Samsung, OnePlus)",
        "💳 Payment Partners (Paytm, PhonePe, Google Pay)",
        "🎬 Bollywood Celebrity Ambassadors",
        "🏏 IPL Team Sponsorships",
        "📺 OTT Platform Integrations (Hotstar, Prime)",
        "🎓 Educational Institution Collaborations",
        "🏪 Retail Partnerships for Gift Cards"
      ],
      bg: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)"
    },
    {
      title: "Year 1 Roadmap",
      subtitle: "What's Coming",
      content: [
        "Q1: Grand Launch + 3 New Maps",
        "Q2: First Major Tournament + 20 Characters",
        "Q3: Guild Wars Feature + Esports Season 1",
        "Q4: Year-End Championship + 50M Players Target",
        "📅 Weekly Events & Seasonal Updates",
        "🎨 Monthly Cosmetic Collections",
        "🏆 Quarterly Major Tournaments"
      ],
      bg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    {
      title: "Financial Projections",
      subtitle: "Growth Trajectory",
      content: [
        "👥 Users: 50M (Year 1) → 150M (Year 3)",
        "💰 Revenue: $500M (Y1) → $1.5B (Y3)",
        "📈 DAU Target: 15M Daily Active Users",
        "💎 ARPU Growth: $2.50 → $4.00",
        "📊 Market Share Goal: 35% in Battle Royale",
        "🎯 Conversion Rate: 8% Paying Users",
        "💵 Avg Transaction Value: ₹450"
      ],
      bg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
      title: "Social Impact",
      subtitle: "Gaming for Good",
      content: [
        "🎓 Skill Development & Esports Careers",
        "💼 Job Creation: 5,000+ Direct Jobs",
        "🏆 Scholarship Program for Pro Gamers",
        "🌱 Digital India Initiative Partner",
        "👥 Community Building & Social Connections",
        "🎨 Support for Indian Content Creators",
        "♿ Accessibility Features for All Players"
      ],
      bg: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
    },
    {
      title: "Safety & Responsibility",
      subtitle: "Player Wellbeing First",
      content: [
        "⏰ Playtime Reminders & Healthy Gaming Tips",
        "👨‍👩‍👧 Parental Controls & Family Safety",
        "🛡️ Anti-Toxicity & Reporting Systems",
        "🎓 Digital Literacy Campaigns",
        "💚 Mental Health Resources & Support",
        "⚖️ Age-Appropriate Content Rating",
        "📞 24/7 Safety Helpline"
      ],
      bg: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)"
    },
    {
      title: "Competitive Analysis",
      subtitle: "How We Stack Up",
      content: [
        "✅ Lower Data Usage than PUBG Mobile",
        "✅ More India-Specific Content than BGMI",
        "✅ Faster Match Times than COD Mobile",
        "✅ Better Optimization for Budget Phones",
        "✅ Stronger Community Features",
        "✅ More Frequent Content Updates",
        "✅ Superior Regional Language Support"
      ],
      bg: "linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)"
    },
    {
      title: "Marketing Milestones",
      subtitle: "Pre-Launch Achievements",
      content: [
        "📱 8M+ Pre-Registrations",
        "👁️ 50M+ Campaign Video Views",
        "📈 #1 Trending on Social Media",
        "🌟 100+ Influencer Partnerships Confirmed",
        "📰 500+ Media Coverages",
        "🎯 85% Positive Sentiment Analysis",
        "💬 2M+ Community Forum Members"
      ],
      bg: "linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)"
    },
    {
      title: "Call to Action",
      subtitle: "Join the Revolution",
      content: [
        "📲 Download Now: PlayStore & iOS",
        "🎁 Pre-Registration Rewards Available",
        "🏆 Launch Tournament Registration Open",
        "👥 Build Your Squad Today",
        "📱 Follow: @FreeFireIndia",
        "💬 Join Discord Community",
        "🔔 Enable Notifications for Exclusive Drops"
      ],
      bg: "linear-gradient(135deg, #f77062 0%, #fe5196 100%)"
    },
    {
      title: "Thank You!",
      subtitle: "See You on the Battleground",
      content: [
        "🔥 Free Fire India - Coming Soon",
        "🌐 www.freefire.india",
        "📧 support@freefire.india",
        "📱 @FreeFireIndia",
        "💬 Discord.gg/FreeFireIndia",
        "",
        "🎮 The Battle Begins. Will You Survive?"
      ],
      bg: "linear-gradient(135deg, #FF4500 0%, #FF1744 100%)"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div style={{
      minHeight: '100vh',
      background: currentSlideData.bg,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      transition: 'background 0.5s ease',
      color: 'white',
      position: 'relative'
    }}>
      {/* Slide Content */}
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        textAlign: 'center',
        animation: 'fadeIn 0.5s ease'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          fontWeight: 'bold',
          marginBottom: '20px',
          textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
          letterSpacing: '2px'
        }}>
          {currentSlideData.title}
        </h1>

        <h2 style={{
          fontSize: 'clamp(1.2rem, 3vw, 2rem)',
          fontWeight: '300',
          marginBottom: '50px',
          opacity: 0.9,
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          {currentSlideData.subtitle}
        </h2>

        <div style={{
          background: 'rgba(0,0,0,0.3)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '40px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {currentSlideData.content.map((item, index) => (
            <div key={index} style={{
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              margin: '20px 0',
              textAlign: 'left',
              padding: '15px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '10px',
              borderLeft: '4px solid rgba(255,255,255,0.5)',
              animation: `slideIn 0.5s ease ${index * 0.1}s both`,
              fontWeight: '400'
            }}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div style={{
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        background: 'rgba(0,0,0,0.5)',
        padding: '15px 30px',
        borderRadius: '50px',
        backdropFilter: 'blur(10px)'
      }}>
        <button onClick={prevSlide} style={{
          background: 'rgba(255,255,255,0.2)',
          border: 'none',
          color: 'white',
          fontSize: '24px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          fontWeight: 'bold'
        }}
        onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.4)'}
        onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
        >
          ←
        </button>

        <div style={{
          fontSize: '18px',
          fontWeight: 'bold',
          minWidth: '100px',
          textAlign: 'center'
        }}>
          {currentSlide + 1} / {slides.length}
        </div>

        <button onClick={nextSlide} style={{
          background: 'rgba(255,255,255,0.2)',
          border: 'none',
          color: 'white',
          fontSize: '24px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          fontWeight: 'bold'
        }}
        onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.4)'}
        onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
        >
          →
        </button>
      </div>

      {/* Slide Indicators */}
      <div style={{
        position: 'fixed',
        bottom: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '80%'
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: currentSlide === index ? '30px' : '10px',
              height: '10px',
              borderRadius: '5px',
              border: 'none',
              background: currentSlide === index ? 'white' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            title={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Keyboard Navigation Instructions */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: 'rgba(0,0,0,0.5)',
        padding: '10px 20px',
        borderRadius: '10px',
        fontSize: '14px',
        backdropFilter: 'blur(10px)'
      }}>
        Use ← → keys or click to navigate
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
