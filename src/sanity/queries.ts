export const PORTFOLIO_QUERY = `*[
  _type == "portfolio_content"
] {
  ...,
  "projects": projects[]->{
  ...
  },
  
  "social_media": social_media[]->{
  ...
  }
}`;

export const PROJECTS_QUERY = `*[
  _type == "project"
]
`;

export const TECHNOLOGIES_QUERY = `*[
  _type == "technology" ] {
  title,
    "invert": coalesce(invert, false),
  icon
}
`;

export const CONTACT_ME_QUERY = `*[
  _type == "contact_me"]
  {
   ...,
  "what_i_do_items": what_i_do_items[]->{
   icon,title,subtitle
  }
  }[0]`;
