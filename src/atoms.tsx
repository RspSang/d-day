import { atom } from "recoil";
import { localStorageEffect } from "./utilities/localStorage";

export interface IDo {
  text: string;
  when: Date;
  id: number;
}

export const doState = atom<IDo[]>({
  key: "Do",
  default: [],
  effects: [localStorageEffect("Do")],
});
