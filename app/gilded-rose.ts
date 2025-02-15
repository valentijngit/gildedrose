import { Item } from './item';
import { ItemUpdaterFactory } from './item-updater-factory';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      const updater = ItemUpdaterFactory.create(item.name);
      updater.updateQuality(item);
    }
    return this.items;
  }
}
