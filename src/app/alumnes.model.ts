export class Alumnes {
  alumn_dni?: string;
  alumn_nom?: string;
  alumn_cognom_1?: string;
  alumn_cognom_2?: string;
  alumn_adreca?: string;
  alumn_codi_postal?: string;
  alumn_poblacio?: string;
  alumn_comarca?: string;
  alumn_telefon?: string;
  alumn_data_naixement?: number;
  alumn_casat?: number;
  alumn_e_mail?: string;


  constructor(alumn_dni: string, alumn_nom: string, alumn_cognom_1: string, alumn_cognom_2: string, alumn_adreca: string, alumn_codi_postal: string, alumn_poblacio: string, alumn_comarca: string, alumn_telefon: string, alumn_data_naixement: number, alumn_casat: number, alumn_e_mail: string) {
    this.alumn_dni = alumn_dni;
    this.alumn_nom = alumn_nom;
    this.alumn_cognom_1 = alumn_cognom_1;
    this.alumn_cognom_2 = alumn_cognom_2;
    this.alumn_adreca = alumn_adreca;
    this.alumn_codi_postal = alumn_codi_postal;
    this.alumn_poblacio = alumn_poblacio;
    this.alumn_comarca = alumn_comarca;
    this.alumn_telefon = alumn_telefon;
    this.alumn_data_naixement = alumn_data_naixement;
    this.alumn_casat = alumn_casat;
    this.alumn_e_mail = alumn_e_mail;
  }
}
