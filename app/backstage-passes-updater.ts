import { Item } from './item';
import { ItemUpdater } from './item-updater';

export class BackstagePassesUpdater implements ItemUpdater {
  updateQuality(item: Item): void {
    item.sellIn --;
    if(item.sellIn < 0) {
      item.quality = 0;
      return;
    }
    if(item.sellIn < 5) {
      item.quality += 2;
    }
    else if(item.sellIn < 10) {
      item.quality += 1;
    }
    item.quality = (item.quality > 50) ? 50 : item.quality;
  }
}