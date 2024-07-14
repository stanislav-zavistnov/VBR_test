import { Button, Dropdown, Input, List, Menu } from 'antd';
import { Card } from '../Card/Card';
import { useEffect, useState } from 'react';
import { MenuInfo } from 'rc-menu/lib/interface';
import mockData from '../../mock.json';

export function MainContent() {

    // направление сортировки
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
    const [data, setData] = useState(mockData.products);
    // inputValue, загружает данные из стейта, если они есть
    const [searchValue, setSearchValue] = useState<string>(() => {
        const storedValue = localStorage.getItem('searchValue');
        return storedValue || '';
    });

    // Сеттинг данных в стейт, если бы тут была запрос на backend
    useEffect(() => {
        setData(mockData.products);
    }, []);

    // записывает в localStorage текущее значение инпута
    useEffect(() => {
        localStorage.setItem('searchValue', searchValue);
    }, [searchValue]);

    // возвращает массив объектов, которые соответствуют сумме из инпута, либо выполняет сортировку по сумме в направлении, указанном в стейте
    const sortedData = [...data].filter(item => {
        if (!searchValue) return true;
        return item.amount.toString().includes(searchValue);
    }).sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.amount - b.amount;
        } else if (sortOrder === 'desc') {
            return b.amount - a.amount;
        } else {
            return 0;
        }
    });

    // реагирует на изменения value инпута и регистрирует изменения в стейте
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    // компонент для пропса Dropdown-а
    const menu = (
        <Menu onClick={(e: MenuInfo) => setSortOrder(e.key as 'asc' | 'desc')}>
            <Menu.Item key="asc">По возрастанию суммы</Menu.Item>
            <Menu.Item key="desc">По убыванию суммы</Menu.Item>
        </Menu>
    );

    return (
        <>
            <Input.Search
                placeholder="Введите сумму для поиска"
                allowClear
                onChange={handleSearchChange}
                style={{ width: 400, marginBottom: 16 }}
                value={searchValue}
            />
            <Dropdown overlay={menu} placement='bottomCenter'>
                <Button>Сортировать</Button>
            </Dropdown>
            <List
                dataSource={sortedData}
                pagination={{
                    pageSize: 5,
                }}
                renderItem={item => (
                    <List.Item>
                        <Card data={{ amount: item.amount, name: item.name, logo: item.logo }} />
                    </List.Item>
                )}
            />
        </>
    );
}