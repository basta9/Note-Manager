import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {
  
  CLOUD_NAME = "dbjzb1fts"

  // on submit call to this function
  uploadImg(elForm, ev) {
    ev.preventDefault();

    return this.doUploadImg(elForm);
  }

  doUploadImg(elForm) {
    var UPLOAD_URL = `https://api.cloudinary.com/v1_1/${this.CLOUD_NAME}/image/upload`
    var formData = new FormData();
    formData.append('file', elForm[0].files[0])
    formData.append('upload_preset', 'ocdd5tzq');

    return fetch(UPLOAD_URL, {
      method: 'POST',
      body: formData
    })
      .then(function (response) {
        return response.json()
      })
      .catch(err => err)
  }

  constructor() { }
}
