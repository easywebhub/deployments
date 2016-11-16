define(["require", "exports", 'aurelia-validation'], function (require, exports, aurelia_validation_1) {
    "use strict";
    var UserModel = (function () {
        function UserModel(user) {
            this.Id = '';
            this.CreateDate = "";
            this.FullName = '';
            this.Email = '';
            this.UserName = '';
            this.PhoneNumber = '';
            this.Status = '';
            this.Sex = '';
            this.PersonalId = '';
            this.NewComment = '';
            this.Comment = '';
            if (user) {
                this.FullName = user.FullName;
                this.Email = user.Email;
                this.PhoneNumber = user.PhoneNumber;
                this.Status = user.Status;
                this.PersonalId = user.PersonalId;
                this.Sex = user.Sex;
                this.UserName = user.UserName;
                this.Id = user.Id;
                this.CreateDate = user.CreateDate;
                this.roles = user.roles;
                this.NewComment = user.NewComment;
                this.Comment = user.Comment;
            }
        }
        return UserModel;
    }());
    exports.UserModel = UserModel;
    var UpdateUserModel = (function () {
        function UpdateUserModel(model) {
            this.Id = model.Id;
            this.FullName = model.FullName;
            this.Email = model.Email;
            this.Sex = model.Sex;
            this.Status = model.Status;
            this.UserName = model.UserName;
            this.Roles = model.Roles;
            this.PhoneNumber = model.PhoneNumber;
            this.PersonalId = model.PersonalId;
            this.NewComment = model.NewComment;
            this.Comment = model.Comment;
        }
        return UpdateUserModel;
    }());
    exports.UpdateUserModel = UpdateUserModel;
    aurelia_validation_1.ValidationRules
        .ensure(function (x) { return x.FullName; }).required().withMessage('Yêu cầu nhập họ tên')
        .ensure(function (x) { return x.Email; }).email().withMessage("yêu cầu nhập đúng định dạng email").ensure(function (x) { return x.NewComment; }).required().withMessage("yêu cầu nhập Comment")
        .ensure(function (x) { return x.PhoneNumber; }).maxLength(12).minLength(10).on(UserModel);
});

//# sourceMappingURL=UserModels.js.map
