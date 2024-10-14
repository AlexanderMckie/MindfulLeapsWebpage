import coreSDK from '@medipass/web-sdk';
import fileSaver from 'file-saver';
import _get from 'lodash/get';

import sdk from '../index';

export async function downloadPDF(options, requestOptions, { suppressLocalDownload = false } = {}) {
  const transaction = await getBusinessTransaction(options, requestOptions);
  const v3 = transaction._schemaVersion === '3';
  const claimId = _get(transaction, 'claims[0]._id');

  let pdf;
  if (v3) {
    pdf = await coreSDK.transactions.getTransactionClaimPDF(transaction._id, claimId, requestOptions);
  } else {
    pdf = await coreSDK.transactions.getTransactionPDF(transaction._id, requestOptions);
  }

  const blob = new Blob([pdf], { type: 'application/pdf' });

  if(!suppressLocalDownload) {
    fileSaver.saveAs(blob, `statement_${transaction.transactionId || transaction._id}.pdf`);
  }

  return blob;
}

export function getPaymentReport(options, requestOptions) {
  const { transactionId, query } = options || {};
  const businessId = sdk.business ? sdk.business._id : options.businessId;
  return coreSDK.transactions.getBusinessTransactionPaymentReport(businessId, transactionId, query, requestOptions);
}

export function getProcessingReport(options, requestOptions) {
  const { transactionId, query } = options || {};
  const businessId = sdk.business ? sdk.business._id : options.businessId;
  return coreSDK.transactions.getBusinessTransactionProcessingReport(businessId, transactionId, query, requestOptions);
}

export function getBusinessTransaction(options, requestOptions) {
  const { invoiceReference, transactionId } = options || {};
  const businessId = sdk.business ? sdk.business._id : options.businessId;
  if (invoiceReference) {
    return coreSDK.transactions.getBusinessTransactionByInvoiceReference(businessId, invoiceReference, requestOptions);
  }
  return coreSDK.transactions.getBusinessTransaction(businessId, transactionId, requestOptions);
}

export async function getTransactionDetailsURL(options, requestOptions) {
  const transaction = await getBusinessTransaction(options, requestOptions);
  return { url: `${sdk.BASE_URLS[sdk.config.env]}/transactions/view?id=${transaction._id}` };
}

export async function getPaymentLink(options, requestOptions) {
  const { transactionId } = options || {};
  const paymentLink = await sdk.transactions.getPaymentLink(transactionId, requestOptions);
  return paymentLink;
}

export function cancelBusinessTransaction(options, requestOptions) {
  const { body, transactionId } = options || {};
  return coreSDK.transactions.cancelInvoice(transactionId, body, requestOptions);
}

export function getTransactionCancelReasons(options, requestOptions) {
  const { funderId } = options || {};
  const businessId = sdk.business ? sdk.business._id : options.businessId;
  return coreSDK.messageMappings.getBusinessMessageMappings(businessId, {
    funderId,
    type: 'cancellation',
    limit: 99,
    page: 1
  }, requestOptions);
}
