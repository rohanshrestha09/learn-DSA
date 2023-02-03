import { TiInfoLarge } from 'react-icons/ti';
import { MdAttachMoney, MdOutlineDynamicForm } from 'react-icons/md';
import { TbDivide } from 'react-icons/tb';
import { ImSortNumericAsc } from 'react-icons/im';
import { BsStackOverflow, BsListNested } from 'react-icons/bs';
import { HiQueueList } from 'react-icons/hi2';
import { GiFamilyTree } from 'react-icons/gi';
import { SiGraphql } from 'react-icons/si';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Text from './Typography/Text';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Introduction', 'introduction', <TiInfoLarge />, [
        getItem('Data Structure and Types', 'data-structure-n-types'),
        getItem('Algorithm Analysis', 'algorithm-analysis'),
    ]),
    getItem('Stack', 'stack', <BsStackOverflow />, [
        getItem('Introduction', 'stack-introduction'),
        getItem('Stack Operations', 'stack-basic-operations'),
        getItem('Application', 'stack-application'),
    ]),
    getItem('Queue', 'queue', <HiQueueList />, [
        getItem('Introduction', 'queue-introduction'),
        getItem('Linear Queue', 'linear-queue'),
        getItem('Circular Queue', 'circular-queue'),
        getItem('Priority Queue', 'priority-queue'),
        getItem('Deque', 'deque'),
    ]),
    getItem('Linked List', 'linked-list', <BsListNested />, [
        getItem('Introduction', 'linked-list-introduction'),
        getItem('Linear Linked List', 'linear-linked-list'),
        getItem('Circular Linked List', 'circular-linked-list'),
    ]),
    getItem('Tree', 'tree', <GiFamilyTree />, [
        getItem('Introduction', 'tree-introduction'),
        getItem('Binary Tree', 'binary-tree'),
        getItem('Full Binary Tree', 'full-binary-tree'),
        getItem('Perfect Binary Tree', 'perfect-binary-tree'),
        getItem('Complete Binary Tree', 'complete-binary-tree'),
        getItem('Binary Search Tree', 'full-binary-tree'),
        getItem('AVL Tree', 'avl-tree'),
    ]),
    getItem('Graph', 'graph', <SiGraphql />, [
        getItem('Introduction', 'graph-introduction'),
        getItem('Adjacency Matrix', 'adjacency-matrix'),
        getItem('Adjacency List', 'adjacency-list'),
        getItem('Spanning Tree', 'spanning-tree'),
        getItem('DFS Algorithm', 'dfs-algorithm'),
        getItem('BFS Algorithm', 'bfs-algorithm'),
    ]),
    getItem('Sorting Algorithms', 'sorting-algorithms', <ImSortNumericAsc />, [
        getItem('Introduction', 'sorting-algorithms-introduction'),
        getItem('Bubble Sort', 'bubble-sort'),
        getItem('Selection Sort', 'selection-sort'),
        getItem('Insertion Sort', 'insertion-sort'),
        getItem('Merge Sort', 'merge-sort'),
        getItem('Quick Sort', 'quick-sort'),
        getItem('Counting Sort', 'counting-sort'),
        getItem('Radix Sort', 'radix-sort'),
        getItem('Bucket Sort', 'bucket-sort'),
        getItem('Heap Sort', 'heap-sort'),
        getItem('Shell Sort', 'shell-sort'),
    ]),
    getItem('Greedy Algorithms', 'greedy-algorithms', <MdAttachMoney />, [
        getItem('Introduction', 'greedy-algorithms-introduction'),
        getItem("Dijkstra's Algorithm", 'dijkstra-algotithm'),
        getItem("Kruskal's Algorithm", 'kruskal-algorithm'),
        getItem("Prim's Sort", 'prims-algorithm'),
    ]),
    getItem(
        'Divide and Conquer Algorithms',
        'divide-n-conquer-algorithms',
        <TbDivide />
    ),
    getItem(
        'Dynammic Programming',
        'dynammic-programming',
        <MdOutlineDynamicForm />
    ),
];

// submenu keys of first level

const Navbar: React.FC = () => {
    return (
        <div className='py-[1vw]'>
            <span className='flex w-full px-[1.4vw] pt-[1vw] pb-[0.7vw] font-itim text-[1.6vw] text-primary'>
                learn DSA
            </span>

            <Menu mode='inline' items={items} />
        </div>
    );
};

export default Navbar;
