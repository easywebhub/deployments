define(["require", "exports", 'aurelia-validation'], function (require, exports, aurelia_validation_1) {
    "use strict";
    var CampaignGift = (function () {
        function CampaignGift(entity) {
            if (entity) {
                this.Id = (entity && entity.Id) ? entity.Id : 0;
                this.Name = entity.Name;
                this.Image = entity.Image;
                this.Link = entity.Link;
                this.ListRoles = entity.ListRoles;
                this.Price = entity.Price;
                this.OldPrice = entity.OldPrice;
                this.GetPriceByProductCode = entity.GetPriceByProductCode;
                this.ProductCode = entity.ProductCode;
                this.StoreCode = entity.StoreCode;
                this.Type = entity.Type;
                this.Description = entity.Description;
                this.ProductColorCode = entity.ProductColorCode;
                this.IsVtaProduct = entity.IsVtaProduct;
            }
        }
        return CampaignGift;
    }());
    exports.CampaignGift = CampaignGift;
    aurelia_validation_1.ValidationRules
        .ensure(function (x) { return x.Name; }).required().withMessage('Yêu cầu nhập tên').ensure(function (x) { return x.StoreCode; }).required().withMessage("yêu cầu nhập StoreCode").on(CampaignGift);
    var GiftCoinConfig = (function () {
        function GiftCoinConfig() {
        }
        return GiftCoinConfig;
    }());
    exports.GiftCoinConfig = GiftCoinConfig;
});

//# sourceMappingURL=CampaignGift.js.map
