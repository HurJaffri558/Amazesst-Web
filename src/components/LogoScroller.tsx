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

      <p className="max-w-7xl mx-auto px-6 mb-3 text-xs font-bold uppercase tracking-[0.14em] text-gray-500">
        Amazon toolkit
      </p>

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
