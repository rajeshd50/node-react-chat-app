"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const fs = require("fs");
async function bootstrap() {
    const httpsOptions = {
        key: fs.readFileSync('/etc/letsencrypt/live/letschatapi.appswithfun.com/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/letschatapi.appswithfun.com/fullchain.pem'),
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        httpsOptions,
    });
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: '*',
        methods: 'OPTION,PUT,POST,GET,DELETE'
    });
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map