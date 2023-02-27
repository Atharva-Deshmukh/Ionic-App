import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // storing user inputs in an array
  public todos:any = [];

  constructor(private alertcontroller:AlertController, navCtrl: NavController) {}

  // creating an alert to add a todo using AlertController
  openTodoAlert(){
    let addTodoAlert = this.alertcontroller.create({
      header: "Add a ToDo",
      message: "Enter your ToDo here below",
      // for user inputs. Kis type ka input chaiye vo btao
      inputs:[
        {
          type: "text",

          // name diya so that siko target karke call kar paaye baadme in order to save data
          name:"addToDoInput"
        }
      ],
      buttons:[
        {
          text:"Cancel"
        },
        {
          text:"Add ToDo",

          //ab isme handler ki help se function daalo
          handler:(inputData)=>{
            let todoText:any = inputData.addToDoInput;

            // push this data in the array created above
            this.todos.push(todoText);
          }
        }
      ]

    }).then(res => {
      res.present();
    });

  }

}
