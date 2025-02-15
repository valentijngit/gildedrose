import { Item } from './item';
import { ItemUpdaterFactory } from './item-updater-factory';

//note to self: business expects this to be a daily but this code does depwned on jobs so shoukd chech diff in days last run at least
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
