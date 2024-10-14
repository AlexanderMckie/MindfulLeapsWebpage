/* @jsx jsxDom */
// import './utils/btoa-polyfill';
import coreSDK from '@medipass/web-sdk';

import * as claimItems from './resources/claim-items';
import * as members from './resources/members';
import * as providers from './resources/providers';
import * as payments from './resources/payments';
import * as transactions from './resources/transactions';
import { createFrame } from './utils/frame';
import parsePayload from './utils/parse-payload';
import { BASE_URLS, ENVS, FUNDERS, MEDICARE, HEALTH_FUNDS, PATHS, TYPES } from './constants';

if (!coreSDK.hasInit) {
  coreSDK.setup();
}

export default {
  BASE_URLS,
  ENVS,
  FUNDERS,
  MEDICARE,
  HEALTH_FUNDS,
  PATHS,
  TYPES,

  coreSDK,

  business: undefined,
  config: {
    apiKey: undefined,
    appId: undefined,
    appVersion: undefined,
    baseUrl: undefined,
    env: ENVS.PROD,
    token: undefined
  },
  frames: {
    [TYPES.CREATE_TRANSACTION]: null
  },

  claimItems,
  members,
  providers,
  transactions,
  payments,

  async setConfig(config) {
    // Set Transaction SDK config
    this.config = { ...this.config, ...config };

    let sdkConfig = config;
    if (config.env === 'local') {
      sdkConfig.env = 'dev';
    }
    if (config.env === 'stg') {
      sdkConfig.env = 'staging';
    }
    // Set Medipass SDK config
    coreSDK.setConfig(sdkConfig);

    if (config.apiKey || config.token) {
      coreSDK.setToken(`Bearer ${config.apiKey || config.token}`);
    }
    if (config.apiKey || config.token) {
      const myBusinesses = await coreSDK.businesses.getMyBusinesses();
      const myBusiness = myBusinesses.items[0];
      this.business = myBusiness;
    }
  },

  // Sets up the frame if it doesn't already exist.
  setupFrame(opts = {}) {
    const { type } = opts;
    if (!this.frames[type]) {
      this.frames[type] = createFrame(opts);
    } else {
      // If the frame reference exists in memory, assert that the frame element exists in the DOM.
      const elementId = `medipass-partner-sdk--${type}-root`;
      const frameElement = window.document.getElementById(elementId);
      if (!frameElement) {
        const containerDiv = window.document.createElement('div');
        containerDiv.id = elementId;
        window.document.body.appendChild(containerDiv);
      }
    }
    return this.frames[type];
  },

  // Renders the create transaction screen in an iframe.
  renderCreateTransaction(payload, options) {
    const newOptions = { ...this.config, ...options };
    const frame = this.setupFrame({
      containerId: newOptions.containerId,
      env: newOptions.env,
      type: this.TYPES.CREATE_TRANSACTION,
      modalOptions: {
        breakpoint: 'tablet',
        hideCloseButton: newOptions.hideCloseButton
      },
      inlineOptions: {
        width: newOptions.width
      },
      onCancel: newOptions.onCancel
    });
    const props = { ...parsePayload(payload), ...newOptions };
    const targetId = newOptions.containerId || frame.rootElementId;
    frame.render(props, targetId);
  },

  // Renders the view transaction screen in an iframe.
  renderViewTransaction(query, options) {
    const newOptions = { ...this.config, ...options };
    const frame = this.setupFrame({
      containerId: newOptions.containerId,
      env: newOptions.env,
      type: this.TYPES.VIEW_TRANSACTION,
      modalOptions: {
        breakpoint: 'desktop',
        hideCloseButton: newOptions.hideCloseButton
      },
      inlineOptions: {
        width: newOptions.width
      },
      onCancel: newOptions.onCancel
    });
    const businessId = this.business ? this.business._id : query.businessId;
    const props = { ...query, ...newOptions, businessId };
    const targetId = newOptions.containerId || frame.rootElementId;
    frame.render(props, targetId);
  },

  // Renders the view future screen in an iframe.
  renderViewFuture(query, options) {
    const newOptions = { ...this.config, ...options };
    const frame = this.setupFrame({
      containerId: newOptions.containerId,
      env: newOptions.env,
      type: this.TYPES.VIEW_FUTURE,
      modalOptions: {
        breakpoint: 'desktop',
        hideCloseButton: newOptions.hideCloseButton
      },
      inlineOptions: {
        width: newOptions.width
      },
      onCancel: newOptions.onCancel
    });
    const businessId = this.business ? this.business._id : query.businessId;
    const props = { ...query, ...newOptions, businessId };
    const targetId = newOptions.containerId || frame.rootElementId;
    frame.render(props, targetId);
  },

  // Renders the payment authorization screen in an iframe.
  renderAuthorizePayment(payload, options) {
    const newOptions = { ...this.config, ...options };
    const frame = this.setupFrame({
      containerId: newOptions.containerId,
      env: newOptions.env,
      type: this.TYPES.AUTHORIZE_PAYMENT,
      inlineOptions: {
        width: newOptions.width,
        height: newOptions.height || '450px'
      },
      onCancel: newOptions.onCancel
    });
    const props = { ...parsePayload(payload), ...newOptions, apiKey: options.apiKey || options.token, tokenType: 'session' };
    const targetId = newOptions.containerId || frame.rootElementId;
    return frame.render(props, targetId);
  },

  // Returns a standalone transaction URL built from the passed payload and config.
  buildTransactionUrl(payload = {}, config = {}) {
    const encodedPayload = encodeURI(JSON.stringify(payload));
    const encodedConfig = encodeURI(JSON.stringify(config));
    const env = config.env;
    return `${
      BASE_URLS[env]
    }/standalone/create-transaction/?payload=${encodedPayload}&config=${encodedConfig}`;
  }
};
