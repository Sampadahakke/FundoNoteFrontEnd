import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  item: any

  transform(items: any, titleSearch: string) {

    if (items && items.length) {
      return items.filter((item: { title: string; }) => {
        if (titleSearch && item.title.toLowerCase().indexOf(titleSearch.toLowerCase()) === -1) {
          return false;
        }
        return true;
      })
    }
    else {
      return items;
    }
  }

}
