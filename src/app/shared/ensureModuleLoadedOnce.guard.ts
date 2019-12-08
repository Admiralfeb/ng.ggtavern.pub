/**
 * Guards against loading a module multiple times.
 */
export class EnsureModuleLoadedOnceGuard {
    // tslint:disable: max-line-length
    /**
     * @param targetModule Should be keyed as `@Optional() @SkipSelf() parentModule: [ModuleName]` to allow search for the module this guards.
     */
    constructor(targetModule: any) {
        // If the module is found to be already loaded, throw an error.
        if (targetModule) {
            throw new Error(`${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
        }
    }
}
