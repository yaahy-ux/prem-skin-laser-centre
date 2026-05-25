import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  CalendarDays,
  Sparkles,
  ArrowRight,
  Camera,
  Star,
  Hospital,
  Microscope,
} from "lucide-react";
function Button({ children, className = "", variant, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-xl border bg-white ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

const assets = {
  "logoCardSkin": "data:image/webp;base64,UklGRpoIAABXRUJQVlA4II4IAAAwNACdASq0AKAAPqlMn0qmJKKhqvV68MAVCUAaGJmaeiOH3g+XNY9SDN1W3n4xqvgo9YCoyJaK/yi4KnKP+K4wtX5KaEPmDq0aL5Gtx6kyveaO4H0vaua8jZjPLbzgYINdKPfa9C9Ft3MBLMFDgQseHNn1kSgTS5wPCENIHQE4HZAiVSGv1Ks+45kkDFG6shTJ7sx5zgDClsdDx4dp59Dqb1w/88ObA/Gpt4f+Vr5rS+T3QOm5/1+xHZ7uzEkQF7tYQGCrbQVcCZWOoh7A9raw/ZoTc1l8HruK/MoyM7Urn6SBFYE1/P64x6GeiNxoYioKE+gmpPVY3wEJ4F8jAHweDlzIlHsjJwLdGkcz/i5eJ/WiNWSRVa5sA5ZcVuayWnYyMPYy9QRlrRT9EezC8YsVw4lSG+WHXOKD3GCD+denc4EpUAGWSnqt7kXA8EofGRi8Vqar2tR4oxvSrN8ebJBaQfCmI0WHTG0rgycmad1zsgwcSGnZNEOFNBpk24+s+Oc9nZr08brKmZW0I2q9KcsFMkc93+jae9pQQ1L0YLm90fWZbTOyTQYZAQAA/vJ+523umITZpzogL1Pxmm3Q7GvQu7zs7WyZgAAAAP77QldJ6HkJGhCwqiTM4g4i5kxM7uOZ5mFf7W/evkBoqs6ox++ImZcXI6UXXE4pGCvVshJYXeywLgRrWEQKSzVXLIiL6EQdDzOGKXTwl9v76YbcxQnVB6hq7L+fUOrYWV44KSht/cw0IaooyKqGcst1kzKMPYgH5im58R/7mxeefHmh6/X0uqBzY2r5+o7p6fo8s6BG5BxCaSyJjSbXpX/8b5LQKVEAAAAAAAAAAAAA=",
  "doctorLabcoat": "data:image/webp;base64,UklGRroHAABXRUJQVlA4IK4HAADQJQCdASrsAPgAPm0ymUykIyKhMAgAsBIJaW7hdN7/nkBdLm4dM3zyUR4FWSRn23Bl1XehQge+aWPIFuCH0Wk1ikIQwNP/tHXDAaOqlZKqeXQzd9lQCfy/my7Tz6o84kebzgVj+3PYsPoApwYVHuQAAA=",
  "akiraLaser": "data:image/webp;base64,UklGRmwzAABXRUJQVlA4IGAzAADwbwCdASqAAYAAPm0sk0gkIqGYBABABsSgCdAYq2crUR/3h9/OV8ba2v4Kk+uQDZfJ4Ps9k3yMev8HGbtgrPtKQ6AdbD0eMAAA/v0nz//vqZgdwj+8nT5mVMr8m2zcQ9L//J8ODuDf8y+eI+NsFwYT2E5J81f8vd3nYhi1kzD/dv7Mu3XvwHTD/Yr7P2i/8b7/pv7D/WXDsw+yKvtM7/0/y/4pTP/z19H9VL9dn0k/a44dMqmwdZg41sx7M6DWmUHzOTmlrDnRNYHXD4V0bGv12Ifl6e+rjGD4Yx+xH24dBK7j4VtO2wgTTMfqWduqCPmSSTIbZL1xP2YjvIjHHYQQj3e5N+mHBhAoXyzj1s99XsrYBKiSt4USUsK0NQkblx/EJKUQYndQnXj9hD3SStEjS9mS6Vvp3WXlXYGJtAbaPH9mQNwY3x7fy9WTtQyF+oTLRseXMEzz0z9nG95AFeIzskgBEdM1KwVVI9ojz8eC1VmePx6H3PpQnHsvCwryCj3IyNiVkmLQaUgS06HNX2Qw2sZkSJ8dPTfO3K1PWWCAax72+QVG5kNtvwbZ3D0RygGxLO+aI1OgI6o8UGIbGluCKkiM2Djq3N/vk2NRd/oUYeaz6Xm+u2RgEZDPkh0iZNDaA7awj1PPnBSL03GLd87HIXc5RkPUJz/3u2sYkRxmOyFq+0PC6jkqCr2GaCIyW6Hn5k4QfUP8oJ+SlWa0XpQs3hQW9NQMlj3Xny9kGSFeujWbKp0ZaDrtk5bbkoFK83+gpG1ZZff9ZSMnOdpTz+r3f+09ZcxTGE5pe48nOf7xlRGMpV0eAPke2K5xhGnRffPsOgC4PIw3L5ZJUDgt++clG/JpjwvDGENFn8zrw3HMP2CI7tyn1s837yxPbt0t9VdZx0HOcdRFASLutJzOcm1AQ/5lAWJi64f48q2JeENiRDHBSrnxsXDW0iP11sj6sbRRdYHD8MhzwCFT5TU1cjMZmtT0yqu1sNi6UpIMUIGJg7DzbDoA7xzLXauKQij7ylKP1hbJTn0uTRfsSxC85lDsckE6ZsPycjR7zEhSaIM7neDI1/UqPOebpUWg0OShZ4vTsxW9D/fj4hS2iYgsP9XcZ32Nzn0Nfv8GbpO9dwe6l+jXXkAi66OCAsifYVqXxTq7frS9Tz1QbWFEnuiTqrvU6sYkG/Ik95nv8C5rD2qh8UzMvFv7gH2xPx2qKl+y+4FeB7wUmmvM+h0Ld8cavDhHyYPO0WZ5b2nsG5gD6ktYxzH+JxstnksCdUJ4uqvDmxosWlqi4EeVBGIp6AnxIAAAAAAAAAA==",
  "microderm": "data:image/webp;base64,UklGRjMsAABXRUJQVlA4ICYsAABQbwCdASqAAYAAPm0uk0akIqGhMAgAsBIJaW7hdMe5f7x8UKmVXqZJo+XDFU4soOcKg6dY3lPsz6/jn4GMAAP78/uB7nW8oOVDhsuNuzBcwthDKQ+6zxbIczzPS9l+tu3vv2pJ5R/M4G0V0z/aLTxPrVj3c3x3D7n9Ybn+Zu6gfsAj8tyVkQEiMwy7bXox6DlrQzAVVIx7vBpfZs5Lr1kVYjMnJ+Y7YdLRt8nNLBx2QkiQ73WVtfXi24kO2y0gUi2kBtVUiKmJx0CNYd2fe+j2UlW4CC3Pyl6RfrQI1pUBJXK3R97Ki3hpOOYcYZGm62VjkswCwh6JzB35B0GRDuEIfQQAhhqZGxR9AeCyzTaHnVsS5jewW2UiDK/ZQT+O96lflGOzEkQxOZkKgVn15c2YlaogHhASoKJ+ag7rHkVqwguw/vTkUk9f6gQVG7XcFDbGX3Jw9AqV0nzUAwQ+d2bkXt2X6+sE2b19WZbFBIrR2O7rfjKoZCFw8uuIrsFoP8AYOGsL7z3CnrM6dzruu4b7LtE9bRXwx1C3cDikPH1W+87hmDwA3EDnXe5r0D2RB+w9gX+gg/dHJE3XLHboU0LAdky2VBi4zfC0ow/MQ2O/a6yDeE399+TQnDnQNJxlP4CK3RXRxtrwQoKlGb72Pndz6ZvP2VD7KC3lIRPaNr/9D3p06/OMUy22ccqrpJreQI5Fsdm9fwDGJb8ckWJlzGeMmucQjcrfJPR8EMzAe9oDP5A1jIrB/jdYuyhjci8a/Xl8SHfRrSeSG+k1+3dxc4g11vHxeAg2VZqQE05VIy7qVCaYmCCHfhLD2eB7q7V5LtY8NIgAcjqXr+P05yQXezqT5J5+E3Q7Hu+PXpLsH9l/PjLgXfKHDfEZU7nZu0A0qQ97g9juK14d6LM2+i4PB3zYDlUKk3Uy4XH6u+L7Bbk0VSe+jZ9h3Bvk1XuF0l7gQlkK15ktO3Grvh7khiVpmRNVZIWfT9KWyAaHDniMGgND3GsiEY2xWZjwAgAAAAAAAAAA=",
  "consultRoom": "data:image/webp;base64,UklGRsY0AABXRUJQVlA4ILo0AACwbQCdASqAAJYAPm0qk0mkIqGhMAgAsBIJaQBMuj2OQa3uv+0uRq4Q2YeYnzYx5m8p4oIe3P0jFhcKvgrZtHYH9I9YfCAU+WcPqqAaZrAAAA==",
  "waitingArea": "data:image/webp;base64,UklGRqJcAABXRUJQVlA4IJZcAADQkQCdASqAAYAAPm0yk0mkIqGhMAgAsBIJaQBNgFakfkIG/Pywp66/1lYxWH+te0NVibvZ24urvfE/MeuzgGUoUrfuT6rSy/5c2YnuY1O0AQA=",
  "treatmentRoom": "data:image/webp;base64,UklGRkQ7AABXRUJQVlA4IDg7AACQhgCdASqAAYAAPm0qk0mkIqGhMAgAsBIJaQBPQFr1Nn3mWUz7Iuj3UdQGH+te0NVibvZ24urvfE/MeuzgGUoUrfuT6rSy/5c2YnuY1O0AQD+7+z9q0haVkcsjZC6XAz0dSaa4XXjgzyqM05Us3NSiCq1RWC8plFQGuBUQ3i3vfI0CU37ISdUF5llIu54K5uYOeNTZqsYfrtYBU8xTgMaMZ05NfvXZGZQ5E29bt6Wb6kskh6XeA9zHTLx1Ndq5ofz5KssXmn3Jb0KV4Nt4ul4fYqfGs4scFBi7QAVYKHmOO9hPVBKIuz3N76dC6nHxTzxT1nmLk9MhxwSsdATN4TvxkkOUAAAA=",
  "signage": "data:image/webp;base64,UklGRn4kAABXRUJQVlA4IHIkAABwYACdASqAAYAAPm0sk0gkIqGYBABABsSgCdAYq2crUR/3h9/OV8ba2v4Kk+uQDZfJ4Ps9k3yMev8HGbtgrPtKQ6AdbD0eMAAP7z5//uZfmWryRk3wUAPxEiTImB7Tbh1ESRGto62lcVm2F51e3pB44P0h1dSjeB2Wvhm+3tnKiV+bjz4qXcAPt+FbTpxm8wK6Vt6Xbpq7cgdzfpREcq4WwPcp/eWUz+91f9fvX/9P/Crf/ruUv+FpYQAAAAAAA",
  "dermapenProcedure": "data:image/webp;base64,UklGRv0TAABXRUJQVlA4IPETAAAQOgCdASqgAIUAPm0sk0akIqGhMAgAsBIJaQAA3qtkddMpEsgFj30AAAD+7H5//79fWEwBdnvX/q+v9u3//1aUccvp+q/kvX1e+ylc5//31r+8Q/+w33n//8AAAAAA==",
  "dermarollerProcedure": "data:image/webp;base64,UklGRrglAABXRUJQVlA4IKwlAADQbACdASqAAFUAPm0qk0gkIyGhqAgAsBIJaQAAZAKzxVfSASAAAAAAAP7Rt1DLsn3M2qPzDWHJOx3YScLraWgDl3MBL4g/qT9usYLtbEX9gUT5i50PYw6FYKG3N2bCqK3K60xmTG6gYOIGRrB1Rq/ELDUFx5uWHbA5zsnFP0i0tMslLQpGF52NUTCluD73G9h0rNRQAAAA=",
  "yagMachine": "data:image/webp;base64,UklGRmgQAABXRUJQVlA4IFwQAACwNACdASqAAIAAPm0sk0gkIqGhMAgAsBIJaQAAudJIHpHbq2Ei2v0AAP74XuD+qXvGekq79oyWZ/q+5ktQEmV4YBsMNrb+xKr7h0lZp+7XhaeQt/lkAPzSFo8FQ0bYV1vvuX5bWGdP4tCltB+99u5EZVnEbD7fg72wwy+J71S3mRfMecCwSY6fr1ioSNnoC+92wBMplfaud63F1vgr2oygAAAAAAAA==",
  "hairRemovalProcedure": "data:image/webp;base64,UklGRl0VAABXRUJQVlA4IFEVAACQMACdASqAAIkAPm0uk0mkIqGhMAgAsBIJaQAA+VHCCdDkELz7JaWMAAAA/vTW/3jjGWY0GqzSD/QMptCjvJ9QYxxZ7DoLAL/x31trU7cMvphn6T8siQzI8k9gfm/bj6Dd8Z7dyC0AAAAAAA=",
  "rfMachine": "data:image/webp;base64,UklGRhQYAABXRUJQVlA4IAgYAABQTwCdASqABFQAPm0sk0gkIyGhMAgAsBIJaQAAbyuJpAZeRzv1/CX1qQAA/vz+4H+0dhGdYVq8dbFTwGUJv+fyv5w+N9AbDduZZTp0PjGcYFMf5UKBULZKboETrT93jAy6AuohVCc88vznvs8/27nKBlYHN/R4aw+9paF8LDK+MAAAAAAAAA=",
  "microStock": "data:image/webp;base64,UklGRtwbAABXRUJQVlA4INAbAADQTwCdASqAAcAAPm0sk0gkIyGhMAgAsBIJaQAAxtNv8JmvYLan+6xE1uAA/v2+2wKrm60wLwpCvf+/CWMf+1/uI2C9pKsi5lbEF8Gg/IU8tVSlRXcANixJgIsO3lzSyyd4+vJoddyxPmkXfFYpaH6vtsDRKQAAAAAAAA=="
};

export default function ClinicWebsite() {
  const clinicName = "Prem Skin & Laser Centre";
  const doctorName = "Dr. Asheesh Batra";
  const specialty = "M.D. Skin & V.D. | Consultant Dermatologist";
  const [page, setPage] = React.useState("home");

  React.useEffect(() => {
    const readHash = () => setPage(window.location.hash.replace("#", "") || "home");
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  const nav = [
    ["home", "Home"],
    ["about", "About"],
    ["treatments", "Treatments"],
    ["technology", "Technology"],
    ["gallery", "Gallery"],
    ["contact", "Contact"],
  ];

  const conditions = [
    "Acne & acne scars",
    "Pigmentation & melasma",
    "Hair fall & scalp concerns",
    "Eczema, allergy & psoriasis",
    "Fungal infections",
    "Warts, moles & skin tags",
    "Tattoo removal",
    "Laser hair reduction",
  ];

  const technologies = [
    ["Dermapen 4", "Advanced microneedling for acne scars, pores, fine lines and skin texture.", assets.dermapenProcedure, "Microneedling"],
    ["Dermaroller", "Collagen induction therapy for scar and texture improvement.", assets.dermarollerProcedure, "Collagen induction"],
    ["ND:YAG Laser", "Laser platform used for tattoo removal and selected pigmentation concerns.", assets.yagMachine, "Tattoo removal"],
    ["Hair Removal Laser", "Laser hair reduction planned according to skin type and treatment area.", assets.hairRemovalProcedure, "Hair reduction"],
    ["Dermaindia RF", "Radiofrequency-based technology for skin rejuvenation and collagen support.", assets.rfMachine, "RF technology"],
    ["Microdermabrasion", "Non-invasive exfoliation for dullness, uneven texture and skin polishing.", assets.microderm, "Skin polishing"],
  ];

  const gallery = [
    ["Consultation room", assets.consultRoom],
    ["Waiting area", assets.waitingArea],
    ["Treatment room", assets.treatmentRoom],
    ["Clinic signage", assets.signage],
    ["AKIRA laser machine", assets.akiraLaser],
    ["Microdermabrasion machine", assets.microderm],
  ];

  const go = (id) => {
    window.location.hash = id;
    setPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function Logo() {
    return (
      <button onClick={() => go("home")} className="flex items-center gap-3 text-left">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#e2c7a4] bg-white p-1.5 shadow-sm">
          <img src={assets.logoCardSkin} alt="Prem Skin & Laser Centre skin-layer logo" className="h-full w-full rounded-xl object-cover" />
        </div>
        <div>
          <p className="text-xl font-extrabold leading-tight tracking-tight text-[#0b2b61] md:text-2xl">प्रेम स्किन एवं लेज़र सेंटर</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#b02a24]">Prem Skin & Laser Centre</p>
        </div>
      </button>
    );
  }

  function Header() {
    return (
      <header className="sticky top-0 z-50 border-b border-[#eadbc5] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
            {nav.map(([id, label]) => (
              <button key={id} onClick={() => go(id)} className={page === id ? "text-[#b02a24]" : "hover:text-[#b02a24]"}>
                {label}
              </button>
            ))}
          </nav>
          <a href="tel:+912912431529" className="hidden rounded-full bg-[#0b2b61] px-5 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#153d7f] md:inline-flex">
            0291-2431529
          </a>
        </div>
      </header>
    );
  }

  function SectionTitle({ eyebrow, title, text }) {
    return (
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b02a24]">{eyebrow}</p>
        <h2 className="mt-3 font-serif text-4xl font-bold text-[#0b2b61] md:text-5xl">{title}</h2>
        {text && <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>}
      </div>
    );
  }

  function Info({ icon: Icon, title, text }) {
    return (
      <div className="flex gap-4 p-4">
        <Icon className="mt-1 h-7 w-7 shrink-0 text-[#b02a24]" />
        <div>
          <p className="font-bold text-[#0b2b61]">{title}</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
        </div>
      </div>
    );
  }

  function TreatmentCard({ title }) {
    return (
      <Card className="rounded-3xl border-[#eadbc5] bg-[#fffdf9] shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="p-6">
          <Sparkles className="mb-5 h-10 w-10 text-[#b02a24]" />
          <h3 className="text-lg font-bold text-[#0b2b61]">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">Consultation-based treatment planning with clear guidance and follow-up care.</p>
        </CardContent>
      </Card>
    );
  }

  function TechnologyCard({ title, text, image, tag }) {
    return (
      <Card className="overflow-hidden rounded-3xl border-[#eadbc5] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="relative h-52 bg-[#f7f3ec]">
          <img src={image} alt={title} className="h-full w-full object-cover" />
          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#b02a24] shadow">{tag}</div>
        </div>
        <CardContent className="p-7">
          <h3 className="text-xl font-bold text-[#0b2b61]">{title}</h3>
          <p className="mt-3 leading-7 text-slate-600">{text}</p>
        </CardContent>
      </Card>
    );
  }

  function PhotoCard({ title, src }) {
    return (
      <div className="group overflow-hidden rounded-3xl border border-[#eadbc5] bg-white shadow-sm">
        <div className="h-64 overflow-hidden bg-[#f7f3ec]">
          <img src={src} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <div className="p-5">
          <p className="font-bold text-[#0b2b61]">{title}</p>
        </div>
      </div>
    );
  }

  function Home() {
    return (
      <>
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#fff8ef] to-[#eef7fb]">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,_rgba(176,42,36,0.12),_transparent_62%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.03fr_0.97fr] md:items-center md:py-24">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="mb-5 inline-flex rounded-full border border-[#e2c7a4] bg-white px-4 py-2 text-sm font-bold text-[#8a5314]">Dermatology, laser & skin care in Jodhpur</p>
              <h1 className="max-w-2xl font-serif text-5xl font-bold leading-tight tracking-tight text-[#0b2b61] md:text-7xl">Healthy skin begins with trusted care.</h1>
              <p className="mt-6 max-w-xl text-xl font-semibold text-[#b02a24]">Advanced dermatology. Personalised treatment. Ethical practice.</p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">{clinicName} provides medical dermatology, laser treatments, cosmetic procedures and skin rejuvenation under the care of {doctorName}.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="tel:+912912431529"><Button className="rounded-full bg-[#0b2b61] px-7 py-6 text-base hover:bg-[#153d7f]">Book Appointment</Button></a>
                <button onClick={() => go("treatments")} className="rounded-full border border-[#b02a24] bg-white px-7 py-3 font-bold text-[#b02a24] hover:bg-[#fff4f2]">Explore Treatments</button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.08 }} className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-[#eadbc5] bg-white shadow-2xl shadow-slate-200">
                <div className="grid md:grid-cols-[0.92fr_1.08fr]">
                  <div className="flex items-center justify-center bg-gradient-to-br from-[#f7ead9] to-white p-6">
                    <img src={assets.doctorLabcoat} alt="Dr. Asheesh Batra" className="max-h-[430px] w-full rounded-3xl object-contain" />
                  </div>
                  <div className="flex flex-col justify-center bg-[#0b2b61] p-8 text-white">
                    <p className="text-sm uppercase tracking-[0.26em] text-[#f1d39e]">Consultant Dermatologist</p>
                    <h2 className="mt-4 text-3xl font-bold">{doctorName}</h2>
                    <p className="mt-2 text-lg text-[#f1d39e]">{specialty}</p>
                    <p className="mt-5 leading-7 text-slate-200">Clear diagnosis, patient-first guidance and procedure planning based on individual skin needs.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-4 rounded-3xl border border-[#eadbc5] bg-white p-5 shadow-xl md:grid-cols-3">
            <Info icon={MapPin} title="Clinic location" text="D-34, Sector-D, Shastri Nagar, Behind Medical College, near Daga Diamond, Jodhpur" />
            <Info icon={Clock} title="Clinic timings" text="Mon–Sat: 9–11 AM, 3–7 PM | Sunday: 11 AM–2 PM" />
            <Info icon={Phone} title="Appointments" text="Call 0291-2431529 before visiting to confirm timings and procedure availability." />
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionTitle eyebrow="Treatments" title="Care for common and complex skin concerns" text="A condition-first structure helps patients quickly find the right consultation or procedure." />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {conditions.map((item) => <TreatmentCard key={item} title={item} />)}
            </div>
          </div>
        </section>

        <TechnologyPreview />

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionTitle eyebrow="Clinic photos" title="A trusted, established clinic environment" text="Real clinic photographs build confidence and show the practice as it is: experienced, functional and patient-focused." />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <PhotoCard title="Consultation room and certificates" src={assets.consultRoom} />
              <PhotoCard title="Airy waiting area" src={assets.waitingArea} />
              <PhotoCard title="Laser treatment room" src={assets.treatmentRoom} />
            </div>
          </div>
        </section>

        <Affiliations />
        <CTA />
      </>
    );
  }

  function TechnologyPreview() {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Advanced technology" title="Modern dermatology devices" text="Technology-led procedures are selected after skin assessment and discussion of expected outcomes." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map(([title, text, image, tag]) => (
              <TechnologyCard key={title} title={title} text={text} image={image} tag={tag} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  function Affiliations() {
    return (
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Affiliations" title="Hospital associations in Jodhpur" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card className="rounded-3xl border-[#eadbc5] shadow-sm">
              <CardContent className="p-8">
                <p className="text-3xl font-black tracking-wide text-[#ec6d1e]">SUNCITY <span className="text-slate-800">HOSPITAL</span></p>
                <p className="mt-3 text-slate-600">Consultant Dermatologist, Suncity Hospital, Jodhpur</p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-[#eadbc5] shadow-sm">
              <CardContent className="p-8">
                <p className="text-3xl font-black tracking-wide text-[#d71920]">GOYAL <span className="text-slate-800">HOSPITAL</span></p>
                <p className="mt-3 text-slate-600">Consultant Dermatologist, Goyal Hospital, Jodhpur</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  function About() {
    return (
      <PageWrap eyebrow="About" title="Dr. Asheesh Batra">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <img src={assets.doctorLabcoat} alt="Dr. Asheesh Batra" className="rounded-3xl border border-[#eadbc5] bg-white p-3 shadow-xl" />
          <div className="text-lg leading-8 text-slate-700">
            <p>{doctorName} is a consultant dermatologist in Jodhpur with expertise in medical dermatology, skin procedures, laser treatments and aesthetic skin rejuvenation. His listed areas of care include acne, allergy, mole and wart removal, tattoo removal, laser hair removal, chemical peels and melasma treatment.</p>
            <p className="mt-5">He is associated with Goyal Hospital & Research Centre and Suncity Hospital, and also practices at Prem Skin & Laser Centre in Shastri Nagar, Jodhpur.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3"><Trust title="Ethical practice" /><Trust title="Clear diagnosis" /><Trust title="Personalised care" /></div>
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <PhotoCard title="Consultation room" src={assets.consultRoom} />
          <PhotoCard title="Clinic signage" src={assets.signage} />
        </div>
      </PageWrap>
    );
  }

  function Treatments() {
    return (
      <PageWrap eyebrow="Treatments" title="Skin conditions and procedures">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.concat(["Chemical peels", "Microneedling", "Microdermabrasion", "RF rejuvenation"]).map((item) => <TreatmentCard key={item} title={item} />)}
        </div>
      </PageWrap>
    );
  }

  function Technology() {
    return (
      <PageWrap eyebrow="Technology" title="Advanced dermatology technology">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map(([title, text, image, tag]) => <TechnologyCard key={title} title={title} text={text} image={image} tag={tag} />)}
        </div>
      </PageWrap>
    );
  }

  function Gallery() {
    return (
      <PageWrap eyebrow="Gallery" title="Clinic and technology gallery">
        <div className="grid gap-5 md:grid-cols-3">
          {gallery.map(([title, src]) => <PhotoCard key={title} title={title} src={src} />)}
        </div>
      </PageWrap>
    );
  }

  function Contact() {
    return (
      <PageWrap eyebrow="Contact" title="Book a consultation">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="rounded-3xl border-[#eadbc5] bg-white shadow-lg">
            <CardContent className="space-y-6 p-8">
              <Info icon={Phone} title="Phone" text="0291-2431529" />
              <Info icon={MapPin} title="Clinic address" text="D-34, Sector-D, Shastri Nagar, Behind Medical College, near Daga Diamond, Jodhpur, Rajasthan 342003" />
              <Info icon={Clock} title="Timings" text="Mon–Sat: 9–11 AM, 3–7 PM | Sunday: 11 AM–2 PM" />
              <a href="tel:+912912431529"><Button className="w-full rounded-full bg-[#0b2b61] py-6 text-base hover:bg-[#153d7f]">Call Now <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
            </CardContent>
          </Card>
          <PhotoCard title="Prem Skin & Laser Centre signage" src={assets.signage} />
        </div>
      </PageWrap>
    );
  }

  function Trust({ title }) {
    return <div className="rounded-2xl border border-[#eadbc5] bg-white p-4 text-sm font-bold text-[#0b2b61] shadow-sm"><ShieldCheck className="mb-2 h-6 w-6 text-[#b02a24]" />{title}</div>;
  }

  function PageWrap({ eyebrow, title, children }) {
    return <section className="min-h-[70vh] bg-[#fbf8f2] py-20"><div className="mx-auto max-w-7xl px-6"><div className="mb-12"><p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b02a24]">{eyebrow}</p><h1 className="mt-3 font-serif text-5xl font-bold text-[#0b2b61] md:text-6xl">{title}</h1></div>{children}</div></section>;
  }

  function CTA() {
    return <section className="bg-[#0b2b61] py-14 text-white"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between"><div><h2 className="font-serif text-4xl font-bold">Book your appointment today</h2><p className="mt-2 text-slate-200">Personalised dermatology care with modern technology and clinical experience.</p></div><a href="tel:+912912431529" className="rounded-full bg-white px-7 py-4 text-center font-bold text-[#0b2b61] shadow-lg">Call 0291-2431529</a></div></section>;
  }

  const pages = { home: <Home />, about: <About />, treatments: <Treatments />, technology: <Technology />, gallery: <Gallery />, contact: <Contact /> };

  return (
    <div className="min-h-screen bg-[#fbf8f2] text-slate-900">
      <Header />
      <main>{pages[page] || <Home />}</main>
      <a href="tel:+912912431529" className="fixed bottom-5 right-5 z-50 rounded-full bg-[#b02a24] px-5 py-4 text-sm font-bold text-white shadow-2xl md:hidden">Call</a>
      <footer className="bg-[#06142b] px-6 py-10 text-sm text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div><Logo /><p className="mt-4 leading-7 text-slate-400">Medical dermatology, laser treatments and aesthetic skin care in Jodhpur.</p></div>
          <div><p className="font-bold text-white">Quick links</p><div className="mt-4 grid gap-2">{nav.map(([id, label]) => <button key={id} onClick={() => go(id)} className="text-left hover:text-white">{label}</button>)}</div></div>
          <div><p className="font-bold text-white">Clinic</p><p className="mt-4 leading-7 text-slate-400">D-34, Sector-D, Shastri Nagar, Behind Medical College, Jodhpur</p></div>
          <div><p className="font-bold text-white">Appointments</p><p className="mt-4 text-slate-400">0291-2431529</p><p className="mt-2 text-slate-400">Mon–Sat and Sunday timings listed online; confirm before visiting.</p></div>
        </div>
        <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-slate-500">© 2026 {clinicName}. Medical information is for general awareness and does not replace consultation with a qualified doctor.</p>
      </footer>
    </div>
  );
}
