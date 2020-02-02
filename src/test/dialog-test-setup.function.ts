import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

/**
 * Creates a module to test a Mat Dialog
 * @param declarations declarations for the module
 * @param entryComponents any entry components for the module
 */
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
