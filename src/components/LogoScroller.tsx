"use client";

import React from "react";
import { motion } from "framer-motion";

const tools = [
  { name: "Jungle Scout", src: "/tools/jungle-scout.png" },
  { name: "Keepa", src: "/tools/keepa.jpeg" },
  { name: "Helium 10", src: "/tools/Hellium10.png" },
  { name: "DataDive", src: "/tools/datadive.png" },
  { name: "Sellerboard", src: "/tools/sellerboard.jpeg" },
  { name: "Sellics", src: "/tools/Sellics.jpeg" },
  { name: "Perpetua", src: "/tools/perpetua.jpg" },
  { name: "SmartScout", src: "/tools/SmartScout.png" },
  { name: "Teikametrics", src: "/tools/teikametrics.jpg" },
  { name: "Viral Launch", src: "/tools/Viral-Launch.png" },
  { name: "AMZScout", src: "/tools/AMZ-Scout.png" },
];

const brands: { name: string; icon: React.ReactNode }[] = [
  { name: "VitaCore", icon: <svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M12 2l8 4.6v9.2L12 22 4 15.8V6.6z" /><circle cx="12" cy="12" r="3.4" fill="#C6FF3D" /></svg> },
  { name: "PureLeaf", icon: <svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M20 4C10 4 4 10 4 20c9 1 16-4 16-16z" /><path stroke="#C6FF3D" d="M8 18c3-5 6-7 9-8" strokeWidth="1.6" fill="none" /></svg> },
  { name: "NutriPeak", icon: <svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M3 20L10 6l4 7 3-4 4 11z" /><path fill="#C6FF3D" d="M10 6l2.4 4.2-1.2 2L8.5 9z" /></svg> },
  { name: "OmegaWell", icon: <svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M12 2C8 8 5 11 5 15a7 7 0 0014 0c0-4-3-7-7-13z" /><circle cx="12" cy="15" r="3" fill="#C6FF3D" /></svg> },
  { name: "GreenRoots", icon: <svg viewBox="0 0 24 24" className="w-6 h-6"><rect x="10.7" y="3" width="2.6" height="10" rx="1" fill="currentColor" /><path stroke="#C6FF3D" d="M12 13c-3 2-4 5-4 8M12 13c3 2 4 5 4 8M12 13v8" strokeWidth="1.6" fill="none" strokeLinecap="round" /></svg> },
  { name: "DailyDose", icon: <svg viewBox="0 0 24 24" className="w-6 h-6"><rect x="3.5" y="8.5" width="17" height="7" rx="3.5" fill="currentColor" /><rect x="12" y="8.5" width="8.5" height="7" rx="3.5" fill="#C6FF3D" /></svg> },
  { name: "ProteinIQ", icon: <svg viewBox="0 0 24 24" className="w-6 h-6"><rect x="3" y="10" width="3" height="4" rx="1" fill="currentColor" /><rect x="18" y="10" width="3" height="4" rx="1" fill="currentColor" /><rect x="6" y="11" width="12" height="2" fill="#C6FF3D" /><rect x="7" y="8.5" width="2.5" height="7" rx="1" fill="currentColor" /><rect x="14.5" y="8.5" width="2.5" height="7" rx="1" fill="currentColor" /></svg> },
  { name: "HydraMax", icon: <svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M12 2C8 8 5 11 5 15a7 7 0 0014 0c0-4-3-7-7-13z" /><path stroke="#C6FF3D" d="M8 15c1.5 1.5 6 1.5 8 0" strokeWidth="1.6" fill="none" strokeLinecap="round" /></svg> },
];

const badges = [
  { src: "/badges/amazon-ads-advanced-partner.jpeg", alt: "Amazon Ads Advanced Partner", caption: "Advanced Partner" },
  { src: "/badges/amazon-ads-verified-partner.png", alt: "Amazon Ads Verified Partner", caption: "Verified Partner" },
  { src: "/badges/amazon-marketing-cloud-provider.png", alt: "Amazon Marketing Cloud Provider", caption: "AMC Provider" },
];

export const LogoScroller = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-64 bg-black" />;

  return (
    <section className="py-24 border-t border-white/5 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-gray-200">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D] shadow-[0_0_10px_#C6FF3D]" />
          Our Stack &amp; Partnerships
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Real tools. Real brands. <span className="text-[#C6FF3D]">Scaled.</span>
        </h2>
      </div>

      <h3 className="max-w-7xl mx-auto px-6 mb-6 text-2xl md:text-3xl font-extrabold tracking-tight text-white text-center">
        Amazon <span className="text-[#C6FF3D]">Toolkit</span>
      </h3>

      <div className="flex overflow-hidden relative [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-none gap-4 py-4"
        >
          {[...tools, ...tools, ...tools].map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-5 whitespace-nowrap rounded-full bg-white border border-gray-200 shadow-lg text-gray-900 font-semibold text-sm"
              style={{ height: 52 }}
            >
              <img src={t.src} alt={t.name} className="w-6 h-6 object-contain" />
              {t.name}
            </div>
          ))}
        </motion.div>
      </div>

      <h3 className="max-w-7xl mx-auto px-6 mb-6 mt-20 text-2xl md:text-3xl font-extrabold tracking-tight text-white text-center">
        Brands We <span className="text-[#C6FF3D]">Scale</span>
      </h3>

      <div className="flex overflow-hidden relative [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <motion.div
          animate={{ x: [-1200, 0] }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          className="flex flex-none gap-12 py-4"
        >
          {[...brands, ...brands, ...brands].map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 whitespace-nowrap text-gray-300 hover:text-white transition-colors font-bold text-xl tracking-tight"
            >
              <span className="text-white">{b.icon}</span>
              {b.name}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-24 text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-12">
          Amazon Trusted Partner <span className="text-[#C6FF3D]">Certifications &amp; Awards</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-start justify-items-center">
          {badges.map((b) => (
            <div key={b.alt} className="flex flex-col items-center">
              <div className="bg-white rounded-2xl p-6 shadow-2xl grid place-items-center h-36 w-full max-w-[240px]">
                <img src={b.src} alt={b.alt} className="max-h-24 w-auto object-contain" />
              </div>
              <p className="mt-4 text-sm font-semibold text-gray-300">{b.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
