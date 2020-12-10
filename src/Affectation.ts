import {Vehicule} from './vehiculeModule';
import {Conducteur} from './conducteurModule';

export class Affectation {
  id?: string;
  codeMission?: string;
  debutAffect?: string;
  finAffectPrevue?: string;
  finAffectReelle?: string;
  direction?: string;
  adresse?: string;
  vehicule?: Vehicule;
  conducteur?: Conducteur;
}
