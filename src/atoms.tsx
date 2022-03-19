import { atom } from "recoil";

export interface IDo {
  text: string;
  when: string;
  id: number;
}

export const doState = atom<IDo[]>({
  key: "Do",
  default: [],
});