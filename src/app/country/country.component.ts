import { MapType } from "@angular/compiler";
import { Component,OnInit } from "@angular/core";
import { IntCountry } from "../interfaceCountry/country.interface";

@Component({
    selector: "app-country",
    templateUrl: "./country.component.html",
    styleUrls: ["./country.component.css"]

})

export class CountryComponent implements OnInit{
    
    public countries:IntCountry[]=[]
    myCountry= {
        name: ' ',
        capital: ''
        
    }
    
    ngOnInit(){
        this.myCountry.name="Colombia";
        this.myCountry.capital="Bogotá";
    }
    enviar():void{
        console.log(this.myCountry)
    }

    saveCoutry():void{
        console.log(this.myCountry)
        const newCountry= {...this.myCountry}
        this.countries.push(newCountry)
    }
}