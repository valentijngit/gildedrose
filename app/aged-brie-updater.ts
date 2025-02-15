import { Item } from './item';
import { ItemUpdater } from './item-updater';

export class AgedBrieUpdater implements ItemUpdater {
  updateQuality(item: Item): void {
    item.sellIn --;
    item.quality += item.sellIn < 0 ? 2 : 1;
    item.quality = (item.quality > 50) ? 50 : item.quality;
  }
}