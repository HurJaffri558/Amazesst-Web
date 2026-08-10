import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const starterServices = [
    "PPC Management and Optimization",
    "Amazon SEO and Keyword Research",
    "Listing Optimization",
    "A Plus Content and Brand Story",
    "Account Health and Compliance",
    "Sales Analytics and Reporting",
];

const growthServices = [
    {
        title: "Conversion Rate Optimization",
        description: "We create improved versions of every listing element and run A/B tests through Amazon Manage Your Experiments for a minimum of 7 to 10 days each. Every change is only implemented if test data confirms it improves conversion rate. We track your CVR monthly and push it upward continuously.",
    },
    {
        title: "Review Management and Growth",
        description: "We implement compliant in-package strategies that encourage buyers to leave reviews without violating Amazon policies. We set up and manage automated review request sequences at the optimal timing for maximum response rate. We also provide guaranteed 5 star review growth through our internal buyer network, discussed privately in onboarding.",
    },
    {
        title: "Customer Retention Model",
        description: "We extract your actual customer emails from your Amazon account, data most sellers do not know they have access to. We build automated email sequences to cross sell, upsell and bring customers back to buy again. We design a full retention strategy to increase lifetime value and average order value.",
    },
    {
        title: "Cross Sell and Bundle Strategy",
        description: "We identify your best product combinations and create bundles that increase average order value and deliver significantly higher margins than individual products. We create fully optimized bundle listings and set up Amazon Virtual Bundles where eligible.",
    },
    {
        title: "Ranking and Keyword Domination",
        description: "We connect DataRaft to monitor your daily ranking position on your top 10 most important revenue driving keywords. If a competitor outbids us on a critical keyword we immediately increase bids to defend position. We push new keywords into top 10 positions every month to grow organic visibility.",
    },
    {
        title: "Product Expansion Research",
        description: "On request we research new product opportunities within your brand category that are already selling well on Amazon. We ensure every recommendation fits your brand identity and help you prepare a launch ready product brief so you can move from research to live product as fast as possible.",
    },
];

export default function GrowthPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-primary/30">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden">
                <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[#2E5BFF]/20 rounded-full blur-[120px]" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6">
                        <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">Growth Plan</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent leading-[1.1]">
                        The Growth Plan
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        For Amazon brands who want a complete growth strategy covering ads, conversion, retention and ranking domination.
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
                            You are a CPG or supplement brand that has the basics running but needs a full strategy to scale profitably. You want to improve your conversion rate, build a retention system, dominate your rankings and create bundles that increase your average order value and margins.
                        </p>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-black text-white mb-10 text-center">What Is Included</h2>

                    {/* Starter included */}
                    <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 mb-6">
                        <h3 className="text-lg font-bold text-gray-400 mb-4">Includes Everything in the Starter Plan:</h3>
                        <div className="space-y-2">
                            {starterServices.map((s, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-gray-500">
                                    <CheckCircle size={16} className="text-primary/50 shrink-0" />
                                    {s}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Growth services */}
                    <div className="space-y-6">
                        {growthServices.map((service, i) => (
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
                    <h2 className="text-4xl font-black text-white mb-6">Ready to Scale Profitably?</h2>
                    <p className="text-gray-400 mb-10">Book a free audit and we will show you exactly how the Growth Plan will take you there.</p>
                    <Link href="#booking" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-black rounded-2xl hover:scale-105 transition-transform">
                        Get Free Audit <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
