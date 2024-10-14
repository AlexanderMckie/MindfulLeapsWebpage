import coreSDK from '@medipass/web-sdk';

import sdk from '../index';

export function getProvidersStatus(options, requestOptions) {
  const { query } = options || {};
  if (!query.providerNumber) {
    throw new Error('`query.providerNumber` is a required field.');
  }

  const businessId = sdk.business ? sdk.business._id : options.businessId;

  return coreSDK.staff.getProvidersStatus(businessId, query, requestOptions);
}
