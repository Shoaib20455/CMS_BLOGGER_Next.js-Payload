"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

type StateFormData = {
  name: string;
  email: string;
  state: string;
};

export default function StatePickerCard() {
  const [formData, setFormData] = useState<StateFormData>({ name: "", email: "", state: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (formData.name && formData.email && formData.state) {
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 5000);
      setFormData({ name: "", email: "", state: "" });
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        {/* Desktop State Picker Card */}
        <div className="absolute left-[25rem] top-[44rem] z-[12] hidden h-[9.375rem] w-[70rem] rounded-[0.625rem] bg-white shadow-[0_0.625rem_1.875rem_rgba(0,0,0,0.1)] lg:block" />

        <div className="absolute left-[28.1875rem] top-[45.5625rem] z-[13] hidden font-['Outfit'] text-[1.875rem] font-semibold leading-[1.875rem] text-[#012F42] lg:block">
          Pick Your State
        </div>

        {/* Dropdown Select State */}
        <div className="absolute left-[28.1875rem] top-[48.6875rem] z-[13] hidden h-[3.125rem] w-[17.5rem] lg:block">
          <select
            value={formData.state}
            onChange={e => setFormData({ ...formData, state: e.target.value })}
            required
            className="w-full h-full border border-gray-300 rounded-[0.3125rem] pl-5 pr-10 text-[1.125rem] font-['DM_Sans'] text-gray-800 outline-none cursor-pointer hover:border-gray-500 transition-colors appearance-none bg-white"
          >
            <option value="" disabled hidden>View Your State</option>
            {["Alabama", "California", "Florida", "Georgia", "Illinois", "North Carolina", "South Carolina", "Texas", "Tennessee", "Virginia"].map((st) => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>

          <div className="absolute right-[1.25rem] top-[1.3125rem] pointer-events-none">
            <Image className="w-[0.6875rem] h-[0.5625rem]" src="/Icons/Polygon 16.svg" alt="Dropdown Arrow" width={11} height={9} unoptimized />
          </div>
        </div>

        {/* Name Input */}
        <div className="absolute left-[46.9375rem] top-[48.6875rem] z-[13] hidden h-[3.125rem] w-[17.5rem] lg:block">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full h-full border border-gray-300 rounded-[0.3125rem] pl-5 text-[1.125rem] font-['DM_Sans'] text-gray-800 outline-none hover:border-gray-500 transition-colors"
          />
        </div>

        {/* Email Input */}
        <div className="absolute left-[65.6875rem] top-[48.6875rem] z-[13] hidden h-[3.125rem] w-[17.5rem] lg:block">
          <input
            type="email"
            placeholder="Youremail@gmail.com"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full h-full border border-gray-300 rounded-[0.3125rem] pl-5 text-[1.125rem] font-['DM_Sans'] text-gray-800 outline-none hover:border-gray-500 transition-colors"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="absolute left-[84.4375rem] top-[48.6875rem] z-[13] hidden h-[3.125rem] w-[7.3125rem] cursor-pointer items-center justify-center rounded-[0.3125rem] border-none bg-[#FE8F02] font-['Outfit'] text-[1.125rem] font-medium leading-[1.875rem] text-white transition-all duration-300 hover:scale-105 hover:bg-[#E07D02] active:scale-95 lg:flex"
        >
          Submit
        </button>

        <div
          className="hidden"
        />

        <div
          className="relative z-[24] w-full bg-[#F8FAFC] px-5 py-4 sm:px-8 sm:py-5 lg:hidden"
        >
          <div className="rounded-[0.625rem] bg-white p-4 shadow-[0_0.625rem_1.875rem_rgba(0,0,0,0.12)] sm:p-5">
            <div className="font-['Outfit'] text-[1.375rem] font-semibold leading-[1.625rem] text-[#012F42] sm:text-[1.5rem]">
              Pick Your State
            </div>

            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <div className="relative h-[2.75rem] sm:col-span-2">
                <select
                  value={formData.state}
                  onChange={e => setFormData({ ...formData, state: e.target.value })}
                  required
                  className="h-full w-full cursor-pointer appearance-none rounded-[0.3125rem] border border-gray-300 bg-white pl-4 pr-10 font-['DM_Sans'] text-[0.9375rem] text-gray-800 outline-none transition-colors hover:border-gray-500"
                >
                  <option value="" disabled hidden>View Your State</option>
                  {["Alabama", "California", "Florida", "Georgia", "Illinois", "North Carolina", "South Carolina", "Texas", "Tennessee", "Virginia"].map((st) => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>

                <div className="pointer-events-none absolute right-[1.25rem] top-[1.125rem]">
                  <Image className="h-[0.5625rem] w-[0.6875rem]" src="/Icons/Polygon 16.svg" alt="Dropdown Arrow" width={11} height={9} unoptimized />
                </div>
              </div>

              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-[2.75rem] w-full rounded-[0.3125rem] border border-gray-300 pl-4 font-['DM_Sans'] text-[0.9375rem] text-gray-800 outline-none transition-colors hover:border-gray-500"
              />

              <input
                type="email"
                placeholder="Youremail@gmail.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-[2.75rem] w-full rounded-[0.3125rem] border border-gray-300 pl-4 font-['DM_Sans'] text-[0.9375rem] text-gray-800 outline-none transition-colors hover:border-gray-500"
              />

              <button
                type="submit"
                className="flex h-[2.75rem] w-full cursor-pointer items-center justify-center rounded-[0.3125rem] border-none bg-[#FE8F02] font-['Outfit'] text-[1rem] font-medium leading-[1.5rem] text-white transition-all duration-300 hover:bg-[#E07D02] active:scale-95 sm:col-span-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>

      {formSubmitted && (
        <>
          <div className="absolute left-[25rem] top-[41.25rem] z-[15] hidden w-[70rem] rounded-[0.3125rem] bg-[#10B981] px-[1.25rem] py-[0.625rem] text-center font-['DM_Sans'] text-[1.125rem] text-white lg:block">
            Thank you! Your request for state coverage has been submitted successfully.
          </div>
          <div
            className="relative z-[25] w-full bg-[#F8FAFC] px-5 pb-3 sm:px-8 lg:hidden"
          >
            <div className="rounded-[0.3125rem] bg-[#10B981] px-[1.25rem] py-[0.625rem] text-center font-['DM_Sans'] text-[1rem] text-white">
              Thank you! Your request for state coverage has been submitted successfully.
            </div>
          </div>
        </>
      )}
    </>
  );
}
