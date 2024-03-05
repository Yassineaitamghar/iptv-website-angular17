import { Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavComponent } from './components/nav/nav.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NotFoundError } from 'rxjs';

export const routes: Routes = [
  { title: 'T2 / HOME', path: '', component: HeaderComponent },
  { title: 'T2 / HOME', path: 'Home', component: HeaderComponent },
  { title: 'T2 / ABOUT', path: 'About', component: AboutComponent },
  { title: 'T2 / CLIENTS', path: 'Clients', component: ClientsComponent },
  { title: 'T2 / PRICING', path: 'Pricing', component: PricingComponent },
  {
    title: 'T2 / TESTIMONIALS',
    path: 'Testimonials',
    component: TestimonialsComponent,
  },
  { title: 'T2 / GALLERY', path: 'Gallery', component: GalleryComponent },
  { title: 'T2 / SERVICES', path: 'Services', component: ServicesComponent },

  { title: '404 / Not Found', path: '**', component: NotfoundComponent },
];
