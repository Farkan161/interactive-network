"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dateFormat;
function dateFormat(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }).format(date);
}
