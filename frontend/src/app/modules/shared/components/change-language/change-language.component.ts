import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { availableLanguages } from '../../constants/available-languages.constant';
import { Languages } from '../../constants/languages.constant';
import { AvailableLanguage } from '../../interfaces/available-language.interface';

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.scss']
})
export class ChangeLanguageComponent implements OnInit{
  public readonly availableLanguages: AvailableLanguage[] = availableLanguages;
  private readonly cacheId = 'lang';
  
  public currentLanguage: AvailableLanguage;
  private _selectedLanguageId: Languages;

  public constructor(private language: TranslateService) { }

  public ngOnInit(): void {
    this.loadLanguage();
  }

  private loadLanguage(): void {
    this.selectedId = this.langCache ? this.langCache : <Languages>this.language.defaultLang;
  }

  public set selectedId(languageId: Languages) {
    this._selectedLanguageId = languageId;
    this.langCache = languageId;
    this.language.use(languageId);
    this.currentLanguage = this.getCurrentLanguage();
  }

  public get selectedId(): Languages {
    return this._selectedLanguageId;
  }

  private getCurrentLanguage(): AvailableLanguage {
    const language = this.availableLanguages.find( current => current.value === this.selectedId);
    
    if(!language) {
      throw new Error(`Couldn't find language for id: ${this.selectedId}.`)
    }

    return language; 
  }

  private get langCache(): Languages {
    return <Languages>localStorage.getItem(this.cacheId);
  }

  private set langCache(languageId: Languages) {
    localStorage.setItem(this.cacheId, languageId);
  }
}
