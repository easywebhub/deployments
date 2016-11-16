var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../../services/Account/StudentServices', '../../resources/Excel/importExcel', 'lodash'], function (require, exports, aurelia_framework_1, StudentServices_1, importExcel_1, _) {
    "use strict";
    var Student = (function () {
        function Student(studentServices, bindingEngine, excelCls) {
            var _this = this;
            this.isExport = false;
            this.testTypes = {
                "FullName": "String",
                "Phone": "String",
                "Email": "String",
                "Sex": "String",
                "SchoolName": "String",
                "SchoolCode": "String",
                "StudentCode": "String",
                "Address": "String",
                "UserId": "String",
                "UserStatus": "String",
                "Avartar": "String",
                "CreatedDate": "String"
            };
            this.headerTable = ["Họ tên", "Điện thoại", "Email", "Sex", "Tên trường", "Mã trường", "Mã sinh viên", "Địa chỉ", "Mã người dùng", "Trạng thái", "Avartar", "Ngày tạo"];
            this.studentServices = studentServices;
            this.excelCls = excelCls;
            this.itemperpage = 10;
            this.pagesize = 6;
            this.current = 1;
            this.meta = {};
            this.meta.EntityFrom = this.itemperpage * (this.current - 1);
            this.meta.EntityTo = this.itemperpage;
            var subscriptioncurrent = bindingEngine.propertyObserver(this, 'current')
                .subscribe(function () {
                _this.getData();
            });
        }
        Student.prototype.activate = function () {
            var _this = this;
            this.meta.EntityFrom = this.itemperpage * (this.current - 1);
            this.meta.EntityTo = this.itemperpage * this.current;
            return Promise.all([this.studentServices.GetListStudent(this.meta), this.studentServices.GetListSchool()]).then(function (rs) {
                if (_this.isExport == true) {
                    return Promise.resolve(rs[0].Data);
                }
                else if (_this.isExport == false) {
                    _this.listStudent = rs[0].Data;
                    _this.total = rs[0].ItemsCount;
                    _this.listSchool = _.uniqBy(Array.from(rs[1]), function (x) { return x.SchoolCode; });
                }
            });
        };
        Student.prototype.getData = function () {
            this.activate();
        };
        Student.prototype.attached = function () {
            $(function () {
                $('.pop').on('click', function () {
                    $('.imagepreview').attr('src', this.src);
                    $('#imagemodal').modal('show');
                });
            });
        };
        Student.prototype.exportExcel = function () {
            var _this = this;
            var excel = {};
            var testJson = [];
            this.meta.IsExport = true;
            this.searchBy();
            this.isExport = true;
            this.activate().then(function (rs) {
                for (var _i = 0, rs_1 = rs; _i < rs_1.length; _i++) {
                    var item = rs_1[_i];
                    excel.FullName = item.FullName;
                    excel.Phone = item.Phone;
                    excel.Email = item.Email;
                    excel.Sex = item.Sex;
                    excel.SchoolName = item.SchoolName;
                    excel.SchoolCode = item.SchoolCode;
                    excel.StudentCode = item.StudentCode;
                    excel.Address = item.Address;
                    excel.UserId = item.UserId;
                    excel.UserStatus = item.UserStatus;
                    excel.Avartar = item.Avartar;
                    excel.CreatedDate = item.CreatedDate;
                    testJson.push(excel);
                    excel = {};
                }
                _this.download(_this.excelCls.jsonToSsXml(testJson, _this.headerTable, _this.testTypes), 'Excel.xls', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            });
        };
        Student.prototype.download = function (content, filename, contentType) {
            if (!contentType)
                contentType = 'application/octet-stream';
            var a = document.createElement('a');
            var blob = new Blob([content], {
                'type': contentType
            });
            a.href = window.URL.createObjectURL(blob);
            a.download = filename;
            a.target = '_blank';
            a.click();
        };
        Student.prototype.searchBy = function () {
            this.isExport = false;
            this.getData();
        };
        Student.prototype.UpdateStatus = function (item) {
            var _this = this;
            if (item.Status == "") {
            }
            else {
                this.studentServices.UpdateUserStatus(item).then(function (rs) {
                    if (rs.result == true) {
                        swal({ title: "Thông báo", text: "Cập nhật trạng thái người dùng thành công", timer: 2500, showConfirmButton: true, type: "success" });
                        _this.activate();
                    }
                    else {
                        swal({ title: "Thông báo", text: "Cập nhật trạng thái người dùng thất bại", timer: 2500, showConfirmButton: true });
                    }
                });
            }
        };
        Student = __decorate([
            aurelia_framework_1.inject(StudentServices_1.StudentServices, aurelia_framework_1.BindingEngine, importExcel_1.ExcelCls), 
            __metadata('design:paramtypes', [Object, Object, Object])
        ], Student);
        return Student;
    }());
    exports.Student = Student;
});

//# sourceMappingURL=Student.js.map
