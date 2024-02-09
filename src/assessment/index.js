/**
 * index.js is a "kitchen sink" file that will load everything when imported. The
 * core LT library, plus all extensions. Probably only use this for development
 * because of the size. In production, try importing core.js and any extensions
 * you might want separately.
 */

import { LT as core } from './core';

import * as ariaCountOnNav from './extensions/accessibility/aria/ariaCountOnNav';
import * as blockGrammarChecks from './extensions/validation/blockGrammarChecks';
import * as columnResizer from './extensions/accessibility/ux/columnResizer';
import * as essayLimitByCharacter from './extensions/validation/essayLimitByCharacter';
import * as hideAlternatives from './extensions/accessibility/ux/hideAlternatives';
import * as keyboardShortcuts from './extensions/accessibility/ux/keyboardShortcuts';
import * as magnifier from './extensions/accessibility/ux/magnifier';
import * as mcqLabelPrefix from './extensions/accessibility/ux/mcqLabelPrefix';
import * as pageOverlay from './extensions/accessibility/ux/pageOverlay';
import * as renderPDF from './extensions/ui/renderPDF/index';
import * as resetResponse from './extensions/accessibility/ux/resetResponse';

const extensions = {
    extensions: {
        ariaCountOnNav: { ...ariaCountOnNav },
        blockGrammarChecks: { ...blockGrammarChecks },
        columnResizer: { ...columnResizer },
        essayLimitByCharacter: { ...essayLimitByCharacter },
        hideAlternatives: { ...hideAlternatives },
        keyboardShortcuts: { ...keyboardShortcuts },
        magnifier: { ...magnifier },
        mcqLabelPrefix: { ...mcqLabelPrefix },
        pageOverlay: { ...pageOverlay },
        renderPDF: { ...renderPDF },
        resetResponse: { ...resetResponse },
    },
};

export const LT = { ...core, ...extensions };