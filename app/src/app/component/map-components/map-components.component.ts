import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import {OSM ,TileWMS} from 'ol/source';
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-map-components',
  templateUrl: './map-components.component.html',
  styleUrl: './map-components.component.css'
})
export class MapComponentsComponent implements OnInit {
  @Input() locate : any;

  urlMap : string = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.961962769381!2d!3d-29.98052312831486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691c8d8a2153bed%3A0xb5f64a3f7fe1e8f9!2sSan%20Alberto%20Hurtado!5e0!3m2!1ses-419!2scl!4v1705352782674!5m2!1ses-419!2scl'

  ngOnInit() {
    this.initMap
  }

  private initMap(): void {
    const map = new Map({
      target: 'openlayers-map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        //center: [this.locate[0][0].lon, this.locate[0][0].lat],-29.980557, -71.333903
        center : [-29.980557,-71.333903],
        zoom: 15,
      }),
    });

    // // Añadir un marcador
    // const markerLayer = new TileLayer({
    //   source: new TileWMS({
    //     url: 'https://maps.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    //     params: { TILED: true, VERSION: '1.1.1', LAYERS: 'openlayers' },
    //   }),
    // });
    // map.addLayer(markerLayer);
  }
}
