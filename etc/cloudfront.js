function handler(event) {
  const request = event.request;
  const uri = request.uri;
  if (uri.endsWith('/')) {
    request.uri = `${request.uri}index.html`;
  } else if (!uri.includes('.')) {
    const host = request.headers.host.value;
    const path = uri.substring(uri.lastIndexOf('/'));
    const response = {
      statusCode: 302,
      statusDescription: 'Found',
      headers: {
        location: {
          value: `https://${host}${path}/index.html`
        }
      }
    }
    return response;
  }
  return request;
}
