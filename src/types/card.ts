export type Card = {
    title: string,
    description: string,
    image: string,
    paragraph: string,
    url: string,
    bgColor: string,
    readMore: string
}

export const CARD: Card[] = [
    {
        title: "80 hours",
        description: "saved monthly with Toggl Track's user-friendly interface",
        image: "https://flowbite.com/docs/images/blog/image-1.jpg",
        paragraph:
            "'We chose Toggl Track, and it took our agency’s time racking compliance to the next level.'",
        url: "http://astro.build",
        bgColor: "bg-orange-100",
        readMore: "Read more",
    },
    {
        title: "100%",
        description: "time tracking adoption in a team of 500+",
        image: "https://flowbite.com/docs/images/blog/image-2.jpg",
        paragraph:
            "'There is hardly any other solution that could handle a large amount of data while providing a smooth UX experience for the team of 500.'",
        url: "https://www.typescriptlang.org/",
        bgColor: "bg-yellow-100",
        readMore: "Read more",
    },
    {
        title: "6X",
        description: "team growth while maintaining work-life balance",
        image: "https://flowbite.com/docs/images/blog/image-3.jpg",
        paragraph:
            "'Trust in the team is paramount. We didn’t want anything intrusive, like a tool to take screenshots of what our employees are working on.'",
        url: "http://react.dev",
        bgColor: "bg-pink-200",
        readMore: "Read more",
    },
];