import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

/**
 * Creates and returns a Testing Module for dialog testing
 * @param declarations declarations for testing module
 * @param entryComponents dialog components
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
