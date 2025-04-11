import { injectable } from 'inversify';
import { Snowleopard, ISnowleopard } from '../models/snowleopard';

// Клас-репозиторій для роботи з Сніговими Барсами
// Анотація injectable дозволяє впровадити цей репозиторій через IoC контейнер
@injectable()
export class SnowleopardRepository {
    // Метод для отримання всіх Снігових Барсів з бази даних
    public async findAll(): Promise<ISnowleopard[]> {
        return Snowleopard.find();
    }

    // Метод для пошуку Снігового Барса за унікальним ідентифікатором
    public async findById(id: string): Promise<ISnowleopard | null> {
        return Snowleopard.findById(id);
    }

    // Метод для створення нового Снігового Барса в базі даних
    public async create(snowleopardData: ISnowleopard): Promise<ISnowleopard> {
        const snowleopard = new Snowleopard(snowleopardData);
        return snowleopard.save();
    }

    // Метод для видалення Снігового Барса за ідентифікатором
    public async delete(id: string): Promise<boolean> {
        const result = await Snowleopard.findByIdAndDelete(id);
        return result !== null;
    }

    // Метод для повного оновлення даних про Снігового Барса (заміна всіх полів)
    public async update(id: string, snowleopardData: ISnowleopard): Promise<ISnowleopard | null> {
        return Snowleopard.findByIdAndUpdate(id, snowleopardData, { new: true });
    }

    // Метод для часткового оновлення даних про Снігового Барса (оновлення лише вказаних полів)
    public async patch(
        id: string,
        snowleopardData: Partial<ISnowleopard>,
    ): Promise<ISnowleopard | null> {
        return Snowleopard.findByIdAndUpdate(id, { $set: snowleopardData }, { new: true });
    }
}
