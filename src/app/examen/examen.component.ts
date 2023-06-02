import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Alumnes} from "../alumnes.model";

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit{
  alumnes: any[]=[];
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }


  llistarProf() {
    this.http.get<any>("http://localhost:4080/ex1").forEach((data) => {
      console.log(data);
    })
  }

  naiDe10(){
    this.http.get<Alumnes[]>("http://localhost:4080/ex3").subscribe((data) => {
      data.forEach((alumnes) => {

        // @ts-ignore
        let alum = new Alumnes(alumnes.alumn_dni, alumnes.alumn_nom, alumnes.alumn_cognom_1, alumnes.alumn_cognom_2, alumnes.alumn_adreca, alumnes.alumn_codi_postal, alumnes.alumn_poblacio,alumnes.alumn_comarca,alumnes.alumn_telefon, alumnes.alumn_data_naixement,alumnes.alumn_casat, alumnes.alumn_e_mail,alumnes.alumn_zodiac);
        console.log(alum)
      })
    })
  }

  esborrarCamp(){
    this.http.post<any>("http://localhost:4080/ex4", {}).subscribe();
  }
}
