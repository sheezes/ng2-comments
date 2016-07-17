import { Pipe, PipeTransform } from '@angular/core';

// Sort array by given field (values are objects)

@Pipe({
    name: 'SortByField',
    pure: false
})
export class SortByField implements PipeTransform {

    constructor() {}

    transform(array: Array<any>, property:string, reverse:boolean = false):any {

        let returnedArray:any = array.sort( (a:any, b:any) => {

            if (a[property] > b[property]) {
                return 1;
            }

            if (a[property] < b[property]) {
                return -1;
            }

            return 0;
        });

        if (reverse) {
            returnedArray.reverse();
        }

        return returnedArray;
    }
}