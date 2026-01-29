import { useEffect, useRef, useState } from "react";
import { Calendar, ChevronDown, Mail, MapPin, Menu, Phone } from "lucide-react";
import Container from "../ui/Container";
import { bookingAction, headerActions, mainNavItems } from "../data/navigation";

const iconMap = {
  location: MapPin,
  phone: Phone,
  mail: Mail,
};

const submenuItemWidth = {
  1: "w-full",
  2: "w-1/2",
  3: "w-1/3",
};

export default function MainHeader() {
  const [isCompact, setIsCompact] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const threshold = 80;
    const handleScroll = () => {
      setIsCompact(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (!navRef.current) return;
      if (!navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpenDropdown(null);
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
    <header
      className={`sticky top-0 z-[50] border-b border-black/5 bg-white transition-[height,box-shadow] duration-300 ease-out ${
        isCompact ? "h-[65px] shadow-sm" : "h-20"
      }`}
    >
      <Container className="flex h-full items-center gap-6 font-['The Sans',sans-serif]">
        <div className="flex items-center gap-4">
          <a href="#beyond" className="flex items-center">
            <img
              src="https://www.geisel-privathotels.de/build/assets/logo-footer-dJvIyg4_.svg"
              alt="Beyond by Geisel"
              className={`w-auto transition-all duration-300 ${
                isCompact ? "h-7" : "h-9"
              }`}
            />
          </a>
          <button
            type="button"
            className="flex items-center gap-2 text-[12px] uppercase tracking-[0.24em] text-brand-charcoal/70 transition hover:text-brand-charcoal lg:hidden"
          >
            <Menu className="h-4 w-4" />
            <span>Menu</span>
          </button>
        </div>

        <nav
          ref={navRef}
          className="hidden flex-1 items-center justify-center gap-6 text-[13px] uppercase tracking-[0.24em] text-brand-charcoal/70 lg:flex"
        >
          {mainNavItems.map((item) => (
            <div key={item.id} className="relative">
              {item.hasDropdown ? (
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown((prev) => (prev === item.id ? null : item.id))
                  }
                  aria-expanded={openDropdown === item.id}
                  aria-controls={`${item.id}-submenu`}
                  className="inline-flex items-center gap-2 transition hover:text-brand-charcoal"
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 text-brand-stone transition ${
                      openDropdown === item.id
                        ? "rotate-180 text-brand-charcoal"
                        : ""
                    }`}
                  />
                </button>
              ) : (
                <a
                  href={item.href}
                  onClick={() => setOpenDropdown(null)}
                  className="inline-flex items-center gap-2 transition hover:text-brand-charcoal"
                >
                  <span>{item.label}</span>
                </a>
              )}
              {item.hasDropdown && item.submenu ? (
                <div
                  id={`${item.id}-submenu`}
                  className={`absolute left-1/2 top-full z-[70] -translate-x-1/2 translate-y-[7px] pt-6 transition-all duration-200 ${
                    openDropdown === item.id
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  }`}
                >
                  <div
                    className={`bg-[#fff] px-10 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.12)] ${
                      item.submenu.width
                    }`}
                  >
                    <div className="flex flex-wrap gap-x-12 gap-y-3 text-[13px] uppercase tracking-[0.18em] text-brand-charcoal/70">
                      {item.submenu.items.map((subItem) => (
                        <a
                          key={subItem.id}
                          href={subItem.href}
                          onClick={() => setOpenDropdown(null)}
                          className={`block ${
                            submenuItemWidth[item.submenu.columns] || "w-full"
                          } transition hover:text-brand-charcoal`}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-4 lg:flex">
            {headerActions.map((action) => {
              const Icon = iconMap[action.icon];
              return (
                <a
                  key={action.id}
                  href={action.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-brand-charcoal/70 transition hover:border-brand-stone/40 hover:text-brand-charcoal"
                  aria-label={action.label}
                >
                  <Icon className="h-7 w-7" />
                </a>
              );
            })}
          </div>

          <a
            href={bookingAction.href}
            className="hidden h-10 items-center justify-center border border-brand-gold px-3 text-[12px] uppercase tracking-[0.24em] text-brand-charcoal transition hover:bg-brand-gold/10 lg:inline-flex"
          >
            {bookingAction.label}
          </a>
          <a
            href={bookingAction.href}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/40 text-brand-charcoal/70 transition hover:border-brand-gold hover:text-brand-charcoal lg:hidden"
            aria-label={bookingAction.label}
          >
            <Calendar className="h-5 w-5" />
          </a>
        </div>
      </Container>
    </header>
  );
}