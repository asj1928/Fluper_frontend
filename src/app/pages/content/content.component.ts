import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/http/http.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(
    private toast: ToastrService,
    private spinner: NgxSpinnerService,
    private http: HttpService,



  ) {
    // this.newTag = "sasa"
  }
  tags = [];
  newTag = ""

  ngOnInit() {
  }

  selectedFile
  fileupload(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
    // this.upload()
  }
  animal
  animalsArr
  getImage() {
    if (this.animal.length > 0) {
      this.http.getImages(this.animal).subscribe(data => {
        console.log(data);
        this.animalsArr = data.images

      })
    } else {
      this.toast.warning("please enter the tag you want to search")
    }
  }

  add() {
    console.log(this.newTag);

    if (this.newTag.length > 0) {
      this.tags.push({ tag: this.newTag })
      this.newTag = ''
    } else {
      this.toast.error("please provide the value for the tag")
    }
  }

  async upload() {
    // await loader.present()
    this.spinner.show()


    if (this.selectedFile != null) {
      const fd = new FormData();
      try {
        let str = JSON.stringify(this.tags)
        if (this.tags.length > 0) {
          fd.append("image", this.selectedFile, this.selectedFile.name);
          fd.append("tags", str)
          this.http.uploadResource(fd).subscribe((res: any) => {

            this.toast.success("File Uploaded!");
            this.newTag = ''
            this.tags = []

            console.log(res);
            // this.toast.success("Resource Added", res.message);

            this.spinner.hide()
          }, err => {
            // this.toast.warning("api error");
            console.log(err);

            this.toast.error("Error in file upload");

            this.spinner.hide()
          });

        } else {
          this.toast.warning("please add some tag");

        }
      } catch (error) {
        console.log(error);
      }



    } else {
      this.toast.warning("Please Select A File to Upload");
      this.spinner.hide()
    }



  }

}
