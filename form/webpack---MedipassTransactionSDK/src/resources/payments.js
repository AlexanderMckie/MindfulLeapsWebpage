import coreSDK from '@medipass/web-sdk';
import sdk from '../index';

export function getBusinessPatientPaymentMethods(options, requestOptions) {
  const { query } = options || {};
  const { patientId } = query;

  if (!patientId) {
    throw new Error('`query.patientId` is a required field.');
  }

  const businessId = sdk.business ? sdk.business._id : options.businessId;

  return coreSDK.payments.getBusinessPatientPaymentMethods(businessId, query.patientId, requestOptions);
}

export function getBusinessPatientPaymentMethodsByRefId(options, requestOptions) {
  const { query } = options || {};
  
  if (!query) {
    throw new Error('`query` is a required field.');
  }
  
  const { refId } = query;

  if (!refId) {
    throw new Error('`query.refId` is a required field.');
  }

  const businessId = sdk.business ? sdk.business._id : options.businessId;

  return coreSDK.payments.getBusinessPatientPaymentMethodsByRefId(businessId, refId, requestOptions);
}
