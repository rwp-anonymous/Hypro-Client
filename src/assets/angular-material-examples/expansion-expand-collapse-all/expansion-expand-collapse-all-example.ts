import {Component, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material';

/**
 * @title Accordion with expand/collapse all toggles
 */
@Component({
  selector: 'expansion-toggle-all-example',
  templateUrl: 'expansion-expand-collapse-all-example.html',
  styleUrls: ['expansion-expand-collapse-all-example.css'],
})
export class ExpansionExpandCollapseAllExample {
  @ViewChild(MatAccordion) accordion: MatAccordion;
}
