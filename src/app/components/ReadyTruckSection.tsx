

import Image from "next/image";

export default function ReadyTruckSection() {
  return (
    <>
      <div className="bb-blog-001">
        {/* Section: Your Truck Is Ready */}

        <div className="bb-ready-truck-001" />

        <div className="bb-ready-truck-002">
          Your Truck Is Ready.
        </div>

        <div className="bb-ready-truck-003">
          Are You Maximizing Every Mile?
        </div>

        <div className="bb-ready-truck-004">
          Every empty mile costs money. Let our dispatch experts find better loads, negotiate higher rates, and keep your box truck moving profitably across all 48 states.
        </div>

        <button
          className="bb-ready-truck-005">
          
          Start Dispatching Today
        </button>

        <button
          className="bb-ready-truck-006">
          
          Talk to a Dispatcher
        </button>

        <Image className="bb-ready-truck-007" src="/Images/Rectangle 1117.png" alt="Ready Truck Black" width={760} height={585} />
      </div>

      <section
        data-responsive-section="ready-truck"
        className="bb-ready-truck-008">
        
        <div className="bb-ready-truck-009">
          <div className="bb-ready-truck-010">
            <h2 className="bb-ready-truck-011">
              Your Truck Is Ready.
            </h2>
            <h3 className="bb-ready-truck-012">
              Are You Maximizing Every Mile?
            </h3>
            <p className="bb-ready-truck-013">
              Every empty mile costs money. Let our dispatch experts find better loads, negotiate higher rates, and keep your box truck moving profitably across all 48 states.
            </p>

            <div className="bb-ready-truck-014">
              <button className="bb-ready-truck-015">
                Start Dispatching Today
              </button>
              <button className="bb-ready-truck-016">
                Talk to a Dispatcher
              </button>
            </div>
          </div>

          <Image
            className="bb-ready-truck-017"
            src="/Images/Rectangle 1117.png"
            alt="Ready Truck Black"
            width={760}
            height={585} />
          
        </div>
      </section>
    </>);


}
