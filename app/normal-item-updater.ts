import { Item } from './item';
import { ItemUpdater } from './item-updater';

export class NormalItemUpdater implements ItemUpdater {
  updateQuality(item: Item): void {
    item.sellIn --;
    item.quality -= item.sellIn < 0 ? 2 : 1;
    item.quality = (item.quality < 0) ? 0 : item.quality;
  }
}