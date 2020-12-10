import {Affectation} from './Affectation';

export class Consommation {
  id?: string;
  reference?: string;
  carburant?: number;
  huile?: number;
  fixe?: number;
  divers?: number;
  affectation?: Affectation;
 }
