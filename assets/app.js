/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
// import { startStimulusApp } from '@symfony/stimulus-bridge';
import './styles/app.scss';
import './../public/css/styles.css';
import './../public/css/backoffice.css';
import './../public/css/newsletter.css';
import './../public/css/textareaWithHTML.css';

// export const app = startStimulusApp(require.context(
//     '@symfony/stimulus-bridge/lazy-controller-loader!./controllers',
//     true,
//     /\.(j|t)sx?$/
//     ));

// start the Stimulus application
import './bootstrap';
    
require('bootstrap');
require('bootstrap/dist/js/bootstrap.bundle');
