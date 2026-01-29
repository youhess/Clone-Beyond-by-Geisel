export const topBarBrand = {
  id: "geisel",
  label: "Geisel Privathotels",
  href: "#",
};

export const topBarCurrentBrand = {
  id: "beyond",
  label: "Beyond",
};

export const topBarBrandMenu = [
  { id: "geisel", label: "Geisel Privathotels", href: "#" },
  { id: "beyond", label: "Beyond", href: "#beyond" },
  { id: "excelsior", label: "Excelsior", href: "#excelsior" },
  { id: "wahrheit", label: "Schwabinger Wahrheit", href: "#wahrheit" },
  { id: "vinothek", label: "Vinothek", href: "#vinothek" },
  { id: "weingalerie", label: "Geisels Weingalerie", href: "#weingalerie" },
];

export const topBarLanguageMenu = [
  { id: "de", label: "Deutsch", href: "#de" },
  { id: "en", label: "English", href: "#en" },
];

const offersSubItems = [
  { id: "offers-overview", label: "Angebote Uebersicht", href: "#angebote" },
  {
    id: "offers-theater",
    label: "Deutsches Theater",
    href: "#deutsches-theater",
  },
  { id: "offers-midweek", label: "Midweek Special", href: "#midweek" },
  { id: "offers-oktoberfest", label: "Oktoberfest", href: "#oktoberfest" },
  { id: "offers-suites", label: "Suiten Special", href: "#suiten-special" },
  {
    id: "offers-sightseeing",
    label: "Sightseeing & Dinner",
    href: "#sightseeing",
  },
  {
    id: "offers-shopping",
    label: "Personal Shopping",
    href: "#personal-shopping",
  },
  { id: "offers-wine", label: "Weinliebhaber", href: "#weinliebhaber" },
];

const eventsSubItems = [
  { id: "events-overview", label: "Feiern Uebersicht", href: "#feiern" },
  { id: "events-private", label: "Private Feiern", href: "#private" },
  { id: "events-business", label: "Business Events", href: "#business" },
  { id: "events-weddings", label: "Hochzeiten", href: "#hochzeiten" },
  { id: "events-catering", label: "Catering", href: "#catering" },
  { id: "events-request", label: "Anfrage senden", href: "#anfrage" },
];

const servicesSubItems = [
  { id: "services-concierge", label: "Concierge", href: "#concierge" },
  { id: "services-breakfast", label: "Fruehstueck", href: "#fruehstueck" },
  { id: "services-housekeeping", label: "Housekeeping", href: "#housekeeping" },
  { id: "services-transfer", label: "Transfer", href: "#transfer" },
  { id: "services-shopping", label: "Personal Shopping", href: "#shopping" },
  { id: "services-fitness", label: "Fitness Partner", href: "#fitness" },
];

const discoverSubItems = [
  { id: "discover-square", label: "Marienplatz", href: "#marienplatz" },
  { id: "discover-oldtown", label: "Altstadt", href: "#altstadt" },
  { id: "discover-museums", label: "Museen", href: "#museen" },
  { id: "discover-shopping", label: "Shopping", href: "#shopping" },
  { id: "discover-opera", label: "Oper", href: "#oper" },
  { id: "discover-trips", label: "Tagesausfluege", href: "#tagesausfluege" },
];

export const mainNavItems = [
  { id: "about", label: "Ueber uns", href: "#ueber-uns", hasDropdown: false },
  { id: "rooms", label: "Zimmer", href: "#zimmer", hasDropdown: false },
  {
    id: "offers",
    label: "Angebote",
    href: "#angebote",
    hasDropdown: true,
    submenu: {
      items: offersSubItems,
      columns: 3,
      width: "w-[760px]",
    },
  },
  {
    id: "events",
    label: "Feiern",
    href: "#feiern",
    hasDropdown: true,
    submenu: {
      items: eventsSubItems,
      columns: 2,
      width: "w-[560px]",
    },
  },
  { id: "gallery", label: "Galerie", href: "#galerie", hasDropdown: false },
  {
    id: "services",
    label: "Services",
    href: "#services",
    hasDropdown: true,
    submenu: {
      items: servicesSubItems,
      columns: 2,
      width: "w-[520px]",
    },
  },
  {
    id: "discover",
    label: "Entdecken",
    href: "#entdecken",
    hasDropdown: true,
    submenu: {
      items: discoverSubItems,
      columns: 2,
      width: "w-[520px]",
    },
  },
];

export const headerActions = [
  {
    id: "location",
    label: "Anfahrt",
    href: "#anfahrt",
    icon: "location",
  },
  {
    id: "phone",
    label: "Anrufen",
    href: "tel:+4989700746727",
    icon: "phone",
  },
  {
    id: "mail",
    label: "Anfragen",
    href: "mailto:contact@beyond-muc.de",
    icon: "mail",
  },
];

export const bookingAction = {
  id: "book",
  label: "Buchen",
  href: "#buchen",
};