import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"gestor-imagenes-39afe","appId":"1:32648599990:web:e395fe8560c3327d09c917","storageBucket":"gestor-imagenes-39afe.appspot.com","apiKey":"AIzaSyB2eAGJxMPypBP1ME2nFBnC7YGsJ_AYxj0","authDomain":"gestor-imagenes-39afe.firebaseapp.com","messagingSenderId":"32648599990","measurementId":"G-TMD8S6EQH5"}))), importProvidersFrom(provideStorage(() => getStorage()))]
};
