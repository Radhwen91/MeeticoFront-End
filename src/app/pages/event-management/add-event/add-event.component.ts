import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Eventt } from 'src/app/models/Eventt';
import { EventServiceService } from 'src/app/services/event-service.service';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  evente : Eventt ;
  
  constructor(private serv:EventServiceService,
     private router:Router,
     private sb : MatSnackBar,
     private thisDialog : MatDialogRef<AddEventComponent>
     ) { }
     form : FormGroup;
     selectedFile! : File ;
     imagePreview : any;
     
  ngOnInit(): void {
    this.evente = new Eventt
    this.form = new FormGroup({
      titre : new FormControl('',[Validators.required]),
      location : new FormControl('',[Validators.required]),

      capacity : new FormControl('',[Validators.required]),
      description : new FormControl('',[Validators.required]),
      image : new FormControl('',[Validators.required]),
      dateevent : new FormControl('',[Validators.required])

    })
  }


 

  onFileUpload(event) {
    console.log(event.target.files)
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
    console.log("upload done")
  }
  
  addEventC(){
    this.serv.addEvent(this.evente).subscribe({
      next:(res)=>{
        console.log(res);
        this.router.navigate(['event-management'])
      },
      error:(err)=>{console.log(err);
      }
    }); 
  }

submit(){
    let fd = new FormData();
    if(this.form.valid){
      fd.append('titre',this.form.value.titre);
      fd.append('description',this.form.value.description)
      fd.append('capacity',this.form.value.capacity)
      //fd.append('eventKind',"this.form.value.eventKind")
      fd.append('location',this.form.value.location) 
      fd.append('file', this.selectedFile)
      fd.append('date',new Date(this.form.value.dateevent).toDateString())


      console.log(fd.getAll);
      this.serv.addEventWithImage(fd).subscribe({
        next:()=>{  
        console.log(fd.getAll.toString)
        this.thisDialog.close();
        this.sb.open("Evenement Ajouté","Ok",{
          duration : 3000
        })
     }}) } else{
      console.log("NO")
      this.sb.open("Vous devez Remplir tous les Champs","Compirs",{
        duration : 3000
      })
       
     }
    
  }




}
