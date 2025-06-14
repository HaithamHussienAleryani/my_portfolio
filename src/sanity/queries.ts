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
  },
  "experiences_list": experiences_list[]->{
   image,position,company,dateRange
  },

  "certificates_list": certificates_list[]->{
   title,school,link,date
  },
  }[0]`;


export const CONTACT_ME_SECTION_QUERY = `*[
  _type == "contact_me"]
  {
  available,
  contact_me_text
  
  }[0]`;




export const SOCIAL_MEDIA_QUERY = `*[
  _type == "social_media"]
  {
  name,url
  }
  `;


export const FAQS_QUERY = `*[
  _type == "faqs"]
  {
  question,answer
  }
  `;