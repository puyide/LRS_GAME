jade.templates = jade.templates || {};
jade.templates['editStorageInfo'] = (function(){
  return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (bid, bidSum, buyer, code, createUser, remark, storageId) {
buf.push("<!--Created by fy on 15-12-22.\n 编辑商品信息--><div class=\"row\"><div class=\"col-xs-12\"><iframe id=\"myIframe\" name=\"myIframe\" width=\"0\" height=\"0\" style=\"display: none;\"></iframe><form id=\"editForm\" method=\"post\" role=\"form\" target=\"myIframe\" class=\"form-horizontal\"><input type=\"hidden\" name=\"id\"" + (jade.attr("value", '' + (storageId) + '', true, false)) + "/><div class=\"form-group\"><label for=\"code\" class=\"col-sm-3 control-label no-padding-right\"> 商品编号</label><div class=\"col-sm-9\"><input id=\"goodsName\" type=\"text\" name=\"code\"" + (jade.attr("value", '' + (code) + '', true, false)) + " class=\"col-xs-10 col-sm-5\"/></div></div><div class=\"space-4\"></div><div class=\"form-group\"><label for=\"bid\" class=\"col-sm-3 control-label no-padding-right\"> 商品进价</label><div class=\"col-sm-9\"><input id=\"code\" type=\"number\" name=\"bid\"" + (jade.attr("value", '' + (bid) + '', true, false)) + " class=\"col-xs-10 col-sm-5\"/><!--span.help-inline.col-xs-12.col-sm-7span.middle 请填写数字--></div></div><div class=\"space-4\"></div><div class=\"form-group\"><label for=\"bidSum\" class=\"col-sm-3 control-label no-padding-right\"> 总计</label><div class=\"col-sm-9\"><input id=\"bidSum\" type=\"text\" name=\"bidSum\"" + (jade.attr("value", '' + (bidSum) + '', true, false)) + " class=\"col-xs-10 col-sm-5\"/><!--span.help-inline.col-xs-12.col-sm-7span.middle 请填写数字--></div></div><div class=\"space-4\"></div><div class=\"form-group\"><label for=\"buyer\" class=\"col-sm-3 control-label no-padding-right\"> 采购人员</label><div class=\"col-sm-9\"><input id=\"buyer\" type=\"text\" name=\"buyer\"" + (jade.attr("value", '' + (buyer) + '', true, false)) + " class=\"col-xs-10 col-sm-5\"/><!--span.help-inline.col-xs-12.col-sm-7span.middle 请填写数字--></div></div><div class=\"space-4\"></div><div class=\"form-group\"><label for=\"createUser\" class=\"col-sm-3 control-label no-padding-right\"> 录入人员</label><div class=\"col-sm-9\"><input id=\"createUser\" type=\"text\" name=\"createUser\"" + (jade.attr("value", '' + (createUser) + '', true, false)) + " class=\"col-xs-10 col-sm-5\"/><!--span.help-inline.col-xs-12.col-sm-7span.middle 请填写数字--></div></div><div class=\"space-4\"></div><div class=\"form-group\"><label for=\"remark\" class=\"col-sm-3 control-label no-padding-right\"> 备注</label><div class=\"col-sm-9\"><input id=\"remark\" type=\"text\" name=\"remark\"" + (jade.attr("value", '' + (remark) + '', true, false)) + " class=\"col-xs-10 col-sm-5\"/><!--span.help-inline.col-xs-12.col-sm-7span.middle 请填写数字--></div></div><div class=\"space-4s\"></div></form></div></div>");}.call(this,"bid" in locals_for_with?locals_for_with.bid:typeof bid!=="undefined"?bid:undefined,"bidSum" in locals_for_with?locals_for_with.bidSum:typeof bidSum!=="undefined"?bidSum:undefined,"buyer" in locals_for_with?locals_for_with.buyer:typeof buyer!=="undefined"?buyer:undefined,"code" in locals_for_with?locals_for_with.code:typeof code!=="undefined"?code:undefined,"createUser" in locals_for_with?locals_for_with.createUser:typeof createUser!=="undefined"?createUser:undefined,"remark" in locals_for_with?locals_for_with.remark:typeof remark!=="undefined"?remark:undefined,"storageId" in locals_for_with?locals_for_with.storageId:typeof storageId!=="undefined"?storageId:undefined));;return buf.join("");
};
})();