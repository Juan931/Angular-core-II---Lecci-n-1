import { Component,OnInit } from "@angular/core";

@Component({
    selector: "app-country",
    templateUrl: "./country.component.html",
    styleUrls: ["./country.component.css"]

})

export class CountryComponent implements OnInit{

    myCountry= {
        name: '',
        capital: ''
        
    }

    ngOnInit(){

    }
    probando():void{
        console.log(this.myCountry)
    }
}