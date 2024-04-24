export interface SidebarNavItem {
    title: string;
    href: string;
    dropdown?: SidebarNavItem[];
  }
  
  export const SidebarNavItems: SidebarNavItem[] = [
    {
      title: "Today Tasks",
      href: "/",
    },
    {
      title: "Scheduled Tasks",
      href: "/scheduledtask",
    },
    {
      title: "Settings",
      href: "/settingpage",
    },
  ];
  
  export default SidebarNavItems;
  