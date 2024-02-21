import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage'


@Component({
  selector: 'app-instalaciones-pages',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './instalaciones-pages.component.html',
  styleUrl: './instalaciones-pages.component.css'
})
export class InstalacionesPagesComponent {
  
  images:string[] ;
  constructor(private storage: Storage) {
   this.images = []

  }


  ngOnInit() {
    this.getImages()
  }

  uploadImage($event: any) {
    const file = $event.target.files[0]
    console.log(file)
    const imgRef = ref(this.storage, `images/${file.name}`)
    uploadBytes(imgRef, file)

      .then(response => console.log(response))
      .catch(err => console.log(err))

  }

  getImages() {
    const imagesRef = ref(this.storage, 'images')
    listAll(imagesRef)
      .then(async response => {
        console.log(response)
        this.images = [];
        for (let item of response.items) {
        const url = await getDownloadURL(item);
        console.log(url);
        this.images.push(url);
        }


      })
      .catch(err => console.log(err))

  }
}
