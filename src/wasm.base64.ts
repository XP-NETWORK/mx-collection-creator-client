export const CONTRACT_WASM = Buffer.from(
  'AGFzbQEAAAABUA5gAn9/AGABfwF/YAAAYAABf2ACf38Bf2ABfwBgBH9/f38AYAN/f38AYAN/f38Bf2AEf39/fwF/YAF/AX5gAn9+AGAFf39/f38AYAJ/fwF+ApsEFwNlbnYLc2lnbmFsRXJyb3IAAANlbnYKbUJ1ZmZlck5ldwADA2Vudg1tQnVmZmVyQXBwZW5kAAQDZW52EmJpZ0ludEdldENhbGxWYWx1ZQAFA2VudhJtQnVmZmVyQXBwZW5kQnl0ZXMACANlbnYSbWFuYWdlZFNpZ25hbEVycm9yAAUDZW52EG1CdWZmZXJHZXRMZW5ndGgAAQNlbnYbc21hbGxJbnRHZXRVbnNpZ25lZEFyZ3VtZW50AAoDZW52D2dldE51bUFyZ3VtZW50cwADA2VudhNtQnVmZmVyU3RvcmFnZVN0b3JlAAQDZW52GG1hbmFnZWRHZXRPcmlnaW5hbFR4SGFzaAAFA2VudhNtQnVmZmVyR2V0Qnl0ZVNsaWNlAAkDZW52D21CdWZmZXJTZXRCeXRlcwAIA2Vudg5iaWdJbnRTZXRJbnQ2NAALA2VudgliaWdJbnRBZGQABwNlbnYUbUJ1ZmZlckNvcHlCeXRlU2xpY2UACQNlbnYSbUJ1ZmZlclN0b3JhZ2VMb2FkAAQDZW52Em1CdWZmZXJHZXRBcmd1bWVudAAEA2VudhBtYW5hZ2VkQXN5bmNDYWxsAAYDZW52DmNoZWNrTm9QYXltZW50AAIDZW52DW1CdWZmZXJGaW5pc2gAAQNlbnYTZ2V0TnVtRVNEVFRyYW5zZmVycwADA2Vudg1tYW5hZ2VkQ2FsbGVyAAUDNzYMAgEABgQIAQMBAAYFAgYHAwMGAAAFAwAGAAcBCQcFAwAHAQEGDQAABAQEAQEAAQUCAgICAgIFAwEAAwYWA38BQYCACAt/AEH10ggLfwBBgNMICwdkCAZtZW1vcnkCAARpbml0AEcLY29sbGVjdGlvbnMASAhjcmVhdG9ycwBJEWNyZWF0ZV9jb2xsZWN0aW9uAEoIY2FsbEJhY2sASwpfX2RhdGFfZW5kAwELX19oZWFwX2Jhc2UDAgrKKDYuAAJAIAEgAk0EQCACIARNDQEQGAALEBgACyAAIAIgAWs2AgQgACABIANqNgIACwUAEEwACw8BAX8QASIBIAAQAhogAQsJACAAIAEQ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QQMQICIAEAZBIEcEQEGugwhBBUH7gghBEBAbAAsgACEHIAFBCGoQRhA2IgAQFiABKAIQIAAQQUUNASAGEBkQRUFnEBAaQWcQBkUNAkHxgwhBGRAaAAtBs4AIQSUQAAALQYqECEEkEBoACwJ/QfTSCC0AACIABEBBdUH/////ByAAGwwBC0H00ghBAToAAEF1EANBdQshABA2IgNCABANIAMgAyAAEA4gAUGBgoQINgArIAFBgYKECDYCKCMAQSBrIgIkABAnGiABQShqIgAtAAYhCCAALQAFIQkgAC0ABCEKIAAtAAMhCyAALQACIQwgAC0AASENIAAtAAAhDiACEChBn4IIQRAQKSACQRhqIg8gAzYCACAEIAJBEGoiAygCACIAECogBSAAECogAEGUgQhBCSAOECUgAEGdgQhBByANECUgAEGkgQhBCCAMECUgAEGsgQhBGCALECUgAEHEgQhBDiAKECUgAEHSgQhBCiAJECUgAEHcgQhBEiAIECUgAUEIaiIEIgBBGGogDykDADcDACAAQRBqIAMpAwA3AwAgAEEIaiACQQhqKQMANwMAIAAgAikDADcDACACQSBqJAAgASgCECEDIAEoAiAhBSABKQIUIRAgBhAfIgAQKiAHIAAQKiABQRhqIgIgADYCCCACQRM2AgQgAkGLgwg2AgAgASAQNwMQIAEgBTYCDCABIAM2AgggBBAsAAvEBwIIfwF+IwBB8ABrIgAkAAJAAkACQBAtIgIQOiIEEAZFDQAgAEEQaiIBIAQQGRAhIAEQQiEFIAEQQyEBEB8hBANAIAEEQCAEIABBEGoQQhArIAFBAWshAQwBCwsgACgCFCAAKAIQRw0BIABBIGoiAy0AAARAQejSCEEANgIAQezSCEEAOgAAC0FsQQBBABAMGiACQWwQCRogAEHQAGoiAkIANwMAIABByABqIgZCADcDACAAQUBrIgdCADcDACAAQgA3AzggAEEIaiAAQThqQSAgBRAGIgEQOyAFQQAgACgCCCAAKAIMEDMaIABBKGogAikDADcDACADIAYpAwA3AwAgAEEYaiAHKQMANwMAIAAgACkDODcDECABRQ0AAkAgAUETRw0AIABBEGohAUEAIQJBEyEDQYuDCCEFAkADQCABLQAAIgYgBS0AACIHRgRAIAFBAWohASAFQQFqIQUgA0EBayIDDQEMAgsLIAYgB2shAgsgAg0AECRB8NIIKAIAQQBIBEBB2IAIQREQAAALIABBADYCWCAAQThqIQUjAEEQayIBJAACfwJAIABB2ABqIgYiAhAeEAciCEKAgICAEFQEQCAIpyIDRSADQeveAUZyDQECfyACKAIAQfDSCCgCAE4EQBAfDAELIAIQHhAgCyECIAEgAzYCBCABQQE2AgBBCAwCC0GogwhBBkG5gghBDhAbAAsgAhAeECAhAiABQQA2AgBBBAsgAWogAjYCACAFIAEpAwA3AgAgBUEIaiABQQhqKAIANgIAIAFBEGokAEHw0ggoAgAgACgCWEoEQEHpgAhBEhAAAAsgACgCOCAAKAI8IQIgBBAyIQMgAEHgAGoiB0EANgIAIAAgAzYCXCAAIAQ2AlgQJCAGQZ6DCEEKEB0QGSEEIABBQGsiAyAHKAIANgIAIAAgACkDWDcDOCAFQa6DCEEFEB0QGSIFEAZBIEcEQEGugwhBBUH7gghBEBAbAAsgACgCPCADKAIASwRAQemACEESEAAAC0UNAxBMAAtBs4MIQTYQAAALIABB8ABqJAAPC0G5gghBDhBEAAsgBBBFIAIQGRAJGiMAQSBrIgEkACABQQhqEChB7oEIQREQKRAfGiACEBkhBCABQRhqIgIoAgAiAyAEECsgBSADECogAEHYAGoiBEEQaiACKQMANwMAIARBCGogAUEQaikDADcDACAEIAEpAwg3AwAgAUEgaiQAECchASAAQQA2AkggACABNgI8IAAgACkCZDcDQCAAIAAoAmA2AjggAEE4ahAsAAsLAEHEhAhBDhAAAAsL2QQEAEGAgAgL/wFzZXJpYWxpemVyIGRlY29kZSBlcnJvcjogYXJndW1lbnQgZGVjb2RlIGVycm9yICgpOiBmdW5jdGlvbiBkb2VzIG5vdCBhY2NlcHQgRVNEVCBwYXltZW50dG9vIGZldyBhcmd1bWVudHN0b28gbWFueSBhcmd1bWVudHN3cm9uZyBudW1iZXIgb2YgYXJndW1lbnRzY2FuRnJlZXplY2FuV2lwZWNhblBhdXNlY2FuVHJhbnNmZXJORlRDcmVhdGVSb2xlY2FuQ2hhbmdlT3duZXJjYW5VcGdyYWRlY2FuQWRkU3BlY2lhbFJvbGVzdHJhbnNmZXJPd25lcnNoaXAAQYiCCAsBAQBBnIIIC7YCAv//aXNzdWVOb25GdW5naWJsZUNCX0NMT1NVUkVpbnB1dCB0b28gbG9uZ2lucHV0IHRvbyBzaG9ydC5pdGVtLmluZGV4c3RvcmFnZSBkZWNvZGUgZXJyb3I6IC5sZW5iYWQgYXJyYXkgbGVuZ3RoZXNkdF9pc3N1ZV9jYWxsYmFja2lkZW50aWZpZXJyZXN1bHRvd25lcm5vIGNhbGxiYWNrIGZ1bmN0aW9uIHdpdGggdGhhdCBuYW1lIGV4aXN0cyBpbiBjb250cmFjdGNyZWF0b3JzQ29sbGVjdGlvbiBhbHJlYWR5IGV4aXN0c09ubHkgY3JlYXRvcnMgY2FuIGNyZWF0ZSBjb2xsZWN0aW9uc2NvbGxlY3Rpb25zZmFsc2V0cnVlAABwYW5pYyBvY2N1cnJlZABB1IQICwSc////',
  'base64'
);
