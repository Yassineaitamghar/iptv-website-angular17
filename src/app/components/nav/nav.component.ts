import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  // Define properties for your data
  nav!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor() {
    //this.nav = this.configService.getPageByName('nav');

    this.configService
      .getPageById(9)
      .subscribe((response) => (this.nav = response));
  }
}
