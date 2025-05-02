// Експорт специфікації Swagger/OpenAPI для документації про API
export const swaggerSpec = {
    // Версія специфікації OpenAPI
    openapi: '3.0.0',
    // Загальна інформація про API
    info: {
        title: 'API Сайту про Снігових Барсів',
        version: '1.0.0',
        description: 'Документація API для Сайту про Снігових Барсів',
    },
    // Налаштування серверів для тестування API
    servers: [
        {
            url:
                process.env.CODESPACE_NAME !== undefined
                    ? `https://${process.env.CODESPACE_NAME}-5000.app.github.dev`
                    : 'http://localhost:5000',
            description: 'Development server',
        },
    ],
    // Визначення роутерів API та операцій з ними
    paths: {
        '/api/snowleopards': {
            // GET запит для отримання всіх Снігових Барсів
            get: {
                summary: 'Отримати всіх Снігових Барсів',
                responses: {
                    '200': {
                        description: 'Список всіх Снігових Барсів',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: { $ref: '#/components/schemas/Snowleopard' },
                                },
                            },
                        },
                    },
                },
            },

            // POST запит для створення нового Снігового Барса
            post: {
                summary: 'Створити нового Снігового Барса',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Snowleopard' },
                        },
                    },
                },
                responses: {
                    '201': {
                        description: "Створений об'єкт Снігового Барса",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Snowleopard' },
                            },
                        },
                    },
                },
            },
        },

        // Операції для конкретного Снігового Барса за ID
        '/api/snowleopards/{id}': {
            // GET запит для отримання Снігового Барса за ID
            get: {
                summary: 'Отримати Снігового Барса за ID',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID Снігового Барса',
                    },
                ],
                responses: {
                    '200': {
                        description: "Об'єкт Снігового Барса",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Snowleopard' },
                            },
                        },
                    },
                    '404': { description: 'Снігового Барса не знайдено' },
                },
            },

            // PUT запит для повного оновлення Снігового Барса за ID
            put: {
                summary: 'Повністю оновити Снігового Барса',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID Снігового Барса',
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Snowleopard' },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: "Оновлений об'єкт Снігового Барса",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Snowleopard' },
                            },
                        },
                    },
                    '404': { description: 'Снігового Барса не знайдено' },
                },
            },
            // PATCH запит для часткового оновлення Снігового Барса за ID
            patch: {
                summary: 'Частково оновити Снігового Барса',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID Снігового Барса',
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Snowleopard' },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: "Оновлений об'єкт Снігового Барса",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Snowleopard' },
                            },
                        },
                    },
                    '404': { description: 'Снігового Барса не знайдено' },
                },
            },
            // DELETE запит для видалення даних про Снігового Барса за ID
            delete: {
                summary: 'Видалити дані про Снігового Барса',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID Снігового Барса',
                    },
                ],
                responses: {
                    '200': { description: 'Повідомлення про успішне видалення' },
                    '404': { description: 'Снігового Барса не знайдено' },
                },
            },
        },
    },

    // Визначення компонентів для повторного використання
    components: {
        // Схеми даних
        schemas: {
            // Схема об'єкта Сніговий Барс
            Snowleopard: {
                type: 'object',
                required: ['name', 'age', 'height', 'weight', 'gender'],
                properties: {
                    name: {
                        type: 'string',
                        description: "Ім'я Снігового Барса",
                    },
                    age: {
                        type: 'number',
                        description: 'Вік Снігового Барса у роках',
                    },
                    height: {
                        type: 'number',
                        description: 'Висота Снігового Барса в сантиметрах',
                    },
                    weight: {
                        type: 'number',
                        description: 'Вага Снігового Барса в кілограмах',
                    },
                    gender: {
                        type: 'string',
                        enum: ['male', 'female'],
                        description: 'Стать Снігового Барса',
                    },
                    description: {
                        type: 'string',
                        description: "Опис Снігового Барса (необов'язкове поле)",
                    },
                    huntingAltitude: {
                        type: 'string',
                        huntingAltitude: 'Висота території полювання над рівнем моря, км.',
                    },
                },
            },
        },
    },
};
