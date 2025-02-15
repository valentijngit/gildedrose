import { ItemUpdater } from "./item-updater";
import { NormalItemUpdater } from "./normal-item-updater";
import { AgedBrieUpdater } from "./aged-brie-updater";
import { SulfurasUpdater } from "./sulfuras-updater";
import { BackstagePassesUpdater } from "./backstage-passes-updater";
import { ConjuredItemUpdater } from "./conjured-item-updater";

export class ItemUpdaterFactory {
  private static readonly itemMap: Record<string, new () => ItemUpdater> = {
    "Aged Brie": AgedBrieUpdater,
    "Sulfuras": SulfurasUpdater,
    "Backstage passes": BackstagePassesUpdater,
    "Conjured": ConjuredItemUpdater
  };

  static create(itemName: string): ItemUpdater {
    for(const key in this.itemMap) {
      if(itemName.includes(key)) {
        return new this.itemMap[key]();
      }
    }
    return new NormalItemUpdater();
  }
}