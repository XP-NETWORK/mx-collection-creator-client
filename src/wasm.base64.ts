export const CONTRACT_WASM = Buffer.from(
  'AGFzbQEAAAABUA5gAX8Bf2ACf38AYAAAYAF/AGAAAX9gAn9/AX9gBH9/f38AYAN/f38AYAN/f38Bf2AEf39/fwF/YAJ/fgBgAX8BfmAFf39/f38AYAJ/fwF+ApsEFwNlbnYLc2lnbmFsRXJyb3IAAQNlbnYKbUJ1ZmZlck5ldwAEA2Vudg1tQnVmZmVyQXBwZW5kAAUDZW52EmJpZ0ludEdldENhbGxWYWx1ZQADA2VudhJtQnVmZmVyQXBwZW5kQnl0ZXMACANlbnYSbWFuYWdlZFNpZ25hbEVycm9yAAMDZW52EG1CdWZmZXJHZXRMZW5ndGgAAANlbnYPZ2V0TnVtQXJndW1lbnRzAAQDZW52E21CdWZmZXJTdG9yYWdlU3RvcmUABQNlbnYYbWFuYWdlZEdldE9yaWdpbmFsVHhIYXNoAAMDZW52E21CdWZmZXJHZXRCeXRlU2xpY2UACQNlbnYPbUJ1ZmZlclNldEJ5dGVzAAgDZW52DmJpZ0ludFNldEludDY0AAoDZW52CWJpZ0ludEFkZAAHA2VudhRtQnVmZmVyQ29weUJ5dGVTbGljZQAJA2VudhJtQnVmZmVyU3RvcmFnZUxvYWQABQNlbnYSbUJ1ZmZlckdldEFyZ3VtZW50AAUDZW52G3NtYWxsSW50R2V0VW5zaWduZWRBcmd1bWVudAALA2VudhBtYW5hZ2VkQXN5bmNDYWxsAAYDZW52DmNoZWNrTm9QYXltZW50AAIDZW52DW1CdWZmZXJGaW5pc2gAAANlbnYTZ2V0TnVtRVNEVFRyYW5zZmVycwAEA2Vudg1tYW5hZ2VkQ2FsbGVyAAMDQUAMAgABBgUICAEABAAAAAABBgMBAwICBgcHAQEEBAYDBAEGAQcACQcDBAgBBwAABg0BAQUFBQAAAQADAgICAgICBQMBAAMGFgN/AUGAgAgLfwBBldUIC38AQaDVCAsHZAgGbWVtb3J5AgAEaW5pdABRC2NvbGxlY3Rpb25zAFIIY3JlYXRvcnMAUxFjcmVhdGVfY29sbGVjdGlvbgBUCGNhbGxCYWNrAFUKX19kYXRhX2VuZAMBC19faGVhcF9iYXNlAwIK6i1ALgACQCABIAJNBEAgAiAETQ0BEBgACxAYAAsgACACIAFrNgIEIAAgASADajYCAAsFABBWAAsPAQF/EAEiASAAEAIa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QRBqKQMANwMAIAIgASkDCDcDACABQSBqJAAQMiEBIAAoAkghAyAAKQJMIQggAEHYAGoQITYCACAAQdQAakEXNgIAIABBxYMINgJQIAAgCDcDSCAAIAE2AkQgACADNgJAIAIQNQALQfSDCEE2EAAAC0HHgghBDhBOAAsgAhBPIAMQGRAIGiAAQUBrIQQjAEEgayIBJAAgAUEIakHugQhBDhAvIAMgASgCGCIGEDAgBSAGEDBBfiECA0AgAgRAIAJB8YQIai0AACIHBEAgBiAHQQJ0IgdB0IYIaigCACAHQayGCGooAgAQHBAxCyACQQFqIQIMAQsLIAQgASkDCDcDACAEQRBqIAFBGGopAwA3AwAgBEEIaiABQRBqKQMANwMAIAFBIGokABAyIQYgACgCSCEHIAApAkwhCCAFECEiARAwIAMgARAwIABB0ABqIgIgATYCCCACQRY2AgQgAkGvgwg2AgAgACAINwNIIAAgBjYCRCAAIAc2AkAgBBA1AAsQVgALCwBBnIYIQQ4QAAALC/oGBABBgIAIC40Cc2VyaWFsaXplciBkZWNvZGUgZXJyb3I6IGFyZ3VtZW50IGRlY29kZSBlcnJvciAoKTogZnVuY3Rpb24gZG9lcyBub3QgYWNjZXB0IEVTRFQgcGF5bWVudHRvbyBmZXcgYXJndW1lbnRzdG9vIG1hbnkgYXJndW1lbnRzd3JvbmcgbnVtYmVyIG9mIGFyZ3VtZW50c2NhbkZyZWV6ZWNhbldpcGVjYW5QYXVzZWNhblRyYW5zZmVyTkZUQ3JlYXRlUm9sZWNhbkNoYW5nZU93bmVyY2FuVXBncmFkZWNhbkFkZFNwZWNpYWxSb2xlc3NldFNwZWNpYWxSb2xldHJhbnNmZXJPd25lcnNoaXAAQZaCCAsBAQBBqoIIC8kEAv//aXNzdWVOb25GdW5naWJsZUNCX0NMT1NVUkVpbnB1dCB0b28gbG9uZ2lucHV0IHRvbyBzaG9ydC5pdGVtLmluZGV4c3RvcmFnZSBkZWNvZGUgZXJyb3I6IC5sZW5iYWQgYXJyYXkgbGVuZ3RoZXNkdF9zZXRfc3BlY2lhbF9yb2xlc2VzZHRfdHJhbnNmZXJfY2FsbGJhY2thZnRlcl90cmFuc2Zlcl9jYWxsYmFja2lkZW50aWZpZXJyZXN1bHR0aWRvd25lcm5vIGNhbGxiYWNrIGZ1bmN0aW9uIHdpdGggdGhhdCBuYW1lIGV4aXN0cyBpbiBjb250cmFjdGNyZWF0b3JzQ29sbGVjdGlvbiBhbHJlYWR5IGV4aXN0c09ubHkgY3JlYXRvcnMgY2FuIGNyZWF0ZSBjb2xsZWN0aW9ucwUDY29sbGVjdGlvbnNmYWxzZXRydWVFU0RUUm9sZUxvY2FsTWludEVTRFRSb2xlTG9jYWxCdXJuRVNEVFJvbGVORlRDcmVhdGVFU0RUUm9sZU5GVEFkZFF1YW50aXR5RVNEVFJvbGVORlRCdXJuRVNEVFJvbGVORlRBZGRVUklFU0RUUm9sZU5GVFVwZGF0ZUF0dHJpYnV0ZXNFU0RUVHJhbnNmZXJSb2xlAAAAcGFuaWMgb2NjdXJyZWQAAAAAAAARAAAAEQAAABEAAAAWAAAADwAAABEAAAAbAAAAEAAAABwDAgCFAgIAlgICAKcCAgC4AgIAzgICAN0CAgDuAgIACQMCAEH0hggLBJz///8=',
  'base64'
);
