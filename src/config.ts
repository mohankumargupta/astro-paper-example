export const SITE = {
  website: "https://mohankumargupta.github.io/astro-paper-example", // replace this with your deployed domain
  author: "Sat Naing",
  profile: "https://github.com/mohankumargupta/astro-paper-example",
  desc: "Testing capability of Astro Paper for recording meeting notes.",
  title: "AstroPaper Example",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Australia/Melbourne", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
