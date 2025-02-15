import { Item } from './item';
import { ItemUpdater } from './item-updater';

export class SulfurasUpdater implements ItemUpdater {
  updateQuality(item: Item): void {
    // does not need to be sold and does not change in quality
  }
}