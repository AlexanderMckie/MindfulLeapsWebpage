import coreSDK from '@medipass/web-sdk';
import _find from 'lodash/find';
import _get from 'lodash/get';

import sdk from '../index';

export async function getBusinessClaimItems(options, requestOptions) {
  const { query } = options || {};
  const businessId = sdk.business ? sdk.business._id : options.businessId;
  if (query.funderCode) {
    const funder = _find(await coreSDK.funders.getFunders(), { code: query.funderCode });
    if (funder) query.funderId = _get(funder, '_id');

  }
  return coreSDK.claimItems.getBusinessClaimItems(businessId, query, requestOptions);
}
