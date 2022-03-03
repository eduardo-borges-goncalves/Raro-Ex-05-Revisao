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
exports.__esModule = true;
exports.consumirDaFila = exports.escreveNaFila = exports.escreveArquivo = exports.leArquivo = exports.zerarAquivo = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var ARQUIVO_DE_FILA = "".concat((0, path_1.resolve)('.'), "/files/fila.txt");
/**
 * Os métodos escritos abaixo implementam uma fila de mensagens escritas em
 * arquivo de texto, presente na pasta "files". A cada mensagem escrita nesta fila,
 * (através do método `escreveNaFila`) o código escreve a frase ao final do arquivo.
 * O método `consumirDafila` retira a primeira mensagem escrita no arquivo e a retorna.
 *
 * As funções abaixo estão todas escritas utilizando callbacks como soluções
 * para a manipulação dos arquvos.
 *
 * Tranforme a solução escrita abaixo em um código válido utilizando promises ou
 * async/await.
 */
function zerarAquivo() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, escreveArquivo('')];
        });
    });
}
exports.zerarAquivo = zerarAquivo;
function leArquivo() {
    return new Promise(function (resolve, reject) {
        (0, fs_1.readFile)(ARQUIVO_DE_FILA, function (err, data) {
            err ? reject(err) : resolve(String(data));
        });
    });
    // reste return está presente somente para cumprir a saída de Promise<string>
    //return '';
}
exports.leArquivo = leArquivo;
function escreveArquivo(texto) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    (0, fs_1.writeFile)(ARQUIVO_DE_FILA, texto, "utf-8", function (err, data) {
                        err ? reject(err) : resolve(data);
                    });
                })
                //console.log('texto escrito no arquivo', texto); 
            ];
        });
    });
}
exports.escreveArquivo = escreveArquivo;
function escreveNaFila(texto) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            leArquivo()
                .then(function (textoAtual) {
                console.log('texto encontrado anteriormente no arquivo', textoAtual);
                var novoTexto = textoAtual ? "".concat(textoAtual, "\n").concat(texto) : texto;
                escreveArquivo(novoTexto);
            }).then(function (textoFinal) {
                console.log("texto escrito ", textoFinal);
            });
            return [2 /*return*/];
        });
    });
}
exports.escreveNaFila = escreveNaFila;
function consumirDaFila() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // leArquivo(function(error, textoAtual) {
            //   if (error) {
            //     console.log(error);
            //     return;
            //   }
            //   console.log('texto encontrado anteriormente no arquivo', textoAtual);
            //   const [linhaConsumida, ...linhas] = textoAtual.split('\n');
            //   console.log('======== linha consumida', linhaConsumida);
            //   escreveArquivo(linhas.join('\n'), function(error) {
            //     if (error) {
            //       console.log(error);
            //       return;
            //     }
            //     console.log('texto escrito no arquivo');
            //   });
            // });
            return [2 /*return*/, ''];
        });
    });
}
exports.consumirDaFila = consumirDaFila;
