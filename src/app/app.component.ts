import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {
    public title = "Samples";
    name = 'Angular 5';
    jsonDataKeys : any=[];
    jsonData : any =[{
    "2013, 1, 1": {
        "open": "268.93",
        "high": "268.93",
        "low": "262.80",
        "close": "265.00",
        "volume": "6118146"
    }}, 
    {
    "2013, 1, 4": {
        "open": "268.93",
        "high": "268.93",
        "low": "262.80",
        "close": "265.00",
        "volume": "6118146"
    },
    "2013, 1, 5": {
      "open": "268.93",
      "high": "268.93",
      "low": "262.80",
      "close": "265.00",
      "volume": "6118146"
    },
    "2013, 1, 6": {
        "open": "268.93",
        "high": "268.93",
        "low": "262.80",
        "close": "265.00",
        "volume": "6118146"
    }
}];

constructor(){
  for(let arr of this.jsonData){
       Object.keys(arr) && Object.keys(arr).map((key)=>{
          console.log("push")
          console.log(key)
          console.log(arr[key].open)
          this.jsonDataKeys.push(key);
        });
    }
}

}



