export default function CtaBlock() {
  return (
    <section className="rounded-[10px] bg-[#012F42] px-6 py-[30px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.10)] sm:px-10 lg:min-h-[251px] lg:px-[120px]">
      <h2 className="mx-auto max-w-[641px] font-['Outfit'] text-[34px] font-bold capitalize leading-[42px] text-white sm:text-[46px] sm:leading-[55px]">
        Grow Your Business Faster
      </h2>
      <p className="mx-auto mt-5 max-w-[636px] font-['DM_Sans'] text-[18px] leading-[28px] text-white">
        From load booking to payment follow-up, we handle the hard work behind
        the scenes so you can stay focused on the road ahead.
      </p>
      <button className="mt-[30px] inline-flex h-[50px] min-w-[155px] cursor-pointer items-center justify-center rounded-[5px] border-none bg-[#FE8F02] px-5 font-['Outfit'] text-[18px] font-medium capitalize text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#E07D02] active:scale-95">
        Get Started
      </button>
    </section>
  );
}
