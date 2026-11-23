// Single source for certifications, shared by the home page and About.
// url points at the public verification page, so visitors can check
// the credential themselves instead of taking the list at face value.
export type Cert = {
  short: string;
  name: string;
  issuer: string;
  year: string;
  url?: string;
};

export const CERTS: Cert[] = [
  {
    short: "CWEE",
    name: "Certified Web Exploitation Expert",
    issuer: "Hack The Box",
    year: "2026",
    url: "https://www.credly.com/badges/1714858b-555b-4618-8db8-1fc77213614f",
  },
  {
    short: "BSCP",
    name: "Burp Suite Certified Practitioner",
    issuer: "PortSwigger",
    year: "2024",
    url: "https://portswigger.net/web-security/e/c/1d697f4b2b20d36a",
  },
  {
    // HTB renamed CBBH to CWES; the Credly badge now carries the new name.
    short: "CWES",
    name: "Certified Web Exploitation Specialist (formerly CBBH)",
    issuer: "Hack The Box",
    year: "2024",
    url: "https://www.credly.com/badges/ffacddd4-527a-4694-8703-5f7e4dd14d4d",
  },
  {
    short: "CPAZ",
    name: "Certified Pentesting Against the Azure Cloud",
    issuer: "Spartan-Cybersecurity",
    year: "2024",
    url: "https://certifier-production-storage.s3.eu-west-1.amazonaws.com/18e57b14-e13f-4ac7-a48e-103847158371/pdf-files/a2aa8ff7-0a52-47e2-b05e-060b19b5079d.pdf",
  },
];
