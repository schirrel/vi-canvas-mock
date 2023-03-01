"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupVitestCanvasMock = setupVitestCanvasMock;
exports.ver = void 0;
var _window = _interopRequireDefault(require("./window"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Created by hustcc 17/12/25.
 * Contract: i@hust.cc
 */

// mock global window
// TODO: Force coverage to ignore this branch
if (typeof window !== 'undefined') {
  (0, _window.default)(global.window);
}
const ver = "0.1.0";
exports.ver = ver;
function setupVitestCanvasMock(window) {
  (0, _window.default)(window || global.window);
}