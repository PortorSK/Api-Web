"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes")); // Asegúrate de tener la ruta correcta
const productsRoutes_1 = __importDefault(require("./routes/productsRoutes")); // Asegúrate de tener la ruta correcta
const authRoutes_1 = __importDefault(require("./routes/authRoutes")); // Importa las rutas de Auth
const promotionalproductRoutes_1 = __importDefault(require("./routes/promotionalproductRoutes")); // Importa las rutas de Auth
const purchaseRoutes_1 = __importDefault(require("./routes/purchaseRoutes")); // Importa las rutas de Auth
const app = (0, express_1.default)();
// Configuración de CORS
const corsOptions = {
    origin: '*', // Esto permitirá el acceso desde cualquier dominio
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
};
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
// Usa las rutas específicas para los usuarios
app.use(userRoutes_1.default);
app.use(productsRoutes_1.default);
app.use(authRoutes_1.default);
app.use(promotionalproductRoutes_1.default);
app.use(purchaseRoutes_1.default);
exports.default = app;
