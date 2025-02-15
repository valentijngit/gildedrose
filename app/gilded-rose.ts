import { Item } from './item';
import { ItemUpdaterFactory } from './item-updater-factory';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      switch(item.name) { 
        case 'Aged brie': {
          
        }
      }
    }
    return this.items;
  }
}
