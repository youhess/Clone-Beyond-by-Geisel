import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "../ui/Container";
import {
  topBarBrand,
  topBarBrandMenu,
  topBarCurrentBrand,
  topBarLanguageMenu,
} from "../data/navigation";

function TopBarDropdown({ id, label, items, isOpen, onToggle, widthClass }) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-menu`}
        className="flex items-center gap-2 text-[15px] font-medium uppercase tracking-[0.2em] text-brand-charcoal/80 transition hover:text-brand-charcoal"
      >
        <span>{label}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition ${
            isOpen ? "rotate-180 text-brand-charcoal" : "text-brand-stone"
          }`}
        />
      </button>
      <div
        id={`${id}-menu`}
        className={`absolute right-0 top-full z-[80] mt-3 ${widthClass} origin-top-right rounded-sm border border-black/5 bg-[#f1ebe3] shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition-all duration-200 ${
          isOpen ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <ul className="py-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="block px-6 py-2 text-[15px] uppercase tracking-[0.16em] text-brand-charcoal/70 transition hover:bg-white/70 hover:text-brand-charcoal"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function TopBar() {
  const [openMenu, setOpenMenu] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative z-[60] bg-[#f1eeee] text-brand-charcoal">
      <Container className="flex h-10 items-center justify-between font-['The Sans',sans-serif] text-[15px]">
        <div className="flex items-center gap-3 uppercase tracking-[0.18em]">
          <a
            href={topBarBrand.href}
            className="text-brand-charcoal/80 transition hover:text-brand-charcoal"
          >
            {topBarBrand.label}
          </a>
          <span className="text-brand-stone">|</span>
          <span className="text-brand-charcoal/70">
            {topBarCurrentBrand.label}
          </span>
        </div>
        <div ref={dropdownRef} className="flex items-center gap-6">
          <TopBarDropdown
            id="brands"
            label="Marken"
            items={topBarBrandMenu}
            isOpen={openMenu === "brands"}
            onToggle={() =>
              setOpenMenu((prev) => (prev === "brands" ? null : "brands"))
            }
            widthClass="w-72"
          />
          <TopBarDropdown
            id="language"
            label="DE"
            items={topBarLanguageMenu}
            isOpen={openMenu === "language"}
            onToggle={() =>
              setOpenMenu((prev) => (prev === "language" ? null : "language"))
            }
            widthClass="w-44"
          />
        </div>
      </Container>
    </div>
  );
}