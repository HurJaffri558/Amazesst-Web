import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const services = [
    {
        title: "PPC Management and Optimization",
        description: "We pull and analyze your full ad account every week. We increase bids on winning keywords, decrease bids on underperformers, block wasting search terms through negative targeting and harvest winning search terms into exact match campaigns. We research competitor keywords using Helium 10 and DataDive to find new opportunities. We manage all campaign types including Sponsored Products, Sponsored Brands and Sponsored Display.",
    },
    {
        title: "Amazon SEO and Keyword Research",
        description: "We do deep keyword research using reverse ASIN lookup on your top competitors. We qualify every keyword by search volume, relevancy and buyer intent. We place keywords strategically across your title, bullet points, description and backend search terms. We track your organic rankings weekly and close competitor keyword gaps every month.",
    },
    {
        title: "Listing Optimization",
        description: "We optimize your title with your main keyword and USP. We rewrite all bullet points with strategic keyword placement and conversion focused copy. We improve your main image to stand out from competitors in search results. We optimize all secondary images including lifestyle, infographic and comparison images. We review your pricing and coupon strategy every week.",
    },
    {
        title: "A Plus Content and Brand Story",
        description: "We design your full brand story banner. We create 4 to 5 supporting brand story posters. We apply for Premium A Plus Content access on your behalf and manage the approval process. We create full Premium A Plus Content banners for every SKU.",
    },
    {
        title: "Account Health and Compliance",
        description: "We monitor your account health dashboard every week. If any violation occurs we open cases with Amazon, write appeals and fight the case until fully resolved. We proactively keep you compliant with Amazon policies to prevent any deactivation or restriction before it happens.",
    },
    {
        title: "Sales Analytics and Reporting",
        description: "Every week you receive a full KPI report covering total sales, ad sales, organic sales, ACOS, ROAS, CPC, CTR, CVR and ad spend. You also receive a full activity log of every action we took that week and a CPC movement explanation if anything changed in your metrics.",
    },
];

export default function StarterPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-primary/30">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden">
                <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[#2E5BFF]/20 rounded-full blur-[120px]" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6">
                        <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">Starter Plan</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent leading-[1.1]">
                        The Starter Plan
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        For Amazon brands who want core PPC and listing management to start scaling the right way.
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
                            You are a CPG or supplement brand on Amazon. You are stuck and frustrated and want to start scaling properly. You need your ads managed correctly and your listings optimized so your conversion rate improves and your ACOS comes down.
                        </p>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-black text-white mb-10 text-center">What Is Included</h2>
                    <div className="space-y-6">
                        {services.map((service, i) => (
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
                    <h2 className="text-4xl font-black text-white mb-6">Ready to Start Scaling?</h2>
                    <p className="text-gray-400 mb-10">Book a free audit and we will show you exactly how the Starter Plan will grow your brand.</p>
                    <Link href="#booking" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-black rounded-2xl hover:scale-105 transition-transform">
                        Get Free Audit <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
