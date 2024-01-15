import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-comments-components',
  templateUrl: './comments-components.component.html',
  styleUrl: './comments-components.component.css'
})
export class CommentsComponentsComponent implements OnInit{

  constructor(private formBuilder: FormBuilder) { }

  comments = {
    text : ''
  }

  ngOnInit(): void {
    
  }

}
