import { Item } from './item';
import { ItemUpdater } from './item-updater';

export class ConjuredItemUpdater implements ItemUpdater {
  updateQuality(item: Item): void {
    item.sellIn --;
    item.quality -= item.sellIn < 0 ? 4 : 2;
    item.quality = (item.quality < 0) ? 0 : item.quality;
  }
}