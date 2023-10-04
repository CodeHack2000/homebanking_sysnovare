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
                    <a href="index.html" data-type="index-link">Frontend app documentation</a>
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
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-495bad01c0e08d4beb82d34026cf6fe4f2d1533c4ccf3624a1bd9c2a31127c0cf98e13ddc8b3788d4b5ea8dd926d1f0231014afdcc48212c6546da6b77fe7d24"' : 'data-bs-target="#xs-components-links-module-AppModule-495bad01c0e08d4beb82d34026cf6fe4f2d1533c4ccf3624a1bd9c2a31127c0cf98e13ddc8b3788d4b5ea8dd926d1f0231014afdcc48212c6546da6b77fe7d24"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-495bad01c0e08d4beb82d34026cf6fe4f2d1533c4ccf3624a1bd9c2a31127c0cf98e13ddc8b3788d4b5ea8dd926d1f0231014afdcc48212c6546da6b77fe7d24"' :
                                            'id="xs-components-links-module-AppModule-495bad01c0e08d4beb82d34026cf6fe4f2d1533c4ccf3624a1bd9c2a31127c0cf98e13ddc8b3788d4b5ea8dd926d1f0231014afdcc48212c6546da6b77fe7d24"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreditCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreditCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomSnackbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomSnackbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardItemsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardItemsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FundsHistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FundsHistoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FundsHistoryTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FundsHistoryTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LastMovementsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LastMovementsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageFundsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageFundsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageFundsItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageFundsItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaterialSidenavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MaterialSidenavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/FundsHistoryTableDataSource.html" data-type="entity-link" >FundsHistoryTableDataSource</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomSnackbarService.html" data-type="entity-link" >CustomSnackbarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FundsService.html" data-type="entity-link" >FundsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpInterceptorService.html" data-type="entity-link" >HttpInterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthModel.html" data-type="entity-link" >AuthModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthResponse.html" data-type="entity-link" >AuthResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormattedFundsMovementsModel.html" data-type="entity-link" >FormattedFundsMovementsModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FundsActionModel.html" data-type="entity-link" >FundsActionModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FundsHistoryTableItem.html" data-type="entity-link" >FundsHistoryTableItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FundsModel.html" data-type="entity-link" >FundsModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FundsMovementsModel.html" data-type="entity-link" >FundsMovementsModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnackbarModel.html" data-type="entity-link" >SnackbarModel</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});