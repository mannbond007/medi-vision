import {
  FileText,
  ShieldCheck,
  AlertTriangle,
  Scale,
  Mail,
  Building,
  LucideIcon,
} from "lucide-react";

type Section = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export default function Terms() {
  const sections: Section[] = [
    {
      icon: FileText,
      title: "Use of Our Services",
      text:
        "Medi Vision Career Pvt. Ltd. provides guidance and consultancy services for MBBS admissions in India and abroad. The information provided on this website is intended for educational and informational purposes only.",
    },
    {
      icon: ShieldCheck,
      title: "Accuracy of Information",
      text:
        "While we strive to provide accurate and updated information about universities, admission procedures, and eligibility requirements, we cannot guarantee that all information will always be complete or up to date.",
    },
    {
      icon: AlertTriangle,
      title: "Admission Decisions",
      text:
        "Admission decisions are made solely by the respective universities or institutions. Medi Vision Career Pvt. Ltd. does not guarantee admission and cannot influence the final decision of any institution.",
    },
    {
      icon: Scale,
      title: "Limitation of Liability",
      text:
        "Medi Vision Career Pvt. Ltd. shall not be held responsible for any losses, damages, or consequences resulting from reliance on the information provided through this website or consultation services.",
    },
    {
      icon: FileText,
      title: "Changes to Terms",
      text:
        "We may update or modify these Terms of Service at any time without prior notice. Continued use of our website or services indicates acceptance of the updated terms.",
    },
    {
      icon: Mail,
      title: "Contact Information",
      text:
        "If you have any questions regarding these Terms of Service, you can contact Medi Vision Career Pvt. Ltd. using the details below.",
    },
  ];

  return (
    <div className="min-h-screen w-full relative text-slate-300">

      {/* Orchid Depths Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000000 40%, #350136 100%)",
        }}
      />

      {/* Page Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-24">

        {/* Heading */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms of Service
          </h1>

          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            These Terms of Service outline the rules and regulations for using
            the services provided by{" "}
            <span className="text-white font-medium">
              Medi Vision Career Pvt. Ltd.
            </span>
            , an MBBS admission consultancy helping students pursue medical
            education opportunities.
          </p>

          <p className="text-sm text-slate-500 mt-4">
            Last Updated: March 2026
          </p>
        </div>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <div
                key={index}
                className="p-8 rounded-xl border border-white/10 bg-black/40 backdrop-blur"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-400/30">
                    <Icon size={25} className="text-emerald-400" />
                  </div>

                  <h2 className="text-xl font-semibold text-white">
                    {section.title}
                  </h2>
                </div>

                <p className="text-slate-400 leading-relaxed">
                  {section.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Company Info */}
        <div className="mt-20 border-t border-white/10 pt-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-400/30">
              <Building size={25} className="text-emerald-400" />
            </div>

            <h3 className="text-xl text-white font-semibold">
              Company Information
            </h3>
          </div>

          <div className="text-slate-400 space-y-2">
            <p>Medi Vision Career Pvt. Ltd.</p>
            <p>
              Nawal Kishor Road, Behind CBI Office, Front of Padmakar Bhawan,
              Hazratganj, Lucknow – 226001
            </p>
            <p>Phone: +91 8881966002</p>
            <p>Email: medivisoncareerpvtltd@gmail.com</p>
          </div>
        </div>

      </div>
    </div>
  );
}