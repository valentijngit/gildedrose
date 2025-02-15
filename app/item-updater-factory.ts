import { ItemUpdater } from "./item-updater";
import { NormalItemUpdater } from "./normal-item-updater";
import { AgedBrieUpdater } from "./aged-brie-updater";
import { SulfurasUpdater } from "./sulfuras-updater";

export class ItemUpdaterFactory {
  static create(itemName: string): ItemUpdater {
    switch(itemName) {
      case 'Aged Brie':
        return new AgedBrieUpdater();
      case 'Sulfuras, Hand of Ragnaros':
        return new SulfurasUpdater();
      default:
        return new NormalItemUpdater();
    }
  }
}