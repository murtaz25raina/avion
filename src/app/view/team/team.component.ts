import { Component } from "@angular/core";

@Component({
    selector:'app-our-team',
    templateUrl:'./team.component.html',
    styleUrls:['./team.component.scss']
})
export class TeamComponent{
    openLinkedin=(link:string)=>{
        window.open(link,"_blank")
    }
}