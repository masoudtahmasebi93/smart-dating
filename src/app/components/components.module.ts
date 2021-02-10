import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


const PAGES_COMPONENTS = [
  ProfilePictureComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    PAGES_COMPONENTS
  ],
  exports: [
    PAGES_COMPONENTS
  ],
  entryComponents: [ProfilePictureComponent],
})
export class ComponentsModule {}
