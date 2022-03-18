//IMPORTS

import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TODO App';
  secondTitle = 'Tareas:';

  constructor() { }

  nombre:string = "";
  nameToUpdate: string = "";

  myValue:number =0;



  //CREAR UN ARREGLO DE TAREAS

  tareas:string[] = [];



  addTasks(){

    console.log(this.nombre);

    this.tareas.push( this.nombre )
    this.nombre = "";


  }


  getTasks( idx:number ){


    this.nameToUpdate = this.tareas[idx];
    this.myValue = idx;
  }


  //EDITAR TAREAS DEL ARREGLO
  editTasks() {

    for(let j = 0; j < this.tareas.length; j++){
      if(this.myValue == j){
        this.tareas[this.myValue] = this.nameToUpdate
      }
    }

    this.nameToUpdate = "";

    console.log('Editando tarea');

  }

  //ELIMINAR TAREAS DEL ARREGLO
  deleteTasks(idx: number) {
    console.log('Eliminando tarea');

    //PRIMERO SE LE PREGUNTA AL USUARIO SI ESTA SEGURO QUE DESEA ELIMINAR
    const confirmation = confirm("¿Está seguro que desea eliminar esta tarea?");

    if (confirmation) {
      this.tareas.splice(idx, 1);

    }
  }


  ngOnInit() {

  }



}
