export type Tab = {
    title: string;
    description: string;
    id: string;
    dataTabsTarget: string;
    ariaControls: string;
    url: string;
    imgTitle: string;
    imgAlt: string;
};

export const TABS: Tab[] = [
    {
        title: "Calendar view",
        description:
            "Our most popular feature. Integrate calendars and copy time entries into your workspace.",
        id: "profile-tab",
        dataTabsTarget: "#profile",
        ariaControls: "profile",
        url: "./calendar-view.webp",
        imgTitle: "calendar view",
        imgAlt: "calendar view",
    },
    {
        title: "Track time your way",
        description:
            "Track time from web, desktop apps, mobile apps, and browser extensions.",
        id: "dashboard-tab",
        dataTabsTarget: "#dashboard",
        ariaControls: "dashboard",
        url: "./track-time.webp",
        imgTitle: "track time",
        imgAlt: "track time",
    },
    {
        title: "Automated time tracking",
        description:
            "Switch on background tracking for any app or website. Team members can turn activity into time entries for reporting. Otherwise, it will remain private to them.",
        id: "settings-tab",
        dataTabsTarget: "#settings",
        ariaControls: "settings",
        url: "./track-time-automated.webp",
        imgTitle: "track time automated",
        imgAlt: "track time automated",
    },
    {
        title: "100+ integrations",
        description:
            "Plug in popular tools like Jira, Salesforce, and Asana. Use our API to custom-fit Toggl Track into your tech stack.",
        id: "contacts-tab",
        dataTabsTarget: "#contacts",
        ariaControls: "contacts",
        url: "./track-time-integrations.webp",
        imgTitle: "track time integrations",
        imgAlt: "track time integrations",
    },
];