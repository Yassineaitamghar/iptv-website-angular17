import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  gallery!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor() {
    ///this.gallery = this.configService.getPageByName('gallery');
    this.configService
      .getPageById(3)
      .subscribe((response) => (this.gallery = response));
  }
}
