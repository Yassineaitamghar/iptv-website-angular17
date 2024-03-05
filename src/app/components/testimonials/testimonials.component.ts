import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { title } from 'process';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  testimonials!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor() {
    //this.testimonials = this.configService.getPageByName('testimonials');
    //this.configService
    //.getPageById(8)
    //.subscribe((response) => (this.testimonials = response)); kk

    this.configService
      .getPageById(8)
      .subscribe((response) => (this.testimonials = response));
  }
}
