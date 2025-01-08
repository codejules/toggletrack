export type Bento = {
    title: string;
    description: string;
    image: string;
    animation: string;
    id: string;
    rowSpan: string;
};

export const BENTO: Bento[] = [
    {
        title: "Mobile friendly",
        description:
            "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
        image: "https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png",
        animation: "card-mobile",
        id: "mobile",
        rowSpan: "col-span-10 lg:col-span-4",
    },
    {
        title: "Performance",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.",
        image: "https://tailwindui.com/plus/img/component-images/bento-03-performance.png",
        animation: "card-performance",
        id: "performance",
        rowSpan: "col-span-10 lg:col-span-6",
    },
    {
        title: "Security",
        description:
            "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.",
        image: "https://tailwindui.com/plus/img/component-images/bento-03-security.png",
        animation: "card-security",
        id: "security",
        rowSpan: "col-span-10 lg:col-span-6",
    },
    {
        title: "Powerful APIs",
        description:
            "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.",
        image: "https://tailwindui.com/plus/img/component-images/bento-02-integrations.png",
        animation: "card-powerful",
        id: "powerful",
        rowSpan: "col-span-10 lg:col-span-4",
    },
];