export const pageLinks = [
  { id: 1, label: "Products", dest: "products" },
  { id: 2, label: "Developers", dest: "developers" },
  { id: 3, label: "Company", dest: "company" },
];

export const pageSubLinks = [
  { id: 1, label: "Payment", dest: "payment", mainLinkLabel: "Products" },
  { id: 2, label: "Terminal", dest: "terminal", mainLinkLabel: "Products" },
  { id: 3, label: "Connect", dest: "connect", mainLinkLabel: "Products" },

  { id: 4, label: "Plugins", dest: "plugins", mainLinkLabel: "Developers" },
  { id: 5, label: "Libraries", dest: "libraries", mainLinkLabel: "Developers" },
  { id: 6, label: "Help", dest: "help", mainLinkLabel: "Developers" },
  { id: 7, label: "Billing", dest: "billing", mainLinkLabel: "Developers" },

  {
    id: 8,
    label: "About",
    dest: "about",
    mainLinkLabel: "Company",
  },
  { id: 9, label: "Customers", dest: "customers", mainLinkLabel: "Company" },
];

export const defaultModalCurrentPage = {
  content: "",
  pos: { x: 0, y: 0 },
};
