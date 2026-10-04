import { company } from "@/data/company";

export const whatsappLink = (message: string) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;

export const mailLink = (subject: string, body = "") =>
  `mailto:${company.email}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;

export const productEnquiry = (name: string, model?: string) => {
  const label = model ? `${name} (${model})` : name;
  return {
    whatsapp: whatsappLink(`Hello, I would like to enquire about ${label}.`),
    email: mailLink(
      `Enquiry: ${label}`,
      `Hello,\n\nI would like to enquire about ${label}.\n\nProject / location:\nQuantity:\n\nThank you.`,
    ),
  };
};

export const projectEnquiry = (title: string) => ({
  whatsapp: whatsappLink(`Hello, I saw the ${title} project on your website and would like to discuss a similar one.`),
  email: mailLink(`Project enquiry: similar to ${title}`),
});

export const generalEnquiry = (topic?: string) => ({
  whatsapp: whatsappLink(
    topic ? `Hello, I would like to discuss ${topic}.` : "Hello, I would like to discuss a project.",
  ),
  email: mailLink(topic ? `Enquiry: ${topic}` : "Project enquiry"),
});
