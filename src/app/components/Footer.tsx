"use client";

import Image from "next/image";
import Link from "next/link";
import { useLandingPageLayout } from "./LandingPageFrame";

const footerTopClasses: Record<
  number,
  {
    footer: string;
    logo: string;
    description: string;
    socials: string;
    heading: string;
    links: string;
    phoneIcon: string;
    phoneLabel: string;
    phoneValue: string;
    emailIcon: string;
    emailLabel: string;
    emailValue: string;
    locationIcon: string;
    locationLabel: string;
    locationValue: string;
    divider: string;
    bottom: string;
  }> =
{
  8808: {
    footer: "bb-dynamic-021",
    logo: "bb-dynamic-022",
    description: "bb-dynamic-023",
    socials: "bb-dynamic-024",
    heading: "bb-dynamic-022",
    links: "bb-dynamic-025",
    phoneIcon: "bb-dynamic-025",
    phoneLabel: "bb-dynamic-026",
    phoneValue: "bb-dynamic-027",
    emailIcon: "bb-dynamic-028",
    emailLabel: "bb-dynamic-029",
    emailValue: "bb-dynamic-030",
    locationIcon: "bb-dynamic-031",
    locationLabel: "bb-dynamic-032",
    locationValue: "bb-dynamic-033",
    divider: "bb-dynamic-034",
    bottom: "bb-dynamic-035"
  },
  8915: {
    footer: "bb-dynamic-036",
    logo: "bb-dynamic-037",
    description: "bb-dynamic-038",
    socials: "bb-dynamic-039",
    heading: "bb-dynamic-037",
    links: "bb-dynamic-040",
    phoneIcon: "bb-dynamic-040",
    phoneLabel: "bb-dynamic-041",
    phoneValue: "bb-dynamic-042",
    emailIcon: "bb-dynamic-043",
    emailLabel: "bb-dynamic-044",
    emailValue: "bb-dynamic-045",
    locationIcon: "bb-dynamic-046",
    locationLabel: "bb-dynamic-047",
    locationValue: "bb-dynamic-048",
    divider: "bb-dynamic-049",
    bottom: "bb-dynamic-050"
  }
};

const socialLeftClasses = ["bb-dynamic-051", "bb-dynamic-052", "bb-dynamic-053", "bb-dynamic-054"];

export default function Footer() {
  const { footerTop } = useLandingPageLayout();
  const top = footerTopClasses[footerTop];

  return (
    <>
    <div className="bb-blog-001">
      <div className={`bb-footer-001 ${top.footer}`} />

      <Image
          className={`bb-footer-002 ${top.logo}`}
          src="/Images/Rectangle 6.png"
          alt="Box Truck Dispatching Logo"
          width={109}
          height={80} />
        

      <div className={`bb-footer-003 ${top.description}`}>
        Box Truck Dispatching offers reliable and profit driven truck dispatching services across the United States. We help owner operators and fleets secure high-paying loads, reduce deadhead miles, and streamline operations for maximum efficiency.
      </div>

      {[
        <svg key="facebook" className="bb-footer-004" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>,
        <svg key="twitter" className="bb-footer-004" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>,
        <svg key="linkedin" className="bb-footer-004" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>,
        <svg key="instagram" className="bb-footer-004" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>].
        map((icon, idx) =>
        <div
          key={idx}
          className={`bb-footer-005 ${socialLeftClasses[idx]} ${top.socials}`}>
          
          {icon}
        </div>
        )}

      <div className={`bb-footer-006 ${top.heading}`}>
        Quick Links
      </div>
      <div className={`bb-footer-007 ${top.links}`}>
        {["Home", "About", "Service", "States", "Blog", "Contact"].map((item) =>
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="bb-footer-008">
            
            {item}
          </Link>
          )}
      </div>

      <div className={`bb-footer-009 ${top.heading}`}>
        Our Services
      </div>
      <div className={`bb-footer-010 ${top.links}`}>
        {[
          "Load Booking",
          "Dedicated Truck Dispatcher",
          "Factoring",
          "Paper Work",
          "Driver Hiring",
          "MC Setup",
          "Accounting",
          "Lease On"].
          map((item) =>
          <Link
            key={item}
            href="#services"
            className="bb-footer-008">
            
            {item}
          </Link>
          )}
      </div>

      <div className={`bb-footer-011 ${top.heading}`}>
        Get In Touch
      </div>

      <svg className={`bb-footer-012 ${top.phoneIcon}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      <div className={`bb-footer-013 ${top.phoneLabel}`}>Phone</div>
      <div className={`bb-footer-014 ${top.phoneValue}`}>(555) 123-4567</div>

      <svg className={`bb-footer-012 ${top.emailIcon}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
      <div className={`bb-footer-013 ${top.emailLabel}`}>Email</div>
      <div className={`bb-footer-014 ${top.emailValue}`}>info@avenuemh.com</div>

      <svg className={`bb-footer-012 ${top.locationIcon}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
      <div className={`bb-footer-013 ${top.locationLabel}`}>Location</div>
      <div className={`bb-footer-014 ${top.locationValue}`}>Serving All 48 States</div>

      <div className={`bb-footer-015 ${top.divider}`} />

      <div className={`bb-footer-016 ${top.bottom}`}>
        <span className="bb-footer-017">Â© 2026, Box Truck Dispatching, Design &amp; Developed By </span>
        <span className="bb-footer-018">BitBlazeTec</span>
      </div>

      <div className={`bb-footer-019 ${top.bottom}`}>
        {["Privacy Policy", "Terms of Service", "Disclaimer"].map((policy) =>
          <Link
            key={policy}
            href="#policy"
            className="bb-footer-020">
            
            {policy}
          </Link>
          )}
      </div>
    </div>

      <footer
        data-responsive-section="footer"
        className="bb-footer-021">
        
        <div className="bb-footer-022">
          <div>
            <Image
              className="bb-footer-023"
              src="/Images/Rectangle 6.png"
              alt="Box Truck Dispatching Logo"
              width={109}
              height={80} />
            
            <p className="bb-footer-024">
              Box Truck Dispatching offers reliable and profit driven truck dispatching services across the United States.
            </p>
            <div className="bb-footer-025">
              {["f", "t", "in", "ig"].map((item) =>
              <div key={item} className="bb-footer-026">
                  {item}
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="bb-footer-027">Quick Links</h3>
            <div className="bb-footer-028">
              {["Home", "About", "Service", "States", "Blog", "Contact"].map((item) =>
              <Link key={item} href={`#${item.toLowerCase()}`} className="bb-footer-029">
                  {item}
                </Link>
              )}
            </div>
          </div>

          <div>
            <h3 className="bb-footer-027">Our Services</h3>
            <div className="bb-footer-028">
              {["Load Booking", "Dedicated Truck Dispatcher", "Factoring", "Paper Work", "Driver Hiring", "MC Setup"].map((item) =>
              <Link key={item} href="#services" className="bb-footer-029">
                  {item}
                </Link>
              )}
            </div>
          </div>

          <div>
            <h3 className="bb-footer-027">Get In Touch</h3>
            <div className="bb-footer-030">
              <div>
                <div className="bb-footer-031">Phone</div>
                <div className="bb-footer-032">(555) 123-4567</div>
              </div>
              <div>
                <div className="bb-footer-031">Email</div>
                <div className="bb-footer-032">info@avenuemh.com</div>
              </div>
              <div>
                <div className="bb-footer-031">Location</div>
                <div className="bb-footer-032">Serving All 48 States</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bb-footer-033">
          <div>© 2026, Box Truck Dispatching, Design &amp; Developed By <span className="bb-footer-034">BitBlazeTec</span></div>
          <div className="bb-footer-035">
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map((policy) =>
            <Link key={policy} href="#policy" className="bb-footer-036">
                {policy}
              </Link>
            )}
          </div>
        </div>
      </footer>
    </>);

}
