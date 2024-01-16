import { Component, OnInit } from '@angular/core';
import { TreeService } from '../../service/tree.service';

@Component({
  selector: 'app-input-components',
  templateUrl: './input-components.component.html',
  styleUrl: './input-components.component.css'
})
export class InputComponentsComponent implements OnInit{
    trees : any[] = []; //arreglo de arboles consumidos. 
    treeImage : any[] = []; // arreglo para las imagenes.
    treeComments : any[] = []; // arreglo para los comentarios. 
    treeLocation : any[] = []; // arreglo para la locacion.
    selected : any; // variable para guardar la id del arbol seleccionado.

    constructor(private treeService : TreeService){

    }

    //hook para el inicio del DOM
    ngOnInit(): void {
        this.treeService.getAllTrees().subscribe(
          (data) => {
            this.trees = data;
          })
    }

    // funcion para extraer los datos y detalles del arbol selecionado 
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
