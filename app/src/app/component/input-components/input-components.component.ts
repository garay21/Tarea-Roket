import { Component, OnInit } from '@angular/core';
import { TreeService } from '../../service/tree.service';

@Component({
  selector: 'app-input-components',
  templateUrl: './input-components.component.html',
  styleUrl: './input-components.component.css'
})
export class InputComponentsComponent implements OnInit{
    trees : any[] = [];
    treeImage : any[] = [];
    treeComments : any[] = [];
    treeLocation : any[] = [];
    selected : any;

    constructor(private treeService : TreeService){

    }

    ngOnInit(): void {
        this.treeService.getAllTrees().subscribe(
          (data) => {
            this.trees = data;
          })
    }

    getTreeDetails(){
        console.log(this.selected);
        this.treeImage = []
        this.treeService.getTree(this.selected).subscribe(
            data => {
              this.treeImage = data.map(item => item.url_foto)
              this.treeLocation = data.map(item => [{lon : item.longitud,lat : item.latitud}])
            }
        )
    }
    
}
