import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-image-components',
  templateUrl: './image-components.component.html',
  styleUrl: './image-components.component.css'
})
export class ImageComponentsComponent {
  @Input() dataIMG: any; // arreglo de datos con las url de las imagenes
}
