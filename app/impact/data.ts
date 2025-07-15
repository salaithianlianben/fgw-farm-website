export interface RecycleProcessItem {
    img_path: string
    id: number
    title: string
}

export const recycle_process_data = [
    {
        id:1,
        img_path: '/images/impact/FOOD WASTE.jpg',
        title: 'Food Waste'
    },
    {
        id: 2,
        title: 'decomposition',
        img_path: '/images/impact/decomposition.png'
    },
    {
        id: 3,
        title: 'Feed production',
        img_path: '/images/impact/feed.jpg'
    },
    {
        id: 4,
        title: 'Food',
        img_path: '/images/impact/food.jpg'
    },
    {
        id: 5,
        title: 'Farming',
        img_path: '/images/impact/farming.png'
    },
    {
        id: 6,
        title: 'Food Supply',
        img_path: '/images/impact/food supplier.jpg'
    }
] as RecycleProcessItem[]