import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const includedServices = [
    "PPC Management and Optimization",
    "Amazon SEO and Keyword Research",
    "Listing Optimization",
    "A Plus Content and Brand Story",
    "Account Health and Compliance",
    "Sales Analytics and Reporting",
    "Conversion Rate Optimization",
    "Review Management and Growth",
    "Customer Retention Model",
    "Cross Sell and Bundle Strategy",
    "Ranking and Keyword Domination",
    "Product Expansion Research",
];

const scaleServices = [
    {
        title: "AMC Advanced Reporting and Customer Journey Analysis",
        description: "We connect Amazon Marketing Cloud and track the complete journey of every buyer. We see which ads they saw, in what order, how many touchpoints before purchase and how long it took to convert. We analyze path to conversion, campaign overlap, new to brand vs repeat buyer data and audience overlap. Every insight from AMC is applied directly to improve your Sponsored Products, Sponsored Brands and Sponsored Display campaigns.",
    },
    {
        title: "DSP Programmatic Advertising",
        description: "Using AMC audience data as the foundation we build highly targeted DSP audiences and run retargeting ads that follow potential buyers who viewed your product but did not purchase. We target them across news sites, apps and Amazon owned properties like IMDb and Twitch. We also build new audiences based on Amazon first party shopper data. DSP ad spend is funded separately by the client.",
    },
    {
        title: "Full Funnel Ad Strategy",
        description: "We run top of funnel Sponsored Brand and Sponsored Display ads for awareness, middle of funnel retargeting for consideration and bottom of funnel exact match campaigns for conversion. At this level our KPIs go beyond ACOS and TACOS to include market share, new to brand rate and total reach.",
    },
    {
        title: "Influencer and UGC Strategy",
        description: "We connect you with relevant Amazon influencers who create video content for your product pages. We coordinate User Generated Content video production and run UGC videos as Sponsored Brand Video ads and Sponsored Display ads. All content created can also be used on your social media and website at no extra cost.",
    },
    {
        title: "International Marketplace Expansion",
        description: "On request we analyze which international marketplace is the best fit for your products. We expand your catalog to Amazon Canada, UK, Germany, France, Italy, Spain, Japan or any other Amazon marketplace. We handle listing localization, translation, VAT guidance, compliance, international PPC setup and cross border inventory planning.",
    },
];

export default function ScalePage() {
    return (
        <main className="min-h-screen bg-background selection:bg-primary/30">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden">
                <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[#2E5BFF]/20 rounded-full blur-[120px]" />
                <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-[#C6FF3D]/12 rounded-full blur-[120px]" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center bg-primary/20 border border-primary/30 px-4 py-1.5 rounded-full mb-6">
                        <span className="text-xs font-semibold text-primary uppercase tracking-widest">Most Popular</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent leading-[1.1]">
                        The Scale Plan
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        For Amazon brands who want the full aggressive scaling system, everything included plus advanced advertising.
                    </p>
                    <Link href="#booking" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-transform">
                        Get Free Audit <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* Who This Is For */}
            <section className="py-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="p-10 rounded-[2.5rem] bg-primary/5 border border-primary/20">
                        <h2 className="text-2xl font-black text-white mb-4">Who This Is For</h2>
                        <p className="text-gray-300 leading-relaxed">
                            You are a serious CPG or supplement brand ready for aggressive, profitable growth. You want everything, from core PPC and listings all the way to advanced advertising through Amazon Marketing Cloud and a full funnel strategy. You are ready to go all in.
                        </p>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-black text-white mb-10 text-center">What Is Included</h2>

                    {/* Included from previous plans */}
                    <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 mb-6">
                        <h3 className="text-lg font-bold text-gray-400 mb-4">Includes Everything in the Growth Plan:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {includedServices.map((s, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-gray-500">
                                    <CheckCircle size={16} className="text-primary/50 shrink-0" />
                                    {s}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scale services */}
                    <div className="space-y-6">
                        {scaleServices.map((service, i) => (
                            <div key={i} className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-primary/30 transition-all">
                                <div className="flex items-start gap-4">
                                    <CheckCircle size={22} className="text-primary mt-1 shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl font-black text-white mb-6">Ready to Go All In?</h2>
                    <p className="text-gray-400 mb-10">Book a free audit and we will show you exactly how the Scale Plan will grow your brand profitably.</p>
                    <Link href="#booking" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-black rounded-2xl hover:scale-105 transition-transform">
                        Get Free Audit <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
