"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Path2D = _interopRequireDefault(require("./classes/Path2D"));
var _CanvasGradient = _interopRequireDefault(require("./classes/CanvasGradient"));
var _CanvasPattern = _interopRequireDefault(require("./classes/CanvasPattern"));
var _CanvasRenderingContext2D = _interopRequireDefault(require("./classes/CanvasRenderingContext2D"));
var _DOMMatrix = _interopRequireDefault(require("./classes/DOMMatrix"));
var _ImageData = _interopRequireDefault(require("./classes/ImageData"));
var _TextMetrics = _interopRequireDefault(require("./classes/TextMetrics"));
var _ImageBitmap = _interopRequireDefault(require("./classes/ImageBitmap"));
var _prototype = _interopRequireDefault(require("./mock/prototype"));
var _createImageBitmap = _interopRequireDefault(require("./mock/createImageBitmap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Created by hustcc 17/12/25.
 * Adapted to Vitest by schirrel 01/03/23
 * Contract: i@hust.cc
 */
var _default = win => {
  const d = win.document;
  const f = win.document.createElement;
  if (!win.Path2D) win.Path2D = _Path2D.default;
  if (!win.CanvasGradient) win.CanvasGradient = _CanvasGradient.default;
  if (!win.CanvasPattern) win.CanvasPattern = _CanvasPattern.default;
  if (!win.CanvasRenderingContext2D) win.CanvasRenderingContext2D = _CanvasRenderingContext2D.default;
  if (!win.DOMMatrix) win.DOMMatrix = _DOMMatrix.default;
  if (!win.ImageData) win.ImageData = _ImageData.default;
  if (!win.TextMetrics) win.TextMetrics = _TextMetrics.default;
  if (!win.ImageBitmap) win.ImageBitmap = _ImageBitmap.default;
  if (!win.createImageBitmap) win.createImageBitmap = _createImageBitmap.default;
  (0, _prototype.default)();
  return win;
};
exports.default = _default;