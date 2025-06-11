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

