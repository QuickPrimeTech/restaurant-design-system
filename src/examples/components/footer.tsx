// @/examples/components/footer.tsx

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";

import {
  Footer,
  FooterSection,
  FooterGrid,
  FooterBrand,
  FooterHeading,
  FooterLinks,
  FooterLink,
  FooterCard,
  FooterCTA,
  FooterBottom,
  FooterLegal,
  FooterSocial,
} from "@/components/app-ui/footer";

// Installation snippets
export const installSnippets = [
  {
    filename: "npm",
    code: `npm install @rds/footer`,
  },
  {
    filename: "pnpm",
    code: `pnpm add @rds/footer`,
  },
  {
    filename: "yarn",
    code: `yarn add @rds/footer`,
  },
  {
    filename: "bun",
    code: `bun add @rds/footer`,
  },
];

export const basicFooter = (
  <Footer>
    {/* Main Content */}
    <FooterSection>
      <FooterGrid className="lg:grid-cols-5">
        {/* Brand */}
        <FooterBrand className="lg:col-span-2">
          <Link
            href="/"
            className="mb-6 text-2xl font-bold font-primary flex gap-2 items-center"
          >
            <Image
              src="/logo.svg"
              alt="Restaurant Logo"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
            Li&apos;s Chinese Restaurant
          </Link>
          <p className="text-muted-foreground font-chivo leading-relaxed mb-6 max-w-md">
            Experience culinary excellence in an atmosphere of refined elegance.
            Where every meal is a celebration and every moment is treasured.
          </p>

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-4 w-4 mr-3 text-primary" />
              <span className="font-chivo">
                QR74+JR2, PETROCITY-Gigiri, Limuru Rd, Nairobi
              </span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Phone className="h-4 w-4 mr-3 text-primary" />
              <span className="font-chivo">0746815106</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Mail className="h-4 w-4 mr-3 text-primary" />
              <span className="font-chivo">
                info@lischineserestaurantnairobi.com
              </span>
            </div>
          </div>
        </FooterBrand>

        {/* Quick Links: Restaurant */}
        <div>
          <FooterHeading>Restaurant</FooterHeading>
          <FooterLinks>
            <FooterLink>
              <Link href="/about">About Us</Link>
            </FooterLink>
            <FooterLink>
              <Link href="/menu">Menu</Link>
            </FooterLink>
            <FooterLink>
              <Link href="/contact">Contact</Link>
            </FooterLink>
            <FooterLink>
              <Link href="/gallery">Gallery</Link>
            </FooterLink>
          </FooterLinks>
        </div>

        {/* Quick Links: Services */}
        <div>
          <FooterHeading>Services</FooterHeading>
          <FooterLinks>
            <FooterLink>
              <Link href="/reservations">Reservations</Link>
            </FooterLink>
            <FooterLink>
              <Link href="/private-events">Private Events</Link>
            </FooterLink>
          </FooterLinks>
        </div>

        {/* QR Card */}
        <div>
          <FooterHeading>Digital Menu</FooterHeading>
          <FooterCard>
            <Image
              src="/logo.svg"
              alt="QR Code"
              width={128}
              height={128}
              className="w-32 h-32 mx-auto mb-4 rounded-lg"
            />
            <p className="text-sm text-muted-foreground font-chivo mb-4">
              Scan for instant access to our complete menu
            </p>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View Menu Online
            </Button>
          </FooterCard>
        </div>
      </FooterGrid>
    </FooterSection>

    {/* Newsletter CTA */}
    <FooterCTA>
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-cinzel font-semibold text-foreground mb-4">
          Stay Connected
        </h3>
        <p className="text-muted-foreground font-chivo mb-6">
          Be the first to know about exclusive events, seasonal menus, and
          special offers
        </p>
        <div className="flex flex-col items-center sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="h-auto flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground font-chivo"
          />
          <Button className="w-full md:w-fit bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8">
            <Mail className="mr-2 h-4 w-4" />
            Subscribe
          </Button>
        </div>
      </div>
    </FooterCTA>

    {/* Bottom Row */}
    <FooterBottom>
      <FooterSocial>
        <Link
          href="https://www.tripadvisor.com/"
          className="bg-background border border-border p-3 rounded-full text-muted-foreground hover:bg-green-500 hover:text-white transition-all duration-300"
        >
          <FaTripadvisor className="h-5 w-5" />
        </Link>
        <Link
          href="https://www.instagram.com/"
          className="bg-background border border-border p-3 rounded-full text-muted-foreground hover:bg-gradient-to-tr hover:from-yellow-700 hover:to-pink-600 hover:text-white transition-all duration-300"
        >
          <Instagram className="h-5 w-5" />
        </Link>
        <Link
          href="#"
          className="bg-background border border-border p-3 rounded-full text-muted-foreground hover:bg-black hover:text-white transition-all duration-300"
        >
          <BsTwitterX className="h-5 w-5" />
        </Link>
      </FooterSocial>

      <p className="text-center text-muted-foreground font-chivo">
        © 2024 Li&apos;s Chinese Restaurant. All rights reserved.
      </p>

      <FooterLegal>
        <Link
          href="/privacy"
          className="text-muted-foreground hover:text-primary transition-colors font-chivo text-sm"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="text-muted-foreground hover:text-primary transition-colors font-chivo text-sm"
        >
          Terms of Service
        </Link>
      </FooterLegal>
    </FooterBottom>
  </Footer>
);
