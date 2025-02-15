import { GildedRose } from '@/gilded-rose';
import { Item } from '@/item';

describe('Gilded Rose', () => {
  it('should decrease quality of normal item by 1', () => {
    const gildedRose = new GildedRose([new Item('Normal item', 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(29);
  });
  it('should decrease quality of normal item by 2 after sell', () => {
    const gildedRose = new GildedRose([new Item('Normal item', 0, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(28);
  });
  it('should not make quality negative', () => {
    const gildedRose = new GildedRose([new Item('Normal item', 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  it('should increase quality of Aged brie', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(31);
  });
  it('should not increase quality higher than 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
  it('should not change quality of sulfuras', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(30);
  });
  it('should increase quality of Backstage passes', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(31);
  });
  it('should increase quality by 2 within 10 days of sell for Backstage passes', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(32);
  });
  it('should increase quality by 3 within 5 days of sell for Backstage passes', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(33);
  });
  it('should set quality to 0 after sell for Backstage passes', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});
