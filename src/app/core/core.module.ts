import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../share/share.module';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  imports: [
    /* 3rd party libraries */
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
  ],
  declarations: [
      NavbarComponent,
      LoginComponent,
    //   PageNotFoundComponent,
  ],
  exports: [

  ],
  providers: [
    DatePipe,
  ]
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor (
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
