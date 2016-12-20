import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from 'ng2-translate'
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  lang:string
  constructor(public navCtrl: NavController, private translate: TranslateService) {
   translate.onLangChange.subscribe((event: LangChangeEvent) => {
     this.lang = event.lang
    console.log("the lang changed --> " + this.lang);
   })
   
  }

  changeLang(){
    this.lang = this.lang == 'en' ? 'ar': 'en'
    this.translate.use(this.lang)
  }

}
