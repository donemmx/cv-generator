import { atom } from "recoil";

export const personalState = atom({
  key: "personal",
  default: {},
});
export const educationState = atom({
  key: "education",
  default: [],
});
export const employmentState = atom({
  key: "employment",
  default: [],
});
export const languageState = atom({
  key: "language",
  default: [],
});
export const referenceState = atom({
  key: "refence",
  default: [],
});
export const websiteState = atom({
  key: "website",
  default: [],
});
export const professionalState = atom({
  key: "professional",
  default: "",
});

export const hobbyState = atom({
  key: "hobby",
  default: "",
});
export const skllState = atom({
  key: "skill",
  default: [],
});
