export default DS.RESTSerializer.extend({
  normalizePayload: function(payload) {
    delete payload.http_code;
    return payload;
  }
});
