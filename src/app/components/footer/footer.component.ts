import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  footer!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor() {
    //this.footer = this.configService.getPageByName('footer');
    this.configService
      .getPageById(7)
      .subscribe((response) => (this.footer = response));
  }
}
