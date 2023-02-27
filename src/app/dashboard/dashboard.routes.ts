import { Routes } from "@angular/router";
import { DetalleComponent } from "../ingreso-egrero/detalle/detalle.component";
import { EstadisticaComponent } from "../ingreso-egrero/estadistica/estadistica.component";
import { IngresoEgreroComponent } from "../ingreso-egrero/ingreso-egrero.component";

export const dashboardRoutes: Routes = [
    { path: '', component: EstadisticaComponent },
    { path: 'ie', component: IngresoEgreroComponent },
    { path: 'detalle', component: DetalleComponent },
    { path: '**', redirectTo: '' }
]
