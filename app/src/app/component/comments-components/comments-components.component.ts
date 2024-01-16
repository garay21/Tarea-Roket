import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { TreeService } from '../../service/tree.service';

@Component({
  selector: 'app-comments-components',
  templateUrl: './comments-components.component.html',
  styleUrl: './comments-components.component.css'
})
export class CommentsComponentsComponent {
  @Input() arbolId: any;

  //modelo para agregar los datos del comentario segun postulante y arbol seleccionado
  data = {
    arbol_id: '',
    postulante_id: '19041505-8',
    comentario:''
  }

  constructor(private treeService: TreeService) { }

  //funcion para enviar el comentario
  submitForm(){
    this.data.arbol_id = this.arbolId;
    this.treeService.addComnent(this.data).subscribe(
      Response => {
        console.log(Response);
      }
    )
  }

}
