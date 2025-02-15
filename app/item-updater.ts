import { Item } from "./item";

export interface ItemUpdater {
  updateQuality(item: Item): void;
}