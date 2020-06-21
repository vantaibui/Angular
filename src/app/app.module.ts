import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AdminModule } from './admin/admin.module';
import { StructureDirectiveModule } from './structure-directive/structure-directive.module';
import { AttributeDirectiveModule } from './attribute-directive/attribute-directive.module';
import { PropsModule } from './props/props.module';
import { DemoInputComponent } from './props/demo-input/demo-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';


// Nơi định nghĩa cacs route của ứng dụng
const appRoutes: Routes = [
  { path: '', component: AdminComponent },
  // Nếu url/admin thì trang admin load lên
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    StructureDirectiveModule,
    AttributeDirectiveModule,
    PropsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
