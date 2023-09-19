import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule} from '@ngrx/store';

// Modules
import { SharedModule } from '@/shared/shared.module';

// Other Classes
import { authReducer } from '@/store/auth/reducer';
import { uiReducer } from '@/store/ui/reducer';

// Components
import { MainLayoutComponent } from './main.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { LanguageComponent } from './header/language/language.component';
import { MessagesComponent } from './header/messages/messages.component';
import { NotificationsComponent } from './header/notifications/notifications.component';
import { UserComponent } from './header/user/user.component';
import { MenuItemComponent } from '@components/menu-item/menu-item.component';
import { ModalImagenComponent } from '@components/modal-imagen/modal-imagen.component';
import { SidebarSearchComponent } from '@components/sidebar-search/sidebar-search.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    BreadcrumbsComponent,
    ControlSidebarComponent,
    FooterComponent,
    HeaderComponent,
    MenuSidebarComponent,
    LanguageComponent,
    MessagesComponent,
    NotificationsComponent,
    UserComponent,
    MenuItemComponent,
    ModalImagenComponent,
    SidebarSearchComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    StoreModule.forRoot({auth: authReducer, ui: uiReducer}),     
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class MainLayoutModule { }
