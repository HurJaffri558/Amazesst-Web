import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Calendar, MessageSquare, Map, Zap } from "lucide-react";
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
    "AMC Advanced Reporting",
    "DSP Programmatic Advertising",
    "Full Funnel Ad Strategy",
    "Influencer and UGC Strategy",
    "International Marketplace Expansion",
];

const enterpriseFeatures = [
    {
        icon: <Users size={24} className="text-primary" />,
        title: "Dedicated Account Team",
        description: "You get a dedicated team assigned exclusively to your brand. Not shared, not rotated. The same people working on your account every single day.",
    },
    {
        icon: <Calendar size={24} className="text-[#2E5BFF]" />,
        title: "Weekly Strategy Calls",
        description: "A full strategy call every week where we walk through your results, explain every action taken and plan the week ahead together.",
    },
    {
        icon: <MessageSquare size={24} className="text-cyan-500" />,
        title: "Slack Direct Access",
        description: "Direct access to your account team on Slack. Ask questions, get updates and stay in the loop in real time.",
    },
    {
        icon: <Map size={24} className="text-[#C6FF3D]" />,
        title: "Custom Growth Roadmap",
        description: "We build a fully custom 12 month roadmap specific to your brand, your catalog and your revenue goals.",
    },
    {
        icon: <Zap size={24} className="text-yellow-500" />,
        title: "Priority Support",
        description: "Your account is always first. Any issue, any question, any opportunity, we act on it immediately.",
    },
];

export default function EnterprisePage() {
    return (
        <main className="min-h-screen bg-background selection:bg-primary/30">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden">
                <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[#2E5BFF]/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[#C6FF3D]/10 rounded-full blur-[140px]" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6">
                        <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">Enterprise Plan</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent leading-[1.1]">
                        The Enterprise Plan
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        For Amazon brands with large catalogs who need a fully dedicated team and a custom strategy built around their business.
                    </p>
                    <Link href="#booking" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-transform">
                        Book a Strategy Call <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* Who This Is For */}
            <section className="py-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="p-10 rounded-[2.5rem] bg-primary/5 border border-primary/20">
                        <h2 className="text-2xl font-black text-white mb-4">Who This Is For</h2>
                        <p className="text-gray-300 leading-relaxed">
                            You are a serious Amazon brand with a large product catalog and serious scaling ambitions. You need a dedicated team that treats your account like their own business, with daily attention, weekly strategy calls and a fully custom growth roadmap.
                        </p>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-black text-white mb-10 text-center">What Is Included</h2>

                    {/* All 17 services */}
                    <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 mb-6">
                        <h3 className="text-lg font-bold text-gray-400 mb-4">Includes Everything in the Scale Plan (All 17 Services):</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {includedServices.map((s, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-gray-500">
                                    <CheckCircle size={16} className="text-primary/50 shrink-0" />
                                    {s}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Enterprise exclusives */}
                    <h3 className="text-xl font-bold text-white mb-6">Plus, Enterprise Exclusives:</h3>
                    <div className="space-y-6">
                        {enterpriseFeatures.map((feature, i) => (
                            <div key={i} className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-primary/30 transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-xl bg-white/5 shrink-0 mt-1">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
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
                    <h2 className="text-4xl font-black text-white mb-6">Ready for a Dedicated Team?</h2>
                    <p className="text-gray-400 mb-10">Book a strategy call and we will build a fully custom plan around your brand and your goals.</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link href="#booking" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-black rounded-2xl hover:scale-105 transition-transform">
                            Book a Strategy Call <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="https://wa.me/923469037939"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            Message Us on WhatsApp
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
