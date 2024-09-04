import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  goBack(){
    this.router.navigate(['/profile'])
  }
  languages = [
    { name: 'English', code: 'en' },
    { name: 'Portugues', code: 'pt' },
    { name: 'Русскнн', code: 'ru' },
    { name: 'Deutsch', code: 'de' },
    { name: 'Francais', code: 'fr' },
    { name: 'Italiano', code: 'it' },
    { name: 'Arabe', code: 'ar' }
  ];

  selectedLanguage: string = 'pt';
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
