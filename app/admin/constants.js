export const PASSWORD = "Admin@123";

export const ENQUIRY_TABS = [
  { id: "group", label: "Megica Group", collection: "enquiries" },
  { id: "sanitaryware", label: "Megica Sanitaryware", collection: "sanitaryware" },
  { id: "bathroom", label: "Megica Bathroom Fittings", collection: "bathroom-fittings" },
  { id: "dealership", label: "Dealership", collection: "dealershipEnquiries" },
];

export const SUB_TABS = [
  { id: "all", label: "All" },
  { id: "checked", label: "Checked" },
  { id: "unchecked", label: "Unchecked" },
];

/** Website slugs for gallery assignment (multi-select in admin) */
export const GALLERY_WEBSITES = [
  { id: "main", label: "Megica Group (Main)" },
  { id: "sanitaryware", label: "Megica Sanitaryware" },
  { id: "bathroom-fittings", label: "Megica Bathroom Fittings" },
];

export const SIDEBAR_LINKS = [
  ...ENQUIRY_TABS.map((t) => ({ ...t, href: `/admin/enquiries/${t.id}` })),
  { id: "blogs", label: "Blogs", href: "/admin/blogs" },
  { id: "galleries", label: "Galleries", href: "/admin/galleries" },
];
