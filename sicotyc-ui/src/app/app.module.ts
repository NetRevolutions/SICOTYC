import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '@/app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';

import {registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import {defineCustomElements} from '@profabric/web-components/loader';

// Modules
import { MainLayoutModule } from './layouts/main/main.module';
import { ExternalLayoutModule } from './layouts/external/external.module';
import { EmptyLayoutModule } from './layouts/empty/empty.module';
import { SharedModule } from './shared/shared.module';

// Components
import {AppComponent} from './app.component';
import {LoginComponent} from '@modules/login/login.component';
import {BlankComponent} from '@pages/blank/blank.component';
import {ProfileComponent} from '@pages/profile/profile.component';
import {RegisterComponent} from '@modules/register/register.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {MainMenuComponent} from './pages/main-menu/main-menu.component';
import {SubMenuComponent} from './pages/main-menu/sub-menu/sub-menu.component';

// Operations
import {LimaCallaoComponent} from './pages/operations/rate-calculation/lima-callao/lima-callao.component';
import {ProvinceComponent} from '@pages/operations/rate-calculation/province/province.component';
import {RequestServiceEvaluationComponent} from './pages/operations/request-service-evaluation/request-service-evaluation.component';
import {WorkOrderCreationComponent} from './pages/work-order/work-order-creation/work-order-creation.component';
import {ControlDocumentsComponent} from './pages/work-order/control-documents/control-documents.component';
import {WorkOrderStateComponent} from './pages/work-order/work-order-state/work-order-state.component';

// Maintenances
import {UsersComponent} from './pages/maintenances/users/users.component';
import {CompaniesComponent} from './pages/maintenances/companies/companies.component';
import {DriversComponent} from './pages/maintenances/drivers/drivers.component';
import {LookupCodeGroupComponent} from './pages/maintenances/lookup/lookup-code-group/lookup-code-group.component';
import {LookupCodeComponent} from './pages/maintenances/lookup/lookup-code/lookup-code.component';
import {RolesComponent} from './pages/maintenances/roles/roles.component';
import {VehicleComponent} from './pages/maintenances/vehicle/vehicle.component';
import {ComplementComponent} from './pages/maintenances/complement/complement.component';
import {PointComponent} from './pages/maintenances/point/point.component';
import {MenusComponent} from './pages/maintenances/menus/menus.component';
import {TransportPartnersComponent} from './pages/maintenances/transport-partners/transport-partners.component';
import {WarehousesComponent} from './pages/maintenances/warehouses/warehouses.component';
import {ZonesComponent} from './pages/maintenances/zones/zones.component';
import {PlacesComponent} from './pages/maintenances/places/places.component';
import {FeesComponent} from './pages/maintenances/fees/fees.component';
import {FeesCompanyComponent} from './pages/maintenances/fees-company/fees-company.component';
import {TollsComponent} from './pages/maintenances/tolls/tolls.component';


defineCustomElements();
registerLocaleData(localeEn, 'en-EN');

@NgModule({
    declarations: [
        AppComponent,        
        LoginComponent,        
        BlankComponent,
        ProfileComponent,
        RegisterComponent,
        DashboardComponent,        
        ForgotPasswordComponent,
        RecoverPasswordComponent,        
        MainMenuComponent,
        SubMenuComponent,        
        LimaCallaoComponent,
        ProvinceComponent,
        RequestServiceEvaluationComponent,        
        WorkOrderCreationComponent,
        ControlDocumentsComponent,
        WorkOrderStateComponent,
        UsersComponent,
        CompaniesComponent,
        DriversComponent,
        LookupCodeGroupComponent,
        LookupCodeComponent,
        RolesComponent,
        VehicleComponent,
        ComplementComponent,
        PointComponent,
        MenusComponent,
        TransportPartnersComponent,
        WarehousesComponent,
        ZonesComponent,
        PlacesComponent,
        FeesComponent,
        FeesCompanyComponent,
        TollsComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,        
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AngularMultiSelectModule,
        FormsModule,        
        MainLayoutModule,
        ExternalLayoutModule,
        EmptyLayoutModule                
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
