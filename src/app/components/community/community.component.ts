import { Component, Input, OnInit } from '@angular/core';

import { Communities } from './communities.interface';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
})
export class CommunityComponent implements OnInit {
  @Input() communities: Communities;

  responsiveImagesConfiguration = [
    {
      min: 0,
      max: 599,
      suffix: '_xs',
      format: 'webp',
    },
    {
      min: 0,
      max: 599,
      suffix: '_xs',
      format: 'png',
    },
    {
      min: 600,
      max: 959,
      suffix: '_sm',
      format: 'webp',
    },
    {
      min: 600,
      max: 959,
      suffix: '_sm',
      format: 'png',
    },
    {
      min: 960,
      max: 1279,
      suffix: '_md',
      format: 'webp',
    },
    {
      min: 960,
      max: 1279,
      suffix: '_md',
      format: 'png',
    },
    {
      min: 1280,
      max: 1919,
      suffix: '_lg',
      format: 'webp',
    },
    {
      min: 1280,
      max: 1919,
      suffix: '_lg',
      format: 'png',
    },
    {
      min: 1920,
      max: 5000,
      suffix: '_xl',
      format: 'webp',
    },

    {
      min: 1920,
      max: 5000,
      suffix: '_xl',
      format: 'png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
