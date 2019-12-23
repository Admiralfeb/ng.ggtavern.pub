import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

export function setupDialogTestModule(declarations: any[], entryComponents: any[]) {
    return TestBed.configureTestingModule({
        imports: [MatDialogModule, NoopAnimationsModule],
        declarations
    }).overrideModule(BrowserDynamicTestingModule, {
        set: {
            entryComponents
        }
    });
}
