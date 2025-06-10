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
export const SOCIAL_MEDIA_QUERY = `*[
  _type == "portfolio_content"
][0]{
  social_media[]->{
    name,
    url,
    icon 
  }
}`;
