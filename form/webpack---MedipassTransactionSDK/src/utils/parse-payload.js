export default function parsePayload(payload) {
  const newPayload = Object.entries(payload).reduce(
    (currentPayload, [key, value]) => {
      if (value && typeof value === 'object') {
        if (Array.isArray(value)) {
          return { ...currentPayload, [key]: value.map(parsePayload) };
        } else {
          return { ...currentPayload, [key]: parsePayload(value) };
        }
      }
      if (typeof value === 'string') {
        return { ...currentPayload, [key]: normalizeString(value) };
      }
      return { ...currentPayload, [key]: value };
    },
    {}
  );
  return newPayload;
}

function normalizeString(value) {
  const newValue = encodeURIComponent(value.replace('–', '-').replace('–', '-').replace('’', '\'').replace('′', '\''));
  return newValue;
}
