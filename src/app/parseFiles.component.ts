/**
 * Created by estaw on 2017/10/23.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-parse-file',
  templateUrl: './parseFiles.component.html'
})
export class ParseFilesComponent {
  columns: Column[];
}

class Column {
  name: string;
  type: string;
  samples: string[];
}
