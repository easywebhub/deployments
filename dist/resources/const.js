define(["require", "exports", '../models/common'], function (require, exports, common_1) {
    "use strict";
    (function (EntityState) {
        EntityState[EntityState["Added"] = 0] = "Added";
        EntityState[EntityState["Deleted"] = 1] = "Deleted";
        EntityState[EntityState["Modified"] = 2] = "Modified";
    })(exports.EntityState || (exports.EntityState = {}));
    var EntityState = exports.EntityState;
    exports.CampaignGiftTypes = [
        { text: "PRODUCT", value: "PRODUCT" },
        { text: "COIN", value: "COIN" }
    ];
    exports.StoreCodes = [
        { text: "-- Chọn StoreCode--", value: "" },
        { text: "VPLUS", value: "CS_0000259" },
        { text: "ONLINE", value: "CS_0000188" },
        { text: "HEADOFFICE", value: "CS_0000042" }
    ];
    exports.ActionGroupCollection = [
        new common_1.SelectListItem("Hoạt động tích lũy ", "HoatDongTichLuy"),
        new common_1.SelectListItem("Hoạt động sử dụng", "HoatDongSuDung")
    ];
});

//# sourceMappingURL=const.js.map
