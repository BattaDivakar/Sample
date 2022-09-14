import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grid-ui',
  templateUrl: './grid-ui.component.html',
})
export class GridUiComponent implements OnInit {

  constructor() { }

  gridcolumns : Array<any> = new Array<any>();

  gridData: Array<any> = new Array<any>();
   
@Input("grid-columns")
set SetGridColumns(_gridcolumn : Array<any>)
{
  this.gridcolumns = _gridcolumn;
}
@Input("grid-data")
set SetGridData(_griddata : Array<any>){
  this.gridData = _griddata;
}

@Output("grid-selected")
emitemitter: EventEmitter<any> = new EventEmitter<any>();

selectedGrid(_selected:any){
  this.emitemitter.emit(_selected);
}

@Output("grid-deleted")
deleteemitemitter: EventEmitter<any> = new EventEmitter<any>();

deletedGrid(_deleted:any){
  this.deleteemitemitter.emit(_deleted);
}



  
  ngOnInit(): void {
  }

}
