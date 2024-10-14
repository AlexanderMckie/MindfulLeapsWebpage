/* @jsx jsxDom */
import zoid from 'zoid';

import sdk from '../index';
import { BREAKPOINTS } from '../constants';

const DEFAULT_BREAKPOINT = 'tablet';

function createPopupFrame({ modalOptions = {}, tag, url } = {}) {
  const rootElementId = `${tag}-root`;

  const containerDiv = window.document.createElement('div');
  containerDiv.id = rootElementId;
  window.document.body.appendChild(containerDiv);

  let frame = zoid.create({
    tag,
    url,
    containerTemplate({ id, CLASS, CONTEXT, tag, context, actions, outlet, jsxDom }) { // eslint-disable-line
      function focus(event) {
        event.preventDefault();
        event.stopPropagation();
        return actions.focus();
      }

      return (
        <div
          id={id}
          class={`${CLASS.ZOID} ${CLASS.ZOID}-tag-${tag} ${CLASS.ZOID}-context-${context} ${CLASS.ZOID}-focus`}
          onClick={focus}
        >
          <style>
            {`#${id} {
                z-index: 2147483100;
								position: fixed;
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;
								background-color: rgba(0, 0, 0, 0.8);
						}

						#${id}.${CLASS.ZOID}-context-${CONTEXT.POPUP} {
								cursor: pointer;
						}

						#${id}.${CLASS.ZOID}-context-${CONTEXT.IFRAME} .${CLASS.OUTLET} {
								box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.4);
								position: fixed;
								top: 50%;
                left: 50%;
                filter: blur(0);
                -webkit-filter: blur(0);
                -webkit-font-smoothing: antialiased;
                -webkit-backface-visibility: hidden;
                text-rendering: optimizelegibility;
								transform: translate3d(-50%, -50%, 0) scale(1.0, 1.0);
								-webkit-transform: translate3d(-50%, -50%, 0) scale(1.0, 1.0);
								-moz-transform: translate3d(-50%, -50%, 0) scale(1.0, 1.0);
								-o-transform: translate3d(-50%, -50%, 0) scale(1.0, 1.0);
								-ms-transform: translate3d(-50%, -50%, 0) scale(1.0, 1.0);
						}

						#${id}.${CLASS.ZOID}-context-${CONTEXT.IFRAME} .${CLASS.OUTLET} {
								height: 90vh;
								width: ${BREAKPOINTS[modalOptions.breakpoint || DEFAULT_BREAKPOINT]};
						}
						@media screen and (max-width: 769px) {
							#${id}.${CLASS.ZOID}-context-${CONTEXT.IFRAME} .${CLASS.OUTLET} {
								width: 100%;
							}
						}

						#${id}.${CLASS.ZOID}-context-${CONTEXT.IFRAME} .${CLASS.OUTLET} iframe {
								height: 100%;
								width: 100%;
								position: absolute;
								top: 0;
								left: 0;
								transition: opacity .2s ease-in-out;
						}

						#${id} > .${CLASS.OUTLET} > iframe.${CLASS.VISIBLE} {
								opacity: 1;
						}

						#${id} > .${CLASS.OUTLET} > iframe.${CLASS.INVISIBLE} {
								opacity: 1;
						}

						#${id} > .${CLASS.OUTLET} > iframe.${CLASS.COMPONENT_FRAME} {
								z-index: 2147483300;
						}

						#${id} > .${CLASS.OUTLET} > iframe.${CLASS.PRERENDER_FRAME} {
								z-index: 2147483200;
						}

						#${id} .${CLASS.ZOID}-close {
								position: absolute;
								right: 16px;
								top: 16px;
								width: 16px;
								height: 16px;
								opacity: 0.6;
						}

						#${id} .${CLASS.ZOID}-close:hover {
								opacity: 1;
						}

						#${id} .${CLASS.ZOID}-close:before,
						#${id} .${CLASS.ZOID}-close:after {
								position: absolute;
								left: 8px;
								content: ' ';
								height: 16px;
								width: 2px;
								background-color: white;
						}

						#${id} .${CLASS.ZOID}-close:before {
								transform: rotate(45deg);
						}

						#${id} .${CLASS.ZOID}-close:after {
								transform: rotate(-45deg);
						}

						#${id} > .${CLASS.OUTLET} > iframe.${CLASS.PRERENDER_FRAME} {
							background: white !important;
						}
						`}
          </style>
          <node el={outlet} />
        </div>
      );
    }
  });

  frame.rootElementId = rootElementId;

  return frame;
}

function createEmbeddedFrame({ tag, url, inlineOptions = {} } = {}) {
  const { height, width } = inlineOptions;
  let frame = zoid.create({
    tag,
    url,
    autoResize: {
      height: !height
    },
    dimensions: {
      width: width || '100%',
      height: height || '100%'
    }
  });
  return frame;
}

export function createFrame(opts = {}) {
  const { containerId, env, type } = opts;
  const tag = `medipass-partner-sdk--${type}`;
  const url = `${sdk.config.baseUrl || sdk.BASE_URLS[env]}/standalone/${sdk.PATHS[type]}`;
  let frame;
  if (containerId) {
    frame = createEmbeddedFrame({ tag, url, ...opts });
  } else {
    frame = createPopupFrame({ tag, url, ...opts });
  }
  return frame;
}
