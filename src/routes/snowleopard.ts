import { Router, Request, Response } from 'express';
import { container } from '../config/container';
import { SnowleopardRepository } from '../repositories/SnowleopardRepository';

// Створюємо новий роутер Express
const router = Router();
// Отримуємо екземпляр репозиторію зайців з контейнера інверсії залежностей
const snowleopardRepository = container.get(SnowleopardRepository);

// Роутер для HTTP метода GET / - отримання всіх записів зайців
router.get('/', (async (_req: Request, res: Response) => {
    try {
        // Отримуємо всі записи зайців з бази даних через репозиторій
        const snowleopards = await snowleopardRepository.findAll();
        res.json(snowleopards);
    } catch (error) {
        // Обробка помилки
        const errorMessage = error instanceof Error ? error.message : 'Виникла невідома помилка';
        res.status(500).json({ message: errorMessage });
    }
}) as unknown as (req: Request, res: Response) => void);

// Роутер для HTTP метода GET /:id - отримання запису одного зайця за ідентифікатором
router.get('/:id', (async (req: Request, res: Response) => {
    try {
        // Пошук зайця за ідентифікатором
        const snowleopard = await snowleopardRepository.findById(req.params.id);
        if (snowleopard) {
            res.json(snowleopard);
        } else {
            // Якщо заєць не знайдений, повертаємо 404 помилку
            res.status(404).json({ message: 'Запис зайця не знайдено' });
        }
    } catch (error) {
        // Обробка помилки
        const errorMessage = error instanceof Error ? error.message : 'Виникла невідома помилка';
        res.status(500).json({ message: errorMessage });
    }
}) as unknown as (req: Request, res: Response) => void);

// Роутер для HTTP метода POST / - створення нового запису зайця
router.post('/', (async (req: Request, res: Response) => {
    try {
        // Створюємо новий запис зайця з даних запиту
        const newSnowleopard = await snowleopardRepository.create(req.body);
        // Повертаємо статус 201 (Created) і дані створеного зайця
        res.status(201).json(newSnowleopard);
    } catch (error) {
        // Обробка помилки
        const errorMessage = error instanceof Error ? error.message : 'Виникла невідома помилка';
        res.status(400).json({ message: errorMessage });
    }
}) as unknown as (req: Request, res: Response) => void);

// Роутер для HTTP метода PUT /:id - повне оновлення запису зайця
router.put('/:id', (async (req: Request, res: Response) => {
    try {
        // Перевірка наявності всіх обов'язкових полів для PUT запиту
        const requiredFields = ['name', 'age', 'height', 'weight', 'gender'];
        const missingFields = requiredFields.filter(field => !(field in req.body));

        // Якщо є відсутні поля, повертаємо помилку 400 Bad Request
        if (missingFields.length > 0) {
            return res.status(400).json({
                message: `Відсутні обов'язкові поля: ${missingFields.join(', ')}`,
            });
        }

        // Оновлюємо зайця з вказаним ID
        const snowleopard = await snowleopardRepository.update(req.params.id, req.body);
        if (snowleopard) {
            return res.json(snowleopard);
        } else {
            // Якщо заєць не знайдений, повертаємо 404 помилку
            return res.status(404).json({ message: 'Запис зайця не знайдено' });
        }
    } catch (error) {
        // Обробка помилки
        const errorMessage = error instanceof Error ? error.message : 'Виникла невідома помилка';
        return res.status(400).json({ message: errorMessage });
    }
}) as unknown as (req: Request, res: Response) => void);

// Роутер для HTTP метода PATCH /:id - часткове оновлення запису зайця
router.patch('/:id', (async (req: Request, res: Response) => {
    try {
        // Часткове оновлення запису зайця - передаються лише ті поля, які потрібно змінити
        const snowleopard = await snowleopardRepository.patch(req.params.id, req.body);
        if (snowleopard) {
            res.json(snowleopard);
        } else {
            // Якщо заєць не знайдений, повертаємо 404 помилку
            res.status(404).json({ message: 'Запис зайця не знайдено' });
        }
    } catch (error) {
        // Обробка помилки
        const errorMessage = error instanceof Error ? error.message : 'Виникла невідома помилка';
        res.status(400).json({ message: errorMessage });
    }
}) as unknown as (req: Request, res: Response) => void);

// Роутер для HTTP метода DELETE /:id - видалення запису зайця
router.delete('/:id', (async (req: Request, res: Response) => {
    try {
        // Видаляємо дані про зайця за ID
        const snowleopard = await snowleopardRepository.delete(req.params.id);
        if (snowleopard) {
            // У разі успіху повертаємо повідомлення про видалення
            res.json({ message: 'Запис про зайця видалено' });
        } else {
            // Якщо заєць не знайдений, повертаємо 404 помилку
            res.status(404).json({ message: 'Запис про зайця не знайдено' });
        }
    } catch (error) {
        // Обробка помилки
        const errorMessage = error instanceof Error ? error.message : 'Виникла невідома помилка';
        res.status(500).json({ message: errorMessage });
    }
}) as unknown as (req: Request, res: Response) => void);

export default router;
