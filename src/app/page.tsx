"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardFour from '@/components/sections/metrics/MetricCardFour';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Sparkles, Heart, Zap, DollarSign, Star, TrendingUp, Users, Award, Linkedin, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="AutoHub"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241222439-4jjxybtb.jpg"
          logoAlt="AutoHub Logo"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Inventory", id: "products" },
            { name: "Financing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Schedule Test Drive",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Find Your Perfect Vehicle"
          description="Discover premium cars with exceptional quality and service. Browse our curated inventory of new and pre-owned vehicles."
          tag="Premium Selection"
          tagIcon={Sparkles}
          buttons={[
            { text: "Explore Inventory", href: "products" },
            { text: "Get Pre-Approved", href: "pricing" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241223928-466107us.jpg"
          imageAlt="Luxury car in premium showroom"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="Our Story"
          title="Why Choose AutoHub"
          description="With over 15 years of expertise in automotive retail, we provide transparent pricing, competitive financing options, and exceptional customer service. Every vehicle undergoes rigorous inspection to ensure quality and reliability."
          tagIcon={Heart}
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241225699-rmd1a5u4.jpg",
            imageAlt: "Premium vehicle inspection process"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241227148-cbj2txpo.jpg",
            imageAlt: "Customer test drive experience"
          }}
          buttons={[
            { text: "Learn More", href: "#" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Vehicles"
          description="Browse our carefully selected inventory of premium vehicles"
          tag="Available Now"
          tagIcon={Zap}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "BMW",
              name: "2024 BMW 3 Series",
              price: "$45,999",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241225699-rmd1a5u4.jpg",
              imageAlt: "2024 BMW 3 Series"
            },
            {
              id: "2",
              brand: "Mercedes-Benz",
              name: "2024 C-Class Sedan",
              price: "$52,599",
              rating: 5,
              reviewCount: "98",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241227148-cbj2txpo.jpg",
              imageAlt: "2024 Mercedes-Benz C-Class"
            },
            {
              id: "3",
              brand: "Audi",
              name: "2024 Audi A4",
              price: "$48,299",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241228701-tiaq8qqi.jpg",
              imageAlt: "2024 Audi A4"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Flexible Financing Options"
          description="Choose the financing plan that works best for your budget"
          tag="Financing"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              badge: "Standard",
              badgeIcon: DollarSign,
              price: "From $199/mo",
              subtitle: "Great for budget-conscious buyers",
              buttons: [
                { text: "Apply Now", href: "#" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "60-month loan term available",
                "Competitive interest rates",
                "Quick approval process",
                "Trade-in credit available"
              ]
            },
            {
              id: "pro",
              badge: "Premium",
              badgeIcon: Star,
              price: "From $299/mo",
              subtitle: "Best for premium vehicles",
              buttons: [
                { text: "Apply Now", href: "#" },
                { text: "Chat with Finance Team", href: "#" }
              ],
              features: [
                "Flexible loan terms",
                "Competitive rates",
                "Gap insurance included",
                "Extended warranty options"
              ]
            },
            {
              id: "enterprise",
              badge: "Lease",
              badgeIcon: Zap,
              price: "From $349/mo",
              subtitle: "Perfect for new models",
              buttons: [
                { text: "Explore Leases", href: "#" },
                { text: "Schedule Demo", href: "#" }
              ],
              features: [
                "Latest vehicle models",
                "Maintenance included",
                "No long-term commitment",
                "Mileage allowance up to 12k/year"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFour
          title="Our Track Record"
          description="Trusted by thousands of satisfied customers"
          tag="Success Stories"
          tagIcon={Award}
          textboxLayout="default"
          metrics={[
            {
              id: "1",
              icon: TrendingUp,
              title: "Vehicles Sold",
              value: "5,000+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241247002-h6oah0st.jpg",
              imageAlt: "Vehicle sales metrics"
            },
            {
              id: "2",
              icon: Users,
              title: "Happy Customers",
              value: "4,800+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241248703-7e7glgs0.jpg",
              imageAlt: "Customer satisfaction"
            },
            {
              id: "3",
              icon: Award,
              title: "Years Experience",
              value: "15+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241250476-cyihxikd.jpg",
              imageAlt: "Industry experience"
            },
            {
              id: "4",
              icon: Heart,
              title: "Customer Rating",
              value: "4.9/5",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241252048-uhyb8w4c.jpg",
              imageAlt: "Customer ratings"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Team"
          description="Professional experts dedicated to your automotive needs"
          tag="Our People"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "John Martinez",
              role: "Sales Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241230367-9opwvvwy.jpg",
              imageAlt: "John Martinez - Sales Manager",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Mail, url: "mailto:john@autohub.com" }
              ]
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Service Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241231744-6p5z2c37.jpg",
              imageAlt: "Sarah Chen - Service Director",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Mail, url: "mailto:sarah@autohub.com" }
              ]
            },
            {
              id: "3",
              name: "Michael Ross",
              role: "Finance Specialist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241233037-awr8xms1.jpg",
              imageAlt: "Michael Ross - Finance Specialist",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Mail, url: "mailto:michael@autohub.com" }
              ]
            },
            {
              id: "4",
              name: "Jessica Lopez",
              role: "Customer Support",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241234538-t5zxci29.jpg",
              imageAlt: "Jessica Lopez - Customer Support",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Mail, url: "mailto:jessica@autohub.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from satisfied vehicle buyers"
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "David Thompson",
              role: "CEO",
              company: "Tech Solutions Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241236036-tw7el5z0.jpg",
              imageAlt: "David Thompson testimonial"
            },
            {
              id: "2",
              name: "Emily Rodriguez",
              role: "Marketing Director",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241237387-3yzsmhvp.jpg",
              imageAlt: "Emily Rodriguez testimonial"
            },
            {
              id: "3",
              name: "James Wilson",
              role: "Entrepreneur",
              company: "StartUp Ventures",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241239317-5ctrui2m.jpg",
              imageAlt: "James Wilson testimonial"
            },
            {
              id: "4",
              name: "Lisa Anderson",
              role: "Business Owner",
              company: "Anderson Consulting",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241240778-idgzu4cm.jpg",
              imageAlt: "Lisa Anderson testimonial"
            },
            {
              id: "5",
              name: "Robert Parker",
              role: "Finance Manager",
              company: "Global Corp",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241242606-yjyo76ki.jpg",
              imageAlt: "Robert Parker testimonial"
            },
            {
              id: "6",
              name: "Michelle Brown",
              role: "Operations Lead",
              company: "Excellence Ltd",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241244100-uvu6c91r.jpg",
              imageAlt: "Michelle Brown testimonial"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our vehicles and services"
          tag="Help Center"
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What warranty is included with vehicle purchases?",
              content: "All our vehicles come with a comprehensive 3-year/36,000-mile factory warranty. Pre-owned vehicles may have extended warranty options available. Contact our service team for details."
            },
            {
              id: "2",
              title: "How do I schedule a test drive?",
              content: "You can schedule a test drive through our website contact form, call us directly, or visit our showroom. We offer flexible scheduling to match your availability."
            },
            {
              id: "3",
              title: "What financing options are available?",
              content: "We offer competitive financing through multiple lenders, lease options, and trade-in credits. Our finance specialists can work with various credit profiles to find the best rates."
            },
            {
              id: "4",
              title: "Can I trade in my current vehicle?",
              content: "Yes! We accept trade-ins and provide fair market valuations. Get a quote online or bring your vehicle in for a professional appraisal."
            },
            {
              id: "5",
              title: "Do you offer vehicle maintenance services?",
              content: "Absolutely. Our service center provides routine maintenance, repairs, and inspections. We use genuine parts and certified technicians for all services."
            },
            {
              id: "6",
              title: "What is your return policy?",
              content: "We offer a 7-day money-back guarantee on all vehicles. If you're not satisfied, return the vehicle in the same condition and we'll refund your purchase price."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Have questions about our vehicles or services? Reach out to our team. We're here to help you find your perfect vehicle."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "subject", type: "text", placeholder: "Subject", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your vehicle preferences or questions...",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1764241245435-2btwdwtt.jpg"
          imageAlt="AutoHub dealership showroom"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="AutoHub"
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Careers", href: "#" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Buy a Vehicle", href: "products" },
                { label: "Financing", href: "pricing" },
                { label: "Service Center", href: "#" },
                { label: "Trade-In", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Contact Us", href: "contact" },
                { label: "Schedule Service", href: "#" },
                { label: "Warranty Info", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookies", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" }
          ]}
          copyrightText="© AutoHub, Inc. 2025. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}