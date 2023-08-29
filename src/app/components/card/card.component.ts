import { Component, Input } from '@angular/core';
import { cardData } from './card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() cardContent!: cardData;

  isFlipped = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }

  getCardStyle(cardContent: any): any {
    if (cardContent && cardContent.cardStyle) {
      return cardContent.cardStyle;
    } else {
      return {};
    }
  }
}
