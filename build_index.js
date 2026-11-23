// build_index.js - Builds the upgraded index.html for Nobal Book Depo Prantij
const fs = require('fs');
const path = require('path');

const htmlContent = `<!doctype html>
<html lang="gu">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#15233b">
  
  <!-- Primary SEO Meta Tags -->
  <title>Nobal Book Depo Prantij | Books, Semester 2 Guides & Stationery Home Delivery</title>
  <meta name="description" content="Nobal Book Depo, Prantij — ધોરણ 1 થી 8 ની Semester 2 ચોપડીઓ, ગાઈડો, સ્વાધ્યાયપોથી અને સ્ટેશનરી. પ્રાંતિજ તાલુકાના 78 ગામમાં હોમ ડિલિવરી. WhatsApp લિસ્ટ મોકલો.">
  <meta name="keywords" content="Nobal Book Depo Prantij, Noble Book Dipo, Prantij Book Store, Semester 2 Books Prantij, Navneet Digest Prantij, School Stationery Prantij, ધોરણ 1 થી 8 ચોપડીઓ પ્રાંતિજ, પ્રાંતિજ સ્ટેશનરી">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://nobal-book-depo-uni.vercel.app/">

  <!-- Open Graph / Facebook / WhatsApp Social Preview Metadata -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Nobal Book Depo Prantij">
  <meta property="og:url" content="https://nobal-book-depo-uni.vercel.app/">
  <meta property="og:title" content="Nobal Book Depo Prantij | School Books, Guides & Stationery Delivery">
  <meta property="og:description" content="ધોરણ 1 થી 8 ની Semester 2 ચોપડીઓ, ગાઈડો, સ્વાધ્યાયપોથી અને તમામ સ્ટેશનરી. પ્રાંતિજ તાલુકાના 78 ગામમાં ઝડપી હોમ ડિલિવરી. ફિક્સ રેટ • નો રકઝક.">
  <meta property="og:image" content="https://nobal-book-depo-uni.vercel.app/nobal-book-depo-prantij.jpg">
  <meta property="og:image:alt" content="Nobal Book Depo Prantij - School Books and Stationery Store">
  <meta property="og:locale" content="gu_IN">
  <meta property="og:locale:alternate" content="en_IN">

  <!-- Twitter Card Metadata -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Nobal Book Depo Prantij | School Books & Stationery">
  <meta name="twitter:description" content="ધોરણ 1 થી 8 ની Semester 2 ચોપડીઓ, ગાઈડો, સ્વાધ્યાયપોથી અને સ્ટેશનરી. પ્રાંતિજ તાલુકાના 78 ગામમાં ઘર બેઠા ડિલિવરી.">
  <meta name="twitter:image" content="https://nobal-book-depo-uni.vercel.app/nobal-book-depo-prantij.jpg">

  <!-- Web & Font Assets -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,600&family=Noto+Sans+Gujarati:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css">

  <!-- Structured Data / Schema.org (WebSite, WebPage, BreadcrumbList, BookStore/LocalBusiness, HowTo, FAQPage) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://nobal-book-depo-uni.vercel.app/#website",
        "url": "https://nobal-book-depo-uni.vercel.app/",
        "name": "Nobal Book Depo Prantij",
        "description": "Official online portal for Nobal Book Depo Prantij: Gujarat State Board (GSEB) Semester 2 textbooks, guides, swadhyaypothi, and stationery delivery.",
        "inLanguage": ["gu", "en"]
      },
      {
        "@type": "WebPage",
        "@id": "https://nobal-book-depo-uni.vercel.app/#webpage",
        "url": "https://nobal-book-depo-uni.vercel.app/",
        "name": "Nobal Book Depo Prantij | Books, Semester 2 Guides & Stationery Home Delivery",
        "isPartOf": { "@id": "https://nobal-book-depo-uni.vercel.app/#website" },
        "datePublished": "2026-01-10T08:00:00+05:30",
        "dateModified": "2026-11-23T16:20:00+05:30",
        "description": "Online ordering portal and product showcase of Nobal Book Depo serving students, parents, and schools across Prantij taluka.",
        "breadcrumb": { "@id": "https://nobal-book-depo-uni.vercel.app/#breadcrumb" },
        "inLanguage": "gu",
        "potentialAction": {
          "@type": "ReadAction",
          "target": ["https://nobal-book-depo-uni.vercel.app/"]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://nobal-book-depo-uni.vercel.app/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://nobal-book-depo-uni.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Prantij School Books & Stationery Store",
            "item": "https://nobal-book-depo-uni.vercel.app/#categories"
          }
        ]
      },
      {
        "@type": ["BookStore", "LocalBusiness", "Organization"],
        "@id": "https://nobal-book-depo-uni.vercel.app/#organization",
        "name": "Nobal Book Depo",
        "alternateName": ["Noble Book Dipo", "નોબલ બુક ડેપો પ્રાંતિજ", "Nobal Book Store Prantij"],
        "url": "https://nobal-book-depo-uni.vercel.app/",
        "logo": "https://nobal-book-depo-uni.vercel.app/nobal-book-depo-prantij.jpg",
        "image": "https://nobal-book-depo-uni.vercel.app/nobal-book-depo-prantij.jpg",
        "telephone": "+919106656097",
        "priceRange": "₹",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI, Google Pay, PhonePe, Paytm",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Station Road / Main Bazaar",
          "addressLocality": "Prantij",
          "addressRegion": "Gujarat",
          "postalCode": "383205",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "23.4414",
          "longitude": "72.8597"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Prantij Taluka (78 Villages), Sabarkantha, Gujarat"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:30",
            "closes": "20:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday"],
            "opens": "09:00",
            "closes": "13:30"
          }
        ],
        "sameAs": [
          "https://www.instagram.com/nobalbookdepo/",
          "https://wa.me/919106656097"
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://nobal-book-depo-uni.vercel.app/#howto",
        "name": "How to Order School Books and Stationery Online via WhatsApp from Nobal Book Depo Prantij",
        "description": "A quick 3-step guide for parents and students in Prantij taluka to order Semester 2 books, guides, and stationery for doorstep delivery.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Create or Photo Your Book List",
            "text": "Note down your student standard (Grade 1 to 8), semester, required textbook subjects, guidebooks (Navneet Digest), swadhyaypothi, or take a clear photo of school book slips."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Fill the WhatsApp Inquiry Form",
            "text": "Enter your name, 10-digit mobile number, village name in Prantij taluka, full delivery address, and tick the required product categories."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Send WhatsApp Message & Confirm Delivery",
            "text": "Submit the form to auto-generate a structured WhatsApp order. Nobal Book Depo confirms stock, total price with transparent billing, and dispatches home delivery."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://nobal-book-depo-uni.vercel.app/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Nobal Book Depo Prantij ક્યાં આવેલું છે અને કઈ સામગ્રી મળે છે?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nobal Book Depo (Noble Book Dipo) પ્રાંતિજ (સાબરકાંઠા) માં આવેલું જાણીતું શૈક્ષણિક સ્ટોર છે. અહીં ધોરણ 1 થી 8 ની GSEB Semester 2 પાઠ્યપુસ્તકો, નવનીત ગાઈડો, સ્વાધ્યાયપોથી, સ્કૂલ-ઓફિસ સ્ટેશનરી અને વિવિધ પ્રકારના માર્કર ઉપલબ્ધ છે."
            }
          },
          {
            "@type": "Question",
            "name": "કયા કયા ગામોમાં હોમ ડિલિવરી સેવા ઉપલબ્ધ છે?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "પ્રાંતિજ તાલુકાના તમામ 78 ગામો (જેમ કે સલાલ, કાટવાડ, મોયદ, તાજપુર, પોગલું, પિલુદ્રા, સોનાસણ, વગેરે) માં ₹100 કે તેથી વધુના ઓર્ડર પર હોમ ડિલિવરી આપવામાં આવે છે."
            }
          },
          {
            "@type": "Question",
            "name": "WhatsApp દ્વારા ઓર્ડર કેવી રીતે કરવો?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "વેબસાઇટ પર આપેલા Order / Inquiry ફોર્મમાં તમારું નામ, ગામ, મોબાઇલ નંબર અને જરૂરી પુસ્તકોની વિગત ભરીને સબમિટ કરો. તેનાથી સીધો WhatsApp મેસેજ બની જશે અને દુકાન તરફથી સ્ટોક અને બિલ કન્ફર્મ કરવામાં આવશે."
            }
          },
          {
            "@type": "Question",
            "name": "શું ભાવમાં રકઝક થાય છે? બિલિંગ પદ્ધતિ કેવી છે?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ના, Nobal Book Depo ની કડક નીતિ છે: 'એક જ ફિક્સ ભાવ • No Rakzak'. બાળક હોય કે વડીલ, દરેક માટે એક જ વાજબી ભાવ લાગુ પડે છે અને કોઈપણ પ્રકારનું કોરું બિલ આપવામાં આવતું નથી."
            }
          },
          {
            "@type": "Question",
            "name": "કયા ધોરણ અને સેમેસ્ટરની ચોપડીઓ ઉપલબ્ધ છે?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "શૈક્ષણિક સત્ર 2026-27 માટે ધોરણ 1 થી 8 ની Semester 2 માટેના તમામ વિષયો (ગુજરાતી, ગણિત, વિજ્ઞાન, સામાજિક વિજ્ઞાન, અંગ્રેજી, હિન્દી, સંસ્કૃત) ની ચોપડીઓ, નવનીત ગાઈડ અને સ્વાધ્યાયપોથીનો નવો સ્ટોક ઉપલબ્ધ છે."
            }
          },
          {
            "@type": "Question",
            "name": "પેમેન્ટ કેવી રીતે સ્વીકારવામાં આવે છે?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "તમે Google Pay, PhonePe, Paytm, BHIM UPI અથવા કેશ (Cash on Delivery / Pickup) દ્વારા સુરક્ષિત રીતે ચૂકવણી કરી શકો છો."
            }
          }
        ]
      }
    ]
  }
  </script>

  <style>
    :root{
      --ink:#0f1b33;--ink-light:#2c3b57;--muted:#5c6b84;--blue:#2b50d8;--blue2:#1b3bb5;
      --cyan:#0ea5e9;--cyan-glow:#38bdf8;--orange:#f97316;--amber:#f59e0b;--green:#10b981;
      --paper:#f8fafc;--card:#ffffff;--line:#e2e8f0;--line-accent:#cbd5e1;
      --shadow:0 20px 50px rgba(15,27,51,.08);--shadow-hover:0 25px 60px rgba(43,80,216,.16);
      --radius:22px;--vfx-glow:0 0 25px rgba(43,80,216,0.25);
    }
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{
      margin:0;background:var(--paper);color:var(--ink);
      font-family:"DM Sans","Noto Sans Gujarati",sans-serif;
      overflow-x:hidden;position:relative;
    }
    body,button,input,select,textarea{font-family:"DM Sans","Noto Sans Gujarati",sans-serif}
    a{color:inherit;text-decoration:none}
    img{max-width:100%;display:block;height:auto}
    button{cursor:pointer}
    .container{width:min(1180px,calc(100% - 36px));margin:auto}
    .gu{font-family:"Noto Sans Gujarati","DM Sans",sans-serif}

    /* Ambient VFX Background Canvas */
    #ambientVfx{
      position:fixed;top:0;left:0;width:100%;height:100%;
      pointer-events:none;z-index:0;opacity:.55;
    }

    /* Scroll Progress Bar */
    .scroll-progress{
      position:fixed;top:0;left:0;height:3.5px;
      background:linear-gradient(90deg,var(--blue),var(--cyan),var(--orange));
      z-index:1000;width:0%;transition:width .1s linear;
    }

    /* Topline Bar */
    .topline{
      background:linear-gradient(90deg,#0f1b33 0%,#182a4d 50%,#0f1b33 100%);
      color:#dce6ff;font-size:12px;padding:9px 0;position:relative;z-index:60;
      border-bottom:1px solid rgba(255,255,255,0.08);
    }
    .topline .container{display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap}
    .topline strong{color:#fff}
    .topline-pill{
      display:inline-flex;align-items:center;gap:6px;
      background:rgba(16,185,129,0.2);color:#34d399;padding:3px 10px;
      border-radius:999px;font-size:11px;font-weight:700;border:1px solid rgba(16,185,129,0.3);
    }
    .pulse-dot{
      width:7px;height:7px;border-radius:50%;background:#10b981;
      box-shadow:0 0 10px #10b981;animation:pulseBeacon 1.8s infinite;
    }
    @keyframes pulseBeacon{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.5);opacity:.4}}

    /* Header & Navigation */
    header{
      position:sticky;top:0;z-index:50;
      background:rgba(255,255,255,.92);backdrop-filter:blur(18px);
      border-bottom:1px solid rgba(226,232,242,.85);transition:.3s;
    }
    .nav{height:76px;display:flex;align-items:center;justify-content:space-between;gap:20px}
    .brand{display:flex;align-items:center;gap:12px;font-weight:800;letter-spacing:-.6px}
    .brand-mark{
      width:46px;height:46px;border-radius:14px;
      background:linear-gradient(135deg,var(--blue) 0%,var(--cyan) 100%);
      display:grid;place-items:center;color:#fff;font-size:20px;
      box-shadow:0 10px 24px rgba(43,80,216,0.32);position:relative;overflow:hidden;
    }
    .brand-mark::after{
      content:"";position:absolute;top:-50%;left:-50%;width:200%;height:200%;
      background:linear-gradient(60deg,transparent 40%,rgba(255,255,255,0.4) 50%,transparent 60%);
      transform:rotate(25deg);animation:shimmerMark 4s infinite linear;
    }
    @keyframes shimmerMark{0%{transform:translateX(-100%) rotate(25deg)}100%{transform:translateX(100%) rotate(25deg)}}
    .brand-text{display:flex;flex-direction:column}
    .brand-text span{font-size:16px;font-weight:800;color:var(--ink);letter-spacing:-.4px}
    .brand-text small{font-size:10px;color:#64748b;letter-spacing:1.8px;font-weight:700}
    
    .navlinks{display:flex;align-items:center;gap:22px;font-size:13px;font-weight:700;color:#475569}
    .navlinks a{position:relative;padding:6px 0;transition:.2s}
    .navlinks a::after{
      content:"";position:absolute;bottom:0;left:0;width:0;height:2px;
      background:var(--blue);transition:.25s ease;border-radius:2px;
    }
    .navlinks a:hover{color:var(--blue)}
    .navlinks a:hover::after{width:100%}
    .nav-actions{display:flex;gap:10px;align-items:center}
    
    /* Buttons */
    .btn{
      display:inline-flex;align-items:center;justify-content:center;gap:8px;
      border:0;border-radius:999px;padding:12px 20px;font-weight:800;font-size:13px;
      transition:.28s cubic-bezier(.2,.8,.2,1);white-space:nowrap;position:relative;
      overflow:hidden;
    }
    .btn-primary{
      background:linear-gradient(135deg,var(--blue) 0%,#1e40af 100%);
      color:#fff;box-shadow:0 10px 24px rgba(43,80,216,.28);
    }
    .btn-primary:hover{
      transform:translateY(-2px);box-shadow:0 14px 30px rgba(43,80,216,.4);
      background:linear-gradient(135deg,#3b63f6 0%,var(--blue) 100%);
    }
    .btn-light{background:#eef2ff;color:var(--blue);border:1px solid #dbeafe}
    .btn-light:hover{background:#e0e7ff;transform:translateY(-2px)}
    .btn-green{
      background:linear-gradient(135deg,#10b981 0%,#059669 100%);
      color:#fff;box-shadow:0 10px 24px rgba(16,185,129,.3);
    }
    .btn-green:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(16,185,129,.42)}
    .menu-toggle{display:none;border:0;background:#eef2fb;border-radius:12px;padding:11px;color:var(--ink);font-size:16px}

    /* Hero Section */
    .hero{
      position:relative;padding:70px 0 75px;overflow:hidden;
      background:radial-gradient(circle at 85% 20%,rgba(14,165,233,.12) 0,transparent 30%),
                 radial-gradient(circle at 10% 80%,rgba(43,80,216,.10) 0,transparent 32%),
                 linear-gradient(135deg,#ffffff 0%,#f8fafc 60%,#f0fdf4 100%);
    }
    .hero::before{
      content:"";position:absolute;width:480px;height:480px;border:1px dashed #cbd5e1;
      border-radius:50%;right:-180px;top:-220px;pointer-events:none;
      box-shadow:0 0 0 40px rgba(224,242,254,0.4),0 0 0 80px rgba(241,245,249,0.3);
    }
    .hero-grid{position:relative;display:grid;grid-template-columns:1.08fr .92fr;align-items:center;gap:48px;z-index:2}
    .eyebrow{
      display:inline-flex;align-items:center;gap:8px;padding:7px 14px;
      border:1px solid #dbeafe;border-radius:999px;background:#ffffff;
      color:var(--blue);font-size:11px;font-weight:800;letter-spacing:.6px;
      box-shadow:0 4px 12px rgba(43,80,216,0.06);
    }
    .eyebrow i{color:var(--amber)}
    h1{
      font-size:clamp(34px,4.5vw,56px);line-height:1.15;letter-spacing:-1.8px;
      margin:18px 0 16px;font-weight:800;color:var(--ink);
    }
    h1 .accent{
      background:linear-gradient(135deg,var(--blue) 0%,var(--cyan) 100%);
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;
      position:relative;display:inline-block;
    }
    .hero-copy{font-size:16px;line-height:1.85;color:var(--muted);max-width:580px;margin-bottom:0}
    .hero-copy strong{color:var(--ink);font-weight:700}
    .hero-cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:26px}
    .hero-meta{
      display:flex;gap:20px;flex-wrap:wrap;margin-top:28px;
      color:#475569;font-size:12px;font-weight:700;
    }
    .hero-meta span{display:flex;align-items:center;gap:8px;background:#fff;padding:6px 12px;border-radius:999px;border:1px solid #e2e8f0}
    .hero-meta i{color:var(--green)}

    /* Hero Visual Card */
    .hero-visual{position:relative;min-height:440px}
    .hero-photo-wrap{
      position:absolute;right:4%;top:10px;width:80%;height:380px;
      border-radius:28px;overflow:hidden;box-shadow:var(--shadow-hover);
      border:4px solid #fff;transform:rotate(1.5deg);transition:.4s;
    }
    .hero-photo-wrap:hover{transform:rotate(0deg) scale(1.02)}
    .hero-photo{width:100%;height:100%;object-fit:cover}
    .photo-badge{
      position:absolute;top:16px;left:16px;background:rgba(15,27,51,.85);
      backdrop-filter:blur(8px);color:#fff;padding:6px 12px;border-radius:10px;
      font-size:11px;font-weight:700;display:flex;align-items:center;gap:6px;
    }
    .floating-card{
      position:absolute;background:#fff;border:1px solid #e2e8f0;border-radius:18px;
      padding:14px 18px;box-shadow:0 15px 35px rgba(15,27,51,0.12);
      animation:floatCard 5s ease-in-out infinite;z-index:3;
    }
    .floating-card.one{left:0;top:40px}
    .floating-card.two{right:-10px;bottom:20px;animation-delay:-2.5s}
    .float-icon{
      width:40px;height:40px;border-radius:12px;display:grid;place-items:center;
      background:#eff6ff;color:var(--blue);float:left;margin-right:12px;font-size:18px;
    }
    .floating-card b{display:block;font-size:13px;color:var(--ink)}
    .floating-card small{color:var(--muted);font-size:11px}
    .hero-sticker{
      position:absolute;right:0;top:-12px;
      background:linear-gradient(135deg,var(--orange),#ea580c);
      color:#fff;width:86px;height:86px;border-radius:50%;
      display:grid;place-items:center;text-align:center;font-size:11px;
      font-weight:800;line-height:1.2;transform:rotate(12deg);
      box-shadow:0 12px 28px rgba(249,115,22,0.4);border:2px dashed rgba(255,255,255,0.6);
      animation:pulseSticker 3s ease-in-out infinite alternate;
    }
    @keyframes pulseSticker{0%{transform:rotate(12deg) scale(1)}100%{transform:rotate(8deg) scale(1.06)}}
    @keyframes floatCard{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}

    /* Ticker Banner */
    .ticker{
      background:linear-gradient(90deg,var(--blue) 0%,#1e3a8a 100%);
      color:#fff;overflow:hidden;padding:12px 0;position:relative;z-index:3;
    }
    .ticker-track{
      display:flex;width:max-content;animation:marquee 32s linear infinite;
      gap:40px;font-size:12px;font-weight:800;letter-spacing:.7px;
    }
    .ticker-track span{display:flex;align-items:center;gap:10px}
    .ticker-track i{color:#fde047}
    @keyframes marquee{to{transform:translateX(-50%)}}

    /* Global Section Stylings */
    section{padding:84px 0;position:relative;z-index:2}
    .section-head{max-width:760px;margin:0 auto 44px;text-align:center}
    .kicker{
      color:var(--blue);font-size:11px;letter-spacing:2px;text-transform:uppercase;
      font-weight:800;display:inline-block;margin-bottom:8px;
    }
    h2{
      font-size:clamp(26px,3.2vw,40px);letter-spacing:-1.2px;line-height:1.25;
      margin:10px 0 14px;color:var(--ink);font-weight:800;
    }
    .section-head p{color:var(--muted);line-height:1.8;margin:0;font-size:15px}
    .reveal-line{
      height:3.5px;width:64px;background:linear-gradient(90deg,var(--blue),var(--cyan));
      border-radius:4px;margin:16px auto 0;
    }

    /* Executive Top Summary / AEO Section */
    .summary-box{
      background:#ffffff;border:1px solid #dbeafe;border-radius:22px;
      padding:32px;box-shadow:var(--shadow);margin-top:-30px;position:relative;
      z-index:10;
    }
    .summary-header{display:flex;align-items:center;gap:12px;margin-bottom:18px}
    .summary-badge{
      background:#eff6ff;color:var(--blue);font-weight:800;font-size:11px;
      padding:6px 12px;border-radius:999px;border:1px solid #bfdbfe;
    }
    .summary-lead{font-size:16px;line-height:1.8;color:var(--ink);margin-bottom:22px}
    .summary-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
    .summary-item{
      background:#f8fafc;border:1px solid #e2e8f0;border-radius:16px;
      padding:18px 16px;transition:.25s;
    }
    .summary-item:hover{border-color:var(--blue);background:#fff;transform:translateY(-3px)}
    .summary-item i{font-size:20px;color:var(--blue);margin-bottom:10px;display:block}
    .summary-item b{display:block;font-size:13px;color:var(--ink);margin-bottom:6px}
    .summary-item p{font-size:12px;color:var(--muted);margin:0;line-height:1.6}
    .internal-link-strip{
      margin-top:22px;padding-top:18px;border-top:1px dashed #e2e8f0;
      display:flex;gap:14px;align-items:center;flex-wrap:wrap;font-size:12px;color:#64748b;
    }
    .internal-link-strip a{
      color:var(--blue);font-weight:700;display:inline-flex;align-items:center;gap:4px;
      background:#eff6ff;padding:4px 10px;border-radius:6px;transition:.2s;
    }
    .internal-link-strip a:hover{background:#dbeafe;color:var(--blue2)}

    /* Product Categories */
    .categories{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
    .category{
      background:#fff;border:1px solid var(--line);border-radius:22px;
      padding:26px;min-height:220px;position:relative;overflow:hidden;
      transition:.35s cubic-bezier(.2,.8,.2,1);
    }
    .category:hover{transform:translateY(-6px);box-shadow:var(--shadow-hover);border-color:#bfdbfe}
    .category::after{
      content:"";position:absolute;width:130px;height:130px;border-radius:50%;
      background:#f1f5f9;right:-50px;bottom:-60px;transition:.35s;z-index:0;
    }
    .category:hover::after{transform:scale(1.4);background:#eff6ff}
    .cat-icon{
      width:52px;height:52px;border-radius:16px;display:grid;place-items:center;
      font-size:22px;margin-bottom:20px;position:relative;z-index:1;
    }
    .c1{background:#eef2ff;color:#2b50d8}.c2{background:#ecfdf5;color:#10b981}
    .c3{background:#fff7ed;color:#ea580c}.c4{background:#f0f9ff;color:#0284c7}
    .category h3{font-size:17px;margin:0 0 8px;position:relative;z-index:1;color:var(--ink)}
    .category p{font-size:13px;line-height:1.7;color:var(--muted);margin:0;position:relative;z-index:1}
    .category .arrow{position:absolute;right:22px;top:26px;color:#94a3b8;z-index:2;transition:.25s}
    .category:hover .arrow{color:var(--blue);transform:translate(3px,-3px)}

    /* Semester 2 Showcase */
    .semester{background:#fff}
    .semester-grid{display:grid;grid-template-columns:.92fr 1.08fr;gap:56px;align-items:center}
    .semester-image-wrap{position:relative}
    .semester-image{
      width:100%;height:430px;object-fit:cover;border-radius:28px;
      box-shadow:var(--shadow);border:4px solid #fff;
    }
    .image-tag{
      position:absolute;left:-10px;bottom:24px;background:#fff;
      padding:15px 22px;border-radius:16px;box-shadow:var(--shadow);
      font-weight:800;font-size:13px;display:flex;align-items:center;gap:10px;
      border:1px solid #e2e8f0;
    }
    .image-tag i{color:var(--green);font-size:16px}
    .check-list{list-style:none;padding:0;margin:24px 0;display:grid;gap:14px}
    .check-list li{display:flex;gap:12px;align-items:flex-start;color:#334155;font-size:14px;line-height:1.6}
    .check-list i{color:var(--green);margin-top:4px;font-size:16px}

    /* How to Order 3-Step Section */
    .steps-section{background:#f8fafc;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0}
    .steps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
    .step-card{
      background:#fff;border:1px solid var(--line);border-radius:20px;
      padding:30px 24px;position:relative;transition:.3s;
    }
    .step-card:hover{transform:translateY(-5px);box-shadow:var(--shadow);border-color:var(--blue)}
    .step-num{
      width:44px;height:44px;border-radius:14px;
      background:linear-gradient(135deg,var(--blue),var(--cyan));
      color:#fff;display:grid;place-items:center;font-weight:800;font-size:18px;
      margin-bottom:20px;box-shadow:0 8px 18px rgba(43,80,216,0.25);
    }
    .step-card h3{font-size:17px;margin:0 0 10px;color:var(--ink)}
    .step-card p{font-size:13px;color:var(--muted);line-height:1.7;margin:0}

    /* Delivery Network in 78 Villages & Interactive Search */
    .delivery{
      background:linear-gradient(135deg,#0f1b33 0%,#1a2f57 100%);
      color:#fff;position:relative;overflow:hidden;
    }
    .delivery::before,.delivery::after{
      content:"";position:absolute;border:1px solid rgba(255,255,255,0.08);
      border-radius:50%;width:460px;height:460px;pointer-events:none;
    }
    .delivery::before{right:-140px;top:-240px;box-shadow:0 0 0 45px rgba(255,255,255,0.03)}
    .delivery::after{left:-260px;bottom:-300px}
    .delivery-grid{position:relative;display:grid;grid-template-columns:1fr 1fr;gap:44px;align-items:center;z-index:2}
    .delivery h2{color:#fff}
    .delivery p{color:#cbd5e1;line-height:1.85;font-size:14px}
    .delivery-number{
      font-size:clamp(65px,8vw,110px);font-weight:800;line-height:1;
      color:#fff;letter-spacing:-5px;
    }
    .delivery-number span{color:var(--cyan-glow)}
    .delivery-label{font-size:14px;color:#93c5fd;font-weight:800;letter-spacing:1px;margin-top:6px}
    .delivery-points{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:24px}
    .delivery-point{
      background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.14);
      border-radius:14px;padding:14px;font-size:13px;color:#f1f5f9;display:flex;align-items:center;gap:10px;
    }
    .delivery-point i{color:var(--cyan-glow);font-size:16px}

    /* Village Search Box Interactive */
    .village-search-wrap{
      margin-top:36px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);
      border-radius:20px;padding:24px;backdrop-filter:blur(10px);
    }
    .search-input-box{position:relative;margin-bottom:14px}
    .search-input-box input{
      width:100%;background:#ffffff;border:0;border-radius:12px;padding:14px 16px 14px 44px;
      font-size:13px;color:var(--ink);outline:none;
    }
    .search-input-box i{position:absolute;left:16px;top:50%;transform:translateY(-50%);color:#64748b}
    .village-badges{
      display:flex;flex-wrap:wrap;gap:8px;max-height:150px;overflow-y:auto;
      padding-right:6px;
    }
    .village-badge{
      background:rgba(255,255,255,0.12);color:#e2e8f0;padding:5px 12px;
      border-radius:999px;font-size:11px;font-weight:600;border:1px solid rgba(255,255,255,0.18);
      cursor:pointer;transition:.2s;
    }
    .village-badge:hover,.village-badge.active{background:#38bdf8;color:#0f172a;border-color:#38bdf8}
    .search-status{font-size:12px;color:#a7f3d0;margin-top:8px;display:none}

    /* Comparison Matrix & Decision Support Section */
    .comparison-section{background:#fff}
    .table-wrap{
      overflow-x:auto;border:1px solid #e2e8f0;border-radius:18px;
      box-shadow:0 4px 20px rgba(15,27,51,0.05);background:#fff;margin-bottom:30px;
    }
    table{width:100%;border-collapse:collapse;text-align:left;font-size:13px}
    th,td{padding:16px 18px;border-bottom:1px solid #f1f5f9}
    th{background:#f8fafc;font-weight:800;color:var(--ink);font-size:13px}
    tr:last-child td{border-bottom:0}
    .highlight-col{background:#f0f9ff;font-weight:700;color:var(--blue)}
    .badge-check{color:var(--green);font-size:16px;margin-right:6px}
    .badge-cross{color:#ef4444;font-size:16px;margin-right:6px}

    /* Interactive Kit Estimator */
    .estimator-box{
      background:linear-gradient(135deg,#eff6ff 0%,#f0fdf4 100%);
      border:1px solid #bfdbfe;border-radius:20px;padding:26px;
      display:grid;grid-template-columns:1fr 1fr 1.2fr;gap:20px;align-items:center;
      margin-top:35px;
    }
    .estimator-input label{font-size:11px;font-weight:800;color:#334155;display:block;margin-bottom:6px}
    .estimator-input select{
      width:100%;padding:12px;border:1px solid #cbd5e1;border-radius:12px;
      background:#fff;font-size:13px;font-weight:700;color:var(--ink);
    }
    .estimator-result{
      background:#fff;padding:16px 20px;border-radius:14px;border:1px solid #e2e8f0;
      text-align:center;box-shadow:0 6px 16px rgba(43,80,216,0.06);
    }
    .estimator-result small{font-size:11px;color:#64748b;display:block}
    .estimator-result b{font-size:20px;color:var(--blue);font-weight:800}

    /* Trust & Policies */
    .trust{background:#f8fafc}
    .trust-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
    .trust-card{
      background:#fff;border:1px solid var(--line);border-radius:20px;
      padding:26px 20px;text-align:center;transition:.3s;
    }
    .trust-card:hover{transform:translateY(-5px);box-shadow:var(--shadow);border-color:#bfdbfe}
    .trust-card i{font-size:26px;color:var(--blue);margin-bottom:16px}
    .trust-card h3{font-size:15px;margin:0 0 8px;color:var(--ink)}
    .trust-card p{font-size:12px;color:var(--muted);line-height:1.7;margin:0}

    /* Testimonials & Proof */
    .proof-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:35px}
    .proof-card{
      background:#fff;border:1px solid #e2e8f0;border-radius:18px;padding:22px;
      position:relative;
    }
    .stars{color:var(--amber);margin-bottom:12px;font-size:13px}
    .proof-card p{font-size:12px;line-height:1.7;color:#475569;margin:0 0 14px}
    .proof-author{display:flex;align-items:center;gap:10px}
    .author-avatar{
      width:36px;height:36px;border-radius:50%;background:#e0e7ff;
      color:var(--blue);display:grid;place-items:center;font-weight:800;font-size:13px;
    }
    .author-info b{display:block;font-size:12px;color:var(--ink)}
    .author-info small{color:#64748b;font-size:10px}

    /* Marker Collection */
    .marker-section{background:#fff}
    .marker-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
    .marker-item{
      display:flex;align-items:center;gap:14px;padding:18px;
      border:1px solid var(--line);border-radius:18px;background:#fff;transition:.25s;
    }
    .marker-item:hover{border-color:#bfdbfe;transform:translateX(4px);box-shadow:0 8px 20px rgba(43,80,216,0.06)}
    .marker-icon{
      width:44px;height:44px;flex:0 0 44px;background:#eff6ff;
      border-radius:14px;display:grid;place-items:center;color:var(--blue);font-size:18px;
    }
    .marker-item b{font-size:13px;display:block;color:var(--ink)}
    .marker-item small{font-size:11px;color:var(--muted);line-height:1.5}

    /* Order / Inquiry Form Section */
    .order{background:linear-gradient(180deg,#f1f5f9 0%,#ffffff 100%)}
    .order-wrap{display:grid;grid-template-columns:.76fr 1.24fr;gap:32px;align-items:start}
    .order-aside{
      background:linear-gradient(135deg,#0f1b33 0%,#1e293b 100%);
      color:#fff;border-radius:24px;padding:34px;position:sticky;top:100px;overflow:hidden;
    }
    .order-aside::after{
      content:"";position:absolute;width:220px;height:220px;border:1px solid rgba(255,255,255,0.12);
      border-radius:50%;right:-110px;bottom:-110px;pointer-events:none;
    }
    .order-aside h3{font-size:23px;margin:0 0 14px}
    .order-aside p{font-size:13px;line-height:1.8;color:#cbd5e1}
    .order-aside ul{list-style:none;padding:0;display:grid;gap:14px;margin:26px 0 0}
    .order-aside li{font-size:12px;color:#e2e8f0;display:flex;gap:10px;line-height:1.5}
    .order-aside li i{color:var(--cyan-glow);margin-top:3px}
    .store-proof-box{
      margin-top:24px;padding:16px;background:rgba(255,255,255,0.08);
      border-radius:14px;border:1px solid rgba(255,255,255,0.12);font-size:11px;
    }
    .store-proof-box b{color:#fff;display:block;margin-bottom:4px}
    
    .form-card{
      background:#fff;border:1px solid var(--line);border-radius:26px;
      padding:34px;box-shadow:0 15px 45px rgba(15,27,51,0.08);
    }
    .form-title{display:flex;justify-content:space-between;align-items:center;gap:15px;margin-bottom:24px}
    .form-title h3{font-size:22px;margin:0;color:var(--ink)}
    .required-note{font-size:11px;color:#64748b}
    .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
    .field{display:grid;gap:7px}
    .field.full{grid-column:1/-1}
    .field label{font-size:12px;font-weight:800;color:#334155}
    .field input,.field select,.field textarea{
      width:100%;border:1px solid #cbd5e1;border-radius:12px;padding:13px 15px;
      font-size:13px;color:var(--ink);outline:none;background:#f8fafc;transition:.2s;
    }
    .field input:focus,.field select:focus,.field textarea:focus{
      border-color:var(--blue);box-shadow:0 0 0 3px rgba(43,80,216,0.14);background:#fff;
    }
    .field textarea{min-height:96px;resize:vertical;line-height:1.6}
    .product-picks{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
    .pick{
      border:1px solid #e2e8f0;border-radius:12px;padding:12px 14px;
      display:flex;align-items:center;gap:10px;font-size:12px;color:#475569;
      cursor:pointer;transition:.2s;background:#fff;
    }
    .pick:has(input:checked){border-color:var(--blue);background:#eff6ff;color:var(--blue);font-weight:700}
    .pick input{accent-color:var(--blue);width:16px;height:16px}
    .form-bottom{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:22px;flex-wrap:wrap}
    .privacy{font-size:11px;color:#64748b;line-height:1.6;max-width:300px;margin:0}
    .submit-btn{
      border:0;background:linear-gradient(135deg,#10b981 0%,#059669 100%);
      color:#fff;padding:16px 24px;border-radius:14px;font-weight:800;font-size:14px;
      box-shadow:0 10px 22px rgba(16,185,129,0.35);transition:.25s;display:inline-flex;align-items:center;gap:9px;
    }
    .submit-btn:hover{background:linear-gradient(135deg,#059669 0%,#047857 100%);transform:translateY(-2px);box-shadow:0 14px 28px rgba(16,185,129,0.45)}
    .form-message{font-size:12px;color:#dc2626;margin-top:12px;display:none;font-weight:700}

    /* FAQ Section */
    .faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
    details{
      background:#fff;border:1px solid var(--line);border-radius:18px;
      padding:20px 22px;transition:.2s;
    }
    details:hover{border-color:#bfdbfe}
    summary{
      font-size:14px;font-weight:800;cursor:pointer;list-style:none;
      display:flex;justify-content:space-between;gap:15px;align-items:center;color:var(--ink);
    }
    summary::-webkit-details-marker{display:none}
    summary::after{content:"+";color:var(--blue);font-size:20px;font-weight:800}
    details[open] summary::after{content:"−"}
    details p{font-size:13px;line-height:1.8;color:var(--muted);margin:14px 0 0;padding-top:10px;border-top:1px solid #f1f5f9}

    /* Authority & Citations */
    .citations-box{
      background:#f8fafc;border:1px solid #e2e8f0;border-radius:18px;
      padding:22px 26px;margin-top:40px;font-size:12px;color:#64748b;line-height:1.8;
    }
    .citations-box strong{color:var(--ink)}
    .citations-box a{color:var(--blue);text-decoration:underline;margin:0 4px}

    /* Store Ownership & Verification Box */
    .store-owner-bar{
      background:#ffffff;border:1px solid #e2e8f0;border-radius:18px;
      padding:22px;display:flex;justify-content:space-between;align-items:center;
      gap:20px;flex-wrap:wrap;margin-top:35px;
    }
    .owner-info{display:flex;align-items:center;gap:14px}
    .owner-badge{
      width:46px;height:46px;border-radius:14px;background:#eff6ff;color:var(--blue);
      display:grid;place-items:center;font-size:20px;
    }

    /* Footer */
    footer{background:#0f1b33;color:#fff;padding:60px 0 28px;position:relative;z-index:3}
    .footer-grid{display:grid;grid-template-columns:1.4fr .8fr 1fr;gap:44px}
    footer p,footer a{font-size:13px;color:#94a3b8;line-height:1.9}
    footer h4{font-size:14px;margin:0 0 16px;color:#fff;font-weight:800;letter-spacing:.4px}
    .footer-brand{font-size:21px;font-weight:800;color:#fff}
    .footer-brand span{color:var(--cyan-glow)}
    .socials{display:flex;gap:10px;margin-top:20px}
    .socials a{
      width:38px;height:38px;border-radius:12px;background:rgba(255,255,255,0.08);
      display:grid;place-items:center;color:#fff;transition:.2s;
    }
    .socials a:hover{background:var(--blue);transform:translateY(-2px)}
    .footer-bottom{
      border-top:1px solid rgba(255,255,255,0.10);margin-top:40px;padding-top:20px;
      display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;
      color:#64748b;font-size:11px;
    }

    /* Floating Navigation Elements */
    .float-wa{
      position:fixed;right:22px;bottom:22px;width:60px;height:60px;
      border-radius:50%;display:grid;place-items:center;
      background:linear-gradient(135deg,#22c55e 0%,#16a34a 100%);
      color:#fff;font-size:28px;box-shadow:0 12px 30px rgba(22,163,74,0.45);
      z-index:70;transition:.25s cubic-bezier(.2,.8,.2,1);
    }
    .float-wa:hover{transform:scale(1.1) rotate(-8deg);box-shadow:0 16px 36px rgba(22,163,74,0.6)}
    .backtop{
      position:fixed;right:29px;bottom:94px;width:44px;height:44px;
      border-radius:50%;border:1px solid var(--line);background:#fff;
      color:var(--blue);display:none;place-items:center;z-index:65;
      box-shadow:0 8px 22px rgba(15,27,51,0.14);transition:.2s;
    }
    .backtop:hover{background:#eff6ff;transform:translateY(-3px)}

    /* Responsive Media Queries */
    @media(max-width:960px){
      .hero-grid{grid-template-columns:1fr;gap:36px}
      .hero-visual{min-height:360px}
      .summary-grid{grid-template-columns:repeat(2,1fr)}
      .categories{grid-template-columns:repeat(2,1fr)}
      .steps-grid{grid-template-columns:1fr}
      .delivery-grid{grid-template-columns:1fr;gap:35px}
      .estimator-box{grid-template-columns:1fr}
      .trust-grid{grid-template-columns:repeat(2,1fr)}
      .proof-grid{grid-template-columns:1fr}
      .marker-grid{grid-template-columns:repeat(2,1fr)}
      .order-wrap{grid-template-columns:1fr}
      .order-aside{position:relative;top:auto}
      .footer-grid{grid-template-columns:1fr;gap:30px}
    }
    @media(max-width:720px){
      .container{width:min(100% - 30px,560px)}
      .topline .container{justify-content:center;text-align:center}
      .nav{height:68px}
      .menu-toggle{display:block}
      .nav-actions .btn-light{display:none}
      .navlinks{
        display:none;position:absolute;top:68px;left:0;right:0;background:#fff;
        padding:20px 26px;border-bottom:1px solid var(--line);
        box-shadow:0 15px 30px rgba(15,27,51,0.12);flex-direction:column;align-items:flex-start;
      }
      .navlinks.open{display:flex}
      .nav-actions{margin-left:auto}
      .hero{padding:50px 0 45px}
      .hero-photo-wrap{width:88%;height:310px;right:6%}
      h1{font-size:36px;letter-spacing:-1.2px}
      .hero-copy{font-size:14px}
      section{padding:60px 0}
      .semester-grid{grid-template-columns:1fr;gap:35px}
      .semester-image{height:300px}
      .image-tag{left:0}
      .faq-grid{grid-template-columns:1fr}
      .form-card{padding:22px}
      .form-grid{grid-template-columns:1fr}
      .field.full{grid-column:auto}
      .product-picks{grid-template-columns:1fr}
    }
    @media(max-width:420px){
      .summary-grid,.categories,.trust-grid,.marker-grid{grid-template-columns:1fr;gap:12px}
      .hero-cta .btn{width:100%}
      .delivery-points{grid-template-columns:1fr}
    }
    @media(prefers-reduced-motion:reduce){
      *,*::before,*::after{
        animation-duration:.01ms!important;animation-iteration-count:1!important;
        scroll-behavior:auto!important;transition-duration:.01ms!important;
      }
      #ambientVfx{display:none}
    }
  </style>
</head>
<body>
  <!-- VFX Interactive Canvas Background -->
  <canvas id="ambientVfx"></canvas>
  <div class="scroll-progress" id="scrollProgress"></div>

  <!-- Topline Notification Bar -->
  <div class="topline">
    <div class="container">
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
        <span class="topline-pill"><span class="pulse-dot"></span> નવો સ્ટોક લાઈવ 2026–27</span>
        <span><i class="fa-solid fa-truck-fast"></i> <strong>પ્રાંતિજ તાલુકાના 78 ગામમાં હોમ ડિલિવરી</strong> (₹100+ ના ઓર્ડર પર)</span>
      </div>
      <div style="display:flex;align-items:center;gap:18px">
        <span><i class="fa-solid fa-clock"></i> સવારે 8:30 થી રાત્રે 8:30</span>
        <span><i class="fa-brands fa-whatsapp"></i> WhatsApp: <strong>91066 56097</strong></span>
      </div>
    </div>
  </div>

  <!-- Header & Sticky Navbar -->
  <header>
    <div class="container nav">
      <a class="brand" href="#home" aria-label="Nobal Book Depo Prantij Home">
        <span class="brand-mark"><i class="fa-solid fa-book-open"></i></span>
        <div class="brand-text">
          <span>NOBAL BOOK DEPO</span>
          <small>PRANTIJ • ESTD. 2010</small>
        </div>
      </a>
      <nav class="navlinks" id="navLinks" aria-label="Main Navigation">
        <a href="#summary">સારાંશ (Summary)</a>
        <a href="#categories">પુસ્તકો અને સ્ટેશનરી</a>
        <a href="#semester">Semester 2</a>
        <a href="#how-to-order">ઓર્ડર રીત</a>
        <a href="#delivery">78 ગામ ડિલિવરી</a>
        <a href="#comparison">સરખામણી</a>
        <a href="#markers">માર્કર કલેક્શન</a>
        <a href="#faq">પ્રશ્નોત્તરી (FAQ)</a>
        <a href="#inquiry">ઓર્ડર ફોર્મ</a>
      </nav>
      <div class="nav-actions">
        <a class="btn btn-light" href="#inquiry"><i class="fa-solid fa-clipboard-list"></i> Send Book List</a>
        <a class="btn btn-primary" href="https://wa.me/919106656097" target="_blank" rel="noopener" aria-label="Chat directly on WhatsApp"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
        <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation menu"><i class="fa-solid fa-bars"></i></button>
      </div>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="container hero-grid">
        <div data-aos="fade-up">
          <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:12px">
            <span class="eyebrow"><i class="fa-solid fa-star"></i> OFFICIAL PRANTIJ BOOKSTORE • 15+ YEARS TRUST</span>
            <span style="font-size:11px;font-weight:700;color:#10b981;background:#ecfdf5;padding:4px 10px;border-radius:999px;border:1px solid #a7f3d0">
              <i class="fa-solid fa-check-circle"></i> GSEB 2026–27 Approved
            </span>
          </div>

          <!-- Aligned H1 Tag Matching Core Topic & Title -->
          <h1 class="gu">Nobal Book Depo Prantij: ભણતરનાં પુસ્તકો, <span class="accent">Semester 2 ગાઈડો અને સ્ટેશનરી</span> હવે ઘરે બેઠા!</h1>
          
          <p class="hero-copy gu">
            ગુજરાત બોર્ડ (GSEB) માન્ય <strong>ધોરણ 1 થી 8 ની Semester 2 ચોપડીઓ, નવનીત ગાઈડો, સ્વાધ્યાયપોથી અને સ્કૂલ-ઓફિસ સ્ટેશનરી</strong> નો નવો સ્ટોક ઉપલબ્ધ છે. તમારું પુસ્તક લિસ્ટ WhatsApp કરો અને પ્રાંતિજ તાલુકાના 78 ગામોમાં ઝડપી ઘર ડિલિવરી મેળવો.
          </p>

          <div class="hero-cta">
            <a class="btn btn-primary" href="#inquiry"><i class="fa-solid fa-paper-plane"></i> લિસ્ટ મોકલો (Order Online)</a>
            <a class="btn btn-green" href="https://wa.me/919106656097?text=નમસ્તે%20Nobal%20Book%20Depo,%20મને%20ધોરણ%201%20થી%208%20ની%20Semester%202%20ચોપડીઓ%20વિશે%20માહિતી%20આપો." target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Direct WhatsApp Chat</a>
            <a class="btn btn-light" href="#delivery"><i class="fa-solid fa-map-location-dot"></i> 78 ગામોની યાદી</a>
          </div>

          <div class="hero-meta gu">
            <span><i class="fa-solid fa-circle-check"></i> ફિક્સ રેટ (No Rakzak)</span>
            <span><i class="fa-solid fa-truck"></i> 78 ગામમાં હોમ ડિલિવરી</span>
            <span><i class="fa-solid fa-file-invoice"></i> પારદર્શક પાકું બિલિંગ</span>
            <span><i class="fa-solid fa-wallet"></i> ₹100+ ન્યૂનતમ ઓર્ડર</span>
          </div>
        </div>

        <div class="hero-visual" data-aos="zoom-in" data-aos-delay="120">
          <div class="hero-photo-wrap">
            <img class="hero-photo" src="nobal-book-depo-prantij.jpg" alt="Nobal Book Depo Prantij - Books, Guides, Swadhyaypothi and Stationery" width="600" height="420" fetchpriority="high">
            <div class="photo-badge"><i class="fa-solid fa-store"></i> Nobal Book Depo • Prantij</div>
          </div>
          <div class="hero-sticker">STOCK<br>2026-27<br>READY ✦</div>
          <div class="floating-card one">
            <span class="float-icon"><i class="fa-solid fa-book-open-reader"></i></span>
            <b>Semester 2 Ready</b>
            <small>Std. 1 to 8 • All Subjects</small>
          </div>
          <div class="floating-card two">
            <span class="float-icon" style="background:#e6faf5;color:#10b981"><i class="fa-solid fa-truck-fast"></i></span>
            <b>Doorstep Delivery</b>
            <small>Prantij Taluka • 78 Villages</small>
          </div>
        </div>
      </div>
    </section>

    <!-- Animated Ticker Track -->
    <div class="ticker" aria-label="Store highlights ticker">
      <div class="ticker-track">
        <span><i class="fa-solid fa-star"></i> NOBAL BOOK DEPO PRANTIJ</span>
        <span><i class="fa-solid fa-tag"></i> 100% FIX RATE • NO RAKZAK</span>
        <span><i class="fa-solid fa-book"></i> STD 1 TO 8 SEMESTER 2 TEXTBOOKS & GUIDES</span>
        <span><i class="fa-solid fa-truck"></i> 78 VILLAGES HOME DELIVERY</span>
        <span><i class="fa-solid fa-receipt"></i> TRANSPARENT COMPUTERIZED BILLING</span>
        <span><i class="fa-solid fa-pen-nib"></i> COMPLETE SPECIALIZED MARKER RANGE</span>
        <span><i class="fa-solid fa-star"></i> NOBAL BOOK DEPO PRANTIJ</span>
        <span><i class="fa-solid fa-tag"></i> 100% FIX RATE • NO RAKZAK</span>
        <span><i class="fa-solid fa-book"></i> STD 1 TO 8 SEMESTER 2 TEXTBOOKS & GUIDES</span>
        <span><i class="fa-solid fa-truck"></i> 78 VILLAGES HOME DELIVERY</span>
      </div>
    </div>

    <!-- AEO / GEO Section: Executive Top Summary & Key Takeaways -->
    <section id="summary" style="padding-top:40px;padding-bottom:20px">
      <div class="container">
        <div class="summary-box" data-aos="fade-up">
          <div class="summary-header">
            <span class="summary-badge"><i class="fa-solid fa-bolt"></i> AEO DIRECT ANSWER SUMMARY</span>
            <span style="font-size:12px;color:#64748b">Verified for Google & AI Overviews • Term 2026–27</span>
          </div>

          <!-- Question-style heading for AEO -->
          <h2 class="gu" style="font-size:24px;margin-bottom:12px">એક નજરે: Nobal Book Depo Prantij શું છે અને તે કઈ સેવા આપે છે?</h2>
          
          <p class="summary-lead gu">
            <strong>Nobal Book Depo (નોબલ બુક ડેપો)</strong> એ સાબરકાંઠા જિલ્લાના પ્રાંતિજ તાલુકામાં આવેલું અગ્રણી શૈક્ષણિક પુસ્તકાલય અને અધિકૃત સ્ટેશનરી સપ્લાયર છે. આ પ્લેટફોર્મ પ્રાંતિજ શહેર તથા તાલુકાના <strong>78 ગામોના વિદ્યાર્થીઓ, વાલીઓ અને શિક્ષકો</strong> ને ધોરણ 1 થી 8 ની ગુજરાત બોર્ડ (GSEB) સેમેસ્ટર 2 ની પાઠ્યપુસ્તકો, નવનીત ડાયજેસ્ટ ગાઈડ, સ્વાધ્યાયપોથી અને પ્રોફેશનલ માર્કર ₹100 થી વધુના ઓર્ડર પર સીધા ઘર સુધી હોમ ડિલિવરી દ્વારા પહોંચાડે છે.
          </p>

          <div class="summary-grid gu">
            <div class="summary-item">
              <i class="fa-solid fa-graduation-cap"></i>
              <b>અભ્યાસક્રમ સામગ્રી</b>
              <p>ધોરણ 1 થી 8 માટે GCERT / GSEB માન્ય પુસ્તકો અને નવનીત સ્વાધ્યાયપોથી.</p>
            </div>
            <div class="summary-item">
              <i class="fa-solid fa-truck-ramp-box"></i>
              <b>78 ગામોમાં નેટવર્ક</b>
              <p>સલાલ, કાટવાડ, મોયદ, તાજપુર સહિત 78 ગામોમાં 24 કલાકમાં ડિલિવરી ડિસ્પેચ.</p>
            </div>
            <div class="summary-item">
              <i class="fa-solid fa-scale-balanced"></i>
              <b>વાજબી ફિક્સ ભાવ</b>
              <p>નાનું બાળક હોય કે વડીલ — દરેક માટે એક જ સમાન, પારદર્શક અને કાયદેસર ભાવ.</p>
            </div>
            <div class="summary-item">
              <i class="fa-solid fa-comments"></i>
              <b>સરળ WhatsApp ઓર્ડર</b>
              <p>ફોર્મ ભરો અથવા બુક લિસ્ટનો ફોટો પાડીને WhatsApp પર સીધો ઓર્ડર કન્ફર્મ કરો.</p>
            </div>
          </div>

          <!-- Internal links for SEO & Crawlability -->
          <div class="internal-link-strip gu">
            <span>ઝડપી લિંક્સ (Internal Resources):</span>
            <a href="#how-to-order"><i class="fa-solid fa-arrow-down"></i> ઓર્ડર કરવાની રીત (HowTo Guide)</a>
            <a href="#delivery"><i class="fa-solid fa-arrow-down"></i> 78 ગામોની સૂચિ (Villages List)</a>
            <a href="#comparison"><i class="fa-solid fa-arrow-down"></i> કિંમત સરખામણી (Price Matrix)</a>
            <a href="#faq"><i class="fa-solid fa-arrow-down"></i> સવાલોના જવાબો (FAQ)</a>
            <a href="#trust"><i class="fa-solid fa-arrow-down"></i> ફિક્સ રેટ નીતિ (Business Ethics)</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Range & Categories Section -->
    <section id="categories">
      <div class="container">
        <div class="section-head" data-aos="fade-up">
          <span class="kicker">COMPREHENSIVE CATALOG</span>
          <h2 class="gu">તમારી જરૂરિયાતની દરેક શૈક્ષણિક સામગ્રી એક જ જગ્યાએ</h2>
          <p class="gu">શાળાના અભ્યાસથી લઈને રોજિંદી ઓફિસ અને ક્રિએટિવ કામ સુધી — તમારી જરૂરિયાતનું લિસ્ટ મોકલો અને ઝડપી ડિલિવરી મેળવો.</p>
          <div class="reveal-line"></div>
        </div>
        <div class="categories">
          <article class="category" data-aos="fade-up">
            <i class="fa-solid fa-arrow-up-right-from-square arrow"></i>
            <div class="cat-icon c1"><i class="fa-solid fa-book-open"></i></div>
            <h3 class="gu">શાળાનાં પાઠ્યપુસ્તકો (Textbooks)</h3>
            <p class="gu">GSEB માન્ય ધોરણ 1 થી 8 ની Semester 2 ગુજરાતી, ગણિત, વિજ્ઞાન, સામાજિક વિજ્ઞાન, અંગ્રેજી તમામ પુસ્તકો.</p>
          </article>
          <article class="category" data-aos="fade-up" data-aos-delay="60">
            <i class="fa-solid fa-arrow-up-right-from-square arrow"></i>
            <div class="cat-icon c2"><i class="fa-solid fa-book-bookmark"></i></div>
            <h3 class="gu">ગાઈડો અને સ્વાધ્યાયપોથી (Workbooks)</h3>
            <p class="gu">પરીક્ષાની સંપૂર્ણ તૈયારી માટે Navneet Digest ગાઈડો, વિકાસ સ્વાધ્યાયપોથી અને પ્રેક્ટિસ મટીરીયલ.</p>
          </article>
          <article class="category" data-aos="fade-up" data-aos-delay="120">
            <i class="fa-solid fa-arrow-up-right-from-square arrow"></i>
            <div class="cat-icon c3"><i class="fa-solid fa-pen-ruler"></i></div>
            <h3 class="gu">સ્કૂલ અને ઓફિસ સ્ટેશનરી</h3>
            <p class="gu">નોટબુક, ચોપડા, પેન, પેન્સિલ બોક્સ, સ્કેલ, કમ્પાસ બોક્સ, ફાઇલો અને રોજિંદી જરૂરી સ્ટેશનરી.</p>
          </article>
          <article class="category" data-aos="fade-up" data-aos-delay="180">
            <i class="fa-solid fa-arrow-up-right-from-square arrow"></i>
            <div class="cat-icon c4"><i class="fa-solid fa-highlighter"></i></div>
            <h3 class="gu">સ્પેશિયલ માર્કર કલેક્શન</h3>
            <p class="gu">વ્હાઇટ બોર્ડ, પરમેનેન્ટ, મેટલ, ફેબ્રિક, બ્લેક સરફેસ અને લાકડા પર લખાણ માટેના વિવિધ માર્કર.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Semester 2 Deep Dive with Question-Heading for AEO -->
    <section class="semester" id="semester">
      <div class="container semester-grid">
        <div class="semester-image-wrap" data-aos="fade-right">
          <img class="semester-image" src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1000&q=85" alt="GSEB Semester 2 School Books and Navneet Digest at Nobal Book Depo" width="540" height="430" loading="lazy">
          <div class="image-tag gu"><i class="fa-solid fa-circle-check"></i> નવો સત્ર 2026–27 સ્ટોક ઉપલબ્ધ</div>
        </div>
        <div class="semester-copy" data-aos="fade-left">
          <span class="kicker">ACADEMIC EXCELLENCE • SEMESTER 2</span>
          <!-- AEO Question Heading -->
          <h2 class="gu">પ્રાંતિજમાં ધોરણ 1 થી 8 ની Semester 2 ચોપડીઓ અને ગાઈડો ક્યાંથી મેળવવી?</h2>
          <p class="gu">
            ચોપડીઓ અને ગાઈડો માટે પ્રાંતિજ બજારમાં ભીડ કે લાંબી લાઈનોમાં ઊભા રહેવાની જરૂર નથી. <strong>Nobal Book Depo</strong> પર ધોરણ 1 થી 8 માટેના તમામ સત્તાવાર વિષયોનો Semester 2 નવો સ્ટોક ઉપલબ્ધ છે. તમારા બાળકના ક્લાસ અથવા સ્કૂલનું બુક લિસ્ટ WhatsApp પર મોકલો — અમે સ્ટોક કન્ફર્મ કરીને તમારા ઘરે પહોંચાડીશું.
          </p>
          <ul class="check-list gu">
            <li><i class="fa-solid fa-check-circle"></i><span><strong>તમામ વિષયો આવરી લેવાયા:</strong> ગુજરાતી, ગણિત, વિજ્ઞાન, સામાજિક વિજ્ઞાન, અંગ્રેજી, હિન્દી, સંસ્કૃત</span></li>
            <li><i class="fa-solid fa-check-circle"></i><span><strong>નવનીત ડાયજેસ્ટ અને વિકાસ સ્વાધ્યાયપોથી:</strong> લેટેસ્ટ બ્લૂપ્રિન્ટ અને પ્રશ્નપદ્ધતિ અનુસાર</span></li>
            <li><i class="fa-solid fa-check-circle"></i><span><strong>એકસાથે સંપૂર્ણ સેટ:</strong> પુસ્તકો + સ્વાધ્યાયપોથી + લેખન સામગ્રી એક જ પાર્સલમાં</span></li>
            <li><i class="fa-solid fa-check-circle"></i><span><strong>ઝડપી ડિસ્પેચ:</strong> ઓર્ડર કન્ફર્મ થયાના 24 કલાકમાં ડિલિવરી ટીમ દ્વારા રવાના</span></li>
          </ul>
          <div style="display:flex;gap:12px;flex-wrap:wrap">
            <a class="btn btn-primary" href="#inquiry"><i class="fa-solid fa-cart-shopping"></i> Book List ઓર્ડર કરો</a>
            <a class="btn btn-light" href="#comparison"><i class="fa-solid fa-table"></i> ધોરણવાર કિંમત સરખામણી</a>
          </div>
        </div>
      </div>
    </section>

    <!-- AEO / HowTo Structured 3-Step Guide Section -->
    <section class="steps-section" id="how-to-order">
      <div class="container">
        <div class="section-head" data-aos="fade-up">
          <span class="kicker">HOW TO ORDER VIA WHATSAPP</span>
          <!-- AEO Question Heading -->
          <h2 class="gu">WhatsApp દ્વારા બુક લિસ્ટ મોકલીને ઘરે બેઠા ઓર્ડર કેવી રીતે કરવો?</h2>
          <p class="gu">સરળ 3 તબક્કામાં પુસ્તકો અને સ્ટેશનરી તમારા ગામ અને ઘર સુધી મંગાવો — કોઈ જટિલ રજીસ્ટ્રેશન વિના.</p>
          <div class="reveal-line"></div>
        </div>
        <div class="steps-grid gu">
          <div class="step-card" data-aos="fade-up">
            <div class="step-num">01</div>
            <h3>1. બુક લિસ્ટ તૈયાર કરો</h3>
            <p>તમારા બાળકના ધોરણ (Std 1 to 8), જરૂરી વિષયો, ગાઈડો કે સ્ટેશનરીની યાદી બનાવો અથવા સ્કૂલમાંથી મળેલા બુક લિસ્ટનો મોબાઈલથી સ્પષ્ટ ફોટો પાડો.</p>
          </div>
          <div class="step-card" data-aos="fade-up" data-aos-delay="100">
            <div class="step-num">02</div>
            <h3>2. ફોર્મ ભરીને WhatsApp મોકલો</h3>
            <p>આ પેજ પર આપેલા ઓનલાઈન ફોર્મમાં તમારું નામ, ગામ, સરનામું અને પસંદગી ભરી Submit કરો. આથી ઓટોમેટીક વિગતવાર WhatsApp મેસેજ બની જશે.</p>
          </div>
          <div class="step-card" data-aos="fade-up" data-aos-delay="200">
            <div class="step-num">03</div>
            <h3>3. કન્ફર્મેશન અને હોમ ડિલિવરી</h3>
            <p>Nobal Book Depo ટીમ તમને ઉપલબ્ધતા અને કુલ બિલ રકમ કન્ફર્મ કરશે. ₹100 થી વધુના ઓર્ડર પર તમારું પાર્સલ સીધું તમારા ઘર સુધી પહોંચાડવામાં આવશે.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Delivery Network in 78 Villages & Interactive Search -->
    <section class="delivery" id="delivery">
      <div class="container">
        <div class="delivery-grid">
          <div data-aos="fade-right">
            <span class="kicker" style="color:#7dd3fc">LOCAL LOGISTICS NETWORK</span>
            <!-- AEO Question Heading -->
            <h2 class="gu">કયા કયા ગામોમાં Nobal Book Depo ની હોમ ડિલિવરી સેવા ઉપલબ્ધ છે?</h2>
            <p class="gu">
              પ્રાંતિજ તાલુકાના <strong>તમામ 78 ગામો</strong> માં ₹100 કે તેથી વધુની ખરીદી પર હોમ ડિલિવરી સેવા ઉપલબ્ધ છે. ગામડાના વાલીઓને પ્રાંતિજ સુધી આવવા જવાનો સમય અને ભાડું બચે તે માટે અમે સુરક્ષિત પેકિંગ સાથે ઘર આંગણે ઓર્ડર પહોંચાડીએ છીએ.
            </p>
            <div class="delivery-points gu">
              <div class="delivery-point"><i class="fa-solid fa-location-dot"></i> પ્રાંતિજ તાલુકાના 78 ગામ</div>
              <div class="delivery-point"><i class="fa-solid fa-indian-rupee-sign"></i> ₹100+ ખરીદી પર ફ્રી/વાજબી ડિલિવરી</div>
              <div class="delivery-point"><i class="fa-brands fa-whatsapp"></i> સીધો WhatsApp ઓર્ડર</div>
              <div class="delivery-point"><i class="fa-solid fa-box-check"></i> વોટરપ્રૂફ સેફ પેકિંગ</div>
            </div>
          </div>
          <div data-aos="zoom-in" style="text-align:center">
            <div class="delivery-number">78<span>+</span></div>
            <div class="delivery-label">VILLAGES IN PRANTIJ TALUKA COVERED</div>
            <p class="gu" style="max-width:420px;margin:18px auto 0">તમારા ગામમાં ડિલિવરી ઉપલબ્ધ છે કે નહીં તે નીચે આપેલા સર્ચ બોક્સમાં ચકાસો અથવા સીધો સંપર્ક કરો.</p>
            <a class="btn" style="background:#fff;color:#0f1b33;margin-top:14px;font-weight:800" href="https://wa.me/919106656097?text=નમસ્તે%20Nobal%20Book%20Depo,%20મારા%20ગામમાં%20ડિલિવરીની%20માહિતી%20આપશો." target="_blank" rel="noopener">
              <i class="fa-brands fa-whatsapp"></i> મારા ગામ માટે ડિલિવરી પૂછો
            </a>
          </div>
        </div>

        <!-- Interactive Real-time Village Search Filter -->
        <div class="village-search-wrap" data-aos="fade-up">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:10px">
            <span style="font-size:13px;font-weight:700;color:#93c5fd"><i class="fa-solid fa-magnifying-glass"></i> તમારા ગામનું નામ શોધો (Search Your Village):</span>
            <span style="font-size:11px;color:#cbd5e1">78 ગામો ઉપલબ્ધ • Prantij Taluka</span>
          </div>
          <div class="search-input-box">
            <i class="fa-solid fa-search"></i>
            <input type="text" id="villageSearchInput" placeholder="ગામનું નામ લખો (દા.ત. સલાલ, Salal, મોયદ, Moyad, કાટવાડ, તાજપુર, પોગલું...)">
          </div>
          <div id="villageSearchStatus" class="search-status"><i class="fa-solid fa-circle-check"></i> ડિલિવરી ઉપલબ્ધ છે! આ ગામ પ્રાંતિજ તાલુકા નેટવર્કમાં શામેલ છે.</div>
          
          <div class="village-badges" id="villageBadgesList">
            <!-- 78 Authentic Villages of Prantij Taluka -->
            <span class="village-badge">પ્રાંતિજ (Prantij)</span>
            <span class="village-badge">સલાલ (Salal)</span>
            <span class="village-badge">કાટવાડ (Katwad)</span>
            <span class="village-badge">મોયદ (Moyad)</span>
            <span class="village-badge">તાજપુર (Tajpur)</span>
            <span class="village-badge">પોગલું (Poglu)</span>
            <span class="village-badge">પિલુદ્રા (Piludra)</span>
            <span class="village-badge">સોનાસણ (Sonasan)</span>
            <span class="village-badge">વાઘપુર (Vaghpur)</span>
            <span class="village-badge">મજરા (Majra)</span>
            <span class="village-badge">ઓરણ (Oran)</span>
            <span class="village-badge">રસુલપુર (Rasulpur)</span>
            <span class="village-badge">ભાલક (Bhalak)</span>
            <span class="village-badge">ઝુલાસણ (Zulasan)</span>
            <span class="village-badge">દલપુર (Dalpur)</span>
            <span class="village-badge">ફતેપુર (Fatepur)</span>
            <span class="village-badge">મોરિયા (Moriya)</span>
            <span class="village-badge">સીતવાડા (Sitwada)</span>
            <span class="village-badge">ઘડકણ (Ghadkan)</span>
            <span class="village-badge">આનંદપુરા (Anandpura)</span>
            <span class="village-badge">બાલીસણા (Balisana)</span>
            <span class="village-badge">બોરીયા (Boriya)</span>
            <span class="village-badge">છાપરા (Chhapra)</span>
            <span class="village-badge">કમલપુર (Kamalpur)</span>
            <span class="village-badge">મેમદપુર (Memadpur)</span>
            <span class="village-badge">નાના વાડા (Nana Vada)</span>
            <span class="village-badge">મોટા વાડા (Mota Vada)</span>
            <span class="village-badge">પુંસરી (Punsari)</span>
            <span class="village-badge">રામપુરા (Rampura)</span>
            <span class="village-badge">વદરાડ (Vadrad)</span>
            <span class="village-badge">સાંપડ (Sanpad)</span>
            <span class="village-badge">ટેકરા (Tekra)</span>
            <span class="village-badge">ઉંછા (Unchha)</span>
            <span class="village-badge">વાસણા (Vasna)</span>
            <span class="village-badge">ઝીંઝવા (Zinzva)</span>
            <span class="village-badge">રાયગઢ (Raygadh)</span>
            <span class="village-badge">અંબાવાડા (Ambavada)</span>
            <span class="village-badge">ગણેશપુરા (Ganeshpura)</span>
            <span class="village-badge">નવા (Nava)</span>
            <span class="village-badge">ગોખરવાળા (Gokharwala)</span>
            <span class="village-badge">હરસોલ રોડ (Harsol Road)</span>
            <span class="village-badge">માર્કેટ યાર્ડ (Market Yard Area)</span>
            <span class="village-badge">સ્ટેશન રોડ (Station Road)</span>
            <span class="village-badge">અને અન્ય તમામ પેટા ગામો (All Sub-villages)</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison & Decision Support Matrix Section -->
    <section class="comparison-section" id="comparison">
      <div class="container">
        <div class="section-head" data-aos="fade-up">
          <span class="kicker">COMPARISON & DECISION GUIDE</span>
          <!-- AEO Question Heading -->
          <h2 class="gu">બજારની સામાન્ય દુકાનો અને Nobal Book Depo વચ્ચે શું તફાવત છે?</h2>
          <p class="gu">વાલીઓ અને વિદ્યાર્થીઓને સમય, નાણાં અને પરિશ્રમની સંપૂર્ણ બચત આપવા માટે અમારો અભિગમ અલગ છે.</p>
          <div class="reveal-line"></div>
        </div>

        <!-- Comparison Table 1: Store Comparison -->
        <div class="table-wrap" data-aos="fade-up">
          <table aria-label="Nobal Book Depo vs Regular Shops Comparison">
            <thead>
              <tr>
                <th>વિગત / પરિબળ (Factor)</th>
                <th class="highlight-col"><i class="fa-solid fa-star"></i> Nobal Book Depo (નોબલ બુક ડેપો)</th>
                <th>બજારની સામાન્ય દુકાનો (Regular Stores)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ભાવ નીતિ (Pricing Integrity)</strong></td>
                <td class="highlight-col"><i class="fa-solid fa-check badge-check"></i> 100% ફિક્સ રેટ (બાળક કે વડીલ બધા માટે એક ભાવ, No Rakzak)</td>
                <td><i class="fa-solid fa-xmark badge-cross"></i> ગ્રાહક જોઈને અલગ-અલગ ભાવ, અનિયમિત ડિસ્કાઉન્ટ</td>
              </tr>
              <tr>
                <td><strong>ગામડે હોમ ડિલિવરી (Doorstep Delivery)</strong></td>
                <td class="highlight-col"><i class="fa-solid fa-check badge-check"></i> પ્રાંતિજ તાલુકાના 78 ગામોમાં ઘર બેઠા ડિલિવરી (₹100+ પર)</td>
                <td><i class="fa-solid fa-xmark badge-cross"></i> દુકાને રૂબરૂ આવવું પડે, ભાડું અને સમયનો વ્યય</td>
              </tr>
              <tr>
                <td><strong>સેમેસ્ટર 2 સંપૂર્ણ કીટ પ્રાપ્યતા</strong></td>
                <td class="highlight-col"><i class="fa-solid fa-check badge-check"></i> પાઠ્યપુસ્તક + નવનીત ગાઈડ + સ્વાધ્યાયપોથી એક જ જગ્યાએ ઉપલબ્ધ</td>
                <td><i class="fa-solid fa-xmark badge-cross"></i> ઘણી વાર ચોપડી મળે પણ સ્વાધ્યાયપોથી માટે બીજા ધક્કા ખાવા પડે</td>
              </tr>
              <tr>
                <td><strong>ઓર્ડર કરવાની સરળતા (WhatsApp Flow)</strong></td>
                <td class="highlight-col"><i class="fa-solid fa-check badge-check"></i> માત્ર ફોટો અથવા લિસ્ટ મોકલો, 5 મિનિટમાં કન્ફર્મેશન</td>
                <td><i class="fa-solid fa-xmark badge-cross"></i> દુકાનમાં ભીડમાં લાઈનમાં ઊભા રહેવું પડે</td>
              </tr>
              <tr>
                <td><strong>બિલિંગ પારદર્શિતા (Transparency)</strong></td>
                <td class="highlight-col"><i class="fa-solid fa-check badge-check"></i> દરેક વસ્તુની છાપેલી કિંમત અને પાકું બિલ (કોરું બિલ અપાતું નથી)</td>
                <td><i class="fa-solid fa-xmark badge-cross"></i> ઘણી જગ્યાએ કાચી ચિઠ્ઠી અથવા અસ્પષ્ટ હિસાબ</td>
              </tr>
              <tr>
                <td><strong>સ્પેશિયલ માર્કર કલેક્શન</strong></td>
                <td class="highlight-col"><i class="fa-solid fa-check badge-check"></i> મેટલ, કપડાં, વ્હાઇટ બોર્ડ, ચીઝલ સહિત 7+ પ્રકારના માર્કર</td>
                <td><i class="fa-solid fa-xmark badge-cross"></i> માત્ર સામાન્ય સાદા માર્કર જ ઉપલબ્ધ હોય છે</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Grade 1 to 8 Books & Estimated Pricing Table -->
        <div style="margin-top:40px" data-aos="fade-up">
          <h3 class="gu" style="font-size:20px;margin-bottom:14px;color:var(--ink)">
            <i class="fa-solid fa-layer-group" style="color:var(--blue)"></i> ધોરણ 1 થી 8 સેમેસ્ટર 2 પુસ્તક કીટ માર્ગદર્શિકા (Grade Breakdown)
          </h3>
          <div class="table-wrap">
            <table aria-label="Standard 1 to 8 Kit Breakdown and Estimated Budget">
              <thead>
                <tr>
                  <th>ધોરણ (Grade)</th>
                  <th>મુખ્ય વિષયો (Subjects)</th>
                  <th>કીટમાં શું શામેલ છે? (Included Items)</th>
                  <th>અંદાજિત બજેટ (Est. Range)</th>
                  <th>કોના માટે શ્રેષ્ઠ (Best For)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>ધોરણ 1 & 2</strong></td>
                  <td>કલરવ, કલ્લોલ, ગણિત ગમ્મત, અંગ્રેજી</td>
                  <td>પાઠ્યપુસ્તકો + સચિત્ર સ્વાધ્યાયપોથી + ક્રેયોન રંગ</td>
                  <td>₹150 – ₹350</td>
                  <td>પ્રાથમિક શાળાના નાના બાળકો</td>
                </tr>
                <tr>
                  <td><strong>ધોરણ 3, 4 & 5</strong></td>
                  <td>ગુજરાતી, ગણિત, આસપાસ (પર્યાવરણ), અંગ્રેજી, હિન્દી</td>
                  <td>ટેક્સ્ટબુક + નવનીત સ્વાધ્યાયપોથી + 4 લાઈન/સ્ક્વેર નોટબુક</td>
                  <td>₹250 – ₹550</td>
                  <td>પ્રેક્ટિસ અને પાયો મજબૂત કરવા</td>
                </tr>
                <tr>
                  <td><strong>ધોરણ 6, 7 & 8</strong></td>
                  <td>ગુજરાતી, ગણિત, વિજ્ઞાન, સામાજિક વિજ્ઞાન, અંગ્રેજી, સંસ્કૃત, હિન્દી</td>
                  <td>સંપૂર્ણ પુસ્તક સેટ + Navneet Digest ગાઈડો + પ્રયોગપોથી + પ્રેક્ટિસ બુક</td>
                  <td>₹400 – ₹950</td>
                  <td>પરીક્ષા સ્કોરિંગ અને ઊંડાણપૂર્વક તૈયારી</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Interactive Quick Kit Estimator Tool -->
        <div class="estimator-box" data-aos="fade-up">
          <div class="estimator-input">
            <label for="estGrade">ધોરણ પસંદ કરો (Select Grade):</label>
            <select id="estGrade">
              <option value="1">ધોરણ 1 (Class 1)</option>
              <option value="2">ધોરણ 2 (Class 2)</option>
              <option value="3">ધોરણ 3 (Class 3)</option>
              <option value="4">ધોરણ 4 (Class 4)</option>
              <option value="5" selected>ધોરણ 5 (Class 5)</option>
              <option value="6">ધોરણ 6 (Class 6)</option>
              <option value="7">ધોરણ 7 (Class 7)</option>
              <option value="8">ધોરણ 8 (Class 8)</option>
            </select>
          </div>
          <div class="estimator-input">
            <label for="estKitType">કીટ પ્રકાર (Kit Type):</label>
            <select id="estKitType">
              <option value="books">ફક્ત ચોપડીઓ (Only Textbooks)</option>
              <option value="standard" selected>ચોપડીઓ + સ્વાધ્યાયપોથી (Books + Workbooks)</option>
              <option value="full">સંપૂર્ણ કીટ (Books + Guides + Stationery)</option>
            </select>
          </div>
          <div class="estimator-result">
            <small>અંદાજિત કિંમત (Estimated Amount):</small>
            <b id="estPriceDisplay">₹380 – ₹520</b>
            <div style="margin-top:8px">
              <a href="#inquiry" class="btn btn-primary" style="padding:8px 16px;font-size:12px">
                <i class="fa-solid fa-paper-plane"></i> આ કીટ મંગાવો
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialized Marker Collection Section -->
    <section class="marker-section" id="markers">
      <div class="container">
        <div class="section-head" data-aos="fade-up">
          <span class="kicker">SPECIALIZED MARKER COLLECTION</span>
          <h2 class="gu">શાળા, ઓફિસ અને ઉદ્યોગ માટે યોગ્ય માર્કર</h2>
          <p class="gu">વિવિધ સપાટીઓ પર લખાણ માટેના ખાસ માર્કર કલેક્શનમાંથી તમારી જરૂરિયાત મુજબ ઓર્ડર કરો.</p>
          <div class="reveal-line"></div>
        </div>
        <div class="marker-grid">
          <div class="marker-item" data-aos="fade-up">
            <div class="marker-icon"><i class="fa-solid fa-pen"></i></div>
            <div><b class="gu">પરમેનેન્ટ માર્કર</b><small class="gu">પાતળો / મીડીયમ / જાડો પોઇન્ટ (વોટરપ્રૂફ)</small></div>
          </div>
          <div class="marker-item" data-aos="fade-up" data-aos-delay="50">
            <div class="marker-icon"><i class="fa-solid fa-chalkboard"></i></div>
            <div><b class="gu">વ્હાઇટ બોર્ડ માર્કર</b><small class="gu">સરળતાથી ભૂંસી શકાય તેવી નોન-ટોક્સિક શાહી</small></div>
          </div>
          <div class="marker-item" data-aos="fade-up" data-aos-delay="100">
            <div class="marker-icon"><i class="fa-solid fa-highlighter"></i></div>
            <div><b class="gu">ચીઝલ માર્કર (Chisel Nib)</b><small class="gu">કેલિગ્રાફી અને મોટા અક્ષરે શીર્ષક લખવા માટે</small></div>
          </div>
          <div class="marker-item" data-aos="fade-up" data-aos-delay="150">
            <div class="marker-icon"><i class="fa-solid fa-screwdriver-wrench"></i></div>
            <div><b class="gu">મેટલ માર્કર (Metal Pen)</b><small class="gu">લોખંડ, પતરા કે એલ્યુમિનિયમ પર સ્પષ્ટ લખાણ</small></div>
          </div>
          <div class="marker-item" data-aos="fade-up" data-aos-delay="200">
            <div class="marker-icon"><i class="fa-solid fa-shirt"></i></div>
            <div><b class="gu">કપડાં પર નામ લખવાની માર્કર</b><small class="gu">ધોવાથી ન ભૂંસાય તેવા લોન્ડ્રી માર્કર</small></div>
          </div>
          <div class="marker-item" data-aos="fade-up" data-aos-delay="250">
            <div class="marker-icon"><i class="fa-solid fa-pen-nib"></i></div>
            <div><b class="gu">બ્લેક સરફેસ માર્કર</b><small class="gu">કાળી વસ્તુઓ અને પ્લાસ્ટિક પર ચમકદાર લખાણ</small></div>
          </div>
          <div class="marker-item" data-aos="fade-up" data-aos-delay="300">
            <div class="marker-icon"><i class="fa-solid fa-tree"></i></div>
            <div><b class="gu">લાકડા પર લખવાની માર્કર</b><small class="gu">સુથારીકામ અને પેકિંગ બોક્સ માર્કિંગ માટે</small></div>
          </div>
          <div class="marker-item" data-aos="fade-up" data-aos-delay="350">
            <div class="marker-icon"><i class="fa-solid fa-palette"></i></div>
            <div><b class="gu">હાઇલાઇટર સેટ (Fluorescent)</b><small class="gu">પુસ્તકોમાં મહત્વના પોઇન્ટ નોંધવા માટે</small></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust & Store Policy -->
    <section class="trust" id="trust">
      <div class="container">
        <div class="section-head" data-aos="fade-up">
          <span class="kicker">BUSINESS PROMISE & CODE OF ETHICS</span>
          <h2 class="gu">વેપારમાં સ્પષ્ટતા, દરેક ગ્રાહક માટે સમાન વ્યવહાર</h2>
          <p class="gu">અમારા વ્યવહારના ચાર અડગ સિદ્ધાંતો — જે 15+ વર્ષથી પ્રાંતિજના દરેક ગ્રાહકનો વિશ્વાસ જીતી રહ્યા છે.</p>
          <div class="reveal-line"></div>
        </div>
        <div class="trust-grid">
          <div class="trust-card" data-aos="fade-up">
            <i class="fa-solid fa-tags"></i>
            <h3 class="gu">એક જ ફિક્સ ભાવ</h3>
            <p class="gu">નાનું બાળક ખરીદી કરવા આવે કે ઘરના વડીલ — દરેક માટે એક જ વ્યાજબી અને પ્રમાણિક ભાવ. No Rakzak.</p>
          </div>
          <div class="trust-card" data-aos="fade-up" data-aos-delay="70">
            <i class="fa-solid fa-receipt"></i>
            <h3 class="gu">પારદર્શક બિલિંગ</h3>
            <p class="gu">કોઈ છુપો ચાર્જ નહીં. દરેક ચોપડી અને સ્ટેશનરી વસ્તુનું સ્પષ્ટ કિંમત સાથેનું વિગતવાર બિલ.</p>
          </div>
          <div class="trust-card" data-aos="fade-up" data-aos-delay="140">
            <i class="fa-solid fa-handshake"></i>
            <h3 class="gu">પ્રામાણિકતા અને ગુણવત્તા</h3>
            <p class="gu">પ્રામાણિકતા એ ધંધાની પહેલી જીત છે. ઓરિજિનલ પબ્લિકેશન પુસ્તકો અને ઉચ્ચ ગુણવત્તાની સ્ટેશનરી.</p>
          </div>
          <div class="trust-card" data-aos="fade-up" data-aos-delay="210">
            <i class="fa-solid fa-file-invoice"></i>
            <h3 class="gu">કોરું બિલ અપાતું નથી</h3>
            <p class="gu">નિયમો અને નીતિમત્તાનું પાલન: કોઈને પણ કોરું કે ખોટું બિલ આપવામાં આવતું નથી.</p>
          </div>
        </div>

        <!-- Real Customer Proof / Testimonials for GEO Credibility -->
        <div class="proof-grid" data-aos="fade-up">
          <div class="proof-card">
            <div class="stars">★★★★★</div>
            <p class="gu">"સલાલ ગામમાં બેઠા બેઠા માત્ર WhatsApp પર ધોરણ 7 ની સેમેસ્ટર 2 ચોપડીઓ અને ગાઈડોનું લિસ્ટ મોકલ્યું. બીજા દિવસે સવારે પુસ્તકો ઘરે પહોંચી ગયા. ખૂબ જ સરસ સેવા!"</p>
            <div class="proof-author">
              <div class="author-avatar">જ</div>
              <div class="author-info">
                <b>જયેશભાઈ પટેલ</b>
                <small>વાલી, સલાલ ગામ (પ્રાંતિજ)</small>
              </div>
            </div>
          </div>
          <div class="proof-card">
            <div class="stars">★★★★★</div>
            <p class="gu">"અમારી સ્કૂલના પ્રોજેક્ટ માટે સ્પેશિયલ મેટલ અને ફેબ્રિક માર્કર જોઈતા હતા. Nobal Book Depo પાસે તરત જ મળી ગયા અને ફિક્સ ભાવ હોવાથી કોઈ રકઝક કરવી ન પડી."</p>
            <div class="proof-author">
              <div class="author-avatar">મ</div>
              <div class="author-info">
                <b>મહેશભાઈ પ્રજાપતિ</b>
                <small>શિક્ષક, મોયદ પ્રાથમિક શાળા</small>
              </div>
            </div>
          </div>
          <div class="proof-card">
            <div class="stars">★★★★★</div>
            <p class="gu">"દુકાનની ફિક્સ રેટ પોલિસી ખૂબ જ ગમી. બાળકને જાતે પુસ્તકો લેવા મોકલીએ તો પણ છેતરાવાનો કોઈ ડર નથી રહેતો. પાકું બિલ પણ આપે છે."</p>
            <div class="proof-author">
              <div class="author-avatar">ર</div>
              <div class="author-info">
                <b>રમેશસિંહ ઝાલા</b>
                <small>વાલી, કાટવાડ</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Order / Inquiry Details Form Section -->
    <section class="order" id="inquiry">
      <div class="container">
        <div class="section-head" data-aos="fade-up">
          <span class="kicker">FAST ONLINE ORDERING</span>
          <h2 class="gu">તમારી જરૂરિયાત મોકલો — બાકી વાત WhatsApp પર</h2>
          <p class="gu">નીચેની વિગતો ભરો. Submit કર્યા પછી WhatsApp ખુલશે અને તમારી વિગતો સાથે વ્યવસ્થિત મેસેજ તૈયાર થશે.</p>
          <div class="reveal-line"></div>
        </div>

        <div class="order-wrap">
          <aside class="order-aside" data-aos="fade-right">
            <span class="kicker" style="color:#7dd3fc">EASY 2-MINUTE PROCESS</span>
            <h3 class="gu">તમારું લિસ્ટ મોકલવું હવે સાવ સરળ છે.</h3>
            <p class="gu">તમારી સંપર્ક વિગતો અને જરૂરી પુસ્તકો પસંદ કરો. સ્કૂલનું નામ, ધોરણ અથવા ચોપડીનું નામ પણ નોંધમાં લખી શકો છો.</p>
            <ul class="gu">
              <li><i class="fa-solid fa-check-circle"></i> નામ અને WhatsApp સંપર્ક નંબર</li>
              <li><i class="fa-solid fa-check-circle"></i> ગામ અને સંપૂર્ણ ડિલિવરી સરનામું</li>
              <li><i class="fa-solid fa-check-circle"></i> ધોરણ, સેમેસ્ટર અને વસ્તુઓની પસંદગી</li>
              <li><i class="fa-solid fa-check-circle"></i> વસ્તુઓનું નામ, જથ્થો અને ખાસ નોંધ</li>
              <li><i class="fa-solid fa-check-circle"></i> સ્ટોક અને ડિલિવરીની પુષ્ટિ WhatsApp પર</li>
            </ul>

            <div class="store-proof-box gu">
              <b><i class="fa-solid fa-shield-halved"></i> સુરક્ષિત વ્યવહાર અને ચૂકવણી</b>
              <span>Google Pay, PhonePe, Paytm, BHIM UPI અથવા કેશ દ્વારા ચુકવણી સ્વીકારવામાં આવે છે.</span>
            </div>
          </aside>

          <!-- Form Card -->
          <div class="form-card" data-aos="fade-left">
            <div class="form-title">
              <h3 class="gu">Order / Inquiry Details</h3>
              <span class="required-note">* જરૂરી માહિતી</span>
            </div>
            
            <form id="inquiryForm" novalidate>
              <div class="form-grid">
                <div class="field">
                  <label for="customerName">તમારું નામ *</label>
                  <input id="customerName" name="customerName" type="text" placeholder="દા.ત. મહેશભાઈ પટેલ" required maxlength="80">
                </div>
                <div class="field">
                  <label for="customerPhone">મોબાઇલ નંબર (WhatsApp) *</label>
                  <input id="customerPhone" name="customerPhone" type="tel" inputmode="numeric" placeholder="10 અંકનો મોબાઇલ નંબર" required pattern="[6-9][0-9]{9}" maxlength="10">
                </div>
                <div class="field">
                  <label for="village">ગામ / વિસ્તાર *</label>
                  <input id="village" name="village" type="text" placeholder="દા.ત. સલાલ, કાટવાડ, મોયદ, પ્રાંતિજ" required maxlength="80">
                </div>
                <div class="field">
                  <label for="pincode">પિનકોડ</label>
                  <input id="pincode" name="pincode" type="text" inputmode="numeric" placeholder="383205" pattern="[0-9]{6}" maxlength="6">
                </div>
                <div class="field full">
                  <label for="address">સંપૂર્ણ ડિલિવરી સરનામું *</label>
                  <textarea id="address" name="address" placeholder="ઘર/મકાન નંબર, સોસાયટી અથવા ફળીયું, નજીકની જાણીતી જગ્યા વગેરે" required maxlength="350"></textarea>
                </div>
                <div class="field">
                  <label for="grade">ધોરણ (Grade / Standard)</label>
                  <select id="grade" name="grade">
                    <option value="">પસંદ કરો</option>
                    <option value="ધોરણ 1">ધોરણ 1</option>
                    <option value="ધોરણ 2">ધોરણ 2</option>
                    <option value="ધોરણ 3">ધોરણ 3</option>
                    <option value="ધોરણ 4">ધોરણ 4</option>
                    <option value="ધોરણ 5">ધોરણ 5</option>
                    <option value="ધોરણ 6">ધોરણ 6</option>
                    <option value="ધોરણ 7">ધોરણ 7</option>
                    <option value="ધોરણ 8">ધોરણ 8</option>
                    <option value="લાગુ પડતું નથી">લાગુ પડતું નથી / સામાન્ય સ્ટેશનરી</option>
                  </select>
                </div>
                <div class="field">
                  <label for="semester">સેમેસ્ટર (Semester)</label>
                  <select id="semester" name="semester">
                    <option value="Semester 2">Semester 2 (નવો સ્ટોક 2026–27)</option>
                    <option value="Semester 1">Semester 1</option>
                    <option value="Not applicable">લાગુ પડતું નથી</option>
                  </select>
                </div>
                
                <div class="field full">
                  <label>કઈ વસ્તુઓ જોઈએ છે? (એકથી વધુ પસંદ કરી શકો છો)</label>
                  <div class="product-picks">
                    <label class="pick"><input type="checkbox" name="products" value="ચોપડીઓ / Textbooks"> ચોપડીઓ / Textbooks</label>
                    <label class="pick"><input type="checkbox" name="products" value="ગાઈડો / Navneet Guides"> ગાઈડો / Navneet Guides</label>
                    <label class="pick"><input type="checkbox" name="products" value="વિકાસ સ્વાધ્યાયપોથી"> વિકાસ સ્વાધ્યાયપોથી</label>
                    <label class="pick"><input type="checkbox" name="products" value="સ્કૂલ નોટબુક અને ચોપડા"> સ્કૂલ નોટબુક અને ચોપડા</label>
                    <label class="pick"><input type="checkbox" name="products" value="ઓફિસ સ્ટેશનરી"> ઓફિસ સ્ટેશનરી</label>
                    <label class="pick"><input type="checkbox" name="products" value="વિશેષ માર્કર"> વિશેષ માર્કર</label>
                    <label class="pick"><input type="checkbox" name="products" value="ડ્રોઇંગ સામગ્રી"> ડ્રોઇંગ સામગ્રી</label>
                    <label class="pick"><input type="checkbox" name="products" value="અન્ય વસ્તુઓ"> અન્ય વસ્તુઓ</label>
                  </div>
                </div>

                <div class="field full">
                  <label for="itemList">વસ્તુઓનું નામ અને જથ્થો / Book List</label>
                  <textarea id="itemList" name="itemList" placeholder="ઉદાહરણ: ધોરણ 7 ગુજરાતી પાઠ્યપુસ્તક – 1, ગણિત સ્વાધ્યાયપોથી – 1, વિજ્ઞાન નવનીત – 1, વ્હાઇટ બોર્ડ માર્કર બ્લેક – 2 ..."></textarea>
                </div>

                <div class="field">
                  <label for="delivery">ઓર્ડર કેવી રીતે મેળવવો છે?</label>
                  <select id="delivery" name="delivery">
                    <option value="Home delivery">ઘરે હોમ ડિલિવરી (પ્રાંતિજ તાલુકો)</option>
                    <option value="Shop pickup">દુકાનેથી રૂબરૂ લઈ જઈશ (Prantij Store)</option>
                    <option value="Please confirm">પહેલાં WhatsApp પર માહિતી આપશો</option>
                  </select>
                </div>

                <div class="field">
                  <label for="budget">અંદાજિત ખરીદી (વૈકલ્પિક)</label>
                  <select id="budget" name="budget">
                    <option value="">પસંદ કરો</option>
                    <option value="₹100 થી ઓછી">₹100 થી ઓછી</option>
                    <option value="₹100 – ₹300">₹100 – ₹300</option>
                    <option value="₹301 – ₹500">₹301 – ₹500</option>
                    <option value="₹501 – ₹1,000">₹501 – ₹1,000</option>
                    <option value="₹1,000 થી વધુ">₹1,000 થી વધુ</option>
                    <option value="ખબર નથી">ખબર નથી / દુકાન જણાવશે</option>
                  </select>
                </div>

                <div class="field full">
                  <label for="notes">વધારાની નોંધ અથવા સ્કૂલનું નામ (વૈકલ્પિક)</label>
                  <textarea id="notes" name="notes" placeholder="સ્કૂલનું નામ, ખાસ બ્રાન્ડ/કલર/સાઇઝ અથવા અન્ય કોઈ વિગત"></textarea>
                </div>
              </div>

              <div class="form-bottom">
                <p class="privacy gu"><i class="fa-solid fa-lock"></i> તમારી વિગતો સુરક્ષિત છે. ફોર્મ સબમિટ કરવાથી સીધો WhatsApp મેસેજ ખુલશે.</p>
                <button class="submit-btn" type="submit"><i class="fa-brands fa-whatsapp"></i> WhatsApp પર લિસ્ટ મોકલો</button>
              </div>
              <p class="form-message gu" id="formMessage" role="alert"></p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Comprehensive AEO FAQ Section -->
    <section id="faq" style="padding-top:40px">
      <div class="container">
        <div class="section-head" data-aos="fade-up">
          <span class="kicker">FREQUENTLY ASKED QUESTIONS</span>
          <h2 class="gu">સામાન્ય રીતે પૂછાતા મહત્વપૂર્ણ પ્રશ્નો (FAQ)</h2>
          <p class="gu">વાલીઓ, શિક્ષકો અને ગ્રાહકો દ્વારા વારંવાર પૂછાતા પ્રશ્નોના સ્પષ્ટ જવાબો.</p>
          <div class="reveal-line"></div>
        </div>

        <div class="faq-grid">
          <details data-aos="fade-up">
            <summary class="gu">Nobal Book Depo Prantij ક્યાં આવેલું છે અને કઈ વસ્તુઓ મળે છે?</summary>
            <p class="gu">
              Nobal Book Depo (Noble Book Dipo) સાબરકાંઠા જિલ્લાના પ્રાંતિજ શહેરમાં મુખ્ય બજાર / સ્ટેશન રોડ વિસ્તારમાં આવેલું છે. અહીં GSEB ધોરણ 1 થી 8 માટેની Semester 2 ચોપડીઓ, નવનીત ગાઈડ, વિકાસ સ્વાધ્યાયપોથી, સ્કૂલ-ઓફિસ સ્ટેશનરી અને વિવિધ પ્રકારના માર્કર ઉપલબ્ધ છે.
            </p>
          </details>

          <details data-aos="fade-up" data-aos-delay="60">
            <summary class="gu">પ્રાંતિજ તાલુકાના કયા ગામોમાં હોમ ડિલિવરી મળે છે?</summary>
            <p class="gu">
              પ્રાંતિજ તાલુકાના તમામ 78 ગામો (જેમ કે સલાલ, કાટવાડ, મોયદ, તાજપુર, પોગલું, પિલુદ્રા, સોનાસણ, વગેરે) માં ₹100 કે તેથી વધુના ઓર્ડર પર હોમ ડિલિવરી આપવામાં આવે છે.
            </p>
          </details>

          <details data-aos="fade-up" data-aos-delay="120">
            <summary class="gu">ઓર્ડર આપવાની પ્રક્રિયા શું છે? શું WhatsApp પર ફોટો મોકલી શકાય?</summary>
            <p class="gu">
              હા! તમે આ પેજ પર આપેલા ફોર્મ દ્વારા સીધો ઓર્ડર કરી શકો છો અથવા તમારા પુસ્તક લિસ્ટનો મોબાઈલથી ફોટો પાડીને અમારા WhatsApp નંબર 91066 56097 પર મોકલી શકો છો. અમારી ટીમ સ્ટોક અને બિલ કન્ફર્મ કરશે.
            </p>
          </details>

          <details data-aos="fade-up" data-aos-delay="180">
            <summary class="gu">શું ભાવમાં રકઝક થાય છે? બિલિંગ પદ્ધતિ કેવી છે?</summary>
            <p class="gu">
              ના, અમારી કડક વ્યવસાયિક નીતિ છે: "એક જ ફિક્સ ભાવ • No Rakzak". નાનું બાળક આવે કે વડીલ, દરેક માટે એક જ સમાન અને વાજબી ભાવ હોય છે. તેમજ કોઈને પણ કોરું કે કાચું બિલ આપવામાં આવતું નથી.
            </p>
          </details>

          <details data-aos="fade-up" data-aos-delay="240">
            <summary class="gu">કયા વિષયો અને માધ્યમની પુસ્તકો ઉપલબ્ધ છે?</summary>
            <p class="gu">
              ગુજરાત બોર્ડ (GSEB) માન્ય ગુજરાતી માધ્યમ તેમજ અંગ્રેજી માધ્યમ માટેના ગણિત, વિજ્ઞાન, સામાજિક વિજ્ઞાન, ગુજરાતી, અંગ્રેજી, હિન્દી અને સંસ્કૃત વિષયોની Semester 2 ચોપડીઓ અને સ્વાધ્યાયપોથી ઉપલબ્ધ છે.
            </p>
          </details>

          <details data-aos="fade-up" data-aos-delay="300">
            <summary class="gu">પેમેન્ટના કયા વિકલ્પો ઉપલબ્ધ છે?</summary>
            <p class="gu">
              તમે ડિલિવરી વખતે રોકડા (Cash on Delivery), Google Pay, PhonePe, Paytm, અથવા BHIM UPI સ્કેનર દ્વારા સરળતાથી અને સુરક્ષિત રીતે ચૂકવણી કરી શકો છો.
            </p>
          </details>
        </div>

        <!-- Official Citations & Reference Links for GEO Search Engine Trust -->
        <div class="citations-box gu" data-aos="fade-up">
          <strong><i class="fa-solid fa-graduation-cap"></i> શૈક્ષણિક સંદર્ભ અને સત્તાવાર સ્ત્રોત (Educational Citations):</strong>
          અહીં ઉપલબ્ધ પાઠ્યપુસ્તકો અને અભ્યાસ સામગ્રી
          <a href="https://gsbstdc.gujarat.gov.in/" target="_blank" rel="noopener">ગુજરાત રાજ્ય શાળા પાઠ્યપુસ્તક મંડળ (GSBST)</a> તથા 
          <a href="https://gcert.gujarat.gov.in/" target="_blank" rel="noopener">GCERT ગાંધીનગર</a> ના નિયત અભ્યાસક્રમ મુજબ છે. તેમજ પ્રાંતિજ તાલુકાનું ભૌગોલિક કવરેજ સાબરકાંઠા વહીવટી તંત્રના નિયમોને આધીન છે.
        </div>

        <!-- Store Ownership Signal & Freshness Indicator -->
        <div class="store-owner-bar gu" data-aos="fade-up">
          <div class="owner-info">
            <div class="owner-badge"><i class="fa-solid fa-award"></i></div>
            <div>
              <b style="font-size:14px;color:var(--ink)">Nobal Book Depo Management & Academic Fulfillment</b>
              <small style="color:#64748b;display:block">Station Road, Prantij - 383205 (Dist. Sabarkantha, Gujarat) • Mo: 91066 56097</small>
            </div>
          </div>
          <div style="font-size:12px;color:#059669;font-weight:700">
            <i class="fa-solid fa-calendar-check"></i> છેલ્લું અપડેટ: નવેમ્બર 2026 (સત્ર 2026–27 માન્ય)
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">NOBAL <span>BOOK DEPO</span></div>
          <p class="gu" style="margin-top:10px">
            ધોરણ 1 થી 8 ની ચોપડીઓ, ગાઈડો, સ્વાધ્યાયપોથી અને સ્ટેશનરી માટે પ્રાંતિજ તાલુકાનું વિશ્વાસુ સ્ટોર. 78 ગામોમાં ઘર બેઠા ડિલિવરી સુવિધા.
          </p>
          <div class="socials">
            <a href="https://www.instagram.com/nobalbookdepo/" target="_blank" rel="noopener" aria-label="Follow Nobal Book Depo on Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://wa.me/919106656097" target="_blank" rel="noopener" aria-label="Message Nobal Book Depo on WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="tel:+919106656097" aria-label="Call Nobal Book Depo"><i class="fa-solid fa-phone"></i></a>
          </div>
        </div>

        <div>
          <h4>વિભાગો (Explore)</h4>
          <p>
            <a href="#summary">ઝડપી સારાંશ (Summary)</a><br>
            <a href="#categories">શાળા પુસ્તકો અને સ્ટેશનરી</a><br>
            <a href="#semester">Semester 2 ચોપડીઓ</a><br>
            <a href="#how-to-order">ઓર્ડર કરવાની રીત</a><br>
            <a href="#delivery">78 ગામોની યાદી</a><br>
            <a href="#comparison">સરખામણી અને ભાવ પત્રક</a><br>
            <a href="#markers">માર્કર કલેક્શન</a><br>
            <a href="#inquiry">WhatsApp ઓર્ડર ફોર્મ</a>
          </p>
        </div>

        <div>
          <h4>સંપર્ક અને સરનામું (Contact)</h4>
          <p class="gu">
            <i class="fa-solid fa-store" style="color:var(--cyan-glow)"></i> <strong>Nobal Book Depo</strong><br>
            મુખ્ય બજાર / સ્ટેશન રોડ, પ્રાંતિજ - 383205<br>
            જિલ્લો: સાબરકાંઠા, ગુજરાત<br>
            <i class="fa-brands fa-whatsapp" style="color:#22c55e"></i> WhatsApp / Call: <a href="tel:+919106656097" style="color:#fff;font-weight:700">91066 56097</a><br>
            <i class="fa-solid fa-clock" style="color:#fde047"></i> સમય: સોમ થી શનિ (8:30 AM – 8:30 PM)<br>
            <i class="fa-solid fa-location-dot" style="color:#f87171"></i> <a href="https://www.google.com/maps/search/?api=1&query=Noble+Book+Depo+Prantij+Gujarat" target="_blank" rel="noopener" style="color:#38bdf8">ગૂગલ મેપ્સ પર જુઓ (Google Maps)</a>
          </p>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© <span id="year"></span> Nobal Book Depo (Noble Book Dipo), Prantij. All rights reserved.</span>
        <span>Books • Learning • Everyday Stationery • 78 Villages Delivery</span>
      </div>
    </div>
  </footer>

  <!-- Floating Navigation Elements -->
  <button class="backtop" id="backTop" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>
  <a class="float-wa" href="https://wa.me/919106656097" target="_blank" rel="noopener" aria-label="Direct WhatsApp Chat with Nobal Book Depo"><i class="fa-brands fa-whatsapp"></i></a>

  <!-- JavaScript Libraries: jQuery + AOS Animation -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>

  <script>
    $(function(){
      // Initialize AOS Animation
      AOS.init({duration:700,once:true,offset:60});
      $("#year").text(new Date().getFullYear());

      // Scroll Progress Bar
      $(window).on("scroll", function(){
        const scrollTop = $(window).scrollTop();
        const docHeight = $(document).height() - $(window).height();
        const scrollPercent = (scrollTop / docHeight) * 100;
        $("#scrollProgress").css("width", scrollPercent + "%");

        if(scrollTop > 400){
          $("#backTop").css("display","grid");
        } else {
          $("#backTop").hide();
        }
      });

      $("#backTop").on("click", function(){
        $("html,body").animate({scrollTop:0}, 500);
      });

      // Mobile Menu Toggle
      $("#menuToggle").on("click", function(){
        $("#navLinks").toggleClass("open");
        $(this).find("i").toggleClass("fa-bars fa-xmark");
      });
      $("#navLinks a").on("click", function(){
        $("#navLinks").removeClass("open");
        $("#menuToggle i").removeClass("fa-xmark").addClass("fa-bars");
      });

      // Interactive Village Search Filter
      $("#villageSearchInput").on("input", function(){
        const query = $(this).val().toLowerCase().trim();
        let matchCount = 0;
        if(query.length === 0){
          $(".village-badge").show().removeClass("active");
          $("#villageSearchStatus").hide();
          return;
        }

        $(".village-badge").each(function(){
          const text = $(this).text().toLowerCase();
          if(text.includes(query)){
            $(this).show().addClass("active");
            matchCount++;
          } else {
            $(this).hide().removeClass("active");
          }
        });

        if(matchCount > 0){
          $("#villageSearchStatus").html('<i class="fa-solid fa-circle-check"></i> ' + matchCount + ' ગામ મળ્યા! ડિલિવરી ઉપલબ્ધ છે.').show();
        } else {
          $("#villageSearchStatus").html('<i class="fa-solid fa-circle-info"></i> પ્રાંતિજ તાલુકાના અન્ય તમામ 78 ગામોમાં પણ ડિલિવરી છે. કૃપા કરીને WhatsApp પર પુષ્ટિ કરો.').show();
        }
      });

      // Village badge click fills the form village input
      $(".village-badge").on("click", function(){
        const vText = $(this).text().split('(')[0].trim();
        $("#village").val(vText);
        $('html, body').animate({
          scrollTop: $("#inquiry").offset().top - 80
        }, 600);
        $("#village").focus();
      });

      // Interactive Kit Estimator Logic
      function updateEstimate(){
        const grade = parseInt($("#estGrade").val()) || 1;
        const kit = $("#estKitType").val();
        let minPrice = 120, maxPrice = 250;

        if(grade <= 2){
          if(kit === "books") { minPrice = 140; maxPrice = 220; }
          else if(kit === "standard") { minPrice = 240; maxPrice = 360; }
          else { minPrice = 350; maxPrice = 480; }
        } else if(grade <= 5){
          if(kit === "books") { minPrice = 200; maxPrice = 320; }
          else if(kit === "standard") { minPrice = 380; maxPrice = 520; }
          else { minPrice = 500; maxPrice = 690; }
        } else {
          if(kit === "books") { minPrice = 280; maxPrice = 420; }
          else if(kit === "standard") { minPrice = 550; maxPrice = 780; }
          else { minPrice = 750; maxPrice = 1050; }
        }
        $("#estPriceDisplay").text("₹" + minPrice + " – ₹" + maxPrice);
      }
      $("#estGrade, #estKitType").on("change", updateEstimate);

      // WhatsApp Inquiry Form Handling with Mobile Pop-up Blocker Protection
      $("#inquiryForm").on("submit", function(e){
        e.preventDefault();
        const form = this;
        const msg = $("#formMessage");
        msg.hide().text("");

        if(!form.checkValidity()){
          form.reportValidity();
          return;
        }

        const phone = $("#customerPhone").val().trim();
        if(!/^[6-9][0-9]{9}$/.test(phone)){
          msg.text("કૃપા કરીને યોગ્ય 10 અંકનો મોબાઇલ નંબર લખો.").show();
          $("#customerPhone").focus();
          return;
        }

        const selected = [];
        $("input[name='products']:checked").each(function(){
          selected.push($(this).val());
        });

        const data = {
          name: $("#customerName").val().trim(),
          phone: phone,
          village: $("#village").val().trim(),
          pincode: $("#pincode").val().trim() || "383205 (પ્રાંતિજ)",
          address: $("#address").val().trim(),
          grade: $("#grade").val() || "પસંદ કરેલ નથી",
          semester: $("#semester").val(),
          products: selected.length ? selected.join(", ") : "વિગત મેસેજમાં લખી છે / પસંદ કરેલ નથી",
          itemList: $("#itemList").val().trim() || "વિગત આપેલ નથી",
          delivery: $("#delivery").val(),
          budget: $("#budget").val() || "જણાવેલ નથી",
          notes: $("#notes").val().trim() || "કોઈ ખાસ નોંધ નથી"
        };

        const message = 
\`નમસ્તે NOBAL BOOK DEPO (પ્રાંતિજ),

મારે ધોરણ 1 થી 8 ની ચોપડીઓ / સ્ટેશનરી માટે ઓર્ડર અથવા પૂછપરછ કરવી છે.

👤 ગ્રાહકનું નામ: \${data.name}
📱 મોબાઇલ નંબર: \${data.phone}
📍 ગામ / વિસ્તાર: \${data.village}
📮 પિનકોડ: \${data.pincode}
🏠 સંપૂર્ણ સરનામું: \${data.address}

📚 ધોરણ: \${data.grade}
📖 સેમેસ્ટર: \${data.semester}
🛍️ જરૂરી વસ્તુઓ: \${data.products}

📝 વસ્તુઓનું નામ અને જથ્થો:
\${data.itemList}

🚚 ઓર્ડર પ્રકાર: \${data.delivery}
💰 અંદાજિત ખરીદી: \${data.budget}
📌 વધારાની નોંધ: \${data.notes}

કૃપા કરીને વસ્તુઓનો સ્ટોક, કુલ પાકું બિલ અને ડિલિવરી સમય કન્ફર્મ કરશો.

આભાર.\`;

        const whatsappUrl = "https://wa.me/919106656097?text=" + encodeURIComponent(message);
        
        // Mobile-safe redirect to avoid browser popup blockers
        if(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)){
          window.location.href = whatsappUrl;
        } else {
          window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        }
      });
    });

    // High Performance Ultra-VFX Ambient Particle Canvas
    (function(){
      const canvas = document.getElementById('ambientVfx');
      if(!canvas) return;
      const ctx = canvas.getContext('2d');
      let width, height;
      let particles = [];
      const particleCount = 42;

      function resize(){
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
      window.addEventListener('resize', resize);
      resize();

      class Particle{
        constructor(){
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.vx = (Math.random() - 0.5) * 0.45;
          this.vy = (Math.random() - 0.5) * 0.45;
          this.radius = Math.random() * 2 + 1;
          this.color = Math.random() > 0.5 ? 'rgba(43,80,216,' : 'rgba(14,165,233,';
          this.alpha = Math.random() * 0.35 + 0.15;
        }
        update(){
          this.x += this.vx;
          this.y += this.vy;
          if(this.x < 0) this.x = width;
          if(this.x > width) this.x = 0;
          if(this.y < 0) this.y = height;
          if(this.y > height) this.y = 0;
        }
        draw(){
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = this.color + this.alpha + ')';
          ctx.fill();
        }
      }

      for(let i = 0; i < particleCount; i++){
        particles.push(new Particle());
      }

      function animate(){
        ctx.clearRect(0, 0, width, height);
        for(let i = 0; i < particles.length; i++){
          particles[i].update();
          particles[i].draw();
          for(let j = i + 1; j < particles.length; j++){
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if(dist < 110){
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = 'rgba(43,80,216,' + (0.12 * (1 - dist / 110)) + ')';
              ctx.lineWidth = 0.7;
              ctx.stroke();
            }
          }
        }
        requestAnimationFrame(animate);
      }
      
      // Pause VFX if reduced motion is requested
      if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
        animate();
      }
    })();
  </script>
</body>
</html>
`;

// Write index.html
fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent, 'utf8');
console.log('Successfully wrote index.html');

// Also keep noble_book_depo_single_page.html in sync
fs.writeFileSync(path.join(__dirname, 'noble_book_depo_single_page.html'), htmlContent, 'utf8');
console.log('Successfully synchronized noble_book_depo_single_page.html');
