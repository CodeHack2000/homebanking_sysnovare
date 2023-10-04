import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
/**
 * Component representing the website logo
 *
 * @export
 * @class LogoComponent
 */
export class LogoComponent {
  @Input() color?: string;
  selectedColor!: string;

  ngOnInit() {
    if (this.color) {
      this.selectedColor = `text-${this.color}`;
    } else {
      this.selectedColor = "text-white";
    }
  }
}
