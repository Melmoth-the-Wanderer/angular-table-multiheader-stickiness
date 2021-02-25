import { Component } from "@angular/core";

/**
 * @title Table with a sticky columns
 */
@Component({
  selector: "table-sticky-columns-example",
  styleUrls: ["table-sticky-columns-example.css"],
  templateUrl: "table-sticky-columns-example.html"
})
export class TableStickyColumnsExample {
  displayedColumns = ["name", "position", "weight", "symbol", "star"];
  dataSource = ELEMENT_DATA;
}

const ELEMENT_DATA: any[] = [
  { numberPre: 1, numberSuf: 1, item: "Hydrogen", id: 10079, color: "H" , size: 20},
  { numberPre: 2, numberSuf: 2, item: "Helium", id: 40026, color: "He", size: 20 },
  { numberPre: 3, numberSuf: 3, item: "Lithium", id: 6941, color: "Li", size: 20 },
  { numberPre: 4, numberSuf: 4, item: "Beryllium", id: 90122, color: "Be", size: 20 },
  { numberPre: 5, numberSuf: 5, item: "Boron", id: 10811, color: "B" , size: 20},
  { numberPre: 6, numberSuf: 6, item: "Carbon", id: 120107, color: "C" , size: 20},
  { numberPre: 7, numberSuf: 7, item: "Nitrogen", id: 140067, color: "N" , size: 20},
  { numberPre: 8, numberSuf: 8, item: "Oxygen", id: 159994, color: "O" , size: 20},
  { numberPre: 9, numberSuf: 9, item: "Fluorine", id: 189984, color: "F" , size: 20},
  { numberPre: 10, numberSuf: 10, item: "Neon", id: 201797, color: "Ne", size: 20 }
];

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
