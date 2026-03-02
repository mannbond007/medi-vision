import { MessageSquare, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Medi Vision ensured complete transparency throughout my MBBS abroad admission process. Every step was professionally handled with clarity and structure.",
      name: "Aman Verma",
      role: "MBBS Student – Russia",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      id: 2,
      text: "The scholarship support and guidance exceeded expectations. Highly ethical and structured counseling.",
      name: "Priya Sharma",
      role: "Scholarship Awardee",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    },
    {
      id: 3,
      text: "Career licensing and documentation guidance helped me transition smoothly into my medical profession.",
      name: "Rahul Mehta",
      role: "Medical Graduate",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
      id: 4,
      text: "From admission counseling to long-term career planning, Medi Vision truly builds sustainable futures.",
      name: "Neha Kapoor",
      role: "Study in India Program",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200",
    },
  ];

  return (
    <section className="bg-slate-900 py-20 px-4 md:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#00A896]/10 rounded-full blur-[160px]" />

      <div className="max-w-6xl w-full relative z-10">
        {/* Heading */}
        <div className="mb-14 text-center">
          <div
            className="inline-flex items-center gap-3
  px-6 py-3
  rounded-full
  bg-white/5 backdrop-blur-xl
  border border-[#00A896]/40
  shadow-md"
          >
            <div
              className="w-8 h-8 flex items-center justify-center
    rounded-full bg-[#00A896] text-white"
            >
              <MessageSquare size={16} />
            </div>

            <h1 className="text-lg md:text-xl font-semibold text-white tracking-wide whitespace-nowrap">
              Our Testimonials
            </h1>
          </div>
        </div>

        {/* SAME GRID STRUCTURE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`rounded-2xl p-6 backdrop-blur-xl 
              bg-white/5 border border-white/10
              hover:border-[#00A896]/40 hover:bg-white/10
              transition-all duration-300
              ${
                index === 0
                  ? "md:col-span-2"
                  : index === 1
                    ? "md:col-span-1"
                    : index === 2
                      ? "md:col-span-1"
                      : "md:col-span-2"
              }`}
            >
              {/* Stars */}
              <div className="flex mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[#00A896] text-[#00A896]"
                    />
                  ))}
              </div>

              {/* Text */}
              <p
                className={`text-slate-300 text-sm leading-relaxed ${
                  index === 0 || index === 3 ? "max-w-xl mb-14" : "mb-8"
                }`}
              >
                {testimonial.text}
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#00A896]/40"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-sm font-medium">
                    {testimonial.name}
                  </h3>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
