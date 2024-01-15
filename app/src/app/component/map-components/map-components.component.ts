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
