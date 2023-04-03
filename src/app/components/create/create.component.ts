import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
  export class CreateComponent {
    faArrowLeft = faArrowLeft;
    imgSrc: string = "/assets/images/noimage.jpg";
    selectedImage: any = null;
    isSubmitted: boolean = false;

    formTemplate = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      details: new FormControl(''),
      location: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required)
    })

    showPreview(event: any) {
      if(event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e: any) => this.imgSrc = e.target.result;
        reader.readAsDataURL(event.target.files[0]);
        this.selectedImage = event.target.files[0];
      }
      else {
        this.imgSrc = "/assets/images/noimage.jpg";
        this.selectedImage = null;
      }
    }

    onSubmit(formValue: any) {
      this.isSubmitted = true;
    }

    get formControls() {
      return this.formTemplate['controls'];
    }
  }
