"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyUser = exports.Permission = void 0;
var Permission;
(function (Permission) {
    Permission["ADMIN"] = "admin";
    Permission["READ_ONLY"] = "read-only";
})(Permission || (exports.Permission = Permission = {}));
var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser["GOLD_USER"] = "GOLD_USER";
    LoyaltyUser["SILVER_USER"] = "SILVER_USER";
    LoyaltyUser["BRONZE_USER"] = "BRONZE_USER";
})(LoyaltyUser || (exports.LoyaltyUser = LoyaltyUser = {}));
