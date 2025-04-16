// TYPES of input
// T<number|string|boolean|null|undefined>
// T[]
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
// class Segment {
//     value: MultyValue;
//     next: SegmentType | undefined;   // here undefined hneeds to be an option
//     constructor(value: MultyValue, next: SegmentType | undefined) {
//         this.value = value;
//         this.next = next;
//     }
// }
var Caterpillar = /** @class */ (function () {
    function Caterpillar() {
    }
    Caterpillar.prototype.pushFront = function (value) {
        if (!this.head) {
            // no head? - this is new head!
            this.head = { value: value, next: undefined };
        }
        else {
            var newElement = { value: value, next: this.head };
            if (!this.head.next) {
                // no tail and now two segments? old head is noe new tail!
                this.tail = this.head;
                this.head.next = this.tail;
            }
            // replant dependencies and head
            newElement.next = this.head;
            this.head = newElement;
        }
        return console.log('added', value, 'to the head');
    };
    ;
    Caterpillar.prototype.pushBack = function (value) {
        if (!this.head) {
            // no head? - this is new head!
            this.head = { value: value, next: undefined };
            this.tail = this.head;
        }
        else {
            // else - create new butt-segment,make it next to thetail and replant a tail pointer
            var newElement = { value: value, next: undefined };
            if (this.tail) {
                this.tail.next = newElement;
                this.tail = newElement;
            }
            else {
                this.tail = newElement;
            }
        }
        return console.log('added', value, 'to the tail');
    };
    ;
    Caterpillar.prototype.insert = function (value, index) {
        try {
            if (!this.head) {
                throw new Error('caterpillar is empty');
            }
            if (!index) {
                throw new Error('please, .insert(value,id)');
            }
            if (index === 0) {
                console.log('inserted', value, 'as a head');
                return this.pushFront(value);
            }
            var element = this.head;
            var counter = 0;
            while (element && counter < index - 1) {
                if (!element.next) {
                    throw new Error('please, use existing id');
                }
                element = element.next;
                counter += 1;
            }
            if (this.tail === element) {
                console.log('inserted', value, 'as a tail');
                return this.pushBack(value);
            }
            else {
                var newElement = { value: value, next: element.next };
                element.next = newElement;
                return console.log('inserted', value, 'to the id', index);
            }
        }
        catch (error) {
            console.log('canselled insert', value, index, '-', error.message);
        }
    };
    Caterpillar.prototype.print = function () {
        for (var _i = 0, _a = catP.iterate(); _i < _a.length; _i++) {
            var el = _a[_i];
            console.log(el);
        }
    };
    ;
    Caterpillar.prototype.iterate = function () {
        var element;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    element = this.head;
                    _a.label = 1;
                case 1:
                    if (!element) return [3 /*break*/, 3];
                    return [4 /*yield*/, element.value];
                case 2:
                    _a.sent();
                    if (element.next == null) {
                        return [3 /*break*/, 3];
                    }
                    ;
                    element = element.next;
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    };
    return Caterpillar;
}());
;
var catP = new Caterpillar();
catP.pushBack(5);
catP.pushBack(6);
catP.pushBack(7);
catP.pushFront(4);
catP.pushFront(3);
catP.pushFront(2);
catP.pushFront(1);
catP.insert(0, 3);
catP.insert(7, 30);
console.log(__spreadArray([], catP.iterate().map(function (x) { return x * x; }), true));
// for (let el of catP.iterate()){
//     console.log(el.value * 2);
// }
// CatP.iterate;
/// nanannaa
