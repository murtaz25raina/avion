import { Component } from '@angular/core';
import { cardData } from 'src/app/components/card/card.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  partners = [
    {
      img: 'assets/images/partners/partner-1.png',
      class: 'n-partner-1',
    },
    {
      img: 'assets/images/partners/partner-2.png',
      class: 'n-partner-2',
    },
    {
      img: 'assets/images/partners/partner-3.png',
      class: 'n-partner-3',
    },
    {
      img: 'assets/images/partners/partner-4.png',
      class: 'n-partner-4',
    },
    {
      img: 'assets/images/partners/partner-5.png',
      class: 'n-partner-5',
    },
    {
      img: 'assets/images/partners/partner-6.png',
      class: 'n-partner-6',
    },
    {
      img: 'assets/images/partners/partner-7.png',
      class: 'n-partner-7',
    },
    {
      img: 'assets/images/partners/partner-8.png',
      class: 'n-partner-8',
    },
  ];

  cardData: cardData[] = [
    {
      cardBackImage: 'url(assets/images/card/it-strategy-back.png)',
      cardFrontImage: 'url(assets/images/card/it-strategy-front.png)',
      heading: 'IT Strategy →',
      listHeading: 'IT Strategy',
      list: [
        'Business Vision and Objectives',
        'IT Roadmap',
        'Organizational Structure',
        'Policies and Procedures',
        'Technology Assessment',
        'Risk Assessment',
      ],
    },
    {
      cardBackImage: 'url(assets/images/card/infrastructure-security-back.png)',
      cardFrontImage:
        'url(assets/images/card/infrastructure-security-front.png)',
      heading: 'Infrastructure and Security →',
      listHeading: 'Infrastructure and Security',
      list: [
        'Gap Analysis',
        'CT Infrastructure',
        'Physical Security',
        'Data and Command Centers',
        'Cybersecurity',
        'ORAT Services',
        'SOPs and Training',
      ],
    },
    {
      cardBackImage: 'url(assets/images/card/project-management-back.png)',
      cardFrontImage: 'url(assets/images/card/project-management-front.png)',
      heading: 'Project Management →',
      listHeading: 'Project Management',
      list: [
        'RFP Preparation',
        'Project Control',
        'Commissioning',
        'Continuous Improvement',
      ],
    },
    {
      cardBackImage: 'url(assets/images/card/customer-experience-back.png)',
      cardFrontImage: 'url(assets/images/card/customer-experience-front.png)',
      heading: 'Customer Experience →',
      listHeading: 'Customer Experience',
      list: [
        'Terminal to Airside Operations',
        'Resource Management',
        'Asset and Maintenance Management',
        'Safety and Security',
        'KPI Management',
      ],
    },

    {
      cardBackImage: 'url(assets/images/card/operational-success-back.png)',
      cardFrontImage:
        'url(assets/images/card/operational-success-front.png)',
      heading: 'Operational Excellence →',
      listHeading: 'Operational Excellence',
      list: [
        'Terminal to Airside Operations',
        'Resource Management',
        'Asset and Maintenance Management',
        'Safety and Security',
        'KPI Management',
      ],
    },
    {
      cardBackImage: 'url(assets/images/card/revenue-enhancement-back.png)',
      cardFrontImage: 'url(assets/images/card/revenue-enhancement-front.png)',
      heading: 'Revenue Enhancement →',
      listHeading: 'Revenue Enhancement',
      list: [
        'ICT Monetization',
        'Revenue Protection',
        'eCommerce',
        'Digital Signage',
      ],
    },
    {
      cardBackImage: 'url(assets/images/card/digital-transformaion-back.png)',
      cardFrontImage: 'url(assets/images/card/digital-transformaion-front.png)',
      heading: 'Digital Transformation →',
      listHeading: 'Digital Transformation',
      list: [
        'Sustainability',
        'Equipment Tracking',
        'Access Management',
        'Smart Check-in',
        'Passenger Flow Management',
        'Computer Vision',
        'Aircraft Turnaround',
      ],
    },
    {
      cardBackImage: 'url(assets/images/card/future-upgrade-back.png)',
      cardFrontImage: 'url(assets/images/card/future-upgrade-front.png)',
      heading: 'Future and Upgradation →',
      listHeading: 'Future and Upgradation',
      list: [
        'ICT Assessment',
        'Augmentation Recommendations',
        'Investment Landscape',
        'Execution Plan',
      ],
    },
  ];
}
