import { ComponentLoader } from './ComponentLoader.js';
import { CSSProcessor } from './CSSProcessor.js';
import { HTMLModifier } from './HTMLModifier.js';
import { ExternalCss } from './ExternalCss.js';
import { JSRenderer } from './JSRenderer.js'; // Import JSRenderer

export class ModularLibrary {
    constructor(suffix, containerSelector) {
        this.suffix = suffix;
        this. containerSelector=  containerSelector;
        this.loader = new ComponentLoader(suffix);
        this.cssProcessor = new CSSProcessor(suffix);
        this.htmlModifier = new HTMLModifier(suffix);
        this.externalCss = new ExternalCss(suffix);
        this.jsRenderer = new JSRenderer(suffix); // Create an instance of JSRenderer
    }

    loadAndModifyComponent(url) {
        this.loader.loadComponent(url)
            .then(doc => {
                const modifiedCss = this.cssProcessor.processStyleElements(doc);
                this.htmlModifier.modifyHtml(doc, this.containerSelector);
                this.cssProcessor.injectModifiedCss(modifiedCss);

            });
    }

    // Load External CSS file Specially
    //How to use:-
        // import { ModularLibrary } from './ModularLibrary/ModularLibrary.js';
        // const modularLibrary = new ModularLibrary('abc');
        // modularLibrary.loadAndModifyComponent('components/header.html', '#header-component');
        // modularLibrary.modifyExternalStylesheet('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
    

    modifyExternalStylesheet(cssUrl){
        // console.log(cssUrl);
        this.externalCss.modifyExternalStylesheet(cssUrl).then((modifiedCss)=>{
            this.cssProcessor.injectModifiedCss(modifiedCss);
        });
        
    }

    // -----------------------------------------
    
    loadComponentAndModify(url, callback) {
    this.loadAndModifyComponent(url, this.containerSelector);

    const observer = new MutationObserver((mutationsList, observer) => {
        if (callback && callback(mutationsList, observer)) {
            observer.disconnect();
        }
    });

    observer.observe(document.querySelector(this.containerSelector), { childList: true, subtree: true });
}

}


