"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppResponse = void 0;
const AppResponse = (isSuccess = true, data, message, status = 200) => {
    return {
        statusCode: status,
        message,
        success: isSuccess,
        data,
    };
};
exports.AppResponse = AppResponse;
//# sourceMappingURL=appResponse.js.map