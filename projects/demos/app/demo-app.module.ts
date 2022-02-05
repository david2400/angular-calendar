import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgbNavModule,
  NgbCollapseModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { Angulartics2Module } from 'angulartics2';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { DemoAppComponent } from './demo-app.component';
import { DemoModule as DefaultDemoModule } from './demo-modules/agenda-cliente/module';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { CarbonAdComponent } from './carbon-ad/carbon-ad.component';
import {HttpClientModule} from "@angular/common/http";
/********************************************************************************************************/
import { DemoComponent as DefaultDemoComponent } from './demo-modules/agenda-cliente/component';
import { DashboardAdminComponent } from './demo-modules/modulo_admin/components/dashboard-admin/dashboard-admin.component';
import { MenuAdminComponent } from './demo-modules/modulo_admin/components/shared/menu-admin/menu-admin.component';
import { MenuTiendaComponent } from './demo-modules/modulo_tienda/components/shared/menu-tienda/menu-tienda.component';
import { DashboardTiendaComponent } from './demo-modules/modulo_tienda/components/dashboard-tienda/dashboard-tienda.component';
import { DashboardUsuarioComponent } from './demo-modules/modulo_usuario/components/dashboard-usuario/dashboard-usuario.component';
import { MenuUsuarioComponent } from './demo-modules/modulo_usuario/components/shared/menu-usuario/menu-usuario.component';
import { MenuHeaderComponent } from './demo-modules/modulo_admin/components/shared/menu-header/menu-header.component';
import { GeneralAdminComponent } from './demo-modules/modulo_admin/general-admin/general-admin.component';
import { GeneralTiendaComponent } from './demo-modules/modulo_tienda/general-tienda/general-tienda.component';
import { GeneralUsuarioComponent } from './demo-modules/modulo_usuario/general-usuario/general-usuario.component';
import { MenuHeaderTiendaComponent } from './demo-modules/modulo_tienda/components/shared/menu-header-tienda/menu-header-tienda.component';
import { MenuHeaderUsuarioComponent } from './demo-modules/modulo_usuario/components/shared/menu-header-usuario/menu-header-usuario.component';
import { UsuarioComponent } from './demo-modules/modulo_admin/components/usuario/usuario.component';
import { UsuariosComponent } from './demo-modules/modulo_admin/components/usuarios/usuarios.component';
import { GesPagoComponent } from './demo-modules/modulo_tienda/ges-pago/ges-pago.component';
import { LisPagoComponent } from './demo-modules/modulo_tienda/lis-pago/lis-pago.component';

@NgModule({
  declarations: [
    DemoAppComponent,
    CarbonAdComponent,
    DashboardAdminComponent,
    MenuAdminComponent,
    MenuTiendaComponent,
    DashboardTiendaComponent,
    DashboardUsuarioComponent,
    MenuUsuarioComponent,
    MenuHeaderComponent,
    GeneralAdminComponent,
    GeneralTiendaComponent,
    GeneralUsuarioComponent,
    MenuHeaderTiendaComponent,
    MenuHeaderUsuarioComponent,
    UsuarioComponent,
    UsuariosComponent,
    GesPagoComponent,
    LisPagoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbNavModule,
    NgbCollapseModule,
    NgbTooltipModule,
    DragAndDropModule,
    Angulartics2Module.forRoot({
      developerMode: !environment.production,
    }),
    ClipboardModule,
    DefaultDemoModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        
        {
          path: 'dashboard-tienda',
          component: DashboardTiendaComponent,
          data: {
            label: 'Dashboard Tienda',
          },
        },
        {
          path: 'dashboard-admin',
          component: DashboardAdminComponent,
          data: {
            label: 'Dashboard Admin',
          },
        },
        {
          path: 'dashboard-usuario',
          component: UsuarioComponent,
          data: {
            label: 'Dashboard Mascotas',
          },
        },
        {
          path: 'listapagos',
          component: LisPagoComponent,
          data: {
            label: 'Lista de pagos',
          },
        },
        {
          path: 'pagos/:id',
          component: GesPagoComponent,
          data: {
            label: 'Pagos',
          },
        },
        {
          path: 'agenda-cliente',
          component: DefaultDemoComponent,
          data: {
            label: 'Agenda',
          },
        }, 
        {
          path: '**',
          redirectTo: 'agenda-cliente',
        },
      ],
      {
        useHash: true,
        relativeLinkResolution: 'legacy',
      }
    ),
    
  ],
  bootstrap: [DemoAppComponent],
})
export class DemoAppModule {}
