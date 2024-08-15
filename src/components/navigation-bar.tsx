'use client';
import { MessageCircle, Phone } from 'lucide-react';
import { ReactNode, FC, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { cn, isRouteActivePath } from '@/lib/utils'; 
import Link from 'next/link';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from '@/components/ui/navigation-menu';

import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

type NavigationBarProps = {
    trigger: ReactNode;
}

export const NavigationBar: FC<NavigationBarProps> = ({ trigger }) => {
    const pathname = usePathname();
    const menuItems = useMemo(() => [
        { icon: MessageCircle, label: 'Chat', path: '/chats' },
        { icon: Phone, label: 'Call', path: '/calls' },
    ], []);

    return (
        <div className='md:w-24 w-full md:h-screen h-20 bg-white dark:bg-slate-950 border-r md:border-r-gray-400 md:dark:border-r-gray-800 py-5 fixed z-10 flex md:flex-col items-center justify-between bottom-0 md:top-0 left-0'>
            <div className='md:pt-10'>
                <NavigationMenu orientation='vertical'>
                    <NavigationMenuList className='!w-svw md:!w-fit px-5 md:px-0 flex items-center justify-between md:flex-col md:space-y-4'>
                        {menuItems.map(({ icon: Icon, label, path }) => {
                            const isActive = isRouteActivePath(pathname, path);
                            return (
                                <Tooltip key={path}>
                                    <TooltipTrigger>
                                        <Link href={path}>
                                            <NavigationMenuItem
                                                className={cn('px-5 py-2 cursor-pointer rounded-xl', {
                                                    'dark:bg-gray-700 bg-gray-300': isActive,
                                                    'hover:dark:bg-gray-600 hover:bg-gray-200': !isActive,
                                                })}
                                            >
                                                <Icon
                                                    size={18}
                                                    fill={isActive ? '#000000' : 'none'}
                                                />
                                            </NavigationMenuItem>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent
                                        side='right'
                                        className='bg-gray-500 dark:bg-gray-700 rounded-xl'
                                    >
                                        <p>{label}</p>
                                    </TooltipContent>
                                </Tooltip>
                            );
                        })}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    );
};
