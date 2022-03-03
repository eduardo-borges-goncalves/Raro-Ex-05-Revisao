"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var chunk_1 = require("./funcoes/chunk");
var compact_1 = require("./funcoes/compact");
var fromPairs_1 = require("./funcoes/fromPairs");
var uniq_1 = require("./funcoes/uniq");
var fila_1 = require("./funcoes/fila");
function testChunk() {
    var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var original = __spreadArray([], items, true);
    // chamada ao método.
    var chunked = (0, chunk_1.chunk)(items, 3);
    // o array original não pode ser alterado.
    var naoAlterados = original.every(function (item, index) { return item === items[index]; });
    // verificação do método.
    console.assert(naoAlterados, 'O array original não pode ser alterado');
    console.assert(chunked.length === 4, 'array deve ter 4 grupos');
    console.assert(chunked[0].length === 3, 'primeiro grupo deve ter 3 itens');
    console.assert(chunked[1].length === 3, 'segundo grupo deve ter 3 itens');
    console.assert(chunked[2].length === 3, 'terceiro grupo deve ter 3 itens');
    console.assert(chunked[3].length === 1, 'quarto grupo deve ter 1 item');
}
function testCompact() {
    var items = [0, 1, false, 2, '', 3, null, undefined, '0'];
    var original = __spreadArray([], items, true);
    var expected = [1, 2, 3, '0'];
    // chamada ao método.
    var resultado = (0, compact_1.compact)(items);
    // o array original não pode ser alterado.
    var naoAlterados = original.every(function (item, index) { return item === items[index]; });
    // os itens truthy devem ser mantidos no array resultado.
    var resultadoCorreto = expected.every(function (item, index) { return item === resultado[index]; });
    // verificação do método.
    console.assert(naoAlterados, 'array original não pode ser alterado');
    console.assert(resultadoCorreto, 'todos os objetos esperados devem estar presentes');
}
function testFromPairs() {
    var items = [
        ['name', 'Edgar Allan Poe'],
        ['age', 40],
        ['alive', false]
    ];
    var esperado = {
        name: 'Edgar Allan Poe',
        age: 40,
        alive: false
    };
    // chamada ao método.
    var resultado = (0, fromPairs_1.fromPairs)(items);
    // verificação do método.
    var correto = Object.keys(esperado).every(function (key) { return esperado[key] === resultado[key]; });
    console.assert(correto, 'todos os objetos esperados devem estar presentes');
}
function testUniq() {
    var items = [1, 2, 3, 4, 5, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6];
    var original = __spreadArray([], items, true);
    var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var resultado = (0, uniq_1.uniq)(items);
    // verificação do método.
    var naoAlterados = original.every(function (item, index) { return item === items[index]; });
    var resultadoCorreto = expected.every(function (item, index) { return item === resultado[index]; });
    console.assert(naoAlterados, 'array original não pode ser alterado');
    console.assert(resultadoCorreto, 'todos os objetos esperados devem estar presentes');
}
function testFila() {
    return __awaiter(this, void 0, void 0, function () {
        var mensagens, _i, mensagens_1, mensagem;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fila_1.zerarAquivo)()];
                case 1:
                    _a.sent();
                    mensagens = [
                        'Lorem ipsum dolor sit amet',
                        'consectetur adipiscing elit',
                        'Quisque scelerisque pulvinar lacus',
                        'ut elementum justo commodo',
                        'Nulla ac ullamcorper sapien,',
                        'Pellentesque euismod pharetra erat',
                        'eget commodo ex sodales ut',
                        'Suspendisse porttitor sed felis sit amet molestie',
                        'In sit amet gravida quam',
                        'Nulla vitae nisl a nibh luctus tincidunt',
                    ];
                    _i = 0, mensagens_1 = mensagens;
                    _a.label = 2;
                case 2:
                    if (!(_i < mensagens_1.length)) return [3 /*break*/, 5];
                    mensagem = mensagens_1[_i];
                    return [4 /*yield*/, (0, fila_1.escreveNaFila)(mensagem)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
testChunk();
testCompact();
testFromPairs();
testUniq();
testFila();
