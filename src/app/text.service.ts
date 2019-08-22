import { Injectable } from '@angular/core';

import { TEXT } from './mock-text';
import { savedText } from './text';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  getText(): savedText[]{
    return TEXT;
  }
}
