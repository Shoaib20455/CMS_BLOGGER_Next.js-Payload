"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface NavbarProps {
  currentActive?: string;
}

export default function Navbar({ currentActive = "Home" }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Services", "Blog", "Contact"];

  return (
    <>
      <div className="bb-navbar-001" />

      <Link href="#home" aria-label="Box Truck Dispatching Home">
        <Image
          src="/Images/Rectangle 6 (1).png"
          alt="Box Truck Dispatching Logo"
          className="bb-navbar-002"
          width={85}
          height={50}
          priority />
        
      </Link>

      <nav
        className="bb-navbar-003"
        aria-label="Primary navigation">
        
        {navItems.map((item) => {
          const isActive = item === currentActive;
          return (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`bb-navbar-004 ${
              isActive ? "bb-hero-017" : "bb-navbar-005"}`
              }>
              
              {item}
            </Link>);

        })}
      </nav>

      <button className="bb-navbar-006">
        Schedule a Call
      </button>

      <header
        className="bb-navbar-007">
        
        <div className="bb-navbar-008">
          <Link
            href="#home"
            className="bb-navbar-009"
            aria-label="Box Truck Dispatching Home"
            onClick={() => setIsMenuOpen(false)}>
            
            <Image
              src="/Images/Rectangle 6 (1).png"
              alt="Box Truck Dispatching Logo"
              className="bb-navbar-010"
              width={85}
              height={50}
              priority />
            
          </Link>

          <button
            type="button"
            className="bb-navbar-011"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}>
            
            <span className="bb-navbar-012">
              <span
                className={`bb-navbar-013 ${
                isMenuOpen ? "bb-navbar-014" : ""}`
                } />
              
              <span
                className={`bb-navbar-015 ${
                isMenuOpen ? "bb-navbar-016" : "bb-navbar-017"}`
                } />
              
              <span
                className={`bb-navbar-018 ${
                isMenuOpen ? "bb-navbar-019" : ""}`
                } />
              
            </span>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`bb-navbar-020 ${
          isMenuOpen ? "bb-navbar-021" : "bb-navbar-022"}`
          }>
          
          <nav className="bb-navbar-023" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const isActive = item === currentActive;
              return (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`bb-navbar-024 ${
                  isActive ?
                  "bb-navbar-025" :
                  "bb-navbar-026"}`
                  }>
                  
                  {item}
                </Link>);

            })}
            <button className="bb-navbar-027">
              Schedule a Call
            </button>
          </nav>
        </div>
      </header>
    </>);

}
