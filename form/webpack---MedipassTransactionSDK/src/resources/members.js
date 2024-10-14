import coreSDK from '@medipass/web-sdk';

export function discoverMember(options, requestOptions) {
  const { query } = options || {};
  return coreSDK.members.discoverMember(query, requestOptions);
}
