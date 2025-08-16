import { c as defineEventHandler, e as setHeader, f as setResponseStatus } from '../../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:module';
import 'ipx';
import 'node:path';

const com_chrome_devtools_json = defineEventHandler((event) => {
  setHeader(event, "Content-Type", "application/json; charset=utf-8");
  setResponseStatus(event, 204);
  return null;
});

export { com_chrome_devtools_json as default };
//# sourceMappingURL=com.chrome.devtools.json.mjs.map
