define(["require", "exports", 'aurelia-validation'], function (require, exports, aurelia_validation_1) {
    "use strict";
    var Action = (function () {
        function Action(entity) {
            this.Id = entity.Id || 0;
            this.CodeName = entity.CodeName;
            this.PublicDomainName = entity.PublicDomainName;
            this.ControllerName = entity.ControllerName;
            this.ActionName = entity.ActionName;
            this.ActionDisplayName = entity.ActionDisplayName;
            this.AreaName = entity.AreaName;
            this.IsActive = entity.IsActive;
            this.StartDate = entity.StartDate || new Date();
            this.EndDate = entity.EndDate || new Date();
            this.Description = entity.Description;
            this.ListRole = entity.ListRole;
        }
        return Action;
    }());
    exports.Action = Action;
    var ActionGroup = (function () {
        function ActionGroup(entity) {
            this.Id = entity.Id || 0;
            this.Name = entity.Name;
            this.Title = entity.Title;
            this.CodeName = entity.CodeName;
            this.IsPrivate = entity.IsPrivate;
            this.ActionActionGroupRefs = entity.ActionActionGroupRefs;
        }
        return ActionGroup;
    }());
    exports.ActionGroup = ActionGroup;
    aurelia_validation_1.ValidationRules.customRule('moreThanDate', function (value, obj, otherPropertyName) {
        if (value) {
            if (!obj[otherPropertyName])
                return false;
        }
        return (value === null
            || value === undefined
            || value === ''
            || obj[otherPropertyName] === null
            || obj[otherPropertyName] === undefined
            || obj[otherPropertyName] === '')
            && (!(value === null
                || value === undefined
                || value === '') !== (obj[otherPropertyName] === null
                || obj[otherPropertyName] === undefined
                || obj[otherPropertyName] === ''))
            || (new Date(value) > new Date(obj[otherPropertyName])
                && obj[otherPropertyName]);
    }, '${$displayName} không hợp lệ', function (otherPropertyName) { return ({ otherPropertyName: otherPropertyName }); });
    aurelia_validation_1.ValidationRules.customRule('lessThanDate', function (value, obj, otherPropertyName) {
        if (value) {
            if (!obj[otherPropertyName])
                return false;
        }
        return (value === null
            || value === undefined
            || value === ''
            || obj[otherPropertyName] === null
            || obj[otherPropertyName] === undefined
            || obj[otherPropertyName] === '')
            && (!(value === null
                || value === undefined
                || value === '') !== (obj[otherPropertyName] === null
                || obj[otherPropertyName] === undefined
                || obj[otherPropertyName] === ''))
            || (new Date(value) < new Date(obj[otherPropertyName])
                && obj[otherPropertyName]);
    }, '${$displayName} không hợp lệ', function (otherPropertyName) { return ({ otherPropertyName: otherPropertyName }); });
    aurelia_validation_1.ValidationRules
        .ensure(function (x) { return x.StartDate; }).satisfiesRule('lessThanDate', 'EndDate')
        .ensure(function (x) { return x.EndDate; }).satisfiesRule('moreThanDate', 'StartDate')
        .on(Action);
});

//# sourceMappingURL=Action.js.map
