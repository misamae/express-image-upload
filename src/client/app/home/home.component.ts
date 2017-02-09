import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:9002/api/';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  public uploader: FileUploader = new FileUploader( {url: URL} );
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
  public processedImagePath:string = "";

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  constructor() {}

  ngOnInit() {
    this.uploader.onCompleteItem = (item: any, response: any, headers: any) => {
      console.log(item);
      console.dir(JSON.parse(response).processedFile);
      console.log(headers);
      this.processedImagePath = `${URL}${JSON.parse(response).processedFile}`;
    };
  }

}
