import {
  ShieldCheck,
  Database,
  Lock,
  FileText,
  Link as LinkIcon,
  Mail,
  Building,
  LucideIcon,
} from "lucide-react";

type Section = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export default function PrivacyPage() {
  const sections: Section[] = [
    {
      icon: Database,
      title: "Information We Collect",
      text: "When you contact Medi Vision Career Pvt. Ltd. for MBBS admission guidance, we may collect personal information such as your name, phone number, email address, academic records, and preferred study destinations.",
    },
    {
      icon: FileText,
      title: "How We Use Your Information",
      text: "We use your information to provide MBBS admission consultation, recommend suitable universities, assist with application procedures, and communicate important updates regarding admissions.",
    },
    {
      icon: ShieldCheck,
      title: "Information Sharing",
      text: "We do not sell or rent your personal information. Your data may only be shared with partner universities or institutions when required for admission processing.",
    },
    {
      icon: Lock,
      title: "Data Security",
      text: "We implement appropriate technical and administrative security measures to protect your personal data from unauthorized access or misuse.",
    },
    {
      icon: LinkIcon,
      title: "Third-Party Links",
      text: "Our website may contain links to university websites or partner institutions. We are not responsible for the privacy practices of these external websites.",
    },
    {
      icon: Mail,
      title: "Contact & Queries",
      text: "If you have any questions regarding this Privacy Policy, please contact Medi Vision Career Pvt. Ltd. using the details below.",
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
            Privacy Policy
          </h1>

          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            At{" "}
            <span className="text-white font-medium">
              Medi Vision Career Pvt. Ltd.
            </span>
            , we respect your privacy and are committed to protecting your
            personal information while providing MBBS admission consultancy
            services.
          </p>

          <p className="text-sm text-slate-500 mt-4">
            Last Updated: March 2026
          </p>
        </div>

        {/* Policy Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <div
                key={index}
                className="p-8 rounded-xl border border-white/10 bg-black/40 backdrop-blur"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-400/30">
                    <Icon size={25} className="text-emerald-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-white">
                    {section.title}
                  </h2>
                </div>

                <p className="text-slate-400 leading-relaxed">{section.text}</p>
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

            <h3 className="text-xl font-semibold text-white tracking-wide">
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
