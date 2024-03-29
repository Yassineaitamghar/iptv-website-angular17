import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
})
export class ClientsComponent {
  clients!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor() {
    // this.clients = this.configService.getPageByName("clients");
    this.configService
      .getPageById(2)
      .subscribe((response) => (this.clients = response));
  }
}
