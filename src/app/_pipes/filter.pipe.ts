import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return [];
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}