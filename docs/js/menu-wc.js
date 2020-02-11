'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">GGTavern Docs</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutModule.html" data-type="entity-link">AboutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AboutModule-b66115fba27d173f55adcc8a7709321f"' : 'data-target="#xs-components-links-module-AboutModule-b66115fba27d173f55adcc8a7709321f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutModule-b66115fba27d173f55adcc8a7709321f"' :
                                            'id="xs-components-links-module-AboutModule-b66115fba27d173f55adcc8a7709321f"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManifestoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ManifestoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MembershipComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MembershipComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StaffComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StaffComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AboutModule-b66115fba27d173f55adcc8a7709321f"' : 'data-target="#xs-injectables-links-module-AboutModule-b66115fba27d173f55adcc8a7709321f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AboutModule-b66115fba27d173f55adcc8a7709321f"' :
                                        'id="xs-injectables-links-module-AboutModule-b66115fba27d173f55adcc8a7709321f"' }>
                                        <li class="link">
                                            <a href="injectables/AboutService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AboutService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AboutRoutingModule.html" data-type="entity-link">AboutRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-385b8a60d37a46b234babae446090dcc"' : 'data-target="#xs-components-links-module-AppModule-385b8a60d37a46b234babae446090dcc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-385b8a60d37a46b234babae446090dcc"' :
                                            'id="xs-components-links-module-AppModule-385b8a60d37a46b234babae446090dcc"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HoursDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HoursDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OpenSignComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OpenSignComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CalendarModule.html" data-type="entity-link">CalendarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CalendarModule-f0a8feb15e7d420d9b18c016a529c3d6"' : 'data-target="#xs-components-links-module-CalendarModule-f0a8feb15e7d420d9b18c016a529c3d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CalendarModule-f0a8feb15e7d420d9b18c016a529c3d6"' :
                                            'id="xs-components-links-module-CalendarModule-f0a8feb15e7d420d9b18c016a529c3d6"' }>
                                            <li class="link">
                                                <a href="components/CalendarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DayComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DayComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CalendarModule-f0a8feb15e7d420d9b18c016a529c3d6"' : 'data-target="#xs-injectables-links-module-CalendarModule-f0a8feb15e7d420d9b18c016a529c3d6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CalendarModule-f0a8feb15e7d420d9b18c016a529c3d6"' :
                                        'id="xs-injectables-links-module-CalendarModule-f0a8feb15e7d420d9b18c016a529c3d6"' }>
                                        <li class="link">
                                            <a href="injectables/CalendarService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CalendarService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DateService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DateService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CalendarRoutingModule.html" data-type="entity-link">CalendarRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactModule.html" data-type="entity-link">ContactModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContactModule-2662de2c52819c9026d4e0c2c3eb20a5"' : 'data-target="#xs-components-links-module-ContactModule-2662de2c52819c9026d4e0c2c3eb20a5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactModule-2662de2c52819c9026d4e0c2c3eb20a5"' :
                                            'id="xs-components-links-module-ContactModule-2662de2c52819c9026d4e0c2c3eb20a5"' }>
                                            <li class="link">
                                                <a href="components/ContactComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactMainComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactMainComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactRoutingModule.html" data-type="entity-link">ContactRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-90d7bceae6f1da9e6f4717727cea3e04"' : 'data-target="#xs-components-links-module-CoreModule-90d7bceae6f1da9e6f4717727cea3e04"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-90d7bceae6f1da9e6f4717727cea3e04"' :
                                            'id="xs-components-links-module-CoreModule-90d7bceae6f1da9e6f4717727cea3e04"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GamesModule.html" data-type="entity-link">GamesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GamesModule-78d5ff1a5347e9de975754872dd61d1d"' : 'data-target="#xs-components-links-module-GamesModule-78d5ff1a5347e9de975754872dd61d1d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GamesModule-78d5ff1a5347e9de975754872dd61d1d"' :
                                            'id="xs-components-links-module-GamesModule-78d5ff1a5347e9de975754872dd61d1d"' }>
                                            <li class="link">
                                                <a href="components/GameOptionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GameOptionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GamesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GamesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GamesModule-78d5ff1a5347e9de975754872dd61d1d"' : 'data-target="#xs-injectables-links-module-GamesModule-78d5ff1a5347e9de975754872dd61d1d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GamesModule-78d5ff1a5347e9de975754872dd61d1d"' :
                                        'id="xs-injectables-links-module-GamesModule-78d5ff1a5347e9de975754872dd61d1d"' }>
                                        <li class="link">
                                            <a href="injectables/GamesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GamesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GamesRoutingModule.html" data-type="entity-link">GamesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MenuModule.html" data-type="entity-link">MenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MenuModule-04cef6d271f26652cadce4ac8f50901d"' : 'data-target="#xs-components-links-module-MenuModule-04cef6d271f26652cadce4ac8f50901d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MenuModule-04cef6d271f26652cadce4ac8f50901d"' :
                                            'id="xs-components-links-module-MenuModule-04cef6d271f26652cadce4ac8f50901d"' }>
                                            <li class="link">
                                                <a href="components/BottledComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BottledComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DrinkComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DrinkComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FoodItemwFriesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FoodItemwFriesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LiquorsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LiquorsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuSectionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MiscFoodItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MiscFoodItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TapComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WineComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WineComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MenuModule-04cef6d271f26652cadce4ac8f50901d"' : 'data-target="#xs-injectables-links-module-MenuModule-04cef6d271f26652cadce4ac8f50901d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MenuModule-04cef6d271f26652cadce4ac8f50901d"' :
                                        'id="xs-injectables-links-module-MenuModule-04cef6d271f26652cadce4ac8f50901d"' }>
                                        <li class="link">
                                            <a href="injectables/MenuService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MenuService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MenuRoutingModule.html" data-type="entity-link">MenuRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-45980b52c3aaf5169098f82a0f609b8d"' : 'data-target="#xs-components-links-module-SharedModule-45980b52c3aaf5169098f82a0f609b8d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-45980b52c3aaf5169098f82a0f609b8d"' :
                                            'id="xs-components-links-module-SharedModule-45980b52c3aaf5169098f82a0f609b8d"' }>
                                            <li class="link">
                                                <a href="components/ContentwithSideNavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContentwithSideNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ErrorNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessageDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MessageDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UnderConstructionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UnderConstructionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/BottledComponent.html" data-type="entity-link">BottledComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContentwithSideNavComponent.html" data-type="entity-link">ContentwithSideNavComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DrinkComponent.html" data-type="entity-link">DrinkComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ErrorNotFoundComponent.html" data-type="entity-link">ErrorNotFoundComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GameOptionsComponent.html" data-type="entity-link">GameOptionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LiquorsComponent.html" data-type="entity-link">LiquorsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MainComponent.html" data-type="entity-link">MainComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MainComponent-1.html" data-type="entity-link">MainComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MessageDialogComponent.html" data-type="entity-link">MessageDialogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NoopComponent.html" data-type="entity-link">NoopComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TapComponent.html" data-type="entity-link">TapComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UnderConstructionComponent.html" data-type="entity-link">UnderConstructionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WineComponent.html" data-type="entity-link">WineComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ActivatedRouteStub.html" data-type="entity-link">ActivatedRouteStub</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnsureModuleLoadedOnceGuard.html" data-type="entity-link">EnsureModuleLoadedOnceGuard</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AboutService.html" data-type="entity-link">AboutService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AnnouncementService.html" data-type="entity-link">AnnouncementService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CalendarService.html" data-type="entity-link">CalendarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseService.html" data-type="entity-link">DatabaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DateService.html" data-type="entity-link">DateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DialogService.html" data-type="entity-link">DialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GamesService.html" data-type="entity-link">GamesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MenuService.html" data-type="entity-link">MenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SortService.html" data-type="entity-link">SortService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Announcement.html" data-type="entity-link">Announcement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BottleItem.html" data-type="entity-link">BottleItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Calendar.html" data-type="entity-link">Calendar</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CalendarEvent.html" data-type="entity-link">CalendarEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData.html" data-type="entity-link">DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DrinkItem.html" data-type="entity-link">DrinkItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FoodItemwFries.html" data-type="entity-link">FoodItemwFries</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Game.html" data-type="entity-link">Game</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GameSystem.html" data-type="entity-link">GameSystem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ID.html" data-type="entity-link">ID</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LiquorItem.html" data-type="entity-link">LiquorItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem.html" data-type="entity-link">MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuSection.html" data-type="entity-link">MenuSection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MessageDialogData.html" data-type="entity-link">MessageDialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MiscFoodItem.html" data-type="entity-link">MiscFoodItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Month.html" data-type="entity-link">Month</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NavigationModel.html" data-type="entity-link">NavigationModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Position.html" data-type="entity-link">Position</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TapItem.html" data-type="entity-link">TapItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WineItem.html" data-type="entity-link">WineItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Worker.html" data-type="entity-link">Worker</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});