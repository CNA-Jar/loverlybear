import * as _ from "lodash";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "dataFilter"
})
export class DataFilterPipe implements PipeTransform {
  transform(array: any[], query: string): any {
    if (query) {
    	let result:any = [];
    	_.filter(array, row => {
      	if (row.role_name.indexOf(query) > -1) result.push(row);
      });
      return result;
    }
    return array;
  }
}