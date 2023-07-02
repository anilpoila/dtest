import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
@NgModule({
  declarations: [],
  imports: [InputTextModule],
  exports: [CommonModule, FormsModule,InputTextModule,AvatarModule],
})
export class SharedModule {}
